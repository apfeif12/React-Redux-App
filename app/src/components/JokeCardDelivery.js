// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { getJoke } from "../actions/index.js";

// const JokeCardDelivery = (props) => {
//   const { delivery, ready } = props;

//   const handleClick = () => {
//     props.getJoke();

//   };
//   useEffect(() => {
//     props.getJoke();
//   }, []);

//   if (ready === false) {
//     return <button onClick={handleClick}>Hit me with it</button>;
//   }

//   if (ready === true) {
//     return <h2>{delivery}</h2>;
//   }

//   return <div></div>;
// };

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     delivery: state.delivery,
//     ready: state.ready,
//   };
// };

// export default connect(mapStateToProps, { getJokeDelivery })(JokeCardDelivery);
