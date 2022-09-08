import React from 'react';
import HomeScreen from '../containers/home';
import Layout from '../layout/mainLayout';

const Home = (props) => (
  <Layout>
    <HomeScreen props={props} />
  </Layout>
);

export default Home;
