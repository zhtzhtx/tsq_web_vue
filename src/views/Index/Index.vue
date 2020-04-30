<template>
  <div>
    <Banner></Banner>
    <div class="home_service_entrance">
      <div class="home_service_entrance_lunbo">
        <img src="../../assets/images/ticket_entrance.png" />
        <div class="home_service_entrance_text">
          <div class="home_service_entrance_title">景点门票</div>
          <div class="home_service_entrance_content">享受最优质的游览体验</div>
        </div>
      </div>
      <div class="home_service_entrance_lunbo">
        <img src="../../assets/images/service_entrance.png" />
        <div class="home_service_entrance_text">
          <div class="home_service_entrance_title">配套服务</div>
          <div class="home_service_entrance_content">享受最优质的游览体验</div>
        </div>
      </div>
      <div class="home_service_entrance_lunbo">
        <img src="../../assets/images/travel_entrance.png" />
        <div class="home_service_entrance_text">
          <div class="home_service_entrance_title">出行指南</div>
          <div class="home_service_entrance_content">享受最优质的游览体验</div>
        </div>
      </div>
      <div class="home_service_entrance_lunbo">
        <img src="../../assets/images/link_entrance.png" />
        <div class="home_service_entrance_text">
          <div class="home_service_entrance_title">友情链接</div>
          <div class="home_service_entrance_content">享受最优质的游览体验</div>
        </div>
      </div>
    </div>
    <!--关于景区-->
    <div class="home_scenic_about">
      <div class="home_scenic_left">
        <img src="../../assets/images/home_scenic_about.png" />
      </div>
      <div class="home_scenic_right">
        <div class="home_scenic_title_en">SCENIC GENERAL</div>
        <div class="home_scenic_title_cn">景区概况</div>
        <hr class="home_scenic_line" />
        <hr class="home_scenic_green" />
        <div class="home_scenic_content">
          <span>素有“江南三峡"之称的胭脂河——天生桥位于宁高高速公路西侧，距南京48公里，禄口国际机场18公里，这里重岗叠岚，草木茂盛，是南京郊县新开辟的旅游胜地。目前，南京天生桥风景名胜区规划为四个功能区，胭脂河——天生桥景观游赏区、凤凰井景区、休闲度假区、旅游服务区。</span>
        </div>
        <div class="home_scenic_more">
          <img src="../../assets/images/home_more.png" />
        </div>
      </div>
    </div>
    <!--宣传视频-->
    <!--视频图片-->
    <div class="home_video" @click="videoShow">
      <img class="home_video_img" src="../../assets/images/home_video.png" />
      <img class="home_video_icon" src="../../assets/images/home_video_icon.png" />
      <div class="home_video_mask"></div>
    </div>
    <!--视频弹窗-->
    <div class="home_videoShow" v-show="flag.videoShowFlag == 1">
      <img src="../../assets/images/home_close_btn.png" class="home_btnClose" @click="videoHide" />
      <video
        id="home_video_show"
        controls="controls"
        controlslist="nodownload"
        src="http://www.njtsq.com/uploadFile/video/tsq_clip.mp4"
        width="820"
        height="462"
        style="background-color: #000;"
      >
        <source type="video/mp4" />
      </video>
    </div>
    <!--遮罩-->
    <div class="home_shade" v-show="flag.videoShowFlag == 1"></div>
    <!--景区风光-->
    <div class="home_scenery">
      <div class="home_scenery_title">
        <span class="home_scenery_title_en">SCENERY</span>
        <span class="home_scenery_title_cn">景区风光</span>
      </div>
      <hr class="home_scenery_title_line" />
      <hr class="home_scenery_title_line_green" />
      <div class="home_scenery_main">
        <div class="home_scenery_content">
          <div class="home_scenery_spot">
            <div class="home_scenery_spot_scenic" @mouseover="scenicShow(0)" @mouseout="scenicHide">
              <img class="home_scenery_spot_img" src="../../assets/images/home_scenery_spot1.png" />
              <div class="home_scenery_spot_scenic_hide" v-show="flag.scenicShowFlag == 0">
                <div class="home_scenery_spot_scenic_main">
                  <span class="home_scenery_spot_scenic_title">秦淮之源</span>
                  <span class="home_scenery_spot_scenic_title">天生桥</span>
                  <span class="home_scenery_spot_scenic_title">天生桥博物馆</span>
                </div>
              </div>
            </div>
            <div class="home_scenery_spot_scenic_introduction">
              <span class="home_scenery_spot_introduction_title">风景</span>
              <span class="home_scenery_spot_introduction_content">江南水乡，枕水人家。在溧水享受精神和身体的完全放松</span>
              <span class="home_scenery_spot_introduction_more">查看更多</span>
              <hr class="home_scenery_introduction_more_line" />
              <hr class="home_scenery_introduction_more_green" />
            </div>
          </div>
          <div class="home_scenery_spot">
            <div class="home_scenery_spot_scenic" @mouseover="scenicShow(1)" @mouseout="scenicHide">
              <img class="home_scenery_spot_img" src="../../assets/images/home_scenery_spot2.png" />
              <div class="home_scenery_spot_scenic_hide" v-show="flag.scenicShowFlag == 1">
                <div class="home_scenery_spot_scenic_main">
                  <span class="home_scenery_spot_scenic_title">秦淮之源</span>
                  <span class="home_scenery_spot_scenic_title">天生桥</span>
                  <span class="home_scenery_spot_scenic_title">天生桥博物馆</span>
                </div>
              </div>
            </div>
            <div class="home_scenery_spot_scenic_introduction">
              <span class="home_scenery_spot_introduction_title">游玩</span>
              <span class="home_scenery_spot_introduction_content">江南水乡，枕水人家。在溧水享受精神和身体的完全放松</span>
              <span class="home_scenery_spot_introduction_more">查看更多</span>
              <hr class="home_scenery_introduction_more_line" />
              <hr class="home_scenery_introduction_more_green" />
            </div>
          </div>
          <div class="home_scenery_spot">
            <div class="home_scenery_spot_scenic" @mouseover="scenicShow(2)" @mouseout="scenicHide">
              <img class="home_scenery_spot_img" src="../../assets/images/home_scenery_spot3.png" />
              <div class="home_scenery_spot_scenic_hide" v-show="flag.scenicShowFlag == 2">
                <div class="home_scenery_spot_scenic_main">
                  <span class="home_scenery_spot_scenic_title">秦淮之源</span>
                  <span class="home_scenery_spot_scenic_title">天生桥</span>
                  <span class="home_scenery_spot_scenic_title">天生桥博物馆</span>
                </div>
              </div>
            </div>
            <div class="home_scenery_spot_scenic_introduction">
              <span class="home_scenery_spot_introduction_title">美食</span>
              <span class="home_scenery_spot_introduction_content">江南水乡，枕水人家。在溧水享受精神和身体的完全放松</span>
              <span class="home_scenery_spot_introduction_more">查看更多</span>
              <hr class="home_scenery_introduction_more_line" />
              <hr class="home_scenery_introduction_more_green" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--景区动态-->
    <div class="home_dynamics">
      <div class="home_dynamics_title">
        <span class="home_dynamics_title_en">JOURNALISM</span>
        <span class="home_dynamics_title_cn">景区动态</span>
      </div>
      <hr class="home_dynamics_title_line" />
      <hr class="home_dynamics_title_line_green" />
      <div class="home_dynamics_main">
        <div class="home_dynamics_content">
          <ul class="home_dynamics_list">
            <li class="home_dynamics_list_li" v-for="(value,index) in news.slice(0,5)" :key="index">
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
            </li>
          </ul>
        </div>
        <div class="home_dynamics_more">
          <img src="../../assets/images/home_more.png" />
        </div>
      </div>
    </div>
    <!--景区地图-->
    <div class="home_map_module">
      <div class="home_map_module_head">
        <p class="home_map_module_head_en">MAP</p>
        <p class="home_map_module_head_cn">地图</p>
        <hr class="home_map_module_head_line" />
      </div>
      <div class="home_map_module_main">
        <div class="home_map_module_left">
          <ul>
            <li class="home_map_module_left_main" @click="mapClick(0)">
              <div class="home_map_module_left_icon">
                <div
                  :class="{home_map_module_left_icon_background:true,home_map_module_left_icon_background_hover: flag.mapClickFlag==0}"
                ></div>
                <img src="../../assets/images/home_map_subway.png" />
                <span>地铁</span>
              </div>
              <div class="home_map_module_left_route">
                <div
                  :class="{home_map_module_left_route_background:true,home_map_module_left_route_background_hover: flag.mapClickFlag==0}"
                ></div>
                <span
                  :class="{home_map_module_left_route_span:true,home_map_module_left_route_span_hover: flag.mapClickFlag==0}"
                >S7、S9、游2、游3</span>
              </div>
            </li>
            <li class="home_map_module_left_main" @click="mapClick(1)">
              <div class="home_map_module_left_icon">
                <div
                  :class="{home_map_module_left_icon_background:true,home_map_module_left_icon_background_hover: flag.mapClickFlag==1}"
                ></div>
                <img src="../../assets/images/home_map_subway.png" />
                <span>高铁</span>
              </div>
              <div class="home_map_module_left_route">
                <div
                  :class="{home_map_module_left_route_background:true,home_map_module_left_route_background_hover: flag.mapClickFlag==1}"
                ></div>
                <span
                  :class="{home_map_module_left_route_span:true,home_map_module_left_route_span_hover: flag.mapClickFlag==1}"
                >S7、S9、游2、游3</span>
              </div>
            </li>
            <li class="home_map_module_left_main" @click="mapClick(2)">
              <div class="home_map_module_left_icon">
                <div
                  :class="{home_map_module_left_icon_background:true,home_map_module_left_icon_background_hover: flag.mapClickFlag==2}"
                ></div>
                <img src="../../assets/images/home_map_subway.png" />
                <span>自驾</span>
              </div>
              <div class="home_map_module_left_route">
                <div
                  :class="{home_map_module_left_route_background:true,home_map_module_left_route_background_hover: flag.mapClickFlag==2}"
                ></div>
                <span
                  :class="{home_map_module_left_route_span:true,home_map_module_left_route_span_hover: flag.mapClickFlag==2}"
                >S7、S9、游2、游3</span>
              </div>
            </li>
          </ul>
        </div>
        <baidu-map class="home_map_module_right" :center="this.center" :zoom="this.zoom">
          <bm-view id="home_map_module_right_map"></bm-view>
          <bm-transit
            :start="startPoint"
            :end="this.end"
            :panel="false"
            :auto-viewport="true"
            :scroll-wheel-zoom="true"
            :inertial-dragging="true"
          ></bm-transit>
        </baidu-map>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//引入轮播图组件
