import { Component } from 'react'
import Spinner from './Spinner'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {

static defaultProps={
  country:'us',
  pageSize:10,
  category:'sports',
}
static propTypes={
  country:PropTypes.string,
  category:PropTypes.string,
  pageSize:PropTypes.number,
  setProgress: PropTypes.func.isRequired,
}
capitalizeFirstLetter = (string)=>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}
constructor(props) {
  super(props);
  this.state = {
      articles:[],
      loading : true,
      page:1,
      totalResults:0,
  };
  document.title=`${this.capitalizeFirstLetter(this.props.category)}`
}
async updateNews() {
  this.props.setProgress(0);
  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1c62f150cb4140b7b9a108612c790af3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed127803c3994c55b80ad4f8a26bd216&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.setState({ loading: true });
  let data = await fetch(url);
  this.props.setProgress(10);
  let parseData = await data.json();
  this.props.setProgress(50);
  this.setState({
    articles: parseData.articles,
    loading: false,
    totalResults: parseData.totalResults,
  });
  this.props.setProgress(100);
}

async componentDidMount() {
  this.updateNews(); 
}


fetchMoreData = async()=>{
  this.setState({page:this.state.page +1});
  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1c62f150cb4140b7b9a108612c790af3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed127803c3994c55b80ad4f8a26bd216&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let parseData = await data.json();
  console.log(parseData);
  this.setState({
    articles: this.state.articles.concat (parseData.articles),
    loading: false,
    totalResults: parseData.totalResults,
  });
}

    render() {
    return (
      <div  style={{backgroundColor:'rgb(249, 249, 252)', minHeight: '100vh'}} >
        <div className="container-fluid py-5 ">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6 mx-auto mt-1">
              <h1 className="mt-2 text-center">
                ClarityQuest - Top  {this.capitalizeFirstLetter(this.props.category)} Headlines 
              </h1>
            </div>
          </div>
        </div>

          <div style={{ minHeight: '10px' }}>
            {this.state.loading && <Spinner />}
          </div>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length<this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="container-fluid">
              <div className="row justify-content-center">
                {this.state.articles
                  .filter(
                    (element) =>
                      element.title && // Ensure title is not null
                      !(element.title.includes("[Removed]")) && // Ensure title doesn't contain "[Removed]"
                      element.description && 
                      !(element.description.includes("[Removed]")) // Ensure description doesn't contain "[Removed]"
                  )
                  .map((element, index) => (
                    
                    <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4" key={index}>
                      <NewsItems
                        title={ element.title.slice(0, 55)}
                        description={ element.description.slice(0, 60)}
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author ? element.author : "Unknown"}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  ))}
              </div>
            </div>
            
          </InfiniteScroll>



         

      </div>
     
    )
  }
}
export default News
