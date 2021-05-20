import { addPostActinCreator, updateNewPostActionCreator } from "../../../redux/reducer-profilePages"
import MyPosts from "./MyPosts"

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActinCreator())
    }
    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostActionCreator(text))
    }
    return (
        <MyPosts addPost={addPost} updateNewPostText={onPostChange}
        postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText}/>
    )
} 

export default MyPostsContainer;