import Banner from "../../components/Banner/Banner.vue";
//引入vuex-class
import { Getter, Action } from "vuex-class";
//引入百度动态
import BaiduMap from "vue-baidu-map";
//使用百度地图，导入密钥
Vue.use(BaiduMap, {
  ak: "20DplgXMKRoNMqil1glwuOQuiFa98uME"
});

@Component({
  components: {
    Banner: Banner //导入轮播图组件
  }
})
export default class Index extends Vue {
  @Getter news: any;
  @Action getNews: any;

  //获取景区动态数据
  private created() {
    this.getNews();
  }


  //参数部分
  private flag = {
    videoShowFlag: -1, //视频是否显示
    scenicShowFlag: -1, //景区风光是否显示
    mapClickFlag: 0 //地图是否显示
  };
  private center = {lng: 119.050247, lat: 31.667598}; //地图初始化显示中心的位置
  private zoom = 15; //地图显示的级别
  private startPoint = { lng: 119.050247, lat: 31.667598 }; //地图初始化显示的位置
  private end = {lng: 118.9958, lat: 31.651122}; //天生桥的坐标

  //方法部分
  //景区视频显示/隐藏
  private videoShow() {
    this.flag.videoShowFlag = 1;
    const body = document.querySelector("body") as HTMLElement;
    body.style.overflow = "hidden";
  }
  private videoHide() {
    this.flag.videoShowFlag = -1;
    const body = document.querySelector("body") as HTMLElement;
    //这里注意是要作为HTMLAudioElement，否则会报错
    const video = document.querySelector(
      "#home_video_show"
    ) as HTMLAudioElement;
    body.style.overflow = "";
    video.pause();
  }
  //景区风光显示/隐藏
  private scenicShow(num: number) {
    this.flag.scenicShowFlag = num;
  }
  private scenicHide() {
    this.flag.scenicShowFlag = -1;
  }
  //百度地图设置
  private mapClick(num: number) {
    this.flag.mapClickFlag = num;
    if (num == 0) {
      this.startPoint.lng = 119.050247;
      this.startPoint.lat = 31.667598;
    } else if (num == 1) {
      this.startPoint.lng = 119.085505;
      this.startPoint.lat = 31.673605;
    } else if (num == 2) {
      this.startPoint.lng = 119.031409;
      this.startPoint.lat = 31.711224;
    }
  }
}
</script>


