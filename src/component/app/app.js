import React, { Component } from 'react';
import './app.css'

import Header from '../header';
import RandomPlanet from '../random-planet';
import ListItems from '../list-item';
import ItemDetails, { Record }  from '../item-details';
import SwapiServices from '../../services/swapi-services';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
export default class App extends Component {

  state = {
    planetId: 2,
    personId: 1,
    starshipId: 2,
  };

  swapiService = new SwapiServices();



  onSelectedPlanet = (id) => {
    this.setState({ planetId: id })
  };

  onSelectedPerson = (id) => {
    this.setState({ personId: id })
  };

  onSelectedStarship = (id) => {
    this.setState({ starshipId: id })
  };

  render() {
    const {
      planetId,
      personId,
      starshipId
    } = this.state;
    const {
      getStarship,
      getPlanet,
      getPerson,
      getAllPlanets,
      getAllPeople,
      getAllStarships,
      getUrlImgPerson,
      getUrlImgPlanet,
      getUrlImgStarship,
    } = this.swapiService;

    const listAllPlanet = (
      <ErrorBoundry>
        <ListItems
          getData={getAllPlanets}
          onItemSelected={this.onSelectedPlanet}
          renderItem={(i) => {
            return`${ i.name }. Diametr- ${i.diameter}km.`}
          }
        />
      </ErrorBoundry>
    );
    const detailPlanet = (
      <ErrorBoundry>
        <ItemDetails
          getData={getPlanet}
          itemId={planetId}
          getImageUrl={getUrlImgPlanet}
        >
          <Record
            label='Диаметр'
            field='diameter'
          />
          <Record
            label='Население'
            field='population'
          />
          <Record
            label='Климат'
            field='climate'
          />
        </ItemDetails>
      </ErrorBoundry>
    );

    const listAllPeople = (
      <ErrorBoundry>
        <ListItems
          getData={getAllPeople}
          onItemSelected={this.onSelectedPerson}
          renderItem={(i) => {
            return`${ i.name }. Gender- ${i.gender}.`}
          }
        />
      </ErrorBoundry>
    );
    const detailPerson = (
      <ErrorBoundry>
        <ItemDetails
          getData={getPerson}
          itemId={personId}
          getImageUrl={getUrlImgPerson}

        >
          <Record
            label='Пол'
            field='gender'
          />
          <Record
            label='День рождения'
            field='birthYear'
          />
          <Record
            label='Цвет глаз'
            field='eyeColor'
          />
        </ItemDetails>
      </ErrorBoundry>
    );

    const listAllStarship = (
      <ErrorBoundry>
        <ListItems
          getData={getAllStarships}
          onItemSelected={this.onSelectedStarship}
          renderItem={(i) => {
            return`${ i.name }. Length - ${i.length}.`}
          }
        />
      </ErrorBoundry>
    );
    const detailStarship = (
      <ErrorBoundry>
        <ItemDetails
          getData={getStarship}
          itemId={starshipId}
          getImageUrl={getUrlImgStarship}
        >

          <Record
            label='Модель'
            field='model'
          />
          <Record
            label='Длина'
            field='length'
          />
          <Record
            label='Грузоподёмность'
            field='cargoCapacity'
          />

        </ItemDetails>
      </ErrorBoundry>
    );

    return (
      <ErrorBoundry>
        <div className='mainApp'>
          <ErrorBoundry>
            <Header />
          </ErrorBoundry>

          <div className="container">
            <ErrorBoundry>
              <RandomPlanet/>
            </ErrorBoundry>

            <Row
              left={
                listAllPlanet
              }
              right={
                detailPlanet
              }
            />

            <Row
              left={
                listAllPeople
              }
              right={
                detailPerson
              }
            />

            <Row
              left={listAllStarship}
              right={detailStarship}
            />

          </div>
        </div>
      </ErrorBoundry>
    )
  }
}




