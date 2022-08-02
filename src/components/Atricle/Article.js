import cx from 'classnames';
import ArticleInfo from './ArticleInfo/ArticleInfo';
import Tag from '../Tag/Tag';
import './Article.sass';

const Article = ({ data, type = 'default' }) => (
  <div className={cx('article', `article_${type}`)}>
    <div className="article__preview-container">
      <img src={data.preview_url} alt="preview" />
    </div>
    <div className="article__content">
      <div className="article__tags">
        {data.tags.map((el, index) => <Tag key={index}>{el}</Tag>)}
      </div>
      <div className="article__title">{data.title}</div>
      <div className="article__description">
        {data.description}
      </div>
      <ArticleInfo data={data.author} />
    </div>
  </div>
);

export default Article;