<style lang="stylus" scoped>
/* 轮播图上的景区导览样式 */
/* 景区导览的总体容器的样式，在页面上绝对布局，容器内部flex布局 */
.home_service_entrance {
  display: flex;
  flex-direction: column;
  width: 13.75rem;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 13.51%;
  left: 14.3%;
  z-index: 10;

  /* 景区导览内每个模块容器样式，对每个内部元素同样使用flex布局 */
  .home_service_entrance_lunbo {
    flex: 1; /* flex：1 1 0% */
    display: flex;

    /* logo样式 */
    & img {
      margin: 1.625rem 1.25rem;
      opacity: 1;
    }

    /* 文字容器的样式，对内部文字同意使用flex布局 */
    .home_service_entrance_text {
      width: 9.6875rem;
      height: 1.0625rem;
      display: flex;
      flex-direction: column;
      margin-top: 1.3125rem;

      /* 标题文字样式 */
      .home_service_entrance_title {
        font-size: 1.125rem;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }

      /* 内容文字样式 */
      .home_service_entrance_content {
        font-size: 0.75rem;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        opacity: 0.5;
        margin-top: 0.625rem;
      }
    }
  }
}

/* 关于景区样式 */
/* 关于景区的总体容器的样式，在页面上绝对布局，容器内部flex布局 */
.home_scenic_about {
  width: 100%;
  height: 37.5rem;
  display: flex;
  align-items: center; /* 定义元素垂直居中 */
  justify-content: center; /* 定义元素水平居中 */

  /* 关于景区左边图片的样式，容器内部flex布局 */
  .home_scenic_left {
    flex: 0 1 48.375rem;
    display: flex;
    justify-content: flex-end;
  }

  /* 关于景区右边文字的样式，容器内部flex布局 */
  .home_scenic_right {
    flex: 0 1 67.25rem;
    margin-left: 4.375rem;
    display: flex;
    flex-direction: column; /* 内容自上而下分布 */
    height: 25rem;
    position: relative;

    /* 关于景区右边英文标题样式 */
    .home_scenic_title_en {
      width: 15rem;
      height: 2.8125rem;
      font-size: 1.75rem;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(179, 179, 179, 1);
    }

    /* 关于景区右边中文标题样式 */
    .home_scenic_title_cn {
      width: 15rem;
      height: 3.1875rem;
      font-size: 3.25rem;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }

    /* 关于景区右边白色分割线样式 */
    .home_scenic_line {
      width: 100%;
      height: 0.0625rem;
      background: rgba(217, 217, 217, 1);
      margin-top: 1.875rem;
      border: 0;
    }

    /* 关于景区右边绿色分割线样式 */
    .home_scenic_green {
      width: 7.1875rem;
      height: 0.1875rem;
      background: rgba(1, 211, 119, 1);
      margin-top: -0.6rem;
      margin-left: 0;
      border: 0;
    }

    /* 关于景区右边内容部分样式 */
    .home_scenic_content {
      flex: 0 1 7.0625rem;
      font-size: 1.125rem;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 2.3rem;
      display: flex;

      /* 关于景区右边内容文字样式，使文字可以压缩 */
      & span {
        flex: 0 1 47.25rem;
      }
    }

    /* 关于景区右边查看更多样式 */
    .home_scenic_more {
      position: absolute;
      bottom: 0;
    }
  }
}

