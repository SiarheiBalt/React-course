import cl from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = () => {
    return <div>My post
            <div className={cl.posts}>
                <Post message="Hi, wat's up!" like="15"/>
                <Post message="This is my first props!" like="20"/>
                
            </div>           
        </div>
} 

export default MyPosts;