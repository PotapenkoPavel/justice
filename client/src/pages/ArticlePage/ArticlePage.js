import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import ArticleInfo from '../../components/ArticleInfo/ArticleInfo';
import Tag from '../../components/Tag/Tag';

import './ArticlePage.sass';

const ArticlePage = () => {
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);

  useEffect(async () => {
    const { data } = await axios.get('http://localhost:5050/api/article/62f5522316a1c3bc94e1d670');

    setArticle(data);
  }, []);

  if (!article) return null;

  return (
    <main className="article-page">
      <div className="container article-page__wrapper">
        <div className="article-page__button">
          <div>
            <Button
              theme="outline gray"
              onClick={() => navigate('/articles')}
            >
              All articles
            </Button>
          </div>
        </div>
        <section className="article-page__content">
          <Tag>{article.tag}</Tag>

          <div className="article-page__title">{article.title}</div>

          <div>
            <div dangerouslySetInnerHTML={{ __html: article.HTML }} />
          </div>

          <div className="article-page__content-footer">
            <ArticleInfo
              author={{ avatarUrl: '/images/avatar1.png', name: 'Janay Wright' }}
              date="Jun 13 · 5 min read"
              viewsCount="1690"
            />
            <div>
              <Button theme="outline gray">Typography</Button>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
};
export default ArticlePage;
