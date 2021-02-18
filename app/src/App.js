import "./App.css";
import JokeCard from "./components/JokeCard";

import React from "react";
import { connect } from "react-redux";

const App = () => {
  return (
    <div className="App">
      <JokeCard />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    setup: state.setup,
    error: state.error,
    loading: state.loading,
    ready: state.ready,
  };
};

export default connect(mapStateToProps, {})(App);
