import React from "react";
import { connect } from "react-redux";
import { getJokeSetup, fetchJokeReady } from "../actions/index.js";

const JokeCard = (props) => {
  const { setup, error, loading, ready, delivery } = props;

  const handleClickSetup = (e) => {
    e.preventDefault();
    props.getJokeSetup();
  };

  const handleClickDelivery = (e) => {
    props.fetchJokeReady();
  };

  const handleLoading = () => {
    if (loading) {
      return <div>---Loading your joke, hang on a sec---</div>;
    }
  };

  const handleReadyCheck = () => {
    if (ready === true) {
      console.log("deliveryJC", delivery);
      return <h1>{delivery}</h1>;
    }
  };

  if (error) {
    console.log("error", error);
    return <h1> Error: {error.message}</h1>;
  }

  return (
    <div>
      <div>
        <h1>Joke Machine</h1>
        <button onClick={handleClickSetup}>NEW JOKE</button>
        <div>{handleLoading()}</div>
        <div>{setup}</div>
        <button onClick={handleClickDelivery}>PUNCHLINE</button>
        <div>{handleReadyCheck()}</div>
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
  fetchJokeReady,
})(JokeCard);
