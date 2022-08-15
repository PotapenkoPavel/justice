import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../components/Button/Button';
import Article from '../../components/Atricle/Article';
import Spinner from '../../components/Spinner/Spinner';
import { fetchArticles } from '../../redux/actionCreators/article';

import './MainPage.sass';

const MainPage = () => {
  const { articles, isLoading } = useSelector((state) => state.article);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <>
      <section className="recommended-block">
        <div className="container">
          {articles.map(({
            _id,
            title,
            tag,
            img: { contentType, imageBase64 },
            description,
            author,
            timestamp,
            readTimeInMinutes,
            views,
          }) => (
            <Article
              key={_id}
              id={_id}
              title={title}
              tag={tag}
              img={`data:${contentType};base64, ${imageBase64}`}
              description={description}
              author={author}
              timestamp={timestamp}
              readTime={readTimeInMinutes}
              views={views}
            />
          ))}
        </div>
      </section>

      <section className="popular-block">
        <div className="container">
          <h2 className="popular-block__title">Popular articles</h2>
          <div className="popular-block__articles">
            {articles.map(({
              _id,
              title,
              tag,
              img: { contentType, imageBase64 },
              description,
              author,
              timestamp,
              readTimeInMinutes,
              views,
            }) => (
              <Article
                key={_id}
                id={_id}
                title={title}
                tag={tag}
                img={`data:${contentType};base64, ${imageBase64}`}
                description={description}
                author={author}
                timestamp={timestamp}
                readTime={readTimeInMinutes}
                views={views}
                type="compact"
              />
            ))}
          </div>

          <div className="popular-block__navigate">
            <Button theme="disabled">Prev</Button>
            <Button theme="outline">Next</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
