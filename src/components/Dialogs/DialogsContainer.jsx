import { connect } from "react-redux"
import { onMessageChangeActionCreator, sendMessageActionCreator } from "../../redux/reducer-messagesPages"
import Dialogs from "./Dialogs"

// const DialogsContainer = (props) => {
//     let state = props.store.getState().messagesPages

//     let sendMessage = () => {
//         props.store.dispatch(sendMessageActionCreator())     
//     }
//     let onMessageChange = (text) => {
//         props.store.dispatch(onMessageChangeActionCreator(text))
//     }

//     return (
//         <Dialogs messagesData={state.messagesData}
//         usersData={state.usersData}
//         sendMessage={sendMessage} 
//         updateNewMessageText={onMessageChange}
//         newMessageText={state.newMessageText}/>
//     )
// }
const mapStateToProps = (state) => {
    return {
        messagesPages: state.messagesPages
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateNewMessageText: (text) => {
            dispatch(onMessageChangeActionCreator(text))
        },
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;