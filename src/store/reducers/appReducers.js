import actionTypes from "../action/actionTypes";

const initState = {
  banner: [],
};

export const appReducers = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME: 
      return {
        ...state,
        banner:
          action.homeData?.find((item) => item.sectionType === "banner")
            .items || null,
      };
    default:
      return state;
  }
};
