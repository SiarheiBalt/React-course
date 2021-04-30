import cl from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
    
    let postsItem = props.data.map( el =>  <Post message={el.message} like={el.like}/>)

    return <div className={cl.posts__block}>
        <h4>My post</h4>
            <div><textarea></textarea></div>
            <div><button className={cl.button}>Add post</button></div>
            <div className={cl.posts}>        
                {postsItem}             
            </div>           
        </div>
} 

export default MyPosts;