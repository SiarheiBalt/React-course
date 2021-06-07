import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setUsersAC,
  unfollowAC,
  setTotalUserCountAC,
} from "../../redux/reducer-users";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalUserCount: (totalCount) => {
      dispatch(setTotalUserCountAC(totalCount));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
