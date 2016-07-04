const base = require('./base');

module.exports = (error) => base({
  title: 'Failure!',
  body: `
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="text-center">
            <h3>\uD83D\uDC80 BOOOOOOO! \uD83D\uDC80</h3>
            <p>You failed to submit a form!</p>
          </div>
          <p>Error:</p>
          <pre>${decodeURIComponent(error)}</pre>
        </div>
      </div>
    </div>
  `,
});
