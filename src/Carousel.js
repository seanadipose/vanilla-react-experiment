/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';

export default class Carousel extends Component {
  state = {
    active: 0,
  };
  // static defaultProps = {
  //   images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
  // };

  handleIndexClick = (event) => {
    console.log(event);
    this.setState({ active: +event.target.dataset.index });
  };
  render() {
    const { active } = this.state;
    // const { images } = this;

    return (
      <div className="carousel">
        <img src={this.props.images[active]} alt="animal" />
        <div className="carousel-smaller">
          {this.props.images.map((photo, i) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <img
              src={photo}
              key={photo}
              alt="animal thumbnail"
              className={i === active ? 'active' : ''}
              onClick={this.handleIndexClick}
              data-index={i}
            />
          ))}
        </div>
      </div>
    );
  }
}
