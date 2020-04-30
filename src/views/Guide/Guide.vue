<template>
  <div>
    <div class="top_img">
      <img src="../../assets/images/Sceniclandscape_title.png" />
    </div>
    <div class="top_title">
      <div class="top_title_module">
        <span>景区导览</span>
      </div>
    </div>
    <div class="guide_main">
      <div class="guide_main_map">
        <div class="guide_main_map_title">
          <div
            class="guide_main_map_title_single"
            v-for="(data,index) in data"
            @click="clickMapTitle(index)"
            :key="index"
          >
            <span
              :class="{guide_main_map_title_single_span:true,guide_main_map_title_single_span_hover:flag.mapTitle == index}"
            >{{index+1}}</span>
            <p
              :class="{guide_main_map_title_single_p1:true,guide_main_map_title_single_p_hover:flag.mapTitle == index}"
            >{{data.title}}</p>
            <p
              :class="{guide_main_map_title_single_p2:true,guide_main_map_title_single_p_hover:flag.mapTitle == index}"
            >{{data.remark}}</p>
          </div>
        </div>
        <div class="guide_main_map_img">
          <img :src="data?data[flag.mapImg].img:''" />
        </div>
      </div>
      <div class="guide_main_ticket">
        <div class="guide_main_title">
          <div class="guide_main_title_main">
            <img src="../../assets/images/scenicGuide_ticket.png" />
            <div class="guide_main_title_right">
              <span class="guide_main_title_right_title">门票价格</span>
              <span class="guide_main_title_right_remark">PRICE</span>
            </div>
          </div>
        </div>
        <div class="guide_main_ticket_content">
          <img src="../../assets/images/scenicGuide_ticket_position.png" />
          <div class="guide_main_ticket_content_right">
            <ul v-for="(value,index) in fare" :key="index">
              <li class="guide_main_ticket_content_right_li">
                <div class="guide_main_ticket_content_right_li_block"></div>
                <div class="guide_main_ticket_content_right_li_content">
                  <span class="guide_main_ticket_content_right_li_title">{{value?value.title:''}}</span>
                  <span class="guide_main_ticket_content_right_li_remark">{{value?value.remark:''}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="guide_main_traffic">
        <div class="guide_main_title">
          <div class="guide_main_title_main">
            <img src="../../assets/images/scenicGuide_traffic.png" />
            <div class="guide_main_title_right">
              <span class="guide_main_title_right_title">交通路线</span>
              <span class="guide_main_title_right_remark">TRAFFIC</span>
            </div>
          </div>
        </div>
        <div class="guide_main_traffic_content">
          <div class="guide_main_traffic_content_subway">
            <img src="../../assets/images/traffic_routes_railway.png" />
            <p>运营时间：6:00-23:00(每15分钟一班)</p>
          </div>
          <div class="guide_main_traffic_content_bus">
            <img src="../../assets/images/traffic_routes_bus.png" />
            <p>6:00-23:00(每30分钟一班)</p>
          </div>
        </div>
        <div class="guide_main_traffic_content">
          <div class="guide_main_traffic_content_busYou2">
            <img src="../../assets/images/scenicGuide_traffic_bus_you2.png" />
          </div>
        </div>
        <div class="guide_main_traffic_content">
          <div class="guide_main_traffic_content_platform">
            <p class="guide_main_traffic_content_platform_title">沿途主要站点</p>
            <p
              class="guide_main_traffic_content_platform_content"
            >天生桥公园—凤凰井—凤凰小镇—悦居广场—金蛙新村—南方新城—实验幼儿园—广成花园—党校—弯子口南—农贸市场—通济街—交通客运公司—中山桥—三高中北门—S7溧水站—天利广场—水保路口—十里变电站—十里牌—门神岗—门神岗加油站（原临时停靠点)—王武村—宁杭高铁溧水站—屏溪佳苑—东山村委会—观音寺—乌龙禅寺—王家边—交河—神墩—共和集镇—周园（到达）</p>
            <p class="guide_main_traffic_content_platform_title">天生桥景区（周园）：每30分钟一班;</p>
            <p
              class="guide_main_traffic_content_platform_title"
            >天生桥景区发车时间：7:30 —14:30；周园发班时间： 9:30—16:30</p>
          </div>
        </div>
        <div class="guide_main_traffic_content">
          <div class="guide_main_traffic_content_busYou3">
            <img src="../../assets/images/scenicGuide_traffic_bus_you3.png" />
          </div>
        </div>
        <div class="guide_main_traffic_content">
          <div class="guide_main_traffic_content_platform">
            <p class="guide_main_traffic_content_platform_title">沿途主要站点</p>
            <p
              class="guide_main_traffic_content_platform_content"
            >S7溧水站—金山公寓—阳光佳苑—S7中山湖站—城建集团—水岸新都西—水岸康城—水岸康城东—水岸康城南—体育公园北—广电局—南方新城—金蛙新村—悦居广场—凤凰小镇—凤凰井—天生桥公园—太阳岛—新村—九塘社区—上方社区—山口—社东—石湫便民服务中心—石湫街道办事处—S9石湫站—浦江学院—小村上—臧村头—杨甸村—洪曹—翟家—王家—光明大队部—左山村—环山河景区（到达） ）</p>
            <p class="guide_main_traffic_content_platform_title">S7溧水站-S9石湫站：每30分钟一班;</p>
            <p
              class="guide_main_traffic_content_platform_title"
            >S7溧水站发车时间：5:50—18:10；环山河站发车时间：7:10—18:20</p>
          </div>
        </div>
        <div class="guide_main_traffic_content">
          <div class="guide_main_traffic_content_car">
            <img src="../../assets/images/traffic_routes_self_bus.png" />
          </div>
          <div class="guide_main_traffic_content_trafficBus">
            <img src="../../assets/images/traffic_routes_travel_bus.png" />
          </div>
        </div>
        <div class="guide_main_title">
          <div class="guide_main_title_main">
            <img src="../../assets/images/scenicGuide_traffic.png" />
            <div class="guide_main_title_right">
              <span class="guide_main_title_right_title">其他服务</span>
              <span class="guide_main_title_right_remark">ADDITION</span>
            </div>
          </div>
        </div>
        <div class="guide_main_traffic_content">
          <div class="guide_main_traffic_content_addition">
            <ul>
              <li class="guide_main_traffic_content_addition_right_li">
                <div class="guide_main_traffic_content_addition_right_li_block"></div>
                <div class="guide_main_traffic_content_addition_right_li_content">
                  <span class="guide_main_traffic_content_addition_right_li_title">电瓶车服务</span>
                  <span
                    class="guide_main_traffic_content_addition_right_li_remark"
                  >电瓶游览车：可按游客要求全园游览，随叫随停，也可包车</span>
                </div>
              </li>
              <li class="guide_main_traffic_content_addition_right_li">
                <div class="guide_main_traffic_content_addition_right_li_block"></div>
                <div class="guide_main_traffic_content_addition_right_li_content">
                  <span class="guide_main_traffic_content_addition_right_li_title">游客中心</span>
                  <span
                    class="guide_main_traffic_content_addition_right_li_remark"
                  >位于景区入口处，主要设有休息座椅、触摸屏、电视机、医务室、开水间等，为游客提供便利服务</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Guide extends Vue {
  //景区导览的数据
  private data = [
    {
      title: "入口",
      remark: "购票",
      img: require("../../assets/images/scenicGuide_main_guidemap1.png")
    },
    {
      title: "农趣园",
      remark: "摸\\钓鱼",
      img: require("../../assets/images/scenicGuide_main_guidemap2.png")
    },
    {
      title: "动物园",
      remark: "百鸟\\猴\\鸵鸟园",
      img: require("../../assets/images/scenicGuide_main_guidemap3.png")
    },
    {
      title: "儿童乐园",
      remark: "水上步行球",
      img: require("../../assets/images/scenicGuide_main_guidemap4.png")
    },
    {
      title: "乘船浏览",
      remark: "胭脂河\\天生峡... ",
      img: require("../../assets/images/scenicGuide_main_guidemap5.png")
    },
    {
      title: "索桥\\天生桥",
      remark: "浏览参观",
      img: require("../../assets/images/scenicGuide_main_guidemap6.png")
    },
    {
      title: "休闲广场",
      remark: "特产、农家餐饮",
      img: require("../../assets/images/scenicGuide_main_guidemap7.png")
    },
    {
      title: "出口",
      remark: "",
      img: require("../../assets/images/scenicGuide_main_guidemap8.png")
    }
  ];

  private fare = [
    { title: "淡季：20元/人", remark: "12月1日至次年2月28日、6月1日至8月31日" },
    { title: "旺季：30元/人", remark: "3月1日至5月31日、9月1日至11月30日" },
    { title: "游船：20元/人", remark: "游船：20元/人" },
    { title: "悬索桥：5元/人", remark: "观光车：5元/人（4人起步）" }
  ];
  private flag = {
    mapTitle: 0,
    mapImg: 0
  };
  private clickMapTitle(num: number) {
    this.flag.mapTitle = num;
    this.flag.mapImg = num;
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

/* 导览主体样式 */
.guide_main {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* 定义元素水平居中 */
}

/* 导览地图样式 */
.guide_main_map {
  flex: 0 1 80rem;
  display: flex;
  flex-wrap: wrap;
  height: 55rem;
}

.guide_main_map_title {
  width: 100%;
  height: 7.5rem;
  display: flex;
  justify-content: space-between;
  margin-top: 6.25rem;
}

.guide_main_map_title_single {
  flex: 0 1 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.guide_main_map_title_single_span {
  border-radius: 50%;
  height: 3.75rem;
  width: 3.75rem;
  text-align: center;
  line-height: 3.75rem;
  font-size: 1.5rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  background: rgba(230, 230, 230, 1);
}

.guide_main_map_title_single_span_hover {
  color: rgba(255, 255, 255, 1);
  background: rgba(0, 192, 108, 1);
}

.guide_main_map_title_single_p1 {
  line-height: 1.875rem;
  font-size: 1rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}

.guide_main_map_title_single_p2 {
  font-size: 1rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(179, 179, 179, 1);
}

.guide_main_map_title_single_p_hover {
  color: rgba(0, 192, 108, 1);
}

.guide_main_map_img {
  width: 80rem;
  height: 35rem;
  margin-top: 6.25rem;
}

.guide_main_map_img img {
  width: 100%;
  height: 100%;
}

/* 导览标题样式 */
.guide_main_title {
  display: flex;
  width: 100%;
  height: 250px;
  align-items: center;
  justify-content: center;
}

.guide_main_title_main {
  display: flex;
  width: 235px;
  height: 68px;
  justify-content: center;
}

.guide_main_title img {
  width: 4.25rem;
  height: 4.25rem;
}

.guide_main_title_right {
  display: flex;
  flex-direction: column;
  width: 8.25rem;
  margin-left: 1.875rem;
  line-height: 1.875rem;
}

.guide_main_title_right_title {
  height: 2.3rem;
  font-size: 2rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

.guide_main_title_right_remark {
  height: 2rem;
  font-size: 1.5rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  opacity: 0.6;
}

/* 门票价格样式 */
.guide_main_ticket {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center; /* 定义元素水平居中 */
}

.guide_main_ticket_content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center; /* 定义元素水平居中 */
}

.guide_main_ticket_content_right_li {
  margin-left: 6.25rem;
  display: flex;
  height: 5.625rem;
  line-height: 1.875rem;
}

.guide_main_ticket_content_right_li_block {
  margin-top: 0.625rem;
  width: 0.75rem;
  height: 0.75rem;
  background: rgba(0, 192, 108, 1);
}

.guide_main_ticket_content_right_li_content {
  margin-left: 1.25rem;
  display: flex;
  flex-direction: column;
}

.guide_main_ticket_content_right_li_title {
  font-size: 1.25rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

.guide_main_ticket_content_right_li_remark {
  font-size: 1rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}

/* 交通路线 */
.guide_main_traffic {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center; /* 定义元素水平居中 */
}

.guide_main_traffic_content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.guide_main_traffic_content_subway {
  flex: 0 1 38.75rem;
  height: 26.875rem;
  margin: 1.25rem;
}

.guide_main_traffic_content_subway p {
  font-size: 1.25rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  text-align: center;
  margin-top: 40px;
}

.guide_main_traffic_content_bus {
  flex: 0 1 38.75rem;
  height: 26.875rem;
  margin: 1.25rem;
}

.guide_main_traffic_content_bus p {
  font-size: 1.25rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  text-align: center;
  margin-top: 40px;
}

.guide_main_traffic_content_busYou2 {
  flex: 0 1 80rem;
  margin: 5rem 0;
}

.guide_main_traffic_content_busYou2 img {
  width: 100%;
}

.guide_main_traffic_content_platform {
  flex: 0 1 80rem;
  height: 16.6875rem;
  margin: 5rem 0;
}

.guide_main_traffic_content_platform_title {
  font-size: 1.25rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 2.1875rem;
}

.guide_main_traffic_content_platform_content {
  margin: 2.5rem 0;
  font-size: 1.125rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 1.75rem;
}

.guide_main_traffic_content_busYou3 {
  flex: 0 1 80rem;
  margin: 5rem 0;
}

.guide_main_traffic_content_busYou3 img {
  width: 100%;
}

.guide_main_traffic_content_car {
  flex: 0 1 38.75rem;
  height: 22.5rem;
  margin: 1.25rem;
}

.guide_main_traffic_content_trafficBus {
  flex: 0 1 38.75rem;
  height: 22.5rem;
  margin: 1.25rem;
}

/* 其他服务样式 */
.guide_main_traffic_content_addition {
  flex: 0 1 80rem;
  margin-bottom: 7.5rem;
}

.guide_main_traffic_content_addition_right_li {
  display: flex;
  height: 6.5625rem;
  line-height: 1.875rem;
}

.guide_main_traffic_content_addition_right_li_block {
  margin-top: 0.625rem;
  width: 0.75rem;
  height: 0.75rem;
  background: rgba(0, 192, 108, 1);
}

.guide_main_traffic_content_addition_right_li_content {
  margin-left: 1.25rem;
  display: flex;
  flex-direction: column;
}

.guide_main_traffic_content_addition_right_li_title {
  font-size: 1.25rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

.guide_main_traffic_content_addition_right_li_remark {
  font-size: 1rem;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
</style>