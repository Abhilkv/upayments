import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const InputBox = (props) => {
  const { fieldName, inputHandler, placeHolder, type } = props;
  const FieldType = type === 'text' ? 'input' : 'textarea';

  const handleInput = (event) => {
    const { value, name } = event.target;
    inputHandler(value, name);
  };

  return (
    <FieldType
      name={fieldName}
      type={type}
      onChange={handleInput}
      placeholder={placeHolder}
      className={`${styles.inputBox} ${type === 'address' && styles.description}`}
    />
  );
};

InputBox.propTypes = {
  fieldName: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  inputHandler: PropTypes.func.isRequired,
  type: PropTypes.string
};

InputBox.defaultProps = {
  type: 'text'
};

export default InputBox;
