import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";
// import { passDoLogin } from '@/api/api'
const { passDoLogin, passUserInfo } = require("@/api/api");

Vue.use(Vuex);

const getDefaultState = () => {
  return {
    token: sessionStorage.getItem("token"),
    userinfo: null,
    // name: '',
    // avatar: ''
  };
};

const state = getDefaultState();

const mutations = {
  RESET_STATE: (state: any) => {
    Object.assign(state, getDefaultState());
  },
  SET_TOKEN: (state: any, token: string) => {
    state.token = token;
  },
  SET_USERINFO: (state: any, userinfo: any) => {
    state.userinfo = userinfo;
  },
  // SET_NAME: (state, name) => {
  //   state.name = name
  // },
  // SET_AVATAR: (state, avatar) => {
  //   state.avatar = avatar
  // }
};

const actions = {
  // user login
  login({ commit }: { commit: any }, userInfo: any) {
    const { username, identify_code, password } = userInfo;
    return new Promise((resolve: Function, reject) => {
      passDoLogin({
        username: username,
        identify_code: identify_code,
        password: password,
      })
        .then((response: any) => {
          const { data } = response;
          commit("SET_TOKEN", data);
          sessionStorage.setItem("token", data);
          resolve();
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  },

  getInfo({ commit }: any) {
    return new Promise((resolve, reject) => {
      passUserInfo()
        .then((response: any) => {
          const { data } = response;
          console.log(response);
          if (!data) {
            return reject("Verification failed, please Login again.");
          }
          commit("SET_USERINFO", data);
          resolve(data);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  },

  logout({ commit }: any) {
    return new Promise((resolve: any) => {
      sessionStorage.removeItem("token");
      commit("RESET_STATE");
      resolve();
    });
  },

  resetToken({ commit }: any) {
    return new Promise((resolve: any) => {
      sessionStorage.removeItem("token");
      commit("RESET_STATE");
      resolve();
    });
  },
};
const getters = {
  token: (state: any) => state.token,
  userinfo: (state: any) => state.userinfo,
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
