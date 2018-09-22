import axios from "axios"
import {
  fetchData,
  fetchFail,
  fetchSucess
} from "./actions"

import {
  FETCH_DATA,
  FETCH_FAIL,
  FETCH_SUCESS
} from "./constants";

const apiKey = "b06098d6a11e45bd861962193937bdec"
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

export default function getData(){
  return function(dispatch) {
    dispatch(fetchData());
    return axios.get(url).then(data => {
      dispatch(fetchSucess(data.data.articles));
    }).catch(error => {
      dispatch(fetchFail(error));
    })
  }
};
