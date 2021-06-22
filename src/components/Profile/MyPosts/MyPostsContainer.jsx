import { connect } from "react-redux";
import {
  addPost,
  updateNewPostText,
} from "../../../redux/reducer-profilePages";
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
//     let state = props.store.getState();
//     let addPost = () => {
//         props.store.dispatch(addPostActinCreator())
//     }
//     let onPostChange = (text) => {
//         props.store.dispatch(updateNewPostActionCreator(text))
//     }
//     return (
//         <MyPosts addPost={addPost} updateNewPostText={onPostChange}
//         postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText}/>
//     )
// }
const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    isAuth: state.auth.isAuth,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addPost: () => {
//       dispatch(addPostActinCreator());
//     },
//     updateNewPostText: (text) => {
//       dispatch(updateNewPostActionCreator(text));
//     },
//   };
// };

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  updateNewPostText,
})(MyPosts);

export default MyPostsContainer;
