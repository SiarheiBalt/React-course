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

const App = () => {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <NavBar />
        <div className="app_wrapper__content">
          <Route path="/Profile" component={Profile} />
          <Route path="/Dialogs" component={Dialogs} />
          <Route path="/News" component={News} />
          <Route path="/Music" component={Music} />
          <Route path="/Setting" component={Setting} />
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App;
