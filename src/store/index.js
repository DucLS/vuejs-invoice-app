import { createStore } from 'vuex'
import db from '../firebase/firebaseInit'

const TOGGLE_INVOICE = 'TOGGLE_INVOICE';
const TOGGLE_MODAL = 'TOGGLE_MODAL';
const SET_INVOICE_DATA = 'SET_INVOICE_DATA';
const INVOICES_LOADED = 'INVOICES_LOADED';

export default createStore({
  state: {
    invoiceData: [],
    isInvoicesLoaded: null,
    isShowInvoiceModal: null,
    isModalActive: null,
  },
  getters: {
    isShowInvoiceModal: state => state.isShowInvoiceModal,
    isModalActive: state => state.isModalActive,
    isInvoicesLoaded: state => state.isInvoicesLoaded,
    invoiceData: state => state.invoiceData,
  },
  mutations: {
    [TOGGLE_INVOICE](state) {
      state.isShowInvoiceModal = !state.isShowInvoiceModal;
    },

    [TOGGLE_MODAL](state) {
      state.isModalActive = !state.isModalActive;
    },

    [SET_INVOICE_DATA](state, payload) {
      state.invoiceData.push(payload);
    },

    [INVOICES_LOADED](state) {
      state.isInvoicesLoaded = true;
    }
  },
  actions: {
    async GET_INVOICES({ commit, state }) {
      const results = await db.collection('invoices').get();

      results.forEach((result) => {
        if (!state.invoiceData.some((invoice) => invoice.docId === result.id)) {
          const data = {
            docId: result.id,
            invoiceId: result.data().invoiceId,
            billerStreetAddress: result.data().billerStreetAddress,
            billerCity: result.data().billerCity,
            billerZipCode: result.data().billerZipCode,
            billerCountry: result.data().billerCountry,
            clientName: result.data().clientName,
            clientEmail: result.data().clientEmail,
            clientStreetAddress: result.data().clientStreetAddress,
            clientCity: result.data().clientCity,
            clientZipCode: result.data().clientZipCode,
            clientCountry: result.data().clientCountry,
            invoiceDate: result.data().invoiceDate,
            invoiceDateUnix: result.data().invoiceDateUnix,
            paymentTerms: result.data().paymentTerms,
            paymentDueDate: result.data().paymentDueDate,
            paymentDueDateUnix: result.data().paymentDueDateUnix,
            productDescription: result.data().productDescription,
            invoiceItemList: result.data().invoiceItemList,
            invoiceTotal: result.data().invoiceTotal,
            invoicePending: result.data().invoicePending,
            invoiceDraft: result.data().invoiceDraft,
            invoicePaid: result.data().invoicePaid,
          };

          commit('SET_INVOICE_DATA', data);
        }
      })

      commit('INVOICES_LOADED');
    }

  },
  modules: {
  }
})
