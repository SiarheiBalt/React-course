import MyPosts from './MyPosts/MyPosts'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import cl from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Ppofile = () => {
    return <div>
        <ProfileInfo />
        <MyPostsContainer />
    </div>
} 

export default Ppofile;