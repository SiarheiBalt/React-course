import MyPosts from './MyPosts/MyPosts'
import cl from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Ppofile = (props) => {
    return <div>
        <ProfileInfo />
        <MyPosts profilePage={props.profilePage}
         dispatch={props.dispatch}/>
    </div>
} 

export default Ppofile;