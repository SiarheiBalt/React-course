import { NavLink } from 'react-router-dom'
import React from 'react'

import DialogItem from './DialogItem/dialogItem';
import Message from './Message/Message';
import cl from './Dialogs.module.css'



const Dialogs = (props) => {

    let messagesElement = props.data.messagesData.map( el => <Message message={el.message} />)
    let dialogsElement = props.data.usersData.map( el => <DialogItem data={el} />);

    let newMessageElement = React.createRef();
    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    }

    return (
        <div className={cl.dialogs}>
           <div className={cl.dialogs__items}>
                {dialogsElement}
           </div>
           <div className={cl.messages}>
               {messagesElement}
           </div> 
           <div className={cl.textArea}>
               <button onClick={sendMessage}>Send</button>
               <textarea ref={newMessageElement}></textarea>
           </div>
        </div>
    )
};

export default Dialogs;
