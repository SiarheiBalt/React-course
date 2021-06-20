import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import cl from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Ppofile = ({ profile }) => {
  return (
    <div>
      <ProfileInfo profile={profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Ppofile;
