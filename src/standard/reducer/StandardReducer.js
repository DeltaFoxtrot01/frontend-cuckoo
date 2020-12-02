/**
 * Store state definition for the standard component
 */
const StandardReducer = (state = {
  changeHome: false,
  messages: [],
  displayMessage: false
}, actions) => {
  switch (actions.type){
    case "STANDARD_CHANGE_HOME":
      window.location.href = "/";
      break;
    case "STANDARD_NOTIFICATION":
      state = {
        ...state,
        displayMessage: true
      };
      state.messages.push(actions.message);
      break;
    case "STANDARD_DISPLAY_MESSAGE_OFF":
      state = {
        ...state,
        displayMessage: false,
        messages: []
      };
      break;
    default:
      state = {
        ...state
      };
  }
  return state;
};

export default StandardReducer;