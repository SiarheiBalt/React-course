import MyPosts from './MyPosts/MyPosts'
import cl from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Ppofile = (props) => {

    return <div>
        <ProfileInfo />
        <MyPosts data = {props.data}/>
    </div>
} 

export default Ppofile;