<template>
  <div class="foot">
    <div class="foot_main">
      <div class="foot_contact_us">
        <div class="foot_contact_us_main">
          <span class="foot_contact_us_title">联系我们</span>
          <span class="foot_contact_us_phone">025-57204511</span>
        </div>
        <div class="foot_vertical_line_box">
          <hr class="foot_vertical_line" />
        </div>
        <div class="foot_address_main">
          <span class="foot_contact_us_small foot_contact_us_address">南京市溧水区天生桥景区（溧水天生桥路500号）</span>
          <span class="foot_contact_us_small foot_contact_us_email">E-mail：nj_tsq@163.com</span>
        </div>
        <!--<span class="foot_contact_us_small foot_contact_us_fax">传真：025-57204511</span>-->
      </div>
      <hr class="foot_line" />
      <div class="foot_menu">
        <div class="foot_menu_first">
          <span>网站首页</span>
        </div>
        <div class="foot_menu_first">
          <span>景区介绍</span>
          <div class="foot_menu_second">
            <span>景点介绍</span>
            <span>景区风光</span>
            <span>游园指南</span>
          </div>
        </div>
        <div class="foot_menu_first">
          <span>景区动态</span>
        </div>
        <div class="foot_menu_first">
          <span>景区票务</span>
        </div>
        <div class="foot_menu_first">
          <span>关于我们</span>
          <div class="foot_menu_second">
            <span>历史沿革</span>
            <span>景区规划</span>
          </div>
        </div>
        <div class="foot_menu_first">
          <span>客服服务</span>
          <div class="foot_menu_second">
            <span>常见问题</span>
            <span>投诉建议</span>
          </div>
        </div>
        <div class="foot_wx_code">
          <div class="foot_wx_code_img">
            <img src="../../assets/images/foot_wx_code.png" />
          </div>
          <div class="foot_wx_code_title">微信公众号</div>
        </div>
      </div>
      <hr class="foot_line" />
      <div
        class="foot_other"
      >南京溧水商贸旅游集团天生桥文化旅游发展有限公司版权所有&emsp;&emsp;苏ICP备18055678号&emsp;&emsp;技术支持：南京xxxx公司</div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Foot extends Vue {}
</script>


<style lang="stylus" scope>
/* 底部主体，采用flex布局，设置主体的背景颜色 */
.foot {
  display: flex;
  width: 100%;
  background-color: #191D21;
  font-family: SimHei;
  align-items: center; /* 定义元素垂直居中 */
  justify-content: center; /* 定义元素水平居中 */

  /* 底部主体容器，限定最小的宽度，同时对更宽像素自适应，对内部采用flex布局 */
  .foot_main {
    flex: 0 1 80rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center; /* 定义元素垂直居中 */
    justify-content: center; /* 定义元素水平居中 */
    margin: 2.5rem 0;

    /* 联系我们（电话号码）部分的样式，限定了最小宽度，防止样式变形 */
    .foot_contact_us {
      width: 100%;
      display: flex;

      .foot_contact_us_main {
        display: flex;
        flex: 0 1 24.0625rem;

        .foot_contact_us_title {
          flex: 1 1 auto;
          font-size: 1.75rem;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 2.5rem;
        }

        .foot_contact_us_phone {
          flex: 0 0 13.0625rem;
          font-size: 1.75rem;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 2.5rem;
        }
      }

      /* 底部联系我们与景区地址的分割线 */
      .foot_vertical_line_box {
        flex: 1 1 auto;
        display: flex;
        align-items: center;

        .foot_vertical_line {
          width: 0.0625rem;
          height: 1.875rem;
          background: rgba(255, 255, 255, 1);
          margin: 0 1rem;
        }
      }

      /* 底部地址部分的样式 */
      .foot_address_main {
        flex: 0 1 50.9375rem;
        flex-wrap: wrap;
        line-height: 1.625rem;

        .foot_contact_us_small {
          font-size: 1.125rem;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 2.5rem;
        }

        .foot_contact_us_address {
          flex: 0 1 30rem;
        }
      }
    }

    /* 底部第一层部分和二层部分的分割线 */
    .foot_line {
      width: 100%;
      height: 0.0625rem;
      margin-top: 2.1875rem;
      margin-bottom: 1.875rem;
      border: 0;
      background: rgba(255, 255, 255, 0.3);
    }

    /* 底部第二层部分菜单的样式，flex布局，space-between平均分布 */
    .foot_menu {
      width: 100%;
      display: flex;
      justify-content: space-between;

      /* 底部第二部分菜单的一级标题样式 */
      .foot_menu_first {
        flex: 0 1 5rem;
        text-align: center;
        font-size: 1.25rem;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);

        /* 底部第二部分菜单的二级标题样式 */
        .foot_menu_second {
          display: flex;
          flex-direction: column;
          line-height: 4.375rem;
        }

        .foot_menu_second span {
          font-size: 1.125rem;
          font-family: MicrosoftYaHei;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          opacity: 0.3;
        }

        .foot_menu_second :hover {
          opacity: 1;
        }
      }
    }

    /* 底部第二部分的微信二维码部分 */
    .foot_wx_code {
      flex: 0 1 9.25rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      /* 微信二维码的标题 */
      .foot_wx_code_title {
        width: 100%;
        text-align: center;
        font-size: 1.125rem;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        margin-top: 1.875rem;
      }
    }

    /* 底部第三部分的样式 */
    .foot_other {
      font-size: 1rem;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      opacity: 0.5;
      margin-top: -0.9375rem;
    }
  }
}
</style>