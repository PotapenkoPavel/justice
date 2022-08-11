import { useSelector } from 'react-redux';

import Article from '../../components/Atricle/Article';
import AuthorCard from '../../components/AuthorCard/AuthorCard';
import { Button } from '../../components/Button/Button';

import { articles } from '../../moc';

import './ArticlesPage.sass';

const ArticlesPage = () => {
  const {
    firstName, lastName, description, avatar,
  } = useSelector((state) => state.user);

  return (
    <main className="articles-page">
      <div className="container">
        <div className="articles-page__wrapper">
          <section className="articles-page__author-card">
            <AuthorCard
              img={
               avatar
                 ? `data:${avatar.mimetype};base64, ${avatar.imageBase64}`
                 : '/images/avatar123.jpg'
              }
            >
              <div className="author-card__name">{`${firstName} ${lastName}`}</div>
              <div className="author-card__description" styles={{ whiteSpace: 'pre-line' }}>
                {description}
              </div>
            </AuthorCard>
          </section>
          <section className="articles-page__list">
            <div>
              {articles.map(({
                id, previewUrl, tags, title, desc, viewsCount, date, author,
              }) => (
                <Article
                  key={id}
                  previewUrl={previewUrl}
                  tags={tags}
                  title={title}
                  description={desc}
                  viewsCount={viewsCount}
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
