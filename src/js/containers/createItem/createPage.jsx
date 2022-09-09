import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { InputBox, Button, Loader } from 'app/components';
import { email } from '../../env';

import styles from './styles.scss';

const CreatePage = (props) => {
  const history = useHistory();
  const { categories, getCategories, addProduct, submitResponse, loading } = props;
  const [inputDetaisls, setDetails] = useState({ name: '', description: '', avatar: '', category: '', price: '' });

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (submitResponse === 'Success') {
      history.push('/home');
    } else if (submitResponse === 'Failed') {
      alert('Failed to add product');
    }
  }, [submitResponse]);

  const setInput = (value, name) => {
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const sumbitDetails = () => {
    addProduct({ ...inputDetaisls, developerEmail: email });
  };

  const fields = [
    {
      name: 'name',
      type: 'text',
      handlerFunction: setInput,
      placeHolder: 'Product name'
    },
    {
      name: 'description',
      type: 'address',
      handlerFunction: setInput,
      placeHolder: 'Description'
    },
    {
      name: 'avatar',
      type: 'text',
      handlerFunction: setInput,
      placeHolder: 'Image URL'
    }
  ];


  return (
    (<>
      {loading ? <Loader /> : (
        <div className={styles.container}>
          <h2 className={styles.headline}>Create Product</h2>
          {fields.map((field) => (
            <InputBox
              fieldName={field.name}
              type={field.type}
              inputHandler={field.handlerFunction}
              placeHolder={field.placeHolder}
            />
          ))}
          <select value={inputDetaisls.category} onChange={(e) => { setInput(e.target.value, 'category'); }} name="category" id="category" className={styles.category}>
            <option value="" className={styles.optionText}>Category</option>
            {categories.length > 0 && categories.map((item) => (
              <option value={item.name} className={styles.optionText} key={item.name}>{item.name}</option>
            ))}
          </select>
          <InputBox
            fieldName="price"
            type="text"
            inputHandler={setInput}
            placeHolder="Price"
          />
          <Button label="SUBMIT" onClick={sumbitDetails} />
        </div>
      )}
     </>)
  );
};


CreatePage.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  getCategories: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  submitResponse: PropTypes.string,
  loading: PropTypes.bool
};

CreatePage.defaultProps = {
  categories: [],
  submitResponse: '',
  loading: false
};

export default CreatePage;
