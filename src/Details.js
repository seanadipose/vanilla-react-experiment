import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

// const Details = () => {
//   const { id } = useParams();
//   return <h2>{id}</h2>;
// };

class Details extends Component {
  constructor() {
    super();
    this.state = { loading: true };
  }
  render() {
    if (this.state.loading) return <h2>Loading...</h2>;
    const { animal, breed, city, state, description, name } = this.state;
    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );

    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }
}
export default withRouter(Details);
