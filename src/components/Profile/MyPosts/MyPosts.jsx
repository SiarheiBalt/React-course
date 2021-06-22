import React from "react";
import { Redirect } from "react-router-dom";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsItem = props.profilePage.postsData.map((el) => (
    <Post key={el.id} message={el.message} like={el.like} />
  ));
  let newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  if (!props.isAuth) return <Redirect to="Login" />;
  return (
    <div className={cl.posts__block}>
      <h4>My post</h4>
      <div>
        <textarea
          ref={newPostElement}
          onChange={onPostChange}
          value={props.profilePage.newPostText}
        />
      </div>
      <div>
        <button onClick={props.addPost} className={cl.button}>
          Add post
        </button>
      </div>
      <div className={cl.posts}>{postsItem}</div>
    </div>
  );
};

export default MyPosts;
