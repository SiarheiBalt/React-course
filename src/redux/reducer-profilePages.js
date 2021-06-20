const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

export let addPostActinCreator = () => ({ type: ADD_POST });
export let updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export let setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

let initialState = {
  postsData: [
    { id: 1, message: "Hi, wat's up!", like: 12 },
    { id: 2, message: "This is my first props!", like: 15 },
  ],
  newPostText: "Witam!",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    return {
      ...state,
      newPostText: "",
      postsData: [
        ...state.postsData,
        { id: state.postsData.length + 1, message: state.newPostText },
      ],
    };
  }
  if (action.type === UPDATE_NEW_POST_TEXT) {
    return {
      ...state,
      newPostText: action.newText,
    };
  }
  if (action.type === SET_USER_PROFILE) {
    return {
      ...state,
      profile: action.profile,
    };
  }

  return state;
};

export default profileReducer;
