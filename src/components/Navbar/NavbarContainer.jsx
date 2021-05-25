import { connect } from "react-redux"
import NavBar from "./Navbar"

// let NavbarContainer = () => {
//     let state = props.store.getState().sideBar
    
//     return (
//         <NavBar sideBar={state}/>
//     )
// }
const mapStateToProps = (state) => {
    return {
        sideBar: state.sideBar
    }
}
const mapDispatchToProps = () => {
    return {}
}
const NavbarContainer = connect(mapStateToProps, mapDispatchToProps) (NavBar)

export default NavbarContainer;