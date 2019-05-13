import React from 'react';
import './list-item.css';


const ListItems = (props) => {

  const {
    data,
    onItemSelected,
    children: renderItem
  } = props;

  const item = data.map((item) => (
    <li
      key={item.id}
      className='item-list list-group-item'
      onClick={() => {onItemSelected(item.id)}}
    >
      <span>{renderItem(item)}</span>
    </li>
  ));
  return (
    <ul className='list-group list-items bg-light'>
      {item}
    </ul>
  )
};

export default ListItems;