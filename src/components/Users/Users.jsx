import axios from "axios";
import { connectAdvanced } from "react-redux";
import cl from "./Users.module.css";
import userPhoto from "../../assets/image/ava.png";
import React from "react";

class Users extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);

        this.props.setTotalUserCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        <div>
          {pages.map((p) => (
            <span
              className={this.props.currentPage === p && cl.selected_Page}
              onClick={() => this.onPageChanged(p)}
            >
              {p}
            </span>
          ))}
        </div>
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
