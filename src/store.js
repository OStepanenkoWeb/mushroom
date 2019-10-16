import Vue from 'vue'
import Vuex from 'vuex'
import { db } from './main'

export const GET_REPORT = 'GET_REPORT'
export const GET_HEADERS_REPORT = 'GET_HEADERS_REPORT'
export const GET_TABLE = 'GET_TABLE'

const SAVE_REPORT_HEADERS = 'SAVE_REPORT_HEADERS'
const SAVE_REPORT_TABLE = 'SAVE_REPORT_TABLE'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reportHeaders: [],
    reportTable: []
  },
  getters: {
    [GET_HEADERS_REPORT]: state => state.reportHeaders,
    [GET_TABLE]: state => state.reportTable
  },
  mutations: {
    [SAVE_REPORT_HEADERS]: (state, { reportHeaders }) => {
      state.reportHeaders = reportHeaders
      localStorage.setItem('reportHeaders', JSON.stringify(reportHeaders))
      console.log(state.reportHeaders)
    },
    [SAVE_REPORT_TABLE]: (state, { reportTable }) => {
      state.reportTable = reportTable
      localStorage.setItem('reportTable', JSON.stringify(reportTable))
      console.log(state.reportHeaders)
    }

  },
  actions: {
    [GET_REPORT]: async ({ commit }, _) => {
      try {
        const { docs } = await db.collection('report').get()
        const { reportHeaders, reportTable } = docs[0].data()

        commit(SAVE_REPORT_HEADERS, { reportHeaders })
        commit(SAVE_REPORT_TABLE, { reportTable })
      } catch (e) {

      }
    }

  }
})
