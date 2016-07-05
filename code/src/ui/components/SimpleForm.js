const { PropTypes, DOM: r } = require('react');

function SimpleForm(props) {
  return r.form(
    {
      method: 'post',
      action: props.actionEndpoint,
      onSubmit: props.onSubmitForm,
    },
    r.h3(
      {},
      'A simple Form'
    ),
    r.div(
      {
        className: `form-group${props.isInvalid ? ' has-error' : ''}`,
      },
      r.label(
        {
          htmlFor: 'text',
          className: 'control-label',
        },
        'Please input some text: '
      ),
      r.input(
        {
          type: 'text',
          name: 'text',
          className: 'form-control',
          ref: props.onMountText,
          value: props.valueText,
          onChange: props.onChangeText,
        }
      )
    ),
    r.button(
      {
        type: 'submit',
        className: 'btn btn-primary',
        disabled: props.isInvalid,
      },
      'SUBMIT'
    )
  );
}

SimpleForm.displayName = 'SimpleForm';

SimpleForm.propTypes = {
  actionEndpoint: PropTypes.string.isRequired,
  valueText: PropTypes.string,
  isInvalid: PropTypes.bool,
  onSubmitForm: PropTypes.func,
  onChangeText: PropTypes.func,
  onMountText: PropTypes.func,
};

module.exports = SimpleForm;
