import { useEffect } from 'react'
import { Link } from 'react-router-dom';

export const Navigation =()=> {
  const handleNavClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
    return (
      <div className='sticky-top'>
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary  ' >
          <div className='container-fluid'>
            <Link className='navbar-brand ms-2 fw-bold fs-3 text-white' to="/" onClick={handleNavClick}>
              ClarityQuest
            </Link>
            <button
              className='navbar-toggler'
              type='button'
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
                  <Link className="nav-link text-white mx-3 fw-bold hover-nav " to="/" onClick={handleNavClick}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white mx-3 fw-bold hover-nav" to="/business" onClick={handleNavClick}>Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white mx-3 fw-bold hover-nav" to="/entertainment" onClick={handleNavClick}>Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white mx-3 fw-bold hover-nav" to="/health" onClick={handleNavClick}>Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white mx-3 fw-bold hover-nav" to="/science" onClick={handleNavClick}>Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white mx-3 fw-bold hover-nav" to="/sports" onClick={handleNavClick}>Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white mx-3 fw-bold hover-nav" to="/technology" onClick={handleNavClick}>Technology</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );

}

export default Navigation;
