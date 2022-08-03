import Author from '../Author/Author';
import Views from '../Views/Views';

import './ArticleInfo.sass';

const ArticleInfo = ({ date, viewsCount, author }) => (
  <div className="article-info">
    <Author name={author.name} img={author.avatarUrl} />
    <div className="article-info__time">{date}</div>
    <Views count={viewsCount} />
  </div>
);

export default ArticleInfo;
