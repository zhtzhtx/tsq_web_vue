<template>
  <div>
    <div class="top_img">
      <img src="../../assets/images/Sceniclandscape_title.png"  />
    </div>
    <div class="top_title">
      <div class="top_title_module">
        <span>规划建设</span>
      </div>
    </div>
    <div class="plan_main">
      <div class="plan_main_title">
        <div class="plan_main_title_main">
          <img src="../../assets/images/scenicGuide_traffic.png"  />
          <div class="plan_main_title_right">
            <span class="plan_main_title_right_title">规划建设</span>
            <span class="plan_main_title_right_remark">PLAN</span>
          </div>
        </div>
      </div>
      <div class="plan_main_content">
        <p>&emsp;&emsp;为充分挖掘胭脂河天生桥深厚的历史文化底蕴，南京市委、市政府决定从2012年起对胭脂河天生桥遗址公园进行全新打造。该项目总规划面积30平方公里，其中，核心区7平方公里，是南京市重点建设的11个遗址公园之一。未来几年，溧水区委、区政府将以胭脂河天生桥遗址公园保护性发展为契机，立足南京与长三角都市圈，依托南京禄口机场、溧水高铁站、高速网络、轻轨交通等优势交通资源，致力于遗址公园和文化的保护、文化遗产的传承，打造集文化遗址观光、文化展示、游乐、文化体验、农业博览、休闲、商务、度假等产业为一体的国家级综合旅游度假区、文化休闲度假养生胜地。根据项目总体规划，目前，游客服务中心、秦淮源博物馆等项目已启动建设，明年年底前将对游客开放；明代皇家度假酒店、明传家小镇商业街、大明繁会实景秀、明朝皇家园林等一批项目也将于明年年初陆续开工建设，届时以文化遗址为核心，独具文化魅力和历史风情的天生桥风景名胜区将完整的呈现于广大游客面前。</p>
      </div>
      <div class="plan_main_picture">
        <img class="plan_main_picture_background" src="../../assets/images/bg1231231.png"  />
        <div class="plan_main_picture_main">
          <div class="plan_main_picture_single">
            <img src="../../assets/images/111.png"  />
            <p class="plan_main_picture_single_title">天生桥景区</p>
          </div>
          <div class="plan_main_picture_single">
            <img src="../../assets/images/222.png"  />
            <p class="plan_main_picture_single_title">秦淮源博物馆</p>
          </div>
          <div class="plan_main_picture_single">
            <img src="../../assets/images/333.png"  />
            <p class="plan_main_picture_single_title">大明文化体验区</p>
          </div>
          <div class="plan_main_picture_single">
            <img src="../../assets/images/444.png"  />
            <p class="plan_main_picture_single_title">稻田中的皇家田园酒店</p>
          </div>
          <div class="plan_main_picture_single">
            <img src="../../assets/images/555.png"  />
            <p class="plan_main_picture_single_title">胭脂河的景观改造</p>
          </div>
          <div class="plan_main_picture_single">
            <img src="../../assets/images/666.png"  />
            <p class="plan_main_picture_single_title">明朝小镇</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Plan extends Vue {}
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

/* 计划主体样式 */
.plan_main {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* 定义元素水平居中 */
}

/* 计划标题样式 */
.plan_main_title {
  display: flex;
  width: 100%;
  height: 250px;
  align-items: center;
  justify-content: center;
}

.plan_main_title_main {
  display: flex;
  width: 235px;
  height: 68px;
  justify-content: center;
}

.plan_main_title img {
  width: 4.25rem;
  height: 4.25rem;
}

.plan_main_title_right {
  display: flex;
  flex-direction: column;
  width: 8.25rem;
  margin-left: 1.875rem;
  line-height: 1.875rem;
}

.plan_main_title_right_title {
  height: 2.3rem;
  font-size: 2rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

.plan_main_title_right_remark {
  height: 2rem;
  font-size: 1.5rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  opacity: 0.6;
}

/* 计划内容样式 */
.plan_main_content {
  flex: 0 1 80rem;
  margin-bottom: 3.375rem;
}

.plan_main_content p {
  font-size: 1rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 2rem;
}

/* 计划图片区域 */
.plan_main_picture {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}

.plan_main_picture_background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.plan_main_picture_main {
  flex: 0 1 82.5rem;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 7.5rem;
}

.plan_main_picture_single {
  position: relative;
  width: 25rem;
  height: 25rem;
  margin: 1.25rem;
}

.plan_main_picture_single img {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.plan_main_picture_single_title {
  position: absolute;
  width: 100%;
  height: 3.5rem;
  bottom: 0;
  text-align: center;
  font-size: 1.5rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(0, 0, 0, 0.5);
  line-height: 3.75rem;
  z-index: 5;
}
</style>