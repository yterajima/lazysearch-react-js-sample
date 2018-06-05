import React from 'react';

class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="lz-result">
        <a href={this.props.url}>
          <h3>{this.props.title}</h3>
          <span className="url">{this.props.url}</span>
        </a>
        <div className="desc">{this.props.description}</div>
      </div>
    );
  }
}

export default Result;
