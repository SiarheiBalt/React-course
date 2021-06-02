import axios from "axios";
import { connectAdvanced } from "react-redux";
import cl from "./Users.module.css";
import userPhoto from "../../assets/image/ava.png";
import React from "react";

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
        {this.props.users.map((el) => (
          <div key={el.id}>
            <div>
              <img
                className={cl.image}
                src={el.photos.small !== null ? el.photos.small : userPhoto}
              />
              {el.followed ? (
                <button onClick={() => this.props.unfollow(el.id)}>
                  Unfollow
                </button>
              ) : (
                <button onClick={() => this.props.follow(el.id)}>Follow</button>
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
  }
}
export default Users;
