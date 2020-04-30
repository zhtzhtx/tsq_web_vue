import axios from 'axios'

interface ViewStateList {
  [index: string]: string;
}

interface ViewState {
  code: string;
  list: ViewStateList[];
  pageNum: number;
  pageSize: number;
  totalCount: number;
}

const state = {
  view: {}
}

const getters = {
  view(state: ViewStateList) {
    return state.view;
  }
}

const actions = {
  getView(context: any) {
    axios.get('https://zhtzhtx.github.io/tsq_web_react/static/data/View.json').then(resp => {
      if (resp.data.code == '0000') {
        context.commit('getView', resp.data)
      }
    })
  }
}

const mutations = {
  getView(state: any, data: ViewState) {
    const dataList = data.list
    for (const i in dataList) {
      dataList[i].content = dataList[i].content.replace(/&nbsp;/ig, '');
      dataList[i].content = dataList[i].content.replace(/<[^>]+>/g, '');
    }
    state.view = dataList;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
