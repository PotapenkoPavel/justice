import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Article from '../../components/Atricle/Article';
import AuthorCard from '../../components/AuthorCard/AuthorCard';
import { Button } from '../../components/Button/Button';
import ArticleApi from '../../services/article';

import './ArticlesPage.sass';

const ArticlesPage = () => {
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.auth.token);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await ArticleApi.getArticlesByOwner(user._id, token);
      setArticles(response.data.articles);
    };

    fetchArticles();
  }, []);

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
              {articles.map(({
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
