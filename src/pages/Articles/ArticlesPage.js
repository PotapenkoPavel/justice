import Article from '../../components/Atricle/Article';
import AuthorCard from '../../components/AuthorCard/AuthorCard';
import { Button } from '../../components/Button/Button';
import { articles } from '../../moc';

import './ArticlesPage.sass';

const AuthorCardData = {
  name: 'Janay Wright',
  description: 'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
  url: '/images/avatar11.png',
};

const ArticlesPage = () => (
  <main className="articles-page">
    <div className="container">
      <div className="articles-page__wrapper">
        <section className="articles-page__author-card">
          <AuthorCard
            name={AuthorCardData.name}
            description={AuthorCardData.description}
            url={AuthorCardData.url}
          />
        </section>
        <section className="articles-page__list">
          <div>
            {articles.map(({
              previewUrl, tags, title, description, author,
            }, index) => (
              <Article
                key={index}
                img={previewUrl}
                tags={tags}
                title={title}
                description={description}
                author={author}
                type="column"
              />
            ))}
          </div>
          <div className="articles-page__navigate">
            <Button type="disabled">Prev</Button>
            <Button type="outline">Next</Button>
          </div>
        </section>
      </div>
    </div>
  </main>
);

export default ArticlesPage;
