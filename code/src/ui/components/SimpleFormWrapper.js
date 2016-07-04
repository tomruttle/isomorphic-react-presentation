const React = require('react');

const SimpleForm = require('./SimpleForm');

const PropTypes = React.PropTypes;

module.exports = React.createClass({
  displayName: 'SimpleFormWrapper',

  propTypes: {
    actionEndpoint: PropTypes.string.isRequired,
    validValues: PropTypes.arrayOf(PropTypes.string).isRequired,
    defaultValue: PropTypes.string,
  },

  getInitialState() {
    return {
      valueText: this.props.defaultValue || '',
      isInvalid: false,
    };
  },

  onSubmitForm(e) {
    e.preventDefault();

    if (this.validateForm(this.state.valueText)) {
      return null;
    }

    const body = JSON.stringify({ text: this.state.valueText });

    const fetchOpts = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    };

    return fetch(this.props.actionEndpoint, fetchOpts)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Could not submit response. Status: ${res.status}`);
        }
        window.location.href = `/success?formData=${encodeURIComponent(body)}`;
      })
      .catch((err) => {
        window.location.href = `/failure?error=${encodeURIComponent(err)}`;
      });
  },

  onChangeText(e) {
    const valueText = e.target.value;
    const isInvalid = this.validateForm(valueText);
    return this.setState({ valueText, isInvalid });
  },

  onMountText(input) {
    if (input) {
      const valueText = input.value;
      const isInvalid = this.validateForm(valueText);
      this.setState({ valueText, isInvalid });
      input.focus();
    }
  },

  validateForm(text) {
    return !text || this.props.validValues.indexOf(text) === -1;
  },

  render() {
    return React.createElement(SimpleForm, {
      actionEndpoint: this.props.actionEndpoint,
      valueText: this.state.valueText,
      isInvalid: this.state.isInvalid,
      onMountText: this.onMountText,
      onSubmitForm: this.onSubmitForm,
      onChangeText: this.onChangeText,
    });
  },
});
