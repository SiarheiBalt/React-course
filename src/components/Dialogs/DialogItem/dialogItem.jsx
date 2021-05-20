import {NavLink} from "react-router-dom"
import cl from './../Dialogs.module.css'



const DialogItem = (props) => {
    return <div className={cl.dialog}><img src={props.data.ava} />
        <NavLink to={"/Dialogs/"+ props.data.id} activeClassName={cl.activ}>{props.data.name}</NavLink></div>
}



export default DialogItem;