import { usersApi } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const TOOGLE_IS_FOLLOWING_PROGRESS = "TOOGLE_IS_FOLLOWING_PROGRESS";

export let follow = (userId) => ({ type: FOLLOW, userId });
export let unfollow = (userId) => ({ type: UNFOLLOW, userId });
export let setUsers = (users) => ({ type: SET_USERS, users });
export let setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export let setTotalUserCount = (totalCount) => ({
  type: SET_USERS_TOTAL_COUNT,
  totalCount,
});
export let toogleIsFetching = (isFetching) => ({
  type: TOOGLE_IS_FETCHING,
  isFetching,
});
export let toogleFollowingInProgress = (isFetching, userId) => ({
  type: TOOGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});
let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.userId) return { ...el, followed: true };
          return el;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.userId) return { ...el, followed: false };
          return el;
        }),
      };

    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_USERS_TOTAL_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalCount / 100,
      };
    }
    case TOOGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case TOOGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }

    default:
      return state;
  }
};

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toogleIsFetching(true));
    usersApi.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toogleIsFetching(false));
      dispatch(setUsers(data.items));

      dispatch(setTotalUserCount(data.totalCount));
    });
  };
};

export const followThunk = (userId) => {
  return (dispatch) => {
    dispatch(toogleFollowingInProgress(true, userId));
    usersApi.follow(userId).then((data) => {
      data.resultCode == 0 && dispatch(follow(userId));
      dispatch(toogleFollowingInProgress(false, userId));
    });
  };
};

export const unfollowThunk = (userId) => {
  return (dispatch) => {
    dispatch(toogleFollowingInProgress(true, userId));
    usersApi.unfollow(userId).then((data) => {
      data.resultCode == 0 && dispatch(unfollow(userId));
      dispatch(toogleFollowingInProgress(false, userId));
    });
  };
};

export default usersReducer;
