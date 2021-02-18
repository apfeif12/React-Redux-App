import React from "react";
import { connect } from "react-redux";

const JokeCardDelivery = (state) => {
  return (
    <div>
      <div>
        <h2>{state.delivery}</h2>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    delivery: state.delivery,
  };
};

export default connect(mapStateToProps)(JokeCardDelivery);
