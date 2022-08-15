import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Article from '../../components/Atricle/Article';
import AuthorCard from '../../components/AuthorCard/AuthorCard';
import Spinner from '../../components/Spinner/Spinner';
import { Button } from '../../components/Button/Button';
import { fetchArticlesByOwner } from '../../redux/actionCreators/article';

import './ArticlesPage.sass';

const ArticlesPage = () => {
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
      <div className="container">
        <div className="articles-page__wrapper">
          <section className="articles-page__author-card">
            <AuthorCard
              img={
                user.avatar
                  ? `data:${user.avatar.contentType};base64, ${user.avatar.imageBase64}`
                  : '/images/avatar123.jpg'
              }
            >
              <div className="author-card__name">{`${user.firstName} ${user.lastName}`}</div>
              <div className="author-card__description">
                {user.description}
              </div>
            </AuthorCard>
          </section>
          <section className="articles-page__list">
            <div>
              {articlesByOwner.map(({
                _id,
                title,
                tag,
                img: { contentType, imageBase64 },
                description,
                author,
                timestamp,
                readTimeInMinutes,
                views,
              }) => (
                <Article
                  key={_id}
                  id={_id}
                  title={title}
                  tag={tag}
                  img={`data:${contentType};base64, ${imageBase64}`}
                  description={description}
                  author={author}
                  timestamp={timestamp}
                  readTime={readTimeInMinutes}
                  views={views}
                  type="column"
                />
              ))}
            </div>
            <div className="articles-page__navigate">
              <Button theme="disabled">Prev</Button>
              <Button theme="outline">Next</Button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ArticlesPage;
