import axios from 'axios'
const state={
  introduction:{}
}

const getters={
  introduction(state: any){
    return state.introduction;
  }
}

const actions={
  getIntroduction(context: any){
    axios.get('https://zhtzhtx.github.io/tsq_web_react/static/data/Introduction.json').then(resp =>{
      if(resp.data.code == '0000'){
        context.commit('getIntroduction',resp.data)
      }
    })
  }
}

const mutations={
    getIntroduction(state: any,data: any){
    const dataList = data.list
    for(const i in dataList) {
        dataList[i].content = dataList[i].content.replace(/&nbsp;/ig, '');
        dataList[i].content = dataList[i].content.replace(/<[^>]+>/g,'');
    }
    state.introduction = dataList;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
