import { useState } from 'react';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');

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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
