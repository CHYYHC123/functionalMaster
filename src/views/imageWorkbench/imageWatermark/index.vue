<template>
  <div class="image_workbench_contaner">
    <div v-if="imageWaterStore.updateImgUrl">
      <ImageWatermarkEdit></ImageWatermarkEdit>
    </div>
    <div v-else>
      <ImageWatermarkUpdate></ImageWatermarkUpdate>
    </div>
  </div>
</template>

<script setup lang="ts" name="imageWorkbench">
import { useImageWaterStore } from '@/store';
const imageWaterStore = useImageWaterStore();
import ImageWatermarkEdit from './components/imageWatermarkEdit/index.vue';
import ImageWatermarkUpdate from './components/imageWatermarkUpdate/index.vue';
</script>

<style scoped lang="scss">
.image_workbench_contaner {
}
</style>
