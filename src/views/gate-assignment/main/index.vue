<template>
  <div class="container">
    <div class="main-left">
      <div
        v-for="item in items"
        :key="item.value"
        class="info"
      >
        <div class="total-info">
          <span class="bolder">{{ item.carNumber }}</span>
          <span>{{ item.second }}</span>
        </div>
        <div class="sub-info">
          <span>{{ $t("main.dashboard.chePaiHao") }}</span>
          <span class="blue-color">{{ item.plateNumber }}</span>
        </div>
        <div class="sub-info">
          <span>{{ $t("main.dashboard.qianXiangHao") }}</span>
          <span class="blue-color">{{ item.beforeNumber }}</span>
        </div>
        <div class="sub-info">
          <span>{{ $t("main.dashboard.houXiangHao") }}</span>
          <span class="blue-color">{{ item.afterNumber }}</span>
        </div>
      </div>
    </div>
    <div class="main-center">
      <div
        class="top"
      >
        <img
          :src="Gril1"
          alt="车"
          class="img"
        >
      </div>
      <div class="bottom">
        <div
          v-for="pic in pics"
          :key="pic.id"
          class="pic"
        >
          <img
            :src="pic.src"
            alt="车"
            class="img"
          >
        </div>
      </div>
    </div>
    <div class="main-right">
      <div class="title">
        {{ $t("main.gateAssignment.caiJiXinXi") }}
      </div>
      <div class="middle-container">
        <jm-form-item
          :value.sync="info.chePaiHao"
          :label="$t('main.gateAssignment.chePaiHao')"
          label-width="90px"
        />
        <jm-form-item
          :value.sync="info.chePaiHao"
          :label="$t('main.gateAssignment.shiBieChePaiHao')"
          label-width="90px"
        />
        <jm-form-item
          :value.sync="info.chePaiHao"
          :label="$t('main.gateAssignment.ICKaHao')"
          label-width="90px"
        />
        <jm-form-item
          :value.sync="info.chePaiHao"
          :label="$t('main.gateAssignment.chengZhong')"
          label-width="90px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Gril1 from "@/assets/pic/gril1.jpg";
import jmFormItem from "@/components/jm-form-item";

export default {
  components: {
    jmFormItem,
  },
  data() {
    return {
      Gril1,
      pics: [
        { id: 1, src: Gril1 },
        { id: 2, src: Gril1 },
        { id: 3, src: Gril1 },
        { id: 4, src: Gril1 },
        { id: 5, src: Gril1 },
      ],
      items: [
        {
          carNumber: "G120",
          second: "7分钟",
          plateNumber: "T334",
          beforeNumber: "ye12",
          afterNumber: "u303",
        },
        {
          carNumber: "G120",
          second: "7分钟",
          plateNumber: "T334",
          beforeNumber: "ye12",
          afterNumber: "u303",
        },
        {
          carNumber: "G120",
          second: "7分钟",
          plateNumber: "T334",
          beforeNumber: "ye12",
          afterNumber: "u303",
        },
        {
          carNumber: "G120",
          second: "7分钟",
          plateNumber: "T334",
          beforeNumber: "ye12",
          afterNumber: "u303",
        },
        {
          carNumber: "G120",
          second: "7分钟",
          plateNumber: "T334",
          beforeNumber: "ye12",
          afterNumber: "u303",
        },
        {
          carNumber: "G120",
          second: "7分钟",
          plateNumber: "T334",
          beforeNumber: "ye12",
          afterNumber: "u303",
        },
        {
          carNumber: "G120",
          second: "7分钟",
          plateNumber: "T334",
          beforeNumber: "ye12",
          afterNumber: "u303",
        },
        {
          carNumber: "G120",
          second: "7分钟",
          plateNumber: "T334",
          beforeNumber: "ye12",
          afterNumber: "u303",
        },
      ],
      info: {
        chePaiHao: "rewr",
      },

    };
  },
};
</script>

<style lang="scss" scoped>
.container{
  flex-grow: 1;
  display: flex;
  margin-top: vh(15);
  .main-left {
    width: vw(280);
    margin-bottom: vh(20);
    max-height: vh(928);
    /** height: calc(100vh - 10px); */
    overflow-y: scroll;
    .info {
      padding: vh(20) vw(20);
      margin-top: vh(20);
      @extend %addCornerBorder;
      .total-info{
        display: flex;
        justify-content: space-between;
        .bolder{
          font-weight: bolder;
        }
      }
      .sub-info{
        padding: 0 vw(10);
        margin-top: vh(10);
        display: flex;
        justify-content: start;
        .blue-color{
          color: #0ab0f6;
          margin-left: vw(20);
        }
      }
    }
  }
  .main-center{
    width: vw(1050);
    height: vh(928);
    padding: vh(8) vw(8);
    border: 1px solid $primaryBorder;
    margin: 0 vw(10);
    box-sizing: border-box;

    .top{
      height: vh(774);
      margin-bottom: vh(8);
      .img{
        width: 100%;
        height: 100%;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      .pic{
        width: vw(162);
        height: vh(125);
        .img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .main-right{
    @extend %addCornerBorder;
    width: vw(278);
    height: vh(928);
    padding: vh(20) vw(20);
    .title{
      font-weight: bold;
    }
    .middle-container{
      padding: vh(20) vw(10);

    }
  }
}
</style>
