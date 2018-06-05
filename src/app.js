import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import Style from './assets/stylesheet.css';

window.onload = () => {
  Style.use();
  const keywordDOM = document.querySelector('[name=keyword]');
  let modalRef;

  ReactDOM.render(
    <Modal ref={(c) => modalRef = c} connectedKeywordDOM={keywordDOM} />,
    document.getElementById('root')
  );

  document.querySelector('[type=submit]').addEventListener('click', (event) => {
    event.preventDefault();
    modalRef.setState({visible: true, keyword: keywordDOM.value});
  });
};
