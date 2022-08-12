import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import axios from 'axios';

import Article from '../../components/Atricle/Article';
import AuthorCard from '../../components/AuthorCard/AuthorCard';
import { Button } from '../../components/Button/Button';

import { articles } from '../../moc';

import './ArticlesPage.sass';

const ArticlesPage = () => {
  const user = useSelector((state) => state.user);
  // const token = useSelector((state) => state.auth.token);

  useEffect(() => {

  }, []);

  // const fetchArticles = async () => {
  //   const response = await axios.get(`http://localhost:5050/api/article/owner/${user._id}`, null, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  // };

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
                id, previewUrl, tags, title, description, viewsCount, date, author,
              }) => (
                <Article
                  key={id}
                  previewUrl={previewUrl}
                  tags={tags}
                  title={title}
                  description={description}
                  views={viewsCount}
                  date={date}
                  author={author}
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
