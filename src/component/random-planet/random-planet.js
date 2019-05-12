import React, { Component, Fragment } from 'react';
import './random-planet.css';

import SwapiServices from '../../services/swapi-services';
import Loader from "../loader";
import PlanetView from './planet-view';
import ErrorIndicator from "../error-indicator";


export default class RandomPlanet extends Component {

  state = {
    planet: null,
    loading: true,
    error: false
  };

  swapiService = new SwapiServices();

  componentDidMount() {
    this.updataPlanet();
    this.clearId = setInterval(()=>{
      this.updataPlanet()
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.clearId);
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error:true })
  }

  updataPlanet = () => {
    const id = Math.floor(Math.random() * 17) + 2;
    this.swapiService.getPlanet(id)
      .then((planet) => {
        this.setState({
          planet,
          loading: false
        })
      })
      .catch((err) => {
        console.error(`Error : ${err}`);
        this.setState({
          error: true,
          loading: false
        })
      })
  };

  render () {
    const { planet, loading, error } = this.state;

    const loader = loading ? <Loader/> : null;
    const content = !(loading || error) ? <PlanetView planet={planet}/> : null ;
    const errorIndicator = error ? <ErrorIndicator/> : null;

    return (
      <div className="random-planet bg-light row">
        {loader}
        {content}
        {errorIndicator}
      </div>
    )
  }
}

