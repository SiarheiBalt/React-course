const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";

export let followAC = (userId) => ({ type: FOLLOW, userId });
export let unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export let setUsersAC = (users) => ({ type: SET_USERS, users });
export let setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export let setTotalUserCountAC = (totalCount) => ({
  type: SET_USERS_TOTAL_COUNT,
  totalCount,
});

let initialState = {
  users: [
    //     {
    //       id: 1,
    //       fullName: "Dima",
    //       status: "I am a boss.",
    //       location: { sity: "Minsk", country: "Belarus" },
    //       followed: true,
    //       urlFoto:
    //         "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg",
    //     },
    //     {
    //       id: 2,
    //       fullName: "Stas",
    //       status: "Witam Pa nstwo!",
    //       location: { sity: "Varshava", country: "Polska" },
    //       followed: false,
    //       urlFoto:
    //         "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg",
    //     },
    //     {
    //       id: 3,
    //       fullName: "Vladlen",
    //       status: "I do what I want.",
    //       location: { sity: "Grodno", country: "Belarus" },
    //       followed: true,
    //       urlFoto:
    //         "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg",
    //     },
  ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
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

    default:
      return state;
  }
};

export default usersReducer;
