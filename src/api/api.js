import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "f9fd6058-0969-4174-92ce-355ca076238c",
  },
  withCredentials: true,
});

export const userAPI = {

  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  follow(id) {
    return instance.post("follow/" + id).then((response) => response.data);
  },

  unFollow(id) {
    return instance.delete("follow/" + id).then((response) => response.data);
  },

  getProfile (profileId){
    console.warn("Obsolete method. Please profileAPI object")
    // return instance.get("profile/" + profileId).then((response) => response.data);
    return profileAPI.getProfile(profileId)
  }

};


export const authAPI = {
  authMe() {
    return instance.get("auth/me").then((response) => response.data);
  },
  login(email, password, rememberMe = false) {
    return instance.post("auth/login",{email, password, rememberMe});
  },
  logout(){
    return instance.delete("auth/login");
  },
};


export const profileAPI = {
  getProfile (profileId){
    return instance.get("profile/" + profileId).then((response) => response.data);
  },
  getStatus(profileId){
    return instance.get("profile/status/" + profileId).then((response) => response);
  },
  updateStatus(status){
    return instance.put("profile/status/", {status : status}).then((response) => response);
  }
};



export const friendAPI = {
  getFriendUsers(currentPage = 1, pageSize = 10){
    return instance.get(`users?page=${currentPage}&count=${pageSize}&friend=${true}`)
    .then((response) => {
      // console.log(response.data.items);
      return response.data.items;
    });
  }
}

