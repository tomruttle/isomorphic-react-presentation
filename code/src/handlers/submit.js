const validValues = ['123', 'test', 'form'];

const testBody = (body) => {
  const text = String(body.text).trim();

  if (text && validValues.includes(text)) {
    const success = encodeURIComponent(JSON.stringify({ text }));
    return {
      url: `/success?formData=${success}`,
      status: 201,
    };
  }

  const error = text === '' ? 'text is required!' : `'${text}' is not valid!`;
  const urlSafeError = encodeURIComponent(error);
  return {
    url: `/failure?error=${urlSafeError}`,
    status: 400,
  };
};

const getRefreshHeaders = (req, res) => {
  const { url, status } = testBody(req.body);
  return res.status(status).set('Refresh', `0;url=${url}`).send();
};

const contentNegotiation = (req, res) => {
  const { url, status } = testBody(req.body);

  switch (req.headers['content-type']) {
    case 'application/x-www-form-urlencoded':
      return res.redirect(status, url);
    case 'application/json':
      return res.status(status).send();
  }
};

module.exports = contentNegotiation;

module.exports.validValues = validValues;