/* 景区宣传视频主体容器样式，容器内部flex布局 */
.home_video {
  display: flex;
  align-items: center; /* 定义元素垂直居中 */
  justify-content: center; /* 定义元素水平居中 */
  flex-direction: column;
  position: relative;
  width: 100%;

  /* 景区宣传视频背景图 */
  .home_video_img {
    width: 100%;
  }

  /* 景区宣传视频播放按钮 */
  .home_video_icon {
    position: absolute;
    top: auto;
    left: auto;
    z-index: 10;
  }

  /* 景区宣传视频面纱，降低亮度 */
  .home_video_mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
}

/* 景区宣传视频主体样式 */
.home_videoShow {
  width: 51.25rem;
  height: 28.875rem;
  background: #000;
  z-index: 20;
  opacity: 1;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;

  /* 景区宣传视频关闭视频按钮样式 */
  .home_btnClose {
    position: absolute;
    width: 3.5rem;
    height: 3.5rem;
    right: -5.125rem;
    top: 0;
    transition: all 0.3s linear;

    &:hover {
      transform: rotate(180deg);
    }
  }
}

/* 景区宣传视频遮罩 */
.home_shade {
  z-index: 19;
  opacity: 0.65;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #191C21;
}

/* 景区风光 */
/* 景区风光的主体容器，容器内部采用flex布局，自上而下分成标题,分割线和内容主体部分 */
.home_scenery {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 6.25rem 0 0 0;

  /* 景区风光的标题容器样式，内部采用flex分布 */
  .home_scenery_title {
    display: flex;
    align-items: center; /* 定义元素垂直居中 */
    justify-content: center; /* 定义元素水平居中 */
    flex-direction: column;
    line-height: 3.4rem;

    /* 景区风光的英文标题样式 */
    .home_scenery_title_en {
      font-size: 1.75rem;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(179, 179, 179, 1);
    }

    /* 景区风光的中文标题样式 */
    .home_scenery_title_cn {
      font-size: 3.25rem;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
  }

  /* 景区风光的分割线灰色部分样式 */
  .home_scenery_title_line {
    width: 100%;
    height: 0.0625rem;
    background: rgba(217, 217, 217, 1);
    border: 0;
    margin-top: 1.875rem;
  }

  /* 景区风光的分割线绿色部分样式 */
  .home_scenery_title_line_green {
    width: 9.375rem;
    height: 0.1875rem;
    background: rgba(1, 211, 119, 1);
    border: 0;
    margin-top: -0.625rem;
  }

  /* 景区风光内容主体容器样式，内部采用flex布局 */
  .home_scenery_main {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center; /* 定义元素垂直居中 */
    justify-content: center; /* 定义元素水平居中 */

    /* 景区风光内容主体容器样式，内部采用flex布局，分成风景，游玩和美食三个部分 */
    .home_scenery_content {
      flex: 0 1 80rem;
      margin: 6.25rem 0;
      display: flex;
      justify-content: space-between;

      /* 景区风光内容单独部分容器 */
      .home_scenery_spot {
        flex: 0 1 auto;
        display: flex;
        align-items: center; /* 定义元素垂直居中 */
        justify-content: center; /* 定义元素水平居中 */
        flex-direction: column;

        /* 景区风光内容单独主体部分 */
        .home_scenery_spot_scenic {
          flex: 0 1 25rem;

          /* 景区风光内容单独主体的背景图部分 */
          .home_scenery_spot_img {
            width: 100%;
            position: relative;
            z-index: 5;
          }

          /* 景区风光内容单独部分，鼠标移动上去显示的标题容器 */
          .home_scenery_spot_scenic_main {
            flex: 0 1 25rem;
            height: 31.25rem;
            position: relative;
            display: flex;
            align-items: center; /* 定义元素垂直居中 */
            justify-content: center; /* 定义元素水平居中 */
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.4);
            margin-top: -31.25rem;
            z-index: 10;

            /* 景区风光内容单独部分，鼠标移动上去显示的标题 */
            .home_scenery_spot_scenic_title {
              flex: 0 1 6.25rem;
              font-size: 1.5rem;
              font-family: MicrosoftYaHei;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);

              &:hover {
                color: rgba(0, 192, 108, 1);
              }
            }
          }
        }

        /* 景区风光内容单独部分下方的介绍容器 */
        .home_scenery_spot_scenic_introduction {
          flex: 0 1 11.875rem;
          display: flex;
          align-items: center; /* 定义元素垂直居中 */
          justify-content: center;
          flex-direction: column;
          margin-top: 3.125rem;

          /* 景区风光内容单独部分下方的介绍的标题 */
          .home_scenery_spot_introduction_title {
            font-size: 2.125rem;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            margin-bottom: 1.25rem;
          }

          /* 景区风光内容单独部分下方的介绍的内容 */
          .home_scenery_spot_introduction_content {
            font-size: 1rem;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            height: 8.125rem;
            line-height: 1.875rem;
            text-align: center;
          }

          /* 景区风光内容单独部分下方的介绍的查看更多 */
          .home_scenery_spot_introduction_more {
            font-size: 1rem;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(26, 26, 26, 1);
          }

          /* 景区风光内容单独部分下方的介绍的绿色分割线 */
          .home_scenery_introduction_more_green {
            width: 2.0625rem;
            height: 0.125rem;
            background: rgba(1, 211, 119, 1);
            position: relative;
            top: 0.6875rem;
            left: -1.0625rem;
            border: 0;
          }

          /* 景区风光内容单独部分下方的介绍的灰色分割线 */
          .home_scenery_introduction_more_line {
            width: 4.125rem;
            height: 0.125rem;
            background: rgba(0, 25, 53, 1);
            margin-bottom: -1.25rem;
            border: 0;
          }
        }
      }
    }
  }
}

