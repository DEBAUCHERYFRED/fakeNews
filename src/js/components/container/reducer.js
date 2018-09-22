const newsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return [...state]

    case "FETCH_SUCESS":
      return [...state, action.data]

    case "FETCH_FAIL":
      return action.error


    default:
      return state
  }
};

export default newsReducer;
