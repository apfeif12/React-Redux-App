import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getJokeSetup,
  fetchJokeDelivery,
  fetchJokeReady,
} from "../actions/index.js";

const JokeCard = (props) => {
  const { setup, error, loading, ready, delivery } = props;

  const handleClickSetup = () => {
    props.getJokeSetup();
  };

  const handleClickDelivery = (e) => {
    props.fetchJokeDelivery();
  };

  useEffect(() => {
    props.getJokeSetup();
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (loading) {
    return <h2>Loading your joke, hang on a sec</h2>;
  }

  if (ready === true) {
    console.log("delivery", delivery);
    return <h2>{delivery}</h2>;
  }

  return (
    <div>
      <div>
        <h1>Your Daily Joke</h1>
        <button onClick={handleClickSetup}>NEW JOKE</button>
        <h2>{setup}</h2>
        <button onClick={handleClickDelivery}>PUNCHLINE</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    setup: state.setup,
    delivery: state.delivery,
    loading: state.loading,
    error: state.error,
    ready: state.ready,
  };
};

export default connect(mapStateToProps, {
  getJokeSetup,
  fetchJokeDelivery,
  fetchJokeReady,
})(JokeCard);
