const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export let sendMessageActionCreator = () => ({ type: ADD_MESSAGE });
export let onMessageChangeActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text });

let initialState = {
    messagesData: [
        { id: 1, message: 'Witam' },
        { id: 2, message: "Wats up!", ava: 'https://image.flaticon.com/icons/png/512/194/194938.png' },
        { id: 3, message: 'Iyou' },
        { id: 4, message: 'Zdaroy', ava: 'https://image.flaticon.com/icons/png/512/194/194938.png' },
    ],
    usersData: [
        { id: 1, name: 'Dimon', ava: 'https://image.flaticon.com/icons/png/512/147/147144.png', },
        { id: 2, name: 'Kate', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvke8Pr8T6xz52yM8v0ieg0oQy9L9SwfkO4hy4IKoRpxyQBKSGUWto7sWmzj9YYgm1VzU&usqp=CAU', },
        { id: 3, name: 'Den', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9lQBVWy47_jjqaEg-Aib-6DhFncAx__cXIr1ffflbO7Ijt3EGw3oQHP2s5R4_XnDqzBI&usqp=CAU', },
        { id: 4, name: 'Victor', ava: 'https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png', },
    ],
    newMessageText: "",
}

const dialogsReducer = (state = initialState, action) => {
    {
        if (action.type === ADD_MESSAGE) {
            let obj = {
                id: state.messagesData.length + 1,
                message: state.newMessageText,
            }
            let stateCopy = { ...state }
            stateCopy.messagesData.push(obj);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
    } {
        if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            let stateCopy = {...state};
            stateCopy.newMessageText = {...state.newMessageText}
            stateCopy.newMessageText = action.newMessage;
            return stateCopy;
        }
    }
    return state;
};

export default dialogsReducer;