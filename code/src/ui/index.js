const React = require('react');
const ReactDOM = require('react-dom');

const SimpleFormWrapper = require('./components/SimpleFormWrapper');

const container = document.getElementById('app');
const dataContainer = document.getElementById('props');

const { props } = dataContainer.dataset;
const formEl = React.createElement(SimpleFormWrapper, JSON.parse(props));

const renderForm = () =>
  ReactDOM.render(formEl, container, () => { console.log('Loaded JS'); });

setTimeout(renderForm, 2000);
