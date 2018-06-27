import React from 'react';
import PropTypes from 'prop-types';
import { Roupe } from './roupe';

export const Header = (props) => (
  <div className="lz-header">
    <form>
      <div className="lz-search">
        <div className={props.keyword === '' ? 'lz-search-form' : 'lz-search-form has-keyword'}>
          <input
            name="keyword"
            type="text"
            className="lz-keyword"
            value={props.keyword}
            onChange={props.changeKeywordHandler}
          />
          <button type="submit" className="lz-button" onClick={props.searchHandler}>
            <Roupe />
          </button>
          <button type="button" className="lz-x" onClick={props.emptyKeywordHandler}>×</button>
        </div>
        <a href="#" className="lz-close" onClick={props.closeModal}>close</a>
      </div>
    </form>
  </div>
);

Header.propTypes = {
  keyword: PropTypes.string,
  changeKeywordHandler: PropTypes.func,
  searchHandler: PropTypes.func,
  emptyKeywordHandler: PropTypes.func,
  closeModal: PropTypes.func
};
