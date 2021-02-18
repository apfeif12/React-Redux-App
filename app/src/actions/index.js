import axios from 'axios';

export const FETCH_JOKE_LOADING = "FETCH_JOKE_LOADING";
export const FETCH_JOKE_SETUP = "FETCH_JOKE_SETUP";
export const FETCH_JOKE_DELIVERY = "FETCH_JOKE_DELIVERY";
export const FETCH_JOKE_FAIL = "FETCH_JOKE_FAIL";


export const getJokeSetup = () => dispatch => {
  dispatch(fetchJokeLoading());

  axios
      .get('https://v2.jokeapi.dev/joke/Any?type=twopart')
      .then(res=>{
          dispatch(fetchJokeSetup(res.data.setup));
          dispatch(fetchJokeDelivery(res.data.delivery));
          console.log("RESULT", res.data)
      })
      .catch(err=>{
          dispatch(fetchJokeFail(err.error));
      });
}

export const fetchJokeLoading = () => {
  return({ type:FETCH_JOKE_LOADING});
}

export const fetchJokeSetup = (setup) => {
  return({type:FETCH_JOKE_SETUP, payload:setup});
}

export const fetchJokeDelivery = (delivery) => {
  return({type:FETCH_JOKE_DELIVERY, payload:delivery});
}

export const fetchJokeFail = (error) => {
  return({type:FETCH_JOKE_FAIL, payload:error});
}