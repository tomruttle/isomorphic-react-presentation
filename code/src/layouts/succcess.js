const base = require('./base');

module.exports = (formData) => base({
  title: 'Success!',
  body: `
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="text-center">
            <h3>\uD83C\uDF89 Congratulations! \uD83C\uDF89</h3>
            <p>You submitted a form!</p>
          </div>
          <p>Data:</p>
          <pre>${decodeURIComponent(formData)}</pre>
        </div>
      </div>
    </div
  `,
});
