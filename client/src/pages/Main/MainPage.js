import { useEffect, useState } from 'react';

import { Button } from '../../components/Button/Button';
import Article from '../../components/Atricle/Article';
import ArticleApi from '../../services/article';

import './MainPage.sass';

const MainPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getArticles = () => {
      setLoading(true);

      setTimeout(async () => {
        const { data } = await ArticleApi.getArticles();
        setArticles(data.articles);
        setLoading(false);
      }, 100000);
    };

    getArticles();
  }, []);

  console.log(articles);

  if (loading) return <div>Loading...</div>;

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
