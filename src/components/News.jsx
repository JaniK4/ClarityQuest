import { Component } from 'react'
import Spinner from './Spinner'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types';
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
   }

  constructor(props) {
      super(props);
      this.state = {
          articles:[],
          loading:false,
          page:1,
          
      };
    }
    
    async componentDidMount() {
      try {
        
        this.setState({loading:true});
        let url =
          // `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1c62f150cb4140b7b9a108612c790af3&page=1&pageSize=${this.props.pageSize}`;
          `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed127803c3994c55b80ad4f8a26bd216&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
    
        if (!data.ok) { // Handle API errors
          throw new Error(`HTTP error! Status: ${data.status}`);
        }
    
        let parseData = await data.json();
        console.log(parseData);
        this.setState({ articles: parseData.articles || [], totalResults: parseData.totalResults,loading:false });
      } catch (error) {
        console.error("Failed to fetch data:", error.message);
        this.setState({ articles: [] }); // Ensure articles is never undefined
      }
    }
    
    handlePrevClick = async()=>{
      console.log("Prev");
      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1c62f150cb4140b7b9a108612c790af3&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed127803c3994c55b80ad4f8a26bd216&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data=await fetch(url);
      let parseData= await data.json();
      console.log(parseData);
      this.setState({
        page: this.state.page-1,
        articles:parseData.articles,
        loading:false,
      });
    }
    handleNextClick = async()=>{
      console.log("Next");
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1c62f150cb4140b7b9a108612c790af3&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed127803c3994c55b80ad4f8a26bd216&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data=await fetch(url);
        let parseData= await data.json();
        console.log(parseData);
        this.setState({
          page: this.state.page+1,
          articles:parseData.articles,
          loading:false,
      });
      


    }

    render() {
    return (
      <>
        <div className="container-fluid mt-4 ">
          <h1 className="mt-5 text-center">ClarityQuest - Top Headlines</h1>
          <div style={{ minHeight: '64px' }}>
            {this.state.loading && <Spinner />}
          </div>
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


          <div className="container-fluid my-5 px-5 d-flex justify-content-between">
              <button   disabled={this.state.page <= 1}
                className="btn ms-4 btn-primary "
                onClick={this.handlePrevClick}
              >
                &larr;Prev
              </button>
              <button className="btn me-4 btn-primary" disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
                onClick={this.handleNextClick}
              >
                Next&rarr;
              </button>
          </div>
        </div>
      </>
     
    )
  }
}
export default News
