import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './components/Modal';
import Style from './assets/stylesheet.css';

window.onload = () => {
  Style.use();

  ReactDOM.render(
    <Modal isActive={false} />,
    document.getElementById('root')
  );
};
