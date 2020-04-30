import axios from 'axios'

const state={
  news:[],
  pageNo:1,
  pageTol:1
}

const getters={
  news(state: any){
    return state.news;
  },
  pageNo(state: any){
    return state.pageNo;
  },
  pageTol(state: any){
    return state.pageTol;
  }
}

const actions={
  getNews(context: any){
    axios.get('https://zhtzhtx.github.io/tsq_web_react/static/data/News.json').then(resp =>{
      
      if(resp.data.code == '0000'){
        context.commit('getNews',resp.data)
      }
    })
  }
}

const mutations={
    getNews(state: any,data: any){
    for(const i in data.list) {
      data.list[i].textContent = data.list[i].textContent.replace(/&nbsp;/ig, '');
      data.list[i].textContent = data.list[i].textContent.replace(/<[^>]+>/g,'');
      state.news.push(data.list[i])
    }
    state.pageNo = data.pageNum;
    state.pageTol = Math.ceil(data.totalCount/10);
    
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}