import React from 'react'
import cl from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
    
    let postsItem = props.profilePage.postsData.map( el =>  <Post message={el.message} like={el.like}/>)
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }

    let onPostChange = () => {
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: newPostElement.current.value})
    }

    return <div className={cl.posts__block}>
        <h4>My post</h4>
            <div><textarea ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPostText}/></div>
            <div><button onClick={addPost} className={cl.button}>Add post</button></div>
            <div className={cl.posts}>        
                {postsItem}             
            </div>           
        </div>
}

export default MyPosts;