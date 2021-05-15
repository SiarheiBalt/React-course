import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router';
import { Profiler } from 'react';
import { BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <NavBar sideBar={props.sideBar}/>
        <div className="app_wrapper__content">
          <Route path="/Profile" render={() => <Profile profilePage={props.profilePage} dispatch={props.dispatch}/>} />
          <Route path="/Dialogs" render={() => <Dialogs  messagesPages={props.messagesPages} dispatch={props.dispatch}/>} />
          <Route path="/News" render={() => <News />} />
          <Route path="/Music" render={() => <Music />} />
          <Route path="/Setting" render={() => <Setting />} />
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App;