import React from 'react';

export const Result = (props) => (
  <div className="lz-result">
    <a href={this.props.url}>
      <h3>{this.props.title}</h3>
      <span className="url">{this.props.url}</span>
    </a>
    <div className="desc">{this.props.description}</div>
  </div>
);
