const SET_USER_DATA = "SET_USER_DATA";

let imitialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

export let setAuthUserData = (data) => ({
  type: SET_USER_DATA,
  data,
});

const authReducer = (state = imitialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
        userId: action.data.id,
      };

    default:
      return state;
  }
};

export default authReducer;
