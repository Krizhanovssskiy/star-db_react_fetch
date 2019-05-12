import React from 'react';
import './header.css'

const Header = () => {
  return (
    <header className='navbar-light bg-light'>
      <div className="container">
        <nav>
          <h3>
            <a href="#logo">
              Star DB
            </a>
          </h3>
          <ul className='nav'>
            <li>
              <a href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#films">
                Films
              </a>
            </li>
            <li>
              <a href="#people">
                People
              </a>
            </li>
            <li>
              <a href="#starships">
                Starships
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};

export default Header;