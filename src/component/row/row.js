import React from 'react';

import './row.css';

const Row = ({left, right}) => {
  return (
    <ul className='row'>
      <li className='col-md'>
        {left}
      </li>
      <li className='col-md'>
        {right}
      </li>
    </ul>
  )
}
export default Row;