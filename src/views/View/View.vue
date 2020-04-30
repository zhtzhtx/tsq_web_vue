<template>
  <div>
    <div class="top_img">
      <img src="../../assets/images/Sceniclandscape_title.png" />
    </div>
    <div class="top_title">
      <div class="top_title_module" @click="clickViewType(0)">
        <div class="top_title_module_left">
          <span>风景</span>
          <hr :class="{none:flag.viewType != 0}" />
        </div>
        <div class="top_title_module_right">
          <span>SCENERY</span>
        </div>
      </div>
      <div class="top_title_module" @click="clickViewType(1)">
        <div class="top_title_module_left">
          <span>游玩</span>
          <hr :class="{none:flag.viewType != 1}" />
        </div>
        <div class="top_title_module_right">
          <span>PLAY</span>
        </div>
      </div>
      <div class="top_title_module" @click="clickViewType(2)">
        <div class="top_title_module_left">
          <span>美食</span>
          <hr :class="{none:flag.viewType != 2}" />
        </div>
        <div class="top_title_module_right">
          <span>FOOD</span>
        </div>
      </div>
    </div>
    <!-- 头部滚动图 -->
    <div class="view_banner">
      <div class="view_banner_btnLeft" @click="imgMove('left')">
        <img src="../../assets/images/leftBtn.png" />
      </div>
      <div id="view_banner_main">
        <div id="view_banner_list">
          <div
            class="view_banner_list_single"
            :class="{img_on:imgIndex==index}"
            v-for="(value,index) in view"
            @click="clickImg(index)"
            :key="index"
          >
            <span>{{value.title}}</span>
            <img :src="imgList[index]" />
          </div>
        </div>
      </div>
      <div class="view_banner_btnRight" @click="imgMove('right')">
        <img src="../../assets/images/rightBtn.png" />
      </div>
    </div>
    <div class="view_logo">
      <img src="../../assets/images/fengguanglogo.png" />
    </div>
    <div class="view_content">
      <div class="view_content_main">
        <div class="view_content_title" >{{view[imgIndex] ? view[imgIndex].title : ''}}</div>
        <div class="view_content_content">{{view[imgIndex] ? view[imgIndex].content : ''}}</div>
      </div>
    </div>
    <div class="view_img">
      <div class="view_img_main">
        <div class="view_img_single">
          <img src="../../assets/images/contentfengguang1.png" />
          <img src="../../assets/images/contentfengguang2.png" style="margin-top: 2.5rem" />
        </div>
        <div class="view_img_single">
          <img src="../../assets/images/contentfengguang3.png" />
          <div class="view_img_slogan">
            <p class="view_img_slogan_title">凝脂沉霞</p>
            <p class="view_img_slogan_content">两岸险峻、陡峭、秀丽、幽深，又素有“江南小三峡”之称</p>
          </div>
          <img src="../../assets/images/contentfengguang4.png" style="margin-top: 2.5rem" />
        </div>
        <div class="view_img_single">
          <img src="../../assets/images/contentfengguang5.png" />
          <img src="../../assets/images/contentfengguang6.png" style="margin-top: 2.5rem" />
          <div class="view_img_slogan">
            <p class="view_img_slogan_title">凝脂沉霞</p>
            <p class="view_img_slogan_content">两岸险峻、陡峭、秀丽、幽深，又素有“江南小三峡”之称</p>
          </div>
        </div>
      </div>
    </div>
    <div class="view_map">
      <img src="../../assets/images/fengguangditu.png" />
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//引入vuex-class
import { Getter, Action } from "vuex-class";
@Component
export default class TsqView extends Vue {
  @Getter view: any;
  @Action getView: any;

//导入图片
  private imgList = [
    require("../../assets/images/lunbo1.jpg"),
    require("../../assets/images/lunbo2.png"),
    require("../../assets/images/lunbo3.png"),
    require("../../assets/images/lunbo4.png"),
    require("../../assets/images/lunbo5.jpg")
  ];

  //获取景区风光数据
  private created() {
    this.getView();
  }

