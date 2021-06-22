import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "4144c789-d71e-4b20-89c6-1c9245cafb96" },
});

export const usersApi = {
  getUsers: (currentPage, pageSize) => {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((responce) => responce.data);
  },
  unfollow: (id) => {
    return instance.delete(`follow/${id}`).then((responce) => responce.data);
  },
  follow: (id) => {
    return instance.post(`follow/${id}`).then((responce) => responce.data);
  },
  getProfile: (userId) => {
    return instance.get("profile/" + userId);
  },
};
export const authApi = {
  me: () => {
    return instance.get(`auth/me`).then((responce) => responce.data);
  },
};
