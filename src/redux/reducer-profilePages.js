const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export let addPostActinCreator = () => ({ type: ADD_POST });
export let updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text, });

let initialState = {
    postsData: [
        { id: 1, message: 'Hi, wat\'s up!', like: 12, },
        { id: 2, message: 'This is my first props!', like: 15, },
    ],
    newPostText: "Witam!",
}

const profileReducer = (state = initialState, action) => {
    
    if (action.type === ADD_POST) {
        let obj = {
            id: state.postsData.length + 1,
            message: state.newPostText,
        }
        state.postsData.push(obj);
        state.newPostText = '';
    }
    if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    }
    return state;
};

export default profileReducer;