import Author from '../Author/Author';
import Views from '../Views/Views';

import { getMonthAndDay } from '../../helpers/convertDate';

import './ArticleInfo.sass';

const ArticleInfo = ({
  author: { firstName, lastName, avatar }, timestamp, readTime, views,
}) => (
  <div className="article-info">
    <Author
      name={`${firstName} ${lastName}`}
      img={avatar
        ? `data:${avatar.contentType};base64, ${avatar.imageBase64}`
        : '/images/avatar111.png'}
    />
    <div className="article-info__time">{`${getMonthAndDay(timestamp)} · ${readTime} min read`}</div>
    <Views count={views} />
  </div>
);

export default ArticleInfo;
