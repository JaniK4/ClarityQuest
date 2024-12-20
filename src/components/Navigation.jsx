import { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navigation extends Component {
  render() {
    return (
      <div className='sticky-top'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary  " >
          <div className="container-fluid">
            <Link className="navbar-brand ms-2 fw-bold fs-3 text-white" to="/">
              ClarityQuest
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav my-2 my-lg-0 mx-auto">
                <li className="nav-item">
                  <Link className="nav-link text-white mx-3 fw-bold hover-nav " to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white mx-3 fw-bold hover-nav" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white mx-3 fw-bold hover-nav" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white mx-3 fw-bold hover-nav" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white mx-3 fw-bold hover-nav" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white mx-3 fw-bold hover-nav" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white mx-3 fw-bold hover-nav" to="/technology">Technology</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
