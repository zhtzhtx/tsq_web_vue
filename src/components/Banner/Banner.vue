<template>
  <div id="container">
      <div id="list" style="left:0px">
        <img src="../../assets/images/home_lunbo1.png" key="0" />
        <img src="../../assets/images/home_lunbo2.png" key="1" />
        <img src="../../assets/images/home_lunbo3.png" key="2" />
      </div>
    <div id="buttons">
      <span key="0" class="on"></span>
      <span key="1"></span>
      <span key="2"></span>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Banner extends Vue {
  private num = 0; //用于设置图片的序号（key）
  private screenWidth = document.body.offsetWidth; //获取当前屏幕的分辨率，用于实现轮播图的自适应布局

  //将图片宽度设置为当前屏幕的分辨率，用于实现轮播图的自适应布局
  private imgSetWidth() {
    const imgs = document.querySelectorAll("#list img") as NodeListOf<
      HTMLElement
    >;
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.width = this.screenWidth.toString() + "px";
    }
  }
  //实现下方指示器样式根据轮播图切换而进行变换
  private showButton() {
    const buttons = document.querySelectorAll("#buttons span") as NodeListOf<
      HTMLElement
    >;
    //清除之前的样式
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].className == "on") {
        buttons[i].className = "";
      }
    }
    //添加当前轮播图的指示器的样式
    buttons[this.num].className = "on";
  }
  //vue生命周期
  private mounted() {
    const imgsList = document.getElementById("list") as HTMLElement; //获取轮播图的容器
    const listWidth = 3 * this.screenWidth; //用于设置轮播图容器的总宽度
    imgsList.style.width = listWidth.toString() + "px"; //设置轮播图容器的总宽度
    this.imgSetWidth(); //设置轮播图的宽度
    const timer = setInterval(() => {
      this.num++;
      if (this.num == 3) {
        this.num = 0;
      }
      const offSetWidth = -this.num * this.screenWidth; //用于轮播图的切换
      imgsList.style.left = offSetWidth.toString() + "px"; //实现轮播图的切换
      this.showButton(); //实现指示器的切换
    }, 3000);
    //离开页面时清除定时器，否则定时器会一直报错
    this.$once("hook:beforeDestroy", () => {
      clearInterval(timer);
    });
  }
}
</script>


<style lang="stylus" scoped>
/* 设置总容器样式，即显示窗口的大小 */
#container {
  width: 100%; /* 此宽度根据图片宽度调整 */
  height: 740px; /* 此高度根据图片高度调整 */
  overflow: hidden; /* 为了将图片隐藏 */
  position: relative;
  padding: 0;

  /* 设置三张图片的总宽度，即图片容器的宽度 */
  #list {
    height: 740px;
    position: absolute;
    z-index: 1;
    transition: 700ms ease;
  }

  /* 设置三张图片的高度 */
  #list img {
    float: left;
    height: 740px;
  }

  /* 设置指示器容器的样式 */
  #buttons {
    position: absolute;
    height: 10px;
    width: 100px;
    z-index: 2; /* 将buttons放在list上层 */
    bottom: 20px;
    right: 46%;
    /* 设置指示器的样式 */
  }

  #buttons span {
    float: left;
    border-radius: 50%;
    height: 12px;
    width: 12px;
    margin-right: 15px;
    background: #FFFFFF;

    /* 设置被选中的指示器的样式 */
    &.on {
      background: #00C06C;
    }
  }
}

</style>