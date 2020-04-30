<template>
  <div>
    <div class="top_img">
      <img src="../../assets/images/Sceniclandscape_title.png" alt />
    </div>
    <div class="introduction_main">
      <ul v-for="(data,index) in this.introduction" :key="index">
        <li class="introduction_main_list_li" :class="{li_odd:index%2 == 0,li_double:index%2 != 0}">
          <div
            class="introduction_main_list_li_main"
            :class="{li_main_odd:index%2 == 0,li_main_double:index%2 != 0}"
          >
            <div class="introduction_main_list_li_main_left">
              <img :src="imgList[index]" alt="">
            </div>
            <div class="introduction_main_list_li_main_right">
              <span class="introduction_main_list_li_title">{{data.title}}</span>
              <hr class="introduction_main_list_li_line" />
              <span class="introduction_main_list_li_content">{{data.content}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//引入vuex-class
import { Getter, Action } from "vuex-class";

@Component
export default class Introduction extends Vue {
  @Getter introduction: any;
  @Action getIntroduction: any;

  //导入图片
  private imgList = [
    require("../../assets/images/scenicIntroduct_img1.png"),
    require("../../assets/images/scenicIntroduct_img2.png"),
    require("../../assets/images/scenicIntroduct_img3.png"),
    require("../../assets/images/scenicIntroduct_img4.png"),
    require("../../assets/images/scenicIntroduct_img5.png")
  ];

  //获取景区介绍数据
  private created() {
    this.getIntroduction();
  }
}
</script>


<style lang="stylus" scoped>
/* 顶部图片样式 */
.top_img {
  position: relative;
  top: 0;

  & img {
    width: 100%;
  }
}

/* 景区介绍主体容器样式 */
.introduction_main {
  width: 100%;

  /* 景区介绍的列表容器样式 */
  .introduction_main_list_li {
    width: 100%;
    height: 31.875rem;
    display: flex;
    align-items: center; /* 定义元素垂直居中 */
    justify-content: center; /* 定义元素水平居中 */

    /* 景区介绍的列表内容主体的样式 */
    .introduction_main_list_li_main {
      flex: 0 1 80rem;
      display: flex;
      align-items: center; /* 定义元素垂直居中 */
      justify-content: center; /* 定义元素水平居中 */

      /* 景区介绍的列表内容左边部分容器样式 */
      .introduction_main_list_li_main_left {
        flex: 0 0 21.25rem;
      }

      /* 景区介绍的列表内容右边部分容器样式 */
      .introduction_main_list_li_main_right {
        flex: 0 1 55rem;
        display: flex;
        flex-direction: column;
        height: 16.25rem;
        margin: 0 3.75rem;
        position: relative;

        /* 景区介绍的列表内容右边部分的标题样式 */
        .introduction_main_list_li_title {
          font-size: 1.375rem;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
        }

        /* 景区介绍的列表内容右边部分分割线样式 */
        .introduction_main_list_li_line {
          width: 60px;
          height: 2px;
          background: rgba(51, 51, 51, 1);
          margin-left: 0;
        }

        /* 景区介绍的列表内容右边部分内容样式 */
        .introduction_main_list_li_content {
          flex: 0 1 55rem;
          height: 9.75rem;
          position: absolute;
          bottom: 0;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 1.875rem;
        }
      }
    }

    /* 景区介绍的列表内容主体单数样式 */
    & .li_main_odd {
      flex-direction: row;
    }

    /* 景区介绍的列表内容主体双数样式 */
    & .li_main_double {
      flex-direction: row-reverse;
    }
  }

  /* 景区介绍的列表单数背景色 */
  & .li_odd {
    background: rgba(255, 255, 255, 1);
  }

  /* 景区介绍的列表双数背景色 */
  & .li_double {
    background: rgba(245, 245, 245, 1);
  }
}
</style>