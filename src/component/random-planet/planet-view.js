import React, { Fragment } from 'react';

const PlanetView = ({ planet }) => {
  const {
    id,
    name,
    population,
    diameter,
    climate
  } = planet;

  return (
    <Fragment>
      <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
           className=' planet-images'
      />
      <div>
        <h4>{name}</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span>Население:</span>
            <span>{population}  чел.</span>
          </li>
          <li className='list-group-item'>
            <span>Диаметр планети:</span>
            <span>{diameter}   км.</span>
          </li>
          <li className='list-group-item'>
            <span>Климат:</span>
            <span>{climate}</span>
          </li>
        </ul>
      </div>
    </Fragment>
  )
};

export default PlanetView;