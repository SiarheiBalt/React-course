import cl from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hi, wat\'s up!', like: 12,},
        {id: 2, message: 'This is my first props!', like: 15,},
    ]
    
    let postsItem = postsData.map( el =>  <Post message={el.message} like={el.like}/>)

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