import "./App.css";
import JokeCard from './components/JokeCard';


import React from 'react';
import { connect } from "react-redux";

const App = (props) => {
  return (
    <div className="App">
      <JokeCard setup={props.setup} loading={props.loading} error={props.error} ready={props.ready} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    setup: state.setup,
    error: state.error,
    loading: state.loading,
    ready: state.ready
  };
};

export default connect(mapStateToProps, {})(App);
