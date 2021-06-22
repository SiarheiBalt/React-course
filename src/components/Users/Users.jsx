import cl from "./Users.module.css";
import userPhoto from "../../assets/image/ava.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  // debugger;
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => (
          <span
            className={props.currentPage === p && cl.selected_Page}
            onClick={() => props.onPageChanged(p)}
          >
            {p}
          </span>
        ))}
      </div>
      {props.users.map((el) => (
        <div key={el.id}>
          <div>
            <NavLink to={`/Profile/${el.id}`}>
              <img
                className={cl.image}
                src={el.photos.small !== null ? el.photos.small : userPhoto}
              />
            </NavLink>
            {el.followed ? (
              <button
                disabled={props.followingInProgress.some((id) => id === el.id)}
                onClick={() => {
                  props.unfollowThunk(el.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={props.followingInProgress.some((id) => id === el.id)}
                onClick={() => {
                  props.followThunk(el.id);
                }}
              >
                Follow
              </button>
            )}
            <div>{el.name}</div>
            <h6>el.location.countryh el.location.sity</h6>
          </div>
          <div>
            <span>{el.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
