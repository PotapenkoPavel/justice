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
        <section className="articles-page__author-card"><AuthorCard data={AuthorCardData} /></section>
        <section className="articles-page__list">
          <div>{articles.map((element, index) => <Article key={index} data={element} type="column" />)}</div>
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
