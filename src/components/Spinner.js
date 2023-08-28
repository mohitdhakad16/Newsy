import React, { Component } from 'react';
import loader from './loader.gif';

export class Spinner extends Component {
  render() {
    const filterImg = {
      filter: this.props.toggleColor === 'dark' ? 'none' : 'invert(100%)',
    };
    return (
      <div className="my-4 text-center">
        <img className="spinnerImg" style={filterImg} src={loader} alt="loading" />
      </div>
    );
  }
}

export default Spinner;