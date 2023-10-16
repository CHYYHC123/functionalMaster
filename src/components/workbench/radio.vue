<template>
  <n-radio :checked="checkedValue === 'MP3'" value="MP3" name="basic-demo" @change="handleChange">
    <!-- <slot></slot> -->
    MP3
  </n-radio>
  <n-radio :checked="checkedValue === 'WAV'" value="WAV" name="basic-demo" @change="handleChange">
    <!-- <slot></slot> -->
    WAV
  </n-radio>
</template>

<script setup lang="ts" name="radio">
const checkedValue = ref<string>('MP3');
const handleChange = (e: Event) => {
  checkedValue.value = (e.target as HTMLInputElement).value;
};
</script>

<style lang="scss" scoped>
.n-radio {
  margin-right: 10px;
  :deep(.n-radio__dot) {
    background: #487ffb !important;
    // border: 1px solid #487ffb;
    box-shadow: 0px 0px transparent;
  }
  :deep(.n-radio__dot::before) {
    background: #fff !important;
    width: 6px;
    height: 6px;
    left: 5px;
    top: 5px;
  }
}
</style>
