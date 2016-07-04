const base = require('./base');

module.exports = ({ markup, props }) => base({
  title: 'A Simple Form',
  body: `
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div id="app">${markup}</div>
        </div>
      </div>
    </div>
    ${props ? `<div id="props" data-props=${JSON.stringify(props)} ></div>` : ''}
    <script src="https://fb.me/react-15.1.0.js"></script>
    <script src="https://fb.me/react-dom-15.1.0.js"></script>
    <script src="/dist/client.js"></script>
  `,
});
