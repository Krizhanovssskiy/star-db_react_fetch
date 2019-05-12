
export default class SwapiServices {

  getResource = async (url) => {
    const res = await fetch(`https://swapi.co/api${url}`);
    if (!res.ok) {
      throw new Error(`Error fetch ${url}, responce ${res.status}`)
    }
    return await res.json();
  };

  // Planet
  //////////////////////////////////
  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results
      .map(this._transformPlanet)
      .slice(0, 5);
  };
  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  };

  // Persone
//////////////////////////////////////
  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results
      .map(this._transformPerson)
      .slice(0, 5);
  };
  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPerson(person);
  };

  // Starship
  ///////////////////////////////////////////
  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results
      .map(this._transformStarship)
      .slice(0, 5);
  };
  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarship(starship);
  };
//////////////////////////////////////////////
  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      diameter: planet.diameter,
      population: planet.population,
      climate: planet.climate,
    }
  };

  _transformStarship = (starship) => {
    console.log(starship);
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      length: starship.length,
      costInCredits: this.costInCredits,
      cargoCapacity: starship.cargo_capacity
    }
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  };

  getUrlImgPlanet = ({id}) => {
    return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
  };

  getUrlImgPerson = ({id}) => {
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  };

  getUrlImgStarship = ({id}) => {
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
  }

}