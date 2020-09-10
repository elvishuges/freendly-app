import {
  SET_COMPANY_DATE,
  CLEAN_COMPANY_DATE
} from "../actions/user";


const state = {
  empresa: { nome: "", descricao: "", dirImagem: "" }
};

const getters = {
  infoEmpresa: state => state.empresa,
};

const actions = {
  [SET_COMPANY_DATE]: ({ commit }, payload) => {
    commit(SET_COMPANY_DATE, payload);
  },
  [CLEAN_COMPANY_DATE]: ({ commit }) => {
    commit(CLEAN_COMPANY_DATE);
  }
};

const mutations = {
  [SET_COMPANY_DATE]: (state, payload) => {
    state.empresa = payload
  },

  [CLEAN_COMPANY_DATE]: (state) => {
    state.empresa = { nome: "", descricao: "", dirImagem: "" }
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};