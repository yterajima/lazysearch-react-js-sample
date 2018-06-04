import React from 'react';
import Header from './modal/Header';
import Body from './modal/Body';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  render() {
    return (
      <div red={this.ref} className={this.props.isActive ? 'lz-modal lz-ignore is-active' : 'lz-modal lz-ignore'} data-lz-modal>
        <div className="lz-background"></div>
        <div className="lz-front">
          <div className="lz-search-block">
            <Header />
            <Body />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
