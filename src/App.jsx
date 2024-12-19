import { Component } from 'react'
import Navigation from './components/Navigation'
import News from './components/News'
import { Routes, Route } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={16} country={"us"} category={"general"}/>}/>
          <Route exact path="/business" element={<News key="business" pageSize={16} country={"us"} category={"business"}/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={16} country={"us"} category={"entertainment"}/>}/>
          <Route exact path="/health" element={<News key="health" pageSize={16} country={"us"} category={"health"}/>}/>
          <Route exact path="/science" element={<News key="science" pageSize={16} country={"us"} category={"science"}/>}/>
          <Route exact path="/sports" element={<News key="sports" pageSize={16} country={"us"} category={"sports"}/>}/>
          <Route exact path="/technology" element={<News key="technology" pageSize={16} country={"us"} category={"technology"}/>}/>    
        </Routes>
      </div>
    )
  }
}
