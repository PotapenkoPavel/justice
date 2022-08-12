import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import ArticleInfo from '../../components/ArticleInfo/ArticleInfo';
import Tag from '../../components/Tag/Tag';
import ArticleApi from '../../services/article';

import './ArticlePage.sass';

const ArticlePage = () => {
  const [article, setArticle] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await ArticleApi.getArticleById(id);

      setArticle(response.data);
    };

    fetchArticle();
  }, []);

  if (!article) return null;

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
