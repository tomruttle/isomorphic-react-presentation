const React = require('react');
const ReactDOM = require('react-dom/server');
const express = require('express');
const bodyParser = require('body-parser');

const success = require('./src/layouts/succcess');
const failure = require('./src/layouts/failure');
const render = require('./src/layouts/main');

const submit = require('./src/handlers/submit');

const SimpleFormWrapper = require('./src/ui/components/SimpleFormWrapper');

const PORT = 3000;
const validValues = submit.validValues;

function renderForm(req, res) {
  const formProps = {
    actionEndpoint: '/submit',
    defaultValue: validValues[0],
    validValues,
  };

  const form = React.createElement(SimpleFormWrapper, formProps);
  const markup = ReactDOM.renderToString(form);
  return res.send(render({ markup, props: formProps }));
}

express()
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .get('/form', renderForm)
  .get('/success', (req, res) => res.send(success(req.query.formData)))
  .get('/failure', (req, res) => res.send(failure(req.query.error)))
  .post('/submit', submit)
  .use('/dist', express.static('dist'))
  .listen(PORT, () => { process.stdout.write(`App listening on port ${PORT}\n`); });
