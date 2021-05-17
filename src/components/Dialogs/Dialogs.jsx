import { NavLink } from 'react-router-dom'
import React from 'react'

import DialogItem from './DialogItem/dialogItem';
import Message from './Message/Message';
import cl from './Dialogs.module.css'
import { onMessageChangeActionCreator, sendMessageActionCreator } from '../../redux/reducer-messagesPages';



const Dialogs = (props) => {  

    let messagesElement = props.messagesPages.messagesData.map( el => <Message message={el.message} />)
    let dialogsElement = props.messagesPages.usersData.map( el => <DialogItem data={el} />);

    let newMessageElement = React.createRef();
    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())     
    }
    let onMessageChange = () => {
        props.dispatch(onMessageChangeActionCreator(newMessageElement.current.value))
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
               <textarea placeholder={"Enter your message."} ref={newMessageElement} onChange={onMessageChange} value={props.messagesPages.newMessageText}></textarea>
           </div>
        </div>
    )
};

export default Dialogs;