  //景区风光参数
  private imgIndex = 0;
  private flag = {
    viewType: 0
  };

  //景区风光方法
  //标题切换方法
  private clickViewType(num: number) {
    this.flag.viewType = num;
  }

  //滚动图左右切换方法
  private imgMove(flag: string) {
    const list = document.querySelector("#view_banner_list") as HTMLElement;
    if (flag == "right" && this.imgIndex < 4) {
      this.imgIndex++;
    } else if (flag == "left" && this.imgIndex > 0) {
      this.imgIndex--;
    }
    switch (this.imgIndex) {
      case 0:
        list.style.left = "0px";
        break;
      case 1:
        list.style.left = "-450px";
        break;
      case 2:
        list.style.left = "-900px";
        break;
      case 3:
        list.style.left = "-1029px";
        break;
      case 4:
        list.style.left = "-1029px";
        break;
    }
  }
  //滚动条点击方法
  private clickImg(index: number) {
    this.imgIndex = index;
  }
  
}
</script>


<style lang="stylus" scoped>
/* 风光轮播图样式 */
.view_banner {
  display: flex;
  width: 100%;
  height: 440px;
  align-items: center;
  justify-content: center;
}

.view_banner_btnLeft {
  display: flex;
  flex: 0 1 100px;
  height: 40px;
}

.view_banner_btnRight {
  display: flex;
  justify-content: flex-end;
  flex: 0 1 100px;
  height: 40px;
}

#view_banner_main {
  width: 1280px;
  height: 245px;
  overflow: hidden; /* 为了将图片隐藏 */
  position: relative;
}

#view_banner_list {
  width: 3840px; /* 图片总宽度 */
  height: 245px;
  position: absolute;
  z-index: 1;
  display: flex;
}

.view_banner_list_single {
  width: 420px;
  height: 240px;
  margin: 0 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.view_banner_list_single span {
  font-size: 24px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  position: absolute;
}

.img_on {
  border: 3px solid rgba(1, 211, 119, 1);
}

.none {
  display: none;
}

/* 顶部图片样式 */
.top_img {
  width: 100%;
  position: relative;
  top: 0;
  & img {
    width: 100%;
  }
}

/* 风光类别栏样式 */
.top_title {
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center; /* 定义元素垂直居中 */
  justify-content: center;
  border-bottom: 0.0625rem #D9D9D9 solid;
}

.top_title_module {
  flex: 0 1 24.375rem;
  display: flex;
  justify-content: center;
}

.top_title_module_left {
  flex: 0 0 4.0625rem;
  height: 3rem;
}

.top_title_module_left span {
  font-size: 2rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

.top_title_module_left hr {
  width: 4rem;
  height: 0.25rem;
  background: rgba(0, 192, 108, 1);
  border: 0;
}

.top_title_module_right {
  margin-left: 0.625rem;
}

.top_title_module_right span {
  font-size: 1.25rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 2.3rem;
}

.none {
  display: none;
}

/* 风光logo居中 */
.view_logo {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 风光内容样式 */
.view_content {
  width: 100%;
  margin-top: 1.75rem;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.view_content_main {
  flex: 0 1 80rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.view_content_title {
  width: 100%;
  height: 6.875rem;
  font-size: 2.75rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  text-align: center;
}

.view_content_content {
  width: 100%;
  font-size: 1.125rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 2rem;
}

/* 风光图片样式 */
.view_img {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.view_img_main {
  flex: 0 1 82.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
}

.view_img_single {
  margin: 1.25rem;
  display: flex;
  flex-direction: column;
}

.view_img_slogan {
  width: 22.5rem;
  height: 12.5rem;
  background: rgba(250, 250, 250, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.view_img_slogan_title {
  font-size: 1.375rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 5rem;
}

.view_img_slogan_content {
  text-align: center;
  font-size: 1.125rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 1.75rem;
}

/* 风光地图样式 */
.view_map {
  width: 100%;
  margin-top: 40px;
}

.view_map img {
  width: 100%;
}
</style>