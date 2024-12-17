import { Component } from 'react'
import Navigation from './components/Navigation'
import News from './components/News'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <News />
      </div>
    )
  }
}
