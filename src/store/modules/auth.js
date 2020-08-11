import {
    AUTH_REQUEST,
    AUTH_ERROR,
    AUTH_SUCCESS,
    AUTH_LOGOUT
  } from "../actions/auth";
  //import { USER_REQUEST } from "../actions/user";
  import commonUserService from "./../../services/commonUser.service";

  const state = {
    token: localStorage.getItem("user-token") || "",
    status: "",
    hasLoadedOnce: false
  };

  const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status
  };

  const actions = {
    [AUTH_REQUEST]: ({ commit }, user) => {
      console.log('*User*',user);
      return new Promise((resolve, reject) => {
        commit(AUTH_REQUEST);
        commonUserService.login(user.email,user.senha)
          .then(rsp => {
            if(rsp.status == 200){
              localStorage.setItem("user-token", rsp.data.token);
              commit(AUTH_SUCCESS, rsp);
              resolve(true);
            }
            if(rsp.status == 203){
              resolve(false);
            }

          })
          .catch(err => {
            commit(AUTH_ERROR, err);
            localStorage.removeItem("user-token");
            reject(err);
          });
      });
    },
    [AUTH_LOGOUT]: ({ commit }) => {
      return new Promise(resolve => {
        commit(AUTH_LOGOUT);
        localStorage.removeItem("user-token");
        resolve();
      });
    }
  };

  const mutations = {
    [AUTH_REQUEST]: state => {
      state.status = "loading";
    },
    [AUTH_SUCCESS]: (state, resp) => {
      state.status = "success";
      state.token = resp.token;
      state.hasLoadedOnce = true;
    },
    [AUTH_ERROR]: state => {
      state.status = "error";
      state.hasLoadedOnce = true;
    },
    [AUTH_LOGOUT]: state => {
      state.token = "";
    }
  };

  export default {
    state,
    getters,
    actions,
    mutations
  };