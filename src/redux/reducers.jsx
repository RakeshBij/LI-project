// reducers.js
const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  files: [],
  geolocation: "",
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FORM_DATA":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
