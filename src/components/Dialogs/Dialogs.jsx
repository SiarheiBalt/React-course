import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/dialogItem';
import Message from './Message/Message';
import cl from './Dialogs.module.css'



const Dialogs = (props) => {

    let messagesElement = props.dataMessage.map( el => <Message message={el.message} />)
    let dialogsElement = props.dataUser.map( el => <DialogItem name={el.name} id={el.id} />);
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
