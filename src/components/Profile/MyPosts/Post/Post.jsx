import cl from './Post.module.css'

const Post = () => {
    return <div className={cl.item}>
        <img src="https://image.flaticon.com/icons/png/512/168/168732.png"/>
        <br/>
        post 
        <div>
            <button>like</button>
        </div>
    </div>
             
} 

export default Post;