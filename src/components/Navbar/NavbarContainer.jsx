import NavBar from "./Navbar"

let NavbarContainer = (props) => {
    let state = props.store.getState().sideBar
    
    return (
        <NavBar sideBar={state}/>
    )
}

export default NavbarContainer;