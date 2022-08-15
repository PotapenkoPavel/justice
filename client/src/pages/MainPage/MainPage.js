import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Article from '../../components/Atricle/Article';
import Spinner from '../../components/Spinner/Spinner';
import Title from '../../components/Title/Title';
import Container from '../../components/Container/Container';

import { fetchArticles } from '../../redux/actionCreators/article';
import { apiConfig } from '../../config/api';

import './MainPage.sass';

const MainPage = () => {
  const navigate = useNavigate();
  const { page } = useParams();
  const { articles, count, isLoading } = useSelector((state) => state.article);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles(page));
  }, []);

  useEffect(() => {
    dispatch(fetchArticles(page));
  }, [page]);

  if (!articles.length || isLoading) return <Spinner />;

  return (
    <main className="main-page">

      {(!page || page === '1') && (
      <section className="recommended-block">
        <Container className="container">
          {[articles[0]].map((article) => (
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
            />
          ))}
        </Container>
      </section>
      )}

      <section className="popular-block">
        <Container className="container">
          {(!page || page === '1') && <Title type="h1">Popular articles</Title>}
          <div className="popular-block__articles">
            {articles.map((article) => (
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
                type="compact"
              />
            ))}
          </div>

          <div className="popular-block__pagination">
            <Button
              variant="outline"
              disabled={+page <= 1}
              onClick={() => navigate(`/articles/${+page - 1}`)}
            >
              Prev
            </Button>
            <Button
              variant="outline"
              disabled={+page >= count / apiConfig.articlesLimit}
              onClick={() => navigate(`/articles/${+page + 1}`)}
            >
              Next
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default MainPage;
