import dialogsReducer from "./reducer-messagesPages";
import profileReducer from "./reducer-profilePages";
import sideBarReducer from "./reducer-sideBar";

export let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Hi, wat\'s up!', like: 12, },
                { id: 2, message: 'This is my first props!', like: 15, },
            ],
            newPostText: "Witam!",
        },
        messagesPages: {
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
        },
        sideBar: {
            friends:
                [
                    { id: 1, name: 'Pavel', ava: 'https://icons-for-free.com/iconfiles/png/512/avatar-1320568024619304547.png' },
                    { id: 2, name: 'Sveta', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1bF8wUsfDaLwvhCLgAk15l_FUNjBA36PPzw&usqp=CAU' },
                    { id: 3, name: 'Jony', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJngn-8oC0el7qQjSPyUlDvY2BHtacoVVpA&usqp=CAU' },
                ]
            },
    },
    _callSubscriber() {
        console.log('Заглушка');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.messagesPages = dialogsReducer(this.getState().messagesPages, action);
        this._state.profilePage = profileReducer(this.getState().profilePage, action)
        this._state.sideBar = sideBarReducer(this.getState().sideBar, action)

        this._callSubscriber(this._state);
    }
}

window.store = store;