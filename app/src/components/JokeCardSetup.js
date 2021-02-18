import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getJokeSetup } from "../actions/index.js";

const JokeCardSetup = (props) => {
  const { setup, error, loading } = props;

  const handleClick = () => {
    props.getJokeSetup();
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

  return (
    <div>
      <div>
        <h1>Your Daily Joke</h1>
        <h2>{setup}</h2>
        <button onClick={handleClick}>click for delivery</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    setup: state.setup,
    loading: state.loading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getJokeSetup })(JokeCardSetup);
