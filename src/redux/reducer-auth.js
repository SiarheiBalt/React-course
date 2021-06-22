import { authApi } from "../api/api";

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

export const getMeAuthThunk = () => {
  return (dispatch) => {
    authApi.me().then((data) => {
      data.resultCode === 0 && dispatch(setAuthUserData(data.data));
    });
  };
};

export default authReducer;
