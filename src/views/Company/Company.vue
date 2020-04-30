<template>
  <div>
    <div class="top_img">
      <img src="../../assets/images/Sceniclandscape_title.png" />
    </div>
    <div class="top_title">
      <div class="top_title_module">
        <span>企业风采</span>
      </div>
    </div>
    <div class="company_main">
      <div class="company_main_box">
        <div class="company_main_box_left">
          <img src="../../assets/images/company_content1.png" />
          <div class="company_main_aim">
            <img src="../../assets/images/company_content3.png" />
            <p class="company_main_aim_title">公司企业目标</p>
            <p class="company_main_aim_content">打造一流环境、提供一流服务、创建一流景区</p>
            <div class="company_main_aim_background"></div>
          </div>
          <div class="company_main_ideaDevelopment_idea">
            <img src="../../assets/images/company_content4.png" />
            <p class="company_main_ideaDevelopment_idea_title">公司经营理念</p>
            <p class="company_main_ideaDevelopment_idea_content">以人为本、文明诚信</p>
          </div>
          <div class="company_main_ideaDevelopment_development">
            <img src="../../assets/images/company_content6.png" />
            <p class="company_main_ideaDevelopment_development_title">公司发展思路</p>
            <p class="company_main_ideaDevelopment_development_content">以桥为体、以河为魂</p>
          </div>
          <div class="company_main_advertising">
            <p class="company_main_advertising_title">景区广告词</p>
            <p class="company_main_advertising_content">北有燕子矶 南有天生桥 长江有个大三峡 天生桥有个小三峡</p>
          </div>
        </div>
        <div class="company_main_box_right">
          <div class="company_main_spirit">
            <p class="company_main_spirit_title">公司精神</p>
            <p class="company_main_spirit_content">真情待客、严格律己、团结奉献、自强不息</p>
          </div>
          <img src="../../assets/images/company_content2.png" />
          <div class="company_main_purpose">
            <img src="../../assets/images/company_content5.png" />
            <p class="company_main_purpose_title">公司企业宗旨</p>
            <p class="company_main_purpose_content">发展与贡献同步</p>
            <div class="company_main_purpose_background"></div>
          </div>
          <img src="../../assets/images/company_content7.png" />
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Company extends Vue {}
</script>


<style lang="stylus" scoped>
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

/* 企业风采主体 */
.company_main {
  display: flex;
  align-items: center; /* 定义元素垂直居中 */
  justify-content: center; /* 定义元素水平居中 */
}

.company_main_box {
  flex: 0 1 80rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start ; /* 定义元素垂直居中 */
  justify-content: center; /* 定义元素水平居中 */
  align-content: center;
}

.company_main_box_left {
  flex: 0 0 40rem;

  & img {
    width: 100%;
    display: block; /* 图片如果不定义为块状元素，之间会默认有缝隙 */
  }
}

.company_main_aim {
  width: 40rem;
  height: 23.125rem;

  & img {
    position: relative;
    width: 100%;
    z-index: -1;
  }
}

.company_main_aim_title {
  position: relative;
  margin-left: 2.5rem;
  margin-top: -23.125rem;
  font-size: 1.5rem;
  font-family: MicrosoftYaHei;
  color: rgba(255, 255, 255, 1);
  line-height: 3.75rem;
  z-index: 5;
}

.company_main_aim_content {
  position: relative;
  margin-left: 2.5rem;
  font-size: 1.125rem;
  font-family: MicrosoftYaHei;
  color: rgba(255, 255, 255, 0.7);
  z-index: 5;
}

.company_main_aim_background {
  position: relative;
  width: 40rem;
  height: 23.125rem;
  margin-top: -5.25rem;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.company_main_ideaDevelopment_idea {
  width: 40rem;
  height: 29.375rem;

  & img {
    position: relative;
    width: 100%;
    z-index: -1;
  }
}

.company_main_ideaDevelopment_idea_title {
  position: relative;
  margin-top: -29.125rem;
  margin-left: 2.5rem;
  font-size: 1.5rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 3.75rem;
  z-index: 5;
}

.company_main_ideaDevelopment_idea_content {
  position: relative;
  margin-left: 2.5rem;
  font-size: 1.125rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  z-index: 5;
}

.company_main_ideaDevelopment_development {
  width: 40rem;
  height: 16.875rem;

  & img {
    position: relative;
    width: 100%;
    z-index: -1;
  }
}

.company_main_ideaDevelopment_development_title {
  margin-left: 14.625rem;
  margin-top: -10.825rem;
  font-size: 1.5rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 3.75rem;
  z-index: 5;
}

.company_main_ideaDevelopment_development_content {
  margin-left: 14.625rem;
  font-size: 1.125rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  z-index: 5;
}

.company_main_advertising {
  width: 40rem;
  height: 17.5rem;
}

.company_main_advertising_title {
  margin-left: 4.4375rem;
  font-size: 1.5rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 3.75rem;
}

.company_main_advertising_content {
  margin-left: 4.4375rem;
  font-size: 1.125rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}

.company_main_box_right {
  flex: 0 0 40rem;

  & img {
    width: 100%;
    display: block;
  }
}

.company_main_spirit {
  width: 40rem;
  margin-top: 6.25rem;
  height: 23.125rem;
  background: rgba(250, 250, 250, 1);
  display: flex;
  flex-wrap: wrap;
  align-items: center; /* 定义元素垂直居中 */
  align-content: center;
}

.company_main_spirit_title {
  margin-left: 8.4375rem;
  font-size: 1.5rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 3.75rem;
}

.company_main_spirit_content {
  margin-left: 8.4375rem;
  font-size: 1.125rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}

.company_main_purpose {
  width: 40rem;
  height: 46.25rem;

  & img {
    position: relative;
    width: 100%;
    z-index: -1;
  }
}

.company_main_purpose_background {
  position: relative;
  background-color: rgba(0, 0, 0, 0.6);
  margin-top: -30.25rem;
  width: 40rem;
  height: 46.25rem;
  z-index: 1;
}

.company_main_purpose_title {
  position: relative;
  margin-top: -21.25rem;
  margin-left: 15.25rem;
  font-size: 1.5rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 3.75rem;
  z-index: 5;
}

.company_main_purpose_content {
  position: relative;
  margin-left: 15.85rem;
  font-size: 1.125rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  z-index: 5;
}
</style>