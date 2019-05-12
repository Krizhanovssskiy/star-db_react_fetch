import React, { Component } from 'react';
import './list-item.css';

import Loader from "../loader";

export default class ListItems extends Component {
  state = {
    itemList: null
  };


  componentDidMount() {
    const { getData } = this.props;
    getData()
      .then((itemList) => {
        this.setState({
          itemList
        })
      })
      .catch((err) => {
        console.error(`Error! ${err}`)
      })
  }

  renderItem = (arr) => {
    return arr.map((item) => (
        <li
          key={item.id}
          className='item-list list-group-item'
          onClick={() => {this.props.onItemSelected(item.id)}}
        >
          <span>{this.props.renderItem(item)}</span>
        </li>
    ))
  };

  render () {

    const { itemList } = this.state;
    if (!itemList) {
      return <Loader/>
    }
    const item = this.renderItem(itemList);
    return (
      <ul className='list-group list-items bg-light'>
        {item}
      </ul>
    )
  }
}