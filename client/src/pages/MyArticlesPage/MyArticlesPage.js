import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Article from '../../components/Atricle/Article';
import AuthorCard from '../../components/AuthorCard/AuthorCard';
import Spinner from '../../components/Spinner/Spinner';
import Button from '../../components/Button/Button';
import { fetchArticlesByOwner } from '../../redux/actionCreators/article';

import './MyArticlesPage.sass';
import Container from '../../components/Container/Container';

const MyArticlesPage = () => {
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.auth.token);
  const { articlesByOwner, isLoading } = useSelector((state) => state.article);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticlesByOwner(user._id, token));
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <main className="articles-page">
      <Container>
        <div className="articles-page__wrapper">
          <section className="articles-page__author-card">
            <AuthorCard img={user.avatar && `data:${user.avatar.contentType};base64, ${user.avatar.imageBase64}`}>
              <div className="author-card__name">{`${user.firstName} ${user.lastName}`}</div>
              <div className="author-card__description">
                {user.description}
              </div>
            </AuthorCard>
          </section>
          <section className="articles-page__content">
            <div className="articles-page__list">
              {articlesByOwner.map((article) => (
                <Article
                  key={article._id}
                  id={article._id}
                  title={article.title}
                  tag={article.tag}
                  img={`data:${article.img.contentType};base64, ${article.img.imageBase64}`}
                  description={article.description}
                  author={article.author}
                  timestamp={article.timestamp}
                  readTime={article.readTimeInMinutes}
                  views={article.views}
                  type="column"
                />
              ))}
            </div>
            <div className="articles-page__pagination">
              <Button variant="outline" disabled>Prev</Button>
              <Button variant="outline">Next</Button>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
};

export default MyArticlesPage;
