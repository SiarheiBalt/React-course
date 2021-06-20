import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../../api/api";
import {
  follow,
  setCurrentPage,
  setUsers,
  unfollow,
  setTotalUserCount,
  toogleIsFetching,
  toogleFollowingInProgress,
} from "../../redux/reducer-users";
import { Preloader } from "../Common/Preloader/Preloader";
import Users from "./Users";

class UsersApiComponent extends React.Component {
  componentDidMount() {
    this.props.toogleIsFetching(true);
    getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.toogleIsFetching(false);
      this.props.setUsers(data.items);

      this.props.setTotalUserCount(data.totalCount);
    });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toogleIsFetching(true);
    getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toogleIsFetching(false);
      this.props.setUsers(data.items);
    });
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
          toogleFollowingInProgress={this.props.toogleFollowingInProgress}
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
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUserCount,
  toogleIsFetching,
  toogleFollowingInProgress,
})(UsersApiComponent);

export default UsersContainer;
