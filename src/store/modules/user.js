import {
    SET_COMPANY_DATE,
    CLEAN_COMPANY_DATE
  } from "../actions/user";


  const state = {
    empresa:{ nome:"",descricao:"",dirImagem:"" }
  };

  const getters = {
    empresa: state => state.empresa,
  };

  const actions = {
    [SET_COMPANY_DATE]: ({ commit },payload) => {
        return new Promise(resolve => {
          commit(SET_COMPANY_DATE,payload);
           resolve();
        });
      },
      [CLEAN_COMPANY_DATE]: ({ commit }) => {
        return new Promise(resolve => {
          commit(CLEAN_COMPANY_DATE);
           resolve();
        });
      }
  };

  const mutations = {
    [SET_COMPANY_DATE]: (state, payload) => {
      state.empresa = payload
    },
    [CLEAN_COMPANY_DATE]: (state) => {
        state.empresa = { nome:"",descricao:"",dirImagem:"" }
      },

  };

  export default {
    state,
    getters,
    actions,
    mutations
  };