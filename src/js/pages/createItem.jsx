import React from 'react';
import CreateItem from '../containers/createItem';
import Layout from '../layout/mainLayout';

const Home = (props) => (
  <Layout>
    <CreateItem {...props} />
  </Layout>
);

export default Home;
