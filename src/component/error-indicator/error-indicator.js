import React from 'react';
import './error-indicator.css';
import icon from './images_deathstar.png';


const ErrorIndicator = () => {
  
  return (
    <div className="error-indicator">
      <img src={icon} alt="Error icon"/>
      <span className='boom'>Boom!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already sent droid to fix it)
      </span>
    </div>
  )
};

export default ErrorIndicator;