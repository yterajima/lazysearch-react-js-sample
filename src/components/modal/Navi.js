import React from 'react';

class Navi extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="lz-nav">
        <div className="lz-prev lz-button">
          <a href="#">&lt;&lt;&nbsp;前へ</a>
        </div>

        <div className="lz-page-status">
          <div>
            <span className="lz-current-page"></span> / <span className="lz-total-page"></span>
          </div>
          <div>
            <span className="lz-total-num"></span><span className="lz-num-suffix">件</span>
          </div>
        </div>

        <div className="lz-next lz-button">
          <a href="#">次へ&nbsp;&gt;&gt;</a>
        </div>
      </nav>
    );
  }
}

export default Navi;
