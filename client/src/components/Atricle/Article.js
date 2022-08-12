import { useNavigate } from 'react-router-dom';
import cx from 'classnames';

import Tag from '../Tag/Tag';
import Title from '../Title/Title';
import ArticleInfo from '../ArticleInfo/ArticleInfo';

import './Article.sass';

const Article = ({
  id, title, tag, img, description, timestamp, readTime, views, author, type = 'default',
}) => {
  const navigate = useNavigate();

  return (
    <div className={cx('article', `article_${type}`)} onClick={() => navigate(`/article/${id}`)}>
      <div className="article__preview-container">
        <img src={`${img}`} alt="preview" />
      </div>
      <div className="article__content">
        <div className="article__tags">
          <Tag>{tag}</Tag>
        </div>
        <Title>{title}</Title>
        <div className="article__description">
          {description}
        </div>
        <ArticleInfo author={author} timestamp={timestamp} readTime={readTime} views={views} />
      </div>
    </div>
  );
};

export default Article;
