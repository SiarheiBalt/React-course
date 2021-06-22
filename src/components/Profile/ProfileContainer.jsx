import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getUserProfileThunk } from "../../redux/reducer-profilePages";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 17526;
    this.props.getUserProfileThunk(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return { profile: state.profilePage.profile };
};

export default connect(mapStateToProps, {
  getUserProfileThunk,
})(withRouter(ProfileContainer));
