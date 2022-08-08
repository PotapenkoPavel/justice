import cx from 'classnames';

import Tag from '../Tag/Tag';
import Title from '../Title/Title';
import ArticleInfo from '../ArticleInfo/ArticleInfo';

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
      <Title>{title}</Title>
      <div className="article__description">
        {description}
      </div>
      <ArticleInfo viewsCount={viewsCount} date={date} author={author} />
    </div>
  </div>
);

export default Article;
