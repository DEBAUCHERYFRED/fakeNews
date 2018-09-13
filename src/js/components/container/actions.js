export const fetchData = function() {
  return {
    type:"FETCH_DATA"
  }
};

export const fetchFail = function(error){
  return {
    type:"FETCH_FAIL",
    error
  }
};

export const fetchSucess = function(data){
  return {
    type:"FETCH_SUCESS",
    data
  }
};
