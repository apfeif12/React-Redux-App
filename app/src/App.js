import "./App.css";
import JokeCardSetup from './components/JokeCardSetup';
import JokeCardDelivery from './components/JokeCardDelivery';

import React from 'react';
import { connect } from "react-redux";

const App = (props) => {
  return (
    <div className="App">
      <JokeCardSetup setup={props.setup} loading={props.loading} error={props.error} />
      <JokeCardDelivery delivery={props.delivery} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    setup: state.setup,
    delivery: state.delivery,
    error: state.error,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, {})(App);
