<template>
  <div>
    <div class="top_img">
      <img src="../../assets/images/Sceniclandscape_title.png" alt />
    </div>
    <div class="top_title">
      <div class="top_title_module">
        <span>景区动态</span>
      </div>
    </div>
    <div class="news_detail_model">
      <div class="news_detail_model_main">
        <div class="news_detail_model_title">
          <span>{{news[parseInt($route.params.index)].title}}</span>
        </div>
        <div class="news_detail_model_content">
          <span v-html="news[parseInt($route.params.index)].htmlContent"></span>
        </div>
      </div>
      <ul class="home_dynamics_list" >
        <router-link
          :to='`/newsDetail/${index}`'
          tag="li"
          class="home_dynamics_list_li"
          v-for="(value,index) in news.slice(0,3)"
          :key="index"
        >
          <div class="home_dynamics_left">
            <span class="home_dynamics_content_date">07-02</span>
            <hr class="home_dynamics_content_line" />
            <img
              class="home_dynamics_content_img"
              src="../../assets/images/home_scenery_dynamics.png"
            />
            <p class="home_dynamics_type">景区动态</p>
          </div>
          <div class="home_dynamics_center">
            <span class="home_dynamics_content_title">{{value.title}}</span>
            <span
              class="home_dynamics_content_content"
            >{{'&nbsp;&nbsp;&nbsp;&nbsp;'+value.textContent.substring(0,80) + '...'}}</span>
          </div>
          <div class="home_dynamics_right">
            <img :src="value.titleImgPath" />
          </div>
        </router-link>
      </ul>
      <div class="home_dynamics_more">
        <img src="../../assets/images/home_more.png" />
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//引入vuex-class
import { Getter, Action } from "vuex-class";

@Component
export default class NewsDetail extends Vue {
  @Getter news: any
  @Action getNews: any;

  //获取景区动态数据
  private created() {
    this.getNews();
  }
}
</script>


<style lang="stylus" scoped>
/* 顶部图片样式 */
.top_img {
  width: 100%;
  position: relative;
  top: 0;
}

.top_img img {
  width: 100%;
}

/* 顶部标题样式 */
.top_title {
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center; /* 定义元素垂直居中 */
  border-bottom: 0.0625rem #D9D9D9 solid;
}

.top_title_module {
  flex: 0 1 24.6875rem;
  display: flex;
  flex-direction: row-reverse;
  font-size: 1.125rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

/* 景区动态详情样式 */
.news_detail_model {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.news_detail_model_main {
  flex: 0 1 80rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3.75rem 0 5rem 0;
}

.news_detail_model_title {
  width: 100%;
}

.news_detail_model_title span {
  font-size: 2rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 9.625rem;
}

.news_detail_model_content {
  width: 100%;
}

.news_detail_model_content span {
  font-size: 1.125rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 1.8rem;
}

.news_detail_model_content img {
  width: 100%;
  margin: 5rem 0;
}

/* 景区动态查看更多样式 */
.home_dynamics_list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-top: 0.0625rem #D9D9D9 solid;
}

.home_dynamics_list_li {
  flex: 0 1 80rem;
  display: flex;
  align-items: center; /* 定义元素垂直居中 */
  justify-content: space-between;
  height: 13.125rem;
  margin: 2.5rem 0;
}

.home_dynamics_left {
  flex: 0 0 12.5rem;
  display: flex;
  flex-wrap: wrap;
}

.home_dynamics_content_date {
  width: 5.6875rem;
  height: 1.625rem;
  font-size: 1.875rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

.home_dynamics_content_line {
  width: 3rem;
  height: 0.0625rem;
  background: rgba(51, 51, 51, 1);
  border: 0;
  margin-left: 2.5625rem;
  margin-top: 0.3125rem;
}

.home_dynamics_content_img {
  width: 2.5rem;
  height: 2.5rem;
  margin: 2.5625rem 1.3125rem 0 0;
}

.home_dynamics_type {
  margin-top: 3.1875rem;
  text-align: center;
  font-size: 1.125rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}

.home_dynamics_center {
  flex: 0 1 40rem;
  width: 39.375rem;
  display: flex;
  flex-direction: column;
}

.home_dynamics_content_title {
  font-size: 1.25rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

.home_dynamics_content_content {
  margin-top: 2.5rem;
  font-size: 1rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 1.75rem;
}

.home_dynamics_right {
  flex: 0 0 18.75rem;
}

.home_dynamics_right img {
  width: 100%;
  height: 100%;
}

.home_dynamics_more {
  margin: 3.125rem 0 8.125rem 0;
}
</style>