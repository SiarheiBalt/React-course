import { onMessageChangeActionCreator, sendMessageActionCreator } from "../../redux/reducer-messagesPages"
import Dialogs from "./Dialogs"

const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPages

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())     
    }
    let onMessageChange = (text) => {
        props.store.dispatch(onMessageChangeActionCreator(text))
    }

    return (
        <Dialogs messagesData={state.messagesData}
        usersData={state.usersData}
        sendMessage={sendMessage} 
        updateNewMessageText={onMessageChange}
        newMessageText={state.newMessageText}/>
    )
}

export default DialogsContainer;