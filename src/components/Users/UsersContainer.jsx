import React from "react";
import { connect } from "react-redux";

import {
  setCurrentPage,
  getUsersThunkCreator,
  followThunk,
  unfollowThunk,
} from "../../redux/reducer-users";
import { Preloader } from "../Common/Preloader/Preloader";
import Users from "./Users";

class UsersApiComponent extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          onPageChanged={this.onPageChanged}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          followingInProgress={this.props.followingInProgress}
          followThunk={this.props.followThunk}
          unfollowThunk={this.props.unfollowThunk}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

const UsersContainer = connect(mapStateToProps, {
  setCurrentPage,
  getUsersThunkCreator,
  followThunk,
  unfollowThunk,
})(UsersApiComponent);

export default UsersContainer;
