import React from 'react'
import cl from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
    let postsItem = props.data.map( el =>  <Post message={el.message} like={el.like}/>)
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        props.updateNewPostText(newPostElement.current.value);
    }

    return <div className={cl.posts__block}>
        <h4>My post</h4>
            <div><textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/></div>
            <div><button onClick={addPost} className={cl.button}>Add post</button></div>
            <div className={cl.posts}>        
                {postsItem}             
            </div>           
        </div>
}

export default MyPosts;