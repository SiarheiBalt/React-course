import logo from "./logo.svg";
import "./App.css";

import { Route } from "react-router";
import { Profiler } from "react";
import { BrowserRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className="app_wrapper__content">
          <Route path="/Profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/Dialogs" render={() => <DialogsContainer />} />
          <Route path="/Users" render={() => <UsersContainer />} />
          <Route path="/News" render={() => <News />} />
          <Route path="/Music" render={() => <Music />} />
          <Route path="/Setting" render={() => <Setting />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
