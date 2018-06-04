import React from 'react';
import Result from './Result';
import Navi from './Navi';

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="lz-body">
        <Result />
        <Navi />
      </div>
    );
  }
}

export default Body;
