import { NavLink } from 'react-router-dom'
import cl from './Dialogs.module.css'

const DialogsItem = (props) => {
    return <div className={cl.dialog}>
        <NavLink to={"/Dialogs/"+ props.id} activeClassName={cl.activ}>{props.name}</NavLink></div>
}
const Message = (props) => {
    return <div className={cl.message}>{props.message}</div>
}
const Dialogs = () => {
    let usersData = [
        {id: 1, name: 'Dimon',},
        {id: 2, name: 'Kate',},
        {id: 3, name: 'Den',},
        {id: 4, name: 'Victor',},
    ]
    let messagesData=[
        {id: 1, message: 'Witam'},
        {id: 1, message: "Wats up!"},
        {id: 1, message: 'Iyou'},
        {id: 1, message: 'Zdaroy'},
    ]
    
    let dialogsElement = usersData.map( el => <DialogsItem name={el.name} id={el.id} />);
    let messagesElement = messagesData.map( el => <Message message={el.message} />)

    return (
        <div className={cl.dialogs}>
           <div className={cl.dialogs__items}>
                {dialogsElement}
           </div>
           <div className={cl.messages}>
               {messagesElement}
           </div> 
        </div>
    )
};

export default Dialogs;
