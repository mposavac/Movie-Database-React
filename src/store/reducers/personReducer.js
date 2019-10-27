const initState = {
  personData: undefined,
  personCredits: undefined,
  fullBioShown: false
};

const personReducer = (state = initState, action) => {
  switch (action.type) {
    case "PERSON_RESPONSE":
      return { ...state, personData: action.data };
    case "PERSON_KNOWNFOR":
      return { ...state, personCredits: action.credits };
    case "SHOW_BIO":
      return { ...state, fullBioShown: true };
    case "HIDE_BIO":
      return { ...state, fullBioShown: false };
    case "SET_DEFAULT":
      return initState;
    default:
      return state;
  }
};
export default personReducer;
