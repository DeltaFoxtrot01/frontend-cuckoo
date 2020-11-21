/**
 * Store state definition for the standard component
 */
const StandardReducer = (state = {
  changeHome: false
}, actions) => {
  switch (actions.type){
    case "STANDARD_CHANGE_HOME":
      window.location.href = "/";
      break;
    default:
      state = {
        ...state
      };
  }
  return state;
};

export default StandardReducer;