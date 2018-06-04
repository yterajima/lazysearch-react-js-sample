import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="lz-header">
        <form>
          <div className="lz-search">
            <div className="lz-search-form has-keyword">
              <input name="keyword" type="text" className="lz-keyword" />
              <button type="submit" className="lz-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.08 19.6">
                  <defs>
                    <style>
                      {`.a{fill:#fff;}.b{fill:none;stroke:#fff;stroke-miterlimit:10;}`}
                    </style>
                  </defs>
                  <title>loupe</title>
                  <path className="a" d="M10.91,4A6.91,6.91,0,1,1,4,10.91,6.92,6.92,0,0,1,10.91,4m0-1a7.91,7.91,0,1,0,7.91,7.91A7.91,7.91,0,0,0,10.91,3Z" transform="translate(-3 -3)"/>
                  <line className="b" x1="12.62" y1="13.15" x2="18.72" y2="19.25"/>
                </svg>
              </button>
              <button type="button" className="lz-x">×</button>
            </div>
            <a href="#" className="lz-close">close</a>
          </div>
        </form>
      </div>
    );
  }
}

export default Header;
