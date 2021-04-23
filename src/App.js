import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NavBar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className="app__wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  )
}
 
export default App;
