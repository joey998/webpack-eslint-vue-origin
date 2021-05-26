<template>
  <div class="container gate-assignment_container">
    <div class="main-left">
      <!-- <div
        v-for="item in items"
        :key="item.value"
        class="info"
      >
        <div class="info-initial"> -->
      <JmBgContainer
        v-for="item in items"
        :key="item.value"
        class="info"
        padding="10px"
        :on-hover="true"
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
      </JmBgContainer>
      <!-- </div>
      </div> -->
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
      <JmBgContainer padding="1px">
        <div class="main-right-container">
          <div class="title">
            {{ $t("main.gateAssignment.caiJiXinXi") }}
          </div>
          <div class="middle-container">
            <!-- <jm-form-item
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
        /> -->
            <div class="jm-form-item">
              <div
                class="jm-form-item__label"
              >
                {{ $t("main.gateAssignment.chePaiHao") }}
              </div>
              <div
                class="jm-form-item__value"
              >
                <input v-model="info.chePaiHao">
              </div>
            </div>
            <div class="jm-form-item">
              <div
                class="jm-form-item__label"
              >
                {{ $t("main.gateAssignment.shiBieChePaiHao") }}
              </div>
              <div
                class="jm-form-item__value"
              >
                <input v-model="info.shiBieChePaiHao">
              </div>
            </div>
            <div class="jm-form-item">
              <div
                class="jm-form-item__label"
              >
                {{ $t("main.gateAssignment.ICKaHao") }}
              </div>
              <div
                class="jm-form-item__value"
              >
                <input v-model="info.ICKaHao">
              </div>
            </div>
            <div class="jm-form-item">
              <div
                class="jm-form-item__label"
              >
                {{ $t("main.gateAssignment.chengZhong") }}
              </div>
              <div
                class="jm-form-item__value"
              >
                <input v-model="info.chengZhong">
              </div>
            </div>

            <div class="beaf-box">
              <div class="label">
                {{ $t("main.gateAssignment.qianXiang") }}
              </div>
              <div class="value">
                <textarea v-model="info.qianXiang" />
              </div>
            </div>
            <div class="jm-button damaged">
              添加残损
            </div>
            <div class="beaf-box">
              <div class="label">
                {{ $t("main.gateAssignment.houXiang") }}
              </div>
              <div class="value">
                <textarea v-model="info.houXiang" />
              </div>
            </div>
            <div class="jm-button damaged">
              添加残损
            </div>
            <div class="jm-button jm-button-light status">
              {{ $t("main.gateAssignment.chaKanZuoYe") }}
            </div>
            <div class="jm-form-item">
              <div
                class="jm-form-item__label"
              >
                {{ $t("main.gateAssignment.lvXingLeiXing") }}
              </div>
              <div
                class="jm-form-item__value"
              >
                <input v-model="info.lvXingLeiXing">
              </div>
            </div>
            <div class="beaf-box">
              <div class="label">
                {{ $t("main.gateAssignment.lvXingJieGuo") }}
              </div>
              <div class="value">
                <textarea v-model="info.lvXingJieGuo" />
              </div>
            </div>
            <div class="beaf-box">
              <div class="label">
                {{ $t("main.gateAssignment.lvYouLeiXing") }}
              </div>
              <div class="value">
                <textarea v-model="info.lvYouLeiXing" />
              </div>
            </div>
            <div class="jm-button jm-button-light status">
              {{ $t("main.gateAssignment.chaKanZuoYe") }}
            </div>
            <div>
              <span>{{ $t("main.gateAssignment.jiaRuFangJian") }}</span>
              <span>ffsd</span>
            </div>
          </div>
        </div>
      </JmBgContainer>
    </div>
  </div>
</template>

<script>
import Gril1 from "@/assets/pic/gril1.jpg";
import JmBgContainer from "@/components/jm-bg-container";
import request from "@/utils/request";

export default {
  components: {
    // jmFormItem,
    JmBgContainer,
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
        shiBieChePaiHao: "3333",
        ICKaHao: "fdsafs",
        chengZhong: "fsdaw34234",
        qianXiang: "前箱",
        houXiang: "后箱",
        lvXingLeiXing: "旅行类型",
        lvXingJieGuo: "旅行结果",
        lvYouLeiXing: "旅游类型",
        jiaRuFangJian: "已加入房间",
      },

    };
  },
  mounted() {

  },
};
</script>

<style lang="scss">
  .gate-assignment_container{
    .main-left{
      .info:hover{
        .bg-container{
          background-color: #0c3f74;
        }
      }
    }
  }
</style>

<style lang="scss" scoped>
.container{
  flex-grow: 1;
  display: flex;
  margin-top: vh(15);
  .main-left {
    width: vw(280);
    margin-bottom: vh(20);
    padding-right: vw(3);
    max-height: vh(928);
    /** height: calc(100vh - 10px); */
    overflow-y: scroll;
    .info {
      &:nth-of-type(1) {
        margin-top: 0;
      }
      margin-top: vh(20);
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
    width: vw(278);
    height: vh(928);
    font-size: vh(14);
    .main-right-container{
      padding: vh(20) vw(20);

      .title{
        font-size: vh(17);
        font-weight: bold;
      }
      .middle-container{
        padding: vh(20) 0 vh(20) vw(10);
        .jm-form-item{
          margin-bottom: vh(10);
          display: flex;
          justify-content: space-between;
          align-items: center;
          .jm-form-item__label{
            width: vw(90);
            flex-shrink: 0;
          }
          .jm-form-item__value{
            input{
              padding: vh(4) vw(4);
              width: 100%;
              height: vh(28);
              border: 1px solid $primaryBorder;
              background: $primaryBackground;
              color: white;
              outline: none;
              box-sizing: border-box;
            }
          }
        }
        .beaf-box{
          margin-top: vh(15);
          .label {
            margin-bottom: vh(8);
          }
          .value{
            textarea{
              line-height: vh(22);
              padding: vh(5) vw(5);
              resize: none;
              width: 100%;
              height: vh(70);
              background: $primaryBackground;
              color: white;
              outline: none;
              border: 1px solid $primaryBorder;
              box-sizing: border-box;
            }
          }
        }
        .status{
          margin-top: vh(10);
          margin-bottom: vh(15);
          height: vh(28);
        }
        .damaged{
          margin-top: vh(8);
        }
      }

    }
  }
}
</style>
