

const archived = (state = [], action) => {
    switch (action.type) {
      case "SET_ARCHIVED":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default archived;