import { Component } from 'react'
import Navigation from './components/Navigation'
import News from './components/News'
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize=13;

  state={ progress:0 }

  setProgress = (progress) =>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
        <LoadingBar
          color='#ffcc00'
          height={2}
          progress={this.state.progress}
          shadow={true}
          transitionTime={300} // Smooth transition
        />
        <Navigation />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country={"us"} category={"general"}/>}/>
          <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country={"us"} category={"business"}/>}/>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country={"us"} category={"entertainment"}/>}/>
          <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country={"us"} category={"health"}/>}/>
          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country={"us"} category={"science"}/>}/>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country={"us"} category={"sports"}/>}/>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country={"us"} category={"technology"}/>}/>    
        </Routes>
      </div>
    )
  }
}
