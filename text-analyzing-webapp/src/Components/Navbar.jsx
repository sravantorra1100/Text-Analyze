import React from 'react'
import PropTypes from 'prop-types';
const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">{props.about}</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>



    </>
  );
}

Navbar.propTypes={
  title:PropTypes.string,
  home:PropTypes.string,
  about:PropTypes.string,
}
Navbar.defaultProps={
  title:"home",
  home:"home",
  about:"home",
}

Navbar.propTypes={
  title:PropTypes.string.isRequired,
  home:PropTypes.string.isRequired,
  about:PropTypes.string.isRequired,
}

export default Navbar


