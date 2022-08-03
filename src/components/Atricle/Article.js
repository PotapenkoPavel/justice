import cx from 'classnames';
import ArticleInfo from '../ArticleInfo/ArticleInfo';
import Tag from '../Tag/Tag';
import './Article.sass';

const Article = ({
  previewUrl, tags, title, description, viewsCount, date, author, type = 'default',
}) => (
  <div className={cx('article', `article_${type}`)}>
    <div className="article__preview-container">
      <img src={previewUrl} alt="preview" />
    </div>
    <div className="article__content">
      <div className="article__tags">
        {tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </div>
      <div className="article__title">{title}</div>
      <div className="article__description">
        {description}
      </div>
      <ArticleInfo viewsCount={viewsCount} date={date} author={author} />
    </div>
  </div>
);

export default Article;
