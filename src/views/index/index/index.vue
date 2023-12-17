<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <div class="card">
            <div class="icon bg-one"><i class="el-icon-user-solid text-white" size="24px"></i></div>
            <div class="title">
              <h3>30</h3>
              <p>关注人数(个)</p>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div class="card">
            <div class="icon bg-two"><i class="el-icon-s-finance text-white" size="24px"></i></div>
            <div class="title">
              <h3>120</h3>
              <p>订单总数(笔)</p>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div class="card">
            <div class="icon bg-there"><i class="el-icon-s-order text-white" size="24px"></i></div>
            <div class="title">
              <h3>4183.80</h3>
              <p>今日订单总金额(元)</p>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div class="card">
            <div class="icon bg-four"><i class="el-icon-s-data text-white" size="24px"></i></div>
            <div class="title">
              <h3>100</h3>
              <p>本月销量(笔)</p>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px" :gutter="20">
      <el-col class="el-col-left" :span="12">
        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span>店铺及商品提示</span>
            <el-button style="float: right; padding: 3px 0" type="text">需要关注的店铺信息及待处理事项</el-button>
          </div>
          <div class="text item">
            <button class="button">
              <h3>64</h3>
              <span>出售中</span>
            </button>
            <button class="button">
              <h3>10</h3>
              <span>待回复</span>
            </button>
            <button class="button">
              <h3>0</h3>
              <span>库存预警</span>
            </button>
            <button class="button">
              <h3>3</h3>
              <span>仓库中</span>
            </button>
          </div>
        </el-card>
        <el-card shadow="never">
          <div slot="header" class="clearfix">
            <span>交易提示</span>
            <el-button style="float: right; padding: 3px 0" type="text">需要立即处理的交易订单</el-button>
          </div>
          <div class="text item">
            <button class="button">
              <h3>0</h3>
              <span>带付款</span>
            </button>
            <button class="button">
              <h3>10</h3>
              <span>待发货</span>
            </button>
            <button class="button">
              <h3>0</h3>
              <span>已发货</span>
            </button>
            <button class="button">
              <h3>3</h3>
              <span>已发货</span>
            </button>
            <button class="button">
              <h3>3</h3>
              <span>退款中</span>
            </button>
            <button class="button">
              <h3>3</h3>
              <span>待售后</span>
            </button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="echartsBox" shadow="never">
          <div id="echarts"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px" :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>销售情况统计</span>
            <el-button style="float: right; padding: 3px 0" type="text">按周期统计商家店铺的订单量和订单金额</el-button>
          </div>
          <div class="text">
            <div class="media">
              <div class="left">昨日销量</div>
              <div class="right">
                <div class="right-top">订单金额(元) 12</div>
                <div>订单量(件) 12</div>
              </div>
            </div>
            <div class="media media-botoom">
              <div class="left">本月销量</div>
              <div class="right">
                <div class="right-top">订单金额(元) 12</div>
                <div>订单量(件) 12</div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>单品销售排名</span>
            <el-button style="float: right; padding: 3px 0" type="text">按周期统计商家店铺的订单量和订单金额</el-button>
          </div>
          <div class="text item">
            <el-table :data="tableData" height="200" border style="width: 100%">
              <el-table-column type="index" label="#"> </el-table-column>
              <el-table-column prop="title" label="商品信息"> </el-table-column>
              <el-table-column prop="num" label="销量"> </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  name: "indexView",
  components: {},
  data() {
    return {
      tableData: [
        {
          title: "小天鹅（LittleSwan）滚筒洗衣机...",
          num: 9
        },
        {
          title: "小天鹅（LittleSwan）滚筒洗衣机...",
          num: 9
        },
        {
          title: "小天鹅（LittleSwan）滚筒洗衣机...",
          num: 9
        },
        {
          title: "小天鹅（LittleSwan）滚筒洗衣机...",
          num: 9
        },
        {
          title: "小天鹅（LittleSwan）滚筒洗衣机...",
          num: 9
        }
      ]
    }
  },
  created() {},
  mounted() {
    this.getEcharts()
  },
  methods: {
    getEcharts() {
      var myChart = echarts.init(document.getElementById("echarts"))
      var option

      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "直接访问",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "Total",
            label: {
              show: true,
              position: "top"
            },
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }

      option && myChart.setOption(option)
    }
  }
}
</script>
<style scoped lang="scss">
.card {
  display: flex;
  align-items: center;
  .icon {
    width: 40px;
    text-align: center;

    .text-white {
      line-height: 40px;
      color: #fff;
      font-size: 26px;
    }
  }
  .title {
    margin-left: 10px;
    h3 {
      font-weight: 400;
      font-size: 1.5rem;
      margin-bottom: 5px;
    }
    p {
      color: #999;
      font-size: 12px;
    }
  }
}
.bg-one {
  background-color: #007bff;
}
.bg-two {
  background-color: #28a745;
}
.bg-there {
  background-color: #dc3545;
}
.bg-four {
  background-color: #ffc107;
}
#echarts {
  width: 465px;
  height: 270px;
}
.echartsBox {
  height: 370px;
}
.el-col-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 370px;
}
.el-button {
  color: teal;
}
.el-button:hover {
  color: teal;
}
.midTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #999;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .button {
    display: inline-block;
    margin-right: 20px;
    width: 100%;
    height: 70px;
    border: 0;
    background-color: #f8f9fa;
    h3 {
      font-weight: 400;
      font-size: 1.5rem;
      margin-bottom: 5px;
    }
    span {
      color: #999;
      font-size: 12px;
    }
  }
  :last-child {
    margin-right: 0;
  }
}
.media {
  display: flex;
  width: 100%;
  height: 73px;
  border: 1px solid #dee2e6;
  .left {
    width: 97px;
    background-color: #f8f9fa;
    text-align: center;
    line-height: 73px;
    border-right: 1px solid #dee2e6;
  }
  .right {
    width: calc(100% - 97px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .right-top {
      border-bottom: 1px solid #dee2e6;
    }
    div {
      width: 100%;
      height: 50%;
      padding: 7px 15px;
    }
  }
}
.media-botoom {
  margin-top: 15px;
}
</style>
