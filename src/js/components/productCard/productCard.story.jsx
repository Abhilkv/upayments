import React from 'react';
import { storiesOf } from '@storybook/react';
import ProductCard from './productCard';

const sampleData = { _id: '62fc9dab69257f89cdb740c6',
  name: 'Cup',
  avatar: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  description: 'Elegant Cup',
  price: 14,
  category: 'Accessories',
  developerEmail: 'karaahmethkn@gmail.com',
  createdAt: '2022-08-17T07:50:03.232Z',
  updatedAt: '2022-08-17T07:50:03.232Z',
  __v: 0 };

storiesOf('ProductCard', module)
  .add('default ProductCard', () => (
    <ProductCard data={sampleData} />
  ));
