import React, { Component } from 'react';
import './item-details.css';
import Loader from "../loader";
import ErrorBoundry from '../error-boundry';

const Record = ({item, label, field}) => {
  return (
    <li className="list-group-item">
      <span>{label}:</span>
      <span>{item[field]}</span>
    </li>
  )
};
export { Record };

export default class ItemDetails extends Component {
  state = {
    item: null,
    imgUrl: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({
        item: null
      });
      this.updateItem();
    }
  }

  updateItem = () => {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) return;
    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          imgUrl: getImageUrl(item)
        })
      })
      .catch((err) => {
        console.error(`Error ! ${err}`);
      })
  };

  render () {

    const { item, imgUrl } = this.state;
    if (!item) return <Loader/>;
    const {
      name,
    } = item;
    return (
      <ErrorBoundry>
        <div className='item-details bg-light'>
          <img src={imgUrl}
               alt="img"
               className='details-img'
          />
          <div className='body-details'>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              {React.Children.map(this.props.children, (child, inx) => {
                return React.cloneElement(child, { item })
              })}
            </ul>
          </div>
        </div>
      </ErrorBoundry>
    )
  }
}