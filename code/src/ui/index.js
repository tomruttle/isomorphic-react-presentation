const React = require('react');
const { render } = require('react-dom');

const SimpleFormWrapper = require('./components/SimpleFormWrapper');

const container = document.getElementById('app');
const dataContainer = document.getElementById('props');

const props = dataContainer.dataset.props;
const form = React.createElement(SimpleFormWrapper, JSON.parse(props));

const renderForm = () =>
  render(form, container, () => { console.log('Loaded JS'); });

setTimeout(renderForm, 2000);
