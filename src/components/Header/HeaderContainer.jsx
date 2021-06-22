import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import { getMeAuthThunk } from "./../../redux/reducer-auth";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getMeAuthThunk();
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { getMeAuthThunk })(HeaderContainer);
