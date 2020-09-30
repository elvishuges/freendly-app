import {
  SET_COMPANY_DATE,
  CLEAN_COMPANY_DATE,
  SET_CHAT_NAVIGATION_STATE
} from "../actions/user";


const state = {
  empresa: { 
     nome: "...", 
     descricao: "...", 
     dirImagem: "" 
  },
  chatNavigationState:false
};

const getters = {
  infoEmpresa: state => state.empresa,
  chatNavigationState: state => state.chatNavigationState,
};

const actions = {
  [SET_COMPANY_DATE]: ({ commit }, payload) => {
    commit(SET_COMPANY_DATE, payload);
  },
  [CLEAN_COMPANY_DATE]: ({ commit }) => {
    commit(CLEAN_COMPANY_DATE);
  },
  [SET_CHAT_NAVIGATION_STATE]: ({ commit }, payload) => {
    commit(SET_CHAT_NAVIGATION_STATE,payload);
  }
};

const mutations = {
  [SET_COMPANY_DATE]: (state, payload) => {
    state.empresa = payload
  },
  [CLEAN_COMPANY_DATE]: (state) => {
    state = {}
    state.empresa = { nome: "", descricao: "", dirImagem: "" }
  },
  [SET_CHAT_NAVIGATION_STATE]: (state, payload) => {
    state.chatNavigationState = payload
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};