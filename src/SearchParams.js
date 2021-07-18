import { useState, useEffect } from 'react';
import Results from './Results';
import useBreedList from './UseBreedList';
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
  /* The order of the hooks is really important. It will get applied to the order the variables are declared
   */
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  /* Add an empty array as the second prop to prevent it from making multi requests, that property sets when it renders */
  useEffect(() => {
    requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    console.log(json);

    setPets(json.pets);
  }
  /* target.value is the result of the event */
  const updateLocation = function (e) {
    setLocation(e.target.value);
  };

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={location.toUpperCase()}
          placeholder="Location"
          onChange={(e) => updateLocation(e)}
        />
        <label htmlFor="animal"> Animal</label>
        <select
          name="animal"
          id="animal"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
          onBlur={(e) => setAnimal(e.target.value)}
        >
          <option />
          {ANIMALS.map((animal) => (
            <option value={animal} key={animal}>
              {animal}
            </option>
          ))}
        </select>
        <label htmlFor="breed">Breed</label>

        <select
          name="breed"
          id="breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          onBlur={(e) => setBreed(e.target.value)}
        >
          <option />
          {breeds.map((breed) => (
            <option value={breed} key={breed}>
              {breed}
            </option>
          ))}
        </select>

        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
