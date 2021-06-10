import { connect } from "react-redux";
import {
  onMessageChange,
  sendMessage,
} from "../../redux/reducer-messagesPages";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    messagesPages: state.messagesPages,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     sendMessage: () => {
//       dispatch(sendMessageActionCreator());
//     },
//     updateNewMessageText: (text) => {
//       dispatch(sendMessageActionCreator(text));
//     },
//   };
// };
const DialogsContainer = connect(mapStateToProps, {
  onMessageChange,
  sendMessage,
})(Dialogs);

export default DialogsContainer;
