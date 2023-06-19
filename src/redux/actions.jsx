// Action Types
export const UPDATE_FORM_DATA = "UPDATE_FORM_DATA";
export const SUBMIT_FORM = "SUBMIT_FORM";

// Action Creators
export const updateFormData = (formData) => {
  return {
    type: UPDATE_FORM_DATA,
    payload: formData,
  };
};

export const submitForm = () => {
  return {
    type: SUBMIT_FORM,
  };
};
