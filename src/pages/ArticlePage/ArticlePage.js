import { Link } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import ArticleInfo from '../../components/ArticleInfo/ArticleInfo';
import Tag from '../../components/Tag/Tag';

import './ArticlePage.sass';

const ArticlePage = () => (
  <main className="article-page">
    <div className="container article-page__wrapper">
      <div className="article-page__button">
        <div>
          <Link to="/articles">
            <Button type="outline" theme="gray">All articles</Button>
          </Link>
        </div>
      </div>
      <section className="article-page__content">
        <Tag>#Typography</Tag>

        <div className="article-page__title">Humane Typography in the Digital Age</div>
        <div>
          <img src="/images/image 14 (1).png" alt="img" />

          <p>
            An Essay on Typography by Eric Gill takes the reader back to the year 1930.
            The year when a conflict between two worlds came to its term. The machines
            of the industrial world finally took over the handicrafts.
          </p>
          <p>
            The typography of this industrial age was no longer handcrafted.
            Mass production and profit became more important. Quantity mattered more than the quality.
            The books and printed works in general lost a part of its humanity. The typefaces were
            not produced by craftsmen anymore. It was the machines printing and tying the books
            together now. The craftsmen had to let go of their craft and became a cog in the process.
            An extension of the industrial machine.
          </p>
          <p>
            But the victory of the industrialism
            didn’t mean that the craftsmen were completely extinct.
            The two worlds continued to coexist independently.
            Each recognising the good in the other — the power of industrialism and the humanity
            of craftsmanship. This was the second transition that would strip typography of a part of its humanity.
            We have to go 500 years back in time to meet the first one.
          </p>
        </div>
        <div className="article-page__content-footer">
          <ArticleInfo
            author={{ avatarUrl: '/images/avatar1.png', name: 'Janay Wright' }}
            date="Jun 13 · 5 min read"
            viewsCount="1690"
          />
          <div>
            <Button type="outline" theme="gray">Typography</Button>
          </div>
        </div>
      </section>
    </div>
  </main>
);
export default ArticlePage;
