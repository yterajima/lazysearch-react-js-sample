import React from "react";
import PropTypes from "prop-types";
import { Roupe } from "./roupe";

export const Header = ({
  keyword,
  changeKeywordHandler,
  searchHandler,
  emptyKeywordHandler,
  closeModal
}) => (
  <div className="lz-header">
    <form>
      <div className="lz-search">
        <div
          className={
            keyword === "" ? "lz-search-form" : "lz-search-form has-keyword"
          }
        >
          <input
            name="keyword"
            type="text"
            className="lz-keyword"
            value={keyword}
            onChange={changeKeywordHandler}
          />
          <button type="submit" className="lz-button" onClick={searchHandler}>
            <Roupe />
          </button>
          <button type="button" className="lz-x" onClick={emptyKeywordHandler}>
            ×
          </button>
        </div>
        <a href="#" className="lz-close" onClick={closeModal}>
          close
        </a>
      </div>
    </form>
  </div>
);

Header.propTypes = {
  keyword: PropTypes.string.isRequired,
  changeKeywordHandler: PropTypes.func.isRequired,
  searchHandler: PropTypes.func.isRequired,
  emptyKeywordHandler: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
};
