import { deepEqual } from 'assert';
<template>
  <div class="slider-container">
    <n-slider v-model:value="value" :min="min" :max="max" />
    <span class="slider-value">{{ value }}</span>
    <img src="@/assets/images/refresh_icon.png" alt="" />
  </div>
</template>

<script setup lang="ts" name="slider">
interface Props {
  value: number;
  min: number;
  max: number;
}
const props = withDefaults(defineProps<Props>(), {
  value: 0
});

const value = ref<number>(0);
value.value = props.value;
watch(
  () => props.value,
  () => {
    value.value = props.value;
  }
);
</script>

<style scoped lang="scss">
.slider-container {
  display: flex;
  align-items: center;
}
.n-slider {
  width: 200px !important;
  .n-slider-handle {
    display: none;
  }
  :deep(.n-slider-rail) {
    .n-slider-rail__fill {
      background-color: #3b64f6 !important;
    }
    .n-slider-handle-wrapper {
      width: 15px;
      height: 15px;
      border: 2px solid #3b64f6;
      border-radius: 50%;
      transition: all 0.05s linear;
      .n-slider-handle {
        width: 11px;
        height: 11px;
      }
    }

    .n-slider-handle-wrapper:hover {
      width: 18px;
      height: 18px;
      border: 2.5px solid #3b64f6;
      .n-slider-handle {
        width: 13px;
        height: 13px;
      }
    }
  }
}
.slider-value {
  color: #505361;
  font-size: 12px;
  display: inline-block;
  margin-left: 10px;
  width: 10px;
}
img {
  width: 15px;
  height: 15px;
  margin-left: 10px;
  cursor: pointer;
}
</style>
