<template>
  <div>
    <div class="top_img">
      <img src="../../assets/images/Sceniclandscape_title.png" />
    </div>
    <div class="top_title">
      <div class="top_title_module">
        <span>景区动态</span>
      </div>
    </div>
    <div class="news_main">
      <ul class="home_dynamics_list">
        <router-link
          :to='`/newsDetail/${index}`'
          tag="li"
          class="home_dynamics_list_li"
          v-for="(value,index) in news"
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
      <div class="home_dynamics_list_page">
        <div class="home_dynamics_list_page_text page_last page_text_hover">
          <span>上一页</span>
        </div>
        <div
          class="home_dynamics_list_page_text"
          :class="{page_number:true,page_text_hover:true,none:false}"
        >
          <span>1</span>
        </div>
        <div
          class="home_dynamics_list_page_text"
          :class="{page_number:true,page_text_hover:false,none:false}"
        >
          <span>2</span>
        </div>
        <div
          class="home_dynamics_list_page_text"
          :class="{page_number:true,page_text_hover:false,none:false}"
        >
          <span>3</span>
        </div>
        <div class="home_dynamics_list_page_text" :class="{page_more:true,none:false}">
          <span>..</span>
        </div>
        <div :class="{page_number:true,page_text_hover:true}" class="home_dynamics_list_page_text">
          <span>{{pageTol}}</span>
        </div>
        <div class="home_dynamics_list_page_text page_next page_text_hover">
          <span>下一页</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//引入vuex-class
import { Getter, Action } from "vuex-class";

@Component
export default class News extends Vue {
  @Getter news: any;
  @Getter pageNo: any;
  @Getter pageTol: any;
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

/* 景区动态样式 */
.news_main {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.home_dynamics_list {
  flex: 0 1 80rem;
  display: flex;
  flex-wrap: wrap;
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

/* 景区动态页码样式 */
.home_dynamics_list_page {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2.5rem 0 7.5rem 0;
}

.home_dynamics_list_page_text {
  width: 2rem;
  height: 32px;
  text-align: center;
  border: 1px solid rgba(179, 179, 179, 1);
  line-height: 32px;
  margin: 0 0.9375rem;
}

.home_dynamics_list_page_text span {
  font-size: 0.875rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(179, 179, 179, 1);
}

.page_last {
  width: 4.75rem;
  height: 2rem;
}

.page_next {
  width: 4.75rem;
  height: 2rem;
}

.page_text_hover {
  border: 0;
  background: rgba(1, 211, 119, 1);
}

.page_text_hover span {
  color: rgba(255, 255, 255, 1);
}

.none {
  display: none;
}
</style>