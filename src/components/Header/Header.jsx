import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = ({ auth }) => {
  return (
    <HeaderDiv>
      <img
        style={{ width: "50px", height: "50px" }}
        src="https://logodix.com/logo/35420.png"
      ></img>
      <div className="login__block">
        {auth.isAuth ? auth.login : <NavLink to="/Login">Login</NavLink>}
      </div>
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.div`
  grid-area: h;
  background-color: rgb(165, 202, 165);
  display: flex;
  justify-content: space-between;
  .login__block {
    margin: 20px;
  }
  .login__block a {
    color: white;
    text-decoration: auto;
  }
`;
