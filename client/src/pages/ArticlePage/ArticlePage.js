import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../components/Button/Button';
import ArticleInfo from '../../components/ArticleInfo/ArticleInfo';
import Tag from '../../components/Tag/Tag';
import Spinner from '../../components/Spinner/Spinner';
import { fetchArticleById, removeArticle } from '../../redux/actionCreators/article';
import ArticleAPI from '../../services/article';

import './ArticlePage.sass';

const ArticlePage = () => {
  const { article, isLoading } = useSelector((state) => state.article);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchArticleById(id));

    return () => {
      dispatch(removeArticle());
    };
  }, []);

  if (isLoading || !article) return <Spinner />;

  if (article) {
    ArticleAPI.updateArticleViews(id);
  }

  return (
    <main className="article-page">
      <div className="container article-page__wrapper">
        <div className="article-page__button">
          <div>
            <Button
              theme="outline gray"
              onClick={() => navigate('/')}
            >
              All articles
            </Button>
          </div>
        </div>
        <section className="article-page__content-wrapper">
          <Tag>{article.tag}</Tag>

          <div className="article-page__title">{article.title}</div>

          <div className="article-page__content" dangerouslySetInnerHTML={{ __html: article.HTML }} />

          <div className="article-page__footer">
            <ArticleInfo
              author={article.author}
              timestamp={article.timestamp}
              readTime={article.readTimeInMinutes}
              views={article.views}
            />
            <div>
              <Button theme="outline gray">{article.tag}</Button>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
};
export default ArticlePage;
