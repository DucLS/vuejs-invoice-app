import { createStore } from 'vuex'

const TOGGLE_INVOICE = 'TOGGLE_INVOICE';

export default createStore({
  state: {
    isShowInvoiceModal: null,
  },
  getters: {
    isShowInvoiceModal: state => state.isShowInvoiceModal,
  },
  mutations: {
    [TOGGLE_INVOICE](state) {
      state.isShowInvoiceModal = !state.isShowInvoiceModal;
    }
  },
  actions: {
  },
  modules: {
  }
})
