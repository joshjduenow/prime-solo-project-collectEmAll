

const saved = (state = [], action) => {
    switch (action.type) {
      case "SET_SAVED":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default saved;