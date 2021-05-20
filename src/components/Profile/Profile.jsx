import MyPosts from './MyPosts/MyPosts'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import cl from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Ppofile = (props) => {
    return <div>
        <ProfileInfo />
        <MyPostsContainer store={props.store}/>
    </div>
} 

export default Ppofile;