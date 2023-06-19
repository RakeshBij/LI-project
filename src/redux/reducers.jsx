const initialState = {
  name: "",
  email: "",
  phone_number: "",
  address_1: "",
  address_2: "",
  city: "",
  state: "",
  pincode: "",
  country: "",
  geolocation: "",
  single_file: "",
  multi_file: [],
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
