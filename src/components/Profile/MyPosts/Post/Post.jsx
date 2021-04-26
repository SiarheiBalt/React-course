import cl from './Post.module.css'

const Post = (props) => {
    return <div className={cl.item}>
        <img src="https://image.flaticon.com/icons/png/512/168/168732.png"/>
        <br/>
        {props.message}
        <div>
            <button>like {props.like}</button>
        </div>
    </div>
             
} 

export default Post;