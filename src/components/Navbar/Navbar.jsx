import { NavLink } from 'react-router-dom';
import cl from './Navbar.module.css'

const NavBar = () => {
    return <nav className={cl.nav}>
        <div className={cl.item}><NavLink to="/Profile" activeClassName={cl.activ}>Profile</NavLink></div>
        <div className={cl.item}><NavLink to="/Dialogs" activeClassName={cl.activ}>Messages</NavLink></div>
        <div className={cl.item}><NavLink to="/News" activeClassName={cl.activ}>News</NavLink></div>
        <div className={cl.item}><NavLink to="/Music" activeClassName={cl.activ}>Music</NavLink></div>
        <div className={cl.item}><NavLink to="/Setting" activeClassName={cl.activ}>Settings</NavLink></div>
    </nav>
}

export default NavBar;