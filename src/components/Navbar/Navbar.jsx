import cl from './Navbar.module.css'

const NavBar = () => {
    return <nav className={cl.nav}>
        <div className={cl.item}><a href="/Profile">Profile</a></div>
        <div className={'${cl.item} ${cl.activ}'}><a href="/Dialogs">Messages</a></div>
        <div className={cl.item}><a href="/News">News</a></div>
        <div className={cl.item}><a href="/Music">Music</a></div>
        <div className={cl.item}><a href="/Setting">Settings</a></div>
    </nav>
}

export default NavBar;