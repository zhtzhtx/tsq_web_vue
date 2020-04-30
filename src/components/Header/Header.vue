<template>
  <div class="header">
    <div class="title">
      <div class="title_logo">
        <img class="home_logo" src="../../assets/images/head_logo.png" />
      </div>
      <div class="head_main">
        <div class="title_head" @mouseover="guideDownShow(0)" @mouseout="guideDownHide">
          <router-link
            to="/"
            class="first_title"
            :class="{first_title_hover:showFlag == 0 || $route.name == 'Index' }"
           
          >网站首页</router-link>
        </div>
        <div class="title_head" @mouseover="guideDownShow(1)" @mouseout="guideDownHide">
          <span
            class="first_title"
            :class="{first_title_hover:showFlag == 1 || $route.name == 'Introduction' || $route.name == 'View' }"
          >景区介绍</span>
          <div class="guide_down" v-show="showFlag == 1">
            <router-link
              to="/introduction"
              class="second_title"
            
            >景点介绍</router-link>
            <router-link to="/view" class="second_title" >景点风光</router-link>
          </div>
        </div>
        <div class="title_head" @mouseover="guideDownShow(2)" @mouseout="guideDownHide">
          <router-link
            to="/news"
            class="first_title"
            :class="{first_title_hover:showFlag == 2 || $route.name == 'News' || $route.name == 'NewsDetail'}"
          
          >景区动态</router-link>
        </div>
        <div class="title_head" @mouseover="guideDownShow(3)" @mouseout="guideDownHide">
          <router-link
            to="/guide"
            class="first_title"
            :class="{first_title_hover:showFlag == 3 || $route.name == 'Guide' }"
          
          >游园指南</router-link>
        </div>
        <div class="title_head" @mouseover="guideDownShow(4)" @mouseout="guideDownHide">
          <span
            class="first_title"
            :class="{first_title_hover:showFlag == 4 || $route.name == 'Company'|| $route.name == 'Plan' }"
          >关于我们</span>
          <div class="guide_down" v-show="showFlag == 4">
            <router-link to="/company" class="second_title" >企业风采</router-link>
            <router-link to="/plan" class="second_title" >景区规划</router-link>
          </div>
        </div>
        <div class="title_head" @mouseover="guideDownShow(5)" @mouseout="guideDownHide">
          <span
            class="first_title"
            :class="{first_title_hover:showFlag == 5 || $route.name == 'Question' }"
          >客服服务</span>
          <div class="guide_down" v-show="showFlag == 5">
            <router-link to="/question" class="second_title">常见问题</router-link>
            <router-link to="/" class="second_title" >意见建议</router-link>
            <router-link to="/" class="second_title" >旅游投诉</router-link>
          </div>
        </div>
      </div>
      <div class="title_version">
        <span>EN</span>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  //定位鼠标所在的一级标题下的下拉列表的参数
  private showFlag = -1;

  //根据鼠标所在的一级标题下进行显示下拉列表的方法
  private guideDownShow(num: number) {
    this.showFlag = num;
  }
  //根据鼠标所在的一级标题下进行隐藏下拉列表的方法
  private guideDownHide() {
    this.showFlag = -1;
  }
  
}
</script>


<style lang="stylus" scope>
/* 头部导航栏 */
.title {
  display: flex;
  width: 100%;
  height: 5rem;
  line-height: 5rem;
  position: relative;
  z-index: 30;

  .title_logo {
    flex: 1 1 37.5rem;
    background-color: #191D21;
    text-align: center;
  }

  .title_logo img {
    position: relative;
    top: 0.625rem;
  }
}

/* 顶部导航模块 */
.head_main {
  flex: 0 0 48.75rem;
  display: flex;

  .title_head {
    flex: 1 0 8.125rem;
    text-align: center;

    /* 标题栏中的一级标题样式 */
    .first_title {
      display: block;
      font-size: 1.125rem;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      cursor: pointer;

      &:hover, &.first_title_hover {
        background-color: #00C06C;
        color: #fff;
      }
    }

    /* 下拉列表 */
    .guide_down {
      display: block;
      position: relative;
      width: 8.125rem;

      /* 下拉列表中的二级标题样式 */
      .second_title {
        display: block;
        height: 3.125rem;
        font-size: 1.125rem;
        color: #FFFFFF;
        background-color: #191C21;
        opacity: 0.7;
        vertical-align: middle;
        line-height: 3.125rem;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }

        &:active {
          opacity: 1;
        }
      }
    }
  }
}

/* 英文版切换样式 */
.title_version {
  flex: 1 1 37.5rem;
  display: flex;
  justify-content: center;
}

/* 去除router-link的下划线 */
.router-link-active { // 点击时去掉下划线
  text-decoration: none;
  color: none;
}

a {
  text-decoration: none; // 去掉原有链接文字下划线
  color: #000;
}
</style>