import React from 'react';
import WithData from '../hoc-withData';
import ListItem from '../list-item';
import SwapiServices from '../../services';

const swapi = new SwapiServices();
const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = swapi;

const withChildFunction = (Wraper, fn) => {
  return (props) => {
    return (
      <Wraper {...props}>
        {fn}
      </Wraper>
    )
  }
};

const renderPerson = ({ name, gender }) => `${ name }. Gender- ${ gender }.`;
const renderPlanet = ({ name, diameter }) => `${ name }. Diametr- ${ diameter }km.`;
const renderStarship = ({ name, length }) => `${ name }. Length - ${ length }.`;

const PeopleList = WithData(
  withChildFunction(ListItem, renderPerson),
  getAllPeople
);

const PlanetList = WithData(
  withChildFunction(ListItem, renderPlanet),
  getAllPlanets
);

const StarshipList = WithData(
  withChildFunction(ListItem, renderStarship),
  getAllStarships
);

export {
  PeopleList,
  PlanetList,
  StarshipList
}