import React from 'react'
import { addPostActinCreator, updateNewPostActionCreator } from '../../../redux/reducer-profilePages'
import cl from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
    
    let postsItem = props.postsData.map( el =>  <Post message={el.message} like={el.like}/>)
    let newPostElement = React.createRef();
    
    
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return <div className={cl.posts__block}>
        <h4>My post</h4>
            <div><textarea ref={newPostElement} onChange={onPostChange} 
            value={props.newPostText}/></div>
            <div><button onClick={props.addPost} className={cl.button}>Add post</button></div>
            <div className={cl.posts}>        
                {postsItem}             
            </div>           
        </div>
}

export default MyPosts;