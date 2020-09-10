import {
  AUTH_REQUEST,
  AUTH_LOGIN_REQUEST,
  AUTH_REGISTER_REQUEST,
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_LOGOUT
} from "../actions/auth";

import { getToken, setToken, removeToken } from '../utils/token'
import commonUserService from "./../../services/freendly/commonUser";


const state = {
  token: getToken(),
  usuario: { id: "" },
  status: "",
  hasLoadedOnce: false
};

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
  token: state => state.token,
};

const actions = {
  [AUTH_LOGIN_REQUEST]: ({ commit }, payload) => {
    console.log('#PAYLOAD LOGIN#', payload);
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST);
      commonUserService.login(payload.email, payload.senha)
        .then(rsp => {
          console.log("#RSP LOGIN#", rsp);
          if (rsp.status == 200) {
            setToken(rsp.data.token)
            commit(AUTH_SUCCESS, rsp);
            resolve(true);
          }
          if (rsp.status == 203) {
            resolve(false);
          }

        })
        .catch(err => {
          commit(AUTH_ERROR, err);
          reject(err);
        });
    });
  },

  [AUTH_REGISTER_REQUEST]: ({ commit }, payload) => {
    console.log('*PAYLOAD REGISTER*', payload);
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST);
      commonUserService.register(payload.nome, payload.email, payload.nick, payload.senha)
        .then(rsp => {
          console.log("#RSP REGIS#", rsp);
          if (rsp.status == 200) {
            setToken(rsp.data.token)
            commit(AUTH_SUCCESS, rsp);
            resolve(true);
          }
          if (rsp.status == 203) {
            resolve(false);
          }

        })
        .catch(err => {
          commit(AUTH_ERROR, err);
          reject(err);
        });
    });
  },

  [AUTH_LOGOUT]: ({ commit }) => {
    console.log('AUTH LOGOUT');
    return new Promise(resolve => {
      commit(AUTH_LOGOUT);
      removeToken()
      //localStorage.removeItem("user-token");
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
    state.token = resp.data.token;
    state.usuario.id = resp.data.userId
    state.hasLoadedOnce = true;
  },
  [AUTH_ERROR]: state => {
    state.status = "error";
    state.hasLoadedOnce = true;
  },
  [AUTH_LOGOUT]: state => {
    state.token = "";
    state.usuario = {},
      state.status = ""
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};