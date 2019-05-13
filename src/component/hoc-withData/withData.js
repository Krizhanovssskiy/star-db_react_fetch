import React, { Component } from 'react';
import Loader from "../loader";

const WithData = (View, getData) => {
  return class extends Component {
    state = {
      data: null
    };


    componentDidMount() {
      getData()
        .then((data) => {
          this.setState({
            data
          })
        })
        .catch((err) => {
          console.error(`Error! ${err}`)
        })
    }
    render () {
      const { data } = this.state;
      if (!data) {
        return <Loader/>
      }
      return (
        <View {...this.props} data={data}/>
      )
    }
  }
};

export default WithData;