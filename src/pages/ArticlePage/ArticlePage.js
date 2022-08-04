import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import ArticleInfo from '../../components/ArticleInfo/ArticleInfo';
import Tag from '../../components/Tag/Tag';

import './ArticlePage.sass';

const HTML = '<img src="/images/image 14 (1).png" alt="img" />\n'
  + '\n'
  + '            <p>\n'
  + '              An Essay on Typography by Eric Gill takes the reader back to the year 1930.\n'
  + '              The year when a conflict between two worlds came to its term. The machines\n'
  + '              of the industrial world finally took over the handicrafts.\n'
  + '            </p>\n'
  + '            <p>\n'
  + '              The typography of this industrial age was no longer handcrafted.\n'
  + '              Mass production and profit became more important. Quantity mattered more than the quality.\n'
  + '              The books and printed works in general lost a part of its humanity. The typefaces were\n'
  + '              not produced by craftsmen anymore. It was the machines printing and tying the books\n'
  + '              together now. The craftsmen had to let go of their craft and became a cog in the process.\n'
  + '              An extension of the industrial machine.\n'
  + '            </p>\n'
  + '            <p>\n'
  + '              But the victory of the industrialism\n'
  + '              didn’t mean that the craftsmen were completely extinct.\n'
  + '              The two worlds continued to coexist independently.\n'
  + '              Each recognising the good in the other — the power of industrialism and the humanity\n'
  + '              of craftsmanship. This was the second transition that would '
  + '              strip typography of a part of its humanity.\n'
  + '              We have to go 500 years back in time to meet the first one.\n'
  + '            </p>';

const data = {
  title: 'Humane Typography in the Digital Age',
  tag: '#Typography',
  HTML,
};

const ArticlePage = () => {
  const navigate = useNavigate();

  return (
    <main className="article-page">
      <div className="container article-page__wrapper">
        <div className="article-page__button">
          <div>
            <Button
              type="outline"
              theme="gray"
              onClick={() => navigate('/articles')}
            >
              All articles
            </Button>
          </div>
        </div>
        <section className="article-page__content">
          <Tag>{data.tag}</Tag>

          <div className="article-page__title">{data.title}</div>

          <div>
            <div dangerouslySetInnerHTML={{ __html: data.HTML }} />
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
};
export default ArticlePage;
