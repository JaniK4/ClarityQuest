// import PropTypes from 'prop-types'
import  { Component } from 'react'

export class Navigation extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">ClarityQuest</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav  my-2 my-lg-0" style={{ maxHeight: '100px' }}>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/about">About</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      </div>
    )
  }
}

export default Navigation