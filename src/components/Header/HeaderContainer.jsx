import Header from "./Header";
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "./../../redux/reducer-auth";
import { getMeApi } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    getMeApi().then((data) => {
      data.resultCode === 0 && this.props.setAuthUserData(data.data);
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
