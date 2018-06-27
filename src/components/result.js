import React from 'react';
import PropTypes from 'prop-types';

export const Result = (props) => (
  <div className="lz-result">
    <a href={props.url}>
      <h3>{props.title}</h3>
      <span className="url">{props.url}</span>
    </a>
    <div className="desc">{props.description}</div>
  </div>
);

Result.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
