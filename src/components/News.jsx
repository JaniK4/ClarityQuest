import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import NewsItems from './NewsItems';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = ({ country = 'us', pageSize = 10, category = 'sports', apiKey, setProgress }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(category)} - ClarityQuest`;
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateNews = async () => {
    setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    setLoading(true);
    try {
      const response = await fetch(url);
      setProgress(10);
      const parseData = await response.json();
      setProgress(50);
      setArticles(parseData.articles);
      setTotalResults(parseData.totalResults);
      setLoading(false);
      setProgress(100);
    } 
    catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  const fetchMoreData = async () => {
    try {
      const nextPage = page + 1;
      setPage(nextPage);
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${nextPage}&pageSize=${pageSize}`;
      const response = await fetch(url);
      const parseData = await response.json();
      setArticles(articles.concat(parseData.articles));
      setTotalResults(parseData.totalResults);
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  return (
    <div style={{ backgroundColor: 'rgb(249, 249, 252)', minHeight: '100vh' }} className="pb-5">
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 mx-auto mt-1">
            <h1 className="mt-2 text-center">
              ClarityQuest - Top {capitalizeFirstLetter(category)} Headlines
            </h1>
          </div>
        </div>
      </div>

      <div style={{ minHeight: '10px' }}>
        {loading && <Spinner />}
      </div>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container-fluid">
          <div className="row justify-content-center">
            {articles
              .filter(
                (element) =>
                  element.title &&
                  !element.title.includes("[Removed]") &&
                  element.description &&
                  !element.description.includes("[Removed]")
              )
              .map((element, index) => (
                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4" key={index}>
                  <NewsItems
                    title={element.title.slice(0, 55)}
                    description={element.description.slice(0, 60)}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author || "Unknown"}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
  pageSize: PropTypes.number,
  setProgress: PropTypes.func.isRequired,
};

export default News;
