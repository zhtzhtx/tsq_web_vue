<template>
  <div>
    <div class="top_img">
      <img src="../../assets/images/Sceniclandscape_title.png" />
    </div>
    <div class="top_title">
      <div class="top_title_module">
        <span>常见问题</span>
      </div>
    </div>
    <div class="question_main">
      <div class="question_main_list">
        <div class="question_main_list_single">
          <img src="../../assets/images/comQuestion1.png" />
          <p class="question_main_list_single_title">如何合理游玩</p>
          <p class="question_main_list_single_content">按照景区导览指示图、景区介绍完成有效游玩,如有其他疑问可随时咨询相关负责人进行进一步指引。</p>
        </div>
        <div class="question_main_list_single">
          <img src="../../assets/images/comQuestion2.png" />
          <p class="question_main_list_single_title">如何合理游玩</p>
          <p class="question_main_list_single_content">按照景区导览指示图、景区介绍完成有效游玩,如有其他疑问可随时咨询相关负责人进行进一步指引。</p>
        </div>
        <div class="question_main_list_single">
          <img src="../../assets/images/comQuestion3.png" />
          <p class="question_main_list_single_title">如何合理游玩</p>
          <p class="question_main_list_single_content">按照景区导览指示图、景区介绍完成有效游玩,如有其他疑问可随时咨询相关负责人进行进一步指引。</p>
        </div>
        <div class="question_main_list_single">
          <img src="../../assets/images/comQuestion4.png" />
          <p class="question_main_list_single_title">如何合理游玩</p>
          <p class="question_main_list_single_content">按照景区导览指示图、景区介绍完成有效游玩,如有其他疑问可随时咨询相关负责人进行进一步指引。</p>
        </div>
        <div class="question_main_list_single">
          <img src="../../assets/images/comQuestion5.png" />
          <p class="question_main_list_single_title">如何合理游玩</p>
          <p class="question_main_list_single_content">按照景区导览指示图、景区介绍完成有效游玩,如有其他疑问可随时咨询相关负责人进行进一步指引。</p>
        </div>
        <div class="question_main_list_single">
          <img src="../../assets/images/comQuestion6.png" />
          <p class="question_main_list_single_title">如何合理游玩</p>
          <p class="question_main_list_single_content">按照景区导览指示图、景区介绍完成有效游玩,如有其他疑问可随时咨询相关负责人进行进一步指引。</p>
        </div>
        <div class="question_main_list_single">
          <img src="../../assets/images/comQuestion7.png" />
          <p class="question_main_list_single_title">如何合理游玩</p>
          <p class="question_main_list_single_content">按照景区导览指示图、景区介绍完成有效游玩,如有其他疑问可随时咨询相关负责人进行进一步指引。</p>
        </div>
        <div class="question_main_list_single">
          <img src="../../assets/images/comQuestion8.png" />
          <p class="question_main_list_single_title">如何合理游玩</p>
          <p class="question_main_list_single_content">按照景区导览指示图、景区介绍完成有效游玩,如有其他疑问可随时咨询相关负责人进行进一步指引。</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Question extends Vue {}
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

/* 常见问题样式 */
.question_main {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.question_main_list {
  flex: 0 1 82.5rem;
  display: flex;
  flex-wrap: wrap;
  margin: 6.25rem 0;
}

.question_main_list_single {
  width: 18.125rem;
  height: 23.75rem;
  margin: 1.25rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0.3125rem 0.9375rem 0.9375rem rgba(220, 230, 227, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.question_main_list_single_title {
  font-size: 1.25rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 6.25rem;
}

.question_main_list_single_content {
  width: 15.625rem;
  font-size: 0.875rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  text-align: center;
  line-height: 30px;
}
</style>