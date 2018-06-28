import React from "react";
import PropTypes from "prop-types";

export const Result = ({ title, url, description }) => (
  <div className="lz-result">
    <a href={url}>
      <h3>{title}</h3>
      <span className="url">{url}</span>
    </a>
    <div className="desc">{description}</div>
  </div>
);

Result.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
