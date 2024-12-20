import { Component } from 'react'
import loading from '../assets/spinner.gif';
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-4">
        <img style={{width:'3rem', height:'auto'}} src={loading} alt="loading...."/>
      </div>
    )
  }
}

export default Spinner