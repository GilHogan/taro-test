<template>
  <view class="index">
    <nut-toast
      :msg="toastInfo.msg"
      v-model:visible="toastInfo.show"
      :type="toastInfo.type"
      :cover="toastInfo.cover"
    />
    <view class="product">
      <view class="product__title">选择票的类型</view>
      <nut-cell class="product__item" @click="selectProduct">
        <div class="product__item__title">普通票 10元</div>
        <div>游玩一次 按顺序排队</div>
      </nut-cell>
      <nut-cell class="product__item">
        <div class="product__item__title">VIP票 50元</div>
        <div>游玩60分钟 优先排队</div>
      </nut-cell>
    </view>
    <view class="pay">
      <view class="pay__quantity">
        <div>购买数量</div>
        <nut-inputnumber v-model="quantity" max="5" button-size="20" />
      </view>
      <nut-button block type="primary" class="pay-button">支付</nut-button>
      <div class="pay__record" @click="clickPayRecord">购买记录</div>
    </view>
  </view>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted } from "vue";
import "@/assets/styles/index/index.scss";

export default {
  name: "Index",
  components: {},

  setup() {
    const dataMap = reactive({
      code: "",
      quantity: 1,
      toastInfo: {
        msg: "",
        type: "text",
        show: false,
        cover: false,
      },
      openToast: (type: string, msg: string, cover: boolean = false) => {
        dataMap.toastInfo.show = true;
        dataMap.toastInfo.msg = msg;
        dataMap.toastInfo.type = type;
        dataMap.toastInfo.cover = cover;
      },
      selectProduct: () => {},
      clickPayRecord: () => {},

      handleClick() {},
    });

    onMounted(() => {});

    return {
      ...toRefs(dataMap),
    };
  },
};
</script>
