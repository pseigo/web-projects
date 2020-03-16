import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import GitHubCards from './components/GitHubCards';

const App = ({ title }) => (
  <div>
    <h1>{title}</h1>
    <GitHubCards />
  </div>
);

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
