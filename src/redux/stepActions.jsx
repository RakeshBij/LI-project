// Action Types
export const NEXT_STEP = "NEXT_STEP";
export const PREVIOUS_STEP = "PREVIOUS_STEP";

// Action Creators
export const nextStep = () => {
  return {
    type: NEXT_STEP,
  };
};

export const previousStep = () => {
  return {
    type: PREVIOUS_STEP,
  };
};
