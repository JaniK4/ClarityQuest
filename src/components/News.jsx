import { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  constructor(props) {
      super(props);
      this.state = {
          articles:[],
          loading:false,
          page:1,
          
      };
    }
    
    async componentDidMount(){
      let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1c62f150cb4140b7b9a108612c790af3&page=1&pageSize=14";
      let data=await fetch(url);
      let parseData= await data.json();
      console.log(parseData);
      this.setState({articles:parseData.articles, totalResults:parseData.totalResults});
    }

    handlePrevClick = async()=>{
      console.log("Prev");
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1c62f150cb4140b7b9a108612c790af3&page=${this.state.page-1}&pageSize=14`;
      let data=await fetch(url);
      let parseData= await data.json();
      console.log(parseData);
      this.setState({
        page: this.state.page-1,
        articles:parseData.articles
      });
    }
    handleNextClick = async()=>{
      console.log("Next");
      if(this.state.page +1 > Math.ceil(this.state.totalResults/20)){
          console.log('no more ')
      }else{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1c62f150cb4140b7b9a108612c790af3&page=${this.state.page+1}&pageSize=14`;
        let data=await fetch(url);
        let parseData= await data.json();
        console.log(parseData);
        this.setState({
          page: this.state.page+1,
          articles:parseData.articles
        });
      }

    }

    render() {
    return (
      <>
        <div className="container-fluid mt-4">
          <h3 className="my-3">ClarityQuest - Top Headlines</h3>
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
                
                <div className="col-12 col-md-4 d-flex justify-content-center mb-4" key={index}>
                  <NewsItems
                    title={ element.title.slice(0, 55)}
                    description={ element.description.slice(0, 60)}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              ))}
          </div>


          <div className="container-fluid my-5 px-5 d-flex justify-content-between">
              <button   disabled={this.state.page <= 1}
                className="btn ms-4 btn-dark "
                onClick={this.handlePrevClick}
              >
                &larr;Prev
              </button>
              <button className="btn me-4 btn-dark"
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
