import Author from '../Author/Author';
import Views from '../Views/Views';

import './ArticleInfo.sass';

const ArticleInfo = ({ data }) => (
  <div className="article-info">
    <Author author={data} />
    <div className="article-info__time">{data.date}</div>
    <Views count={data.views_count} />
  </div>
);

export default ArticleInfo;
