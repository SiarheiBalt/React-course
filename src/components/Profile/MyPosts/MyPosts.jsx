import cl from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = () => {
    return <div>My post
            <div className={cl.posts}>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>           
        </div>
} 

export default MyPosts;