/* 景区动态 */
/* 景区风光的主体容器，容器内部采用flex布局 */
.home_dynamics {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 6.25rem;

  /* 景区风光的标题部分容器，容器内部采用flex布局，自上而下布局 */
  .home_dynamics_title {
    display: flex;
    align-items: center; /* 定义元素垂直居中 */
    justify-content: center; /* 定义元素水平居中 */
    flex-direction: column;
    line-height: 3.4rem;

    /* 景区风光的英文标题样式 */
    .home_dynamics_title_en {
      font-size: 1.75rem;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(179, 179, 179, 1);
    }

    /* 景区风光的中文标题样式 */
    .home_dynamics_title_cn {
      font-size: 3.25rem;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
  }

  /* 景区风光的灰色分割线样式 */
  .home_dynamics_title_line {
    width: 100%;
    height: 0.0625rem;
    background: rgba(217, 217, 217, 1);
    border: 0;
    margin-top: 1.875rem;
  }

  /* 景区风光的绿色分割线样式 */
  .home_dynamics_title_line_green {
    width: 9.375rem;
    height: 0.1875rem;
    background: rgba(1, 211, 119, 1);
    border: 0;
    margin-top: -0.625rem;
  }

  /* 景区风光的第三部分主体容器样式，包含内容部分主体和查看更多按钮部分 */
  .home_dynamics_main {
    display: flex;
    flex-wrap: wrap;
    align-items: center; /* 定义元素垂直居中 */
    justify-content: center;
    width: 100%;

    /* 景区风光的内容主体容器 */
    .home_dynamics_content {
      flex: 0 1 80rem;
      display: flex;

      /* 景区风光的内容列表容器样式 */
      .home_dynamics_list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 6.25rem;

        /* 景区风光的内容列表样式 */
        .home_dynamics_list_li {
          display: flex;
          align-items: center; /* 定义元素垂直居中 */
          justify-content: space-between;
          flex: 0 1 80rem;
          margin: 1.25rem 0;
        }

        /* 景区风光的内容列表左边容器样式 */
        .home_dynamics_left {
          flex: 0 0 12.5rem;
          display: flex;
          flex-wrap: wrap;

          /* 景区风光的内容列表左边部分中的日期样式 */
          .home_dynamics_content_date {
            width: 5.6875rem;
            height: 1.625rem;
            font-size: 1.875rem;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
          }

          /* 景区风光的内容列表左边部分中的分割线样式 */
          .home_dynamics_content_line {
            width: 3rem;
            height: 0.0625rem;
            background: rgba(51, 51, 51, 1);
            border: 0;
            margin-left: 2.5625rem;
            margin-top: 0.3125rem;
          }

          /* 景区风光的内容列表左边部分中的指示图样式 */
          .home_dynamics_content_img {
            width: 2.5rem;
            height: 2.5rem;
            margin: 2.5625rem 1.3125rem 0 0;
          }

          /* 景区风光的内容列表左边部分中的类别样式 */
          .home_dynamics_type {
            margin-top: 3.1875rem;
            text-align: center;
            font-size: 1.125rem;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
          }
        }

        /* 景区风光的内容列表中间容器样式 */
        .home_dynamics_center {
          flex: 0 1 40rem;
          display: flex;
          flex-direction: column;

          /* 景区风光的内容列表中间部分的标题样式 */
          .home_dynamics_content_title {
            font-size: 1.25rem;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
          }

          /* 景区风光的内容列表中间部分的内容样式 */
          .home_dynamics_content_content {
            margin-top: 2.5rem;
            font-size: 1rem;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            line-height: 1.75rem;
          }
        }

        /* 景区风光的内容列表右边容器样式 */
        .home_dynamics_right {
          flex: 0 1 18.75rem;

          /* 景区风光的内容列表右边图片样式 */
          & img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    /* 景区风光的查看更多按钮样式 */
    .home_dynamics_more {
      width: 100%;
      text-align: center;
      margin: 4.375rem 0;
    }
  }
}

/* 景区地图 */
/* 景区地图主体容器 */
.home_map_module 
  width: 100%;
  /* 景区地图头部部分样式，采用flex布局，自上而下分布 */
  .home_map_module_head 
    width: 100%;
    height: 12.5rem;
    background: rgba(1, 211, 119, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* 景区地图英文标题样式 */
    .home_map_module_head_en 
      width: 4.0625rem;
      font-size: 1.75rem;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      margin-left: 20rem;
    /* 景区地图中文标题样式 */
    .home_map_module_head_cn 
      width: 6.5625rem;
      height: 3.125rem;
      font-size: 3.25rem;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      margin-top: 1.25rem;
      margin-left: 20rem;
    /* 景区地图头部分割线样式 */
    .home_map_module_head_line 
      width: 6.5rem;
      height: 0.1875rem;
      background: rgba(255, 255, 255, 1);
      border: 0;
      margin-top: 1.4375rem;
      margin-left: 20rem;
  /* 景区地图主体容器样式，采用flex布局 */  
  .home_map_module_main 
    display: flex;
    align-items: center; /* 定义元素垂直居中 */
    justify-content: center;
    width: 100%;
    /* 景区地图内容左边部分主体样式 */ 
    .home_map_module_left 
      flex: 0 0 28.75rem;
      display: flex;
      align-items: center; /* 定义元素垂直居中 */
      /* 景区地图内容左边部分容器样式 */
      .home_map_module_left_main 
        display: flex;
        align-items: center; /* 定义元素垂直居中 */
        width: 28.75rem;
        margin-bottom: 2.5rem;
        /* 景区地图内容左边部分logo的样式 */
        .home_map_module_left_icon 
          display: flex;
          flex-direction: column;
          width: 5.625rem;
          height: 5rem;
          /* 景区地图内容左边部分logo图片的样式 */
          & img 
            width: 1.875rem;
            height: 1.875rem;
            margin-top: -4.0625rem;
            margin-left: 1.5625rem;
          /* 景区地图内容左边部分logo标题的样式 */
          & span 
            margin-left: 1.5625rem;
            font-size: 1rem;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 1.5625rem;
          /* 景区地图内容左边部分logo背景样式 */
          .home_map_module_left_icon_background 
            height: 0;
            width: 5rem;
            border-top: 5rem rgba(204, 204, 204, 1) solid;
            border-right: 0.625rem transparent solid;
          /* 景区地图内容左边部分logo背景被选中样式 */
          .home_map_module_left_icon_background_hover 
            border-top: 5rem rgba(1, 211, 119, 1) solid;
        /* 景区地图内容左边部分标题样式 */  
        .home_map_module_left_route 
          display: flex;
          flex-direction: column;
          align-items: center; /* 定义元素垂直居中 */
          width: 23.75rem;
          height: 5rem;
          margin-left: -0.625rem;
          /* 景区地图内容左边部分标题背景样式 */
          .home_map_module_left_route_background 
            height: 0;
            width: 23.125rem;
            border-bottom: 5rem rgba(242, 242, 242, 1) solid;
            border-left: 0.625rem transparent solid;
          /* 景区地图内容左边部分标题背景被选中时样式 */
          .home_map_module_left_route_background_hover 
            border-bottom: 5rem rgba(0, 25, 53, 1) solid;       
          /* 景区地图内容左边部分标题内容样式 */
          .home_map_module_left_route_span 
            margin-top: -3.3125rem;
            font-size: 1.5rem;
            font-family: MicrosoftYaHei;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
          /* 景区地图内容左边部分标题内容被选中时样式 */
          .home_map_module_left_route_span_hover 
            color: rgba(255, 255, 255, 1);
    /* 景区地图内容右边主体容器样式 */
    .home_map_module_right 
      flex: 0 1 45rem;
      height: 28.75rem;
      margin-left: 6.25rem;
      /* 景区地图内容右边地图样式 */
      #home_map_module_right_map 
        height: 100%;
        width: 100%;
        margin-top: -6.25rem;
      
</style>