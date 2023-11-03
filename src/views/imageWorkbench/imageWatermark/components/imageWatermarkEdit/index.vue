<template>
  <div class="watermark_area_container">
    <div class="left">
      <div class="top">
        <img src="@/assets/images/back.png" alt="" />
        <span>返回</span>
      </div>
      <div class="bottom">
        <ul class="left_img_list">
          <li class="add">
            <img src="@/assets/images/add.png" alt="" />
            <span>添加文件</span>
          </li>
          <li>
            <img class="close" src="@/assets/images/close.png" alt="" />
            <img class="demo" :src="imageWaterStore.updateImgUrl" alt="" />
          </li>
        </ul>
        <div class="img_show_area">
          <img :src="imageWaterStore.updateImgUrl" alt="" />
          <div class=""></div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="title">添加水印样式</div>
      <div class="btn-list">
        <div class="btn" @click="addTextWatermark">添加文字水印</div>
        <div class="btn" @click="addImageWatermark">上传图片水印</div>
      </div>
      <div class="title">添加模版水印</div>
      <ul class="watermark_list">
        <li v-for="item in 50" :key="item">
          <img src="https://xiuxiu-rt.oss-cn-beijing.aliyuncs.com/sys/tpl_material_widget/preview_img/2023-10-18/fabe709bafb84166e748a7dcb2d70c8d.png" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts" name="imageWatermarkEdit">
import { useImageWaterStore } from '@/store';
const imageWaterStore = useImageWaterStore();

// 点击添加文字水印按钮
const addTextWatermark = () => {};

// 点击上传图片水印按钮
const addImageWatermark = () => {};
</script>

<style lang="scss" scoped>
.watermark_area_container {
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.08);
  padding: 20px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  .left {
    background: #ffffff;
    border-radius: 8px;
    width: 80%;
    .top {
      display: flex;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
        margin-right: 8px;
        cursor: pointer;
      }
      span {
        font-size: 14px;
        color: #000;
      }
    }
    .bottom {
      margin-top: 20px;
      display: flex;
      .left_img_list {
        li {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid #e6e8eb;
          width: 120px;
          height: 90px;
          border-radius: 6px;
          margin-bottom: 12px;
        }
        li.add {
          display: flex;
          align-items: center;
          display: flex;
          flex-direction: column;
          img {
            width: 24px;
            height: 24px;
          }
          span {
            font-size: 12px;
            color: #848b96;
          }
        }
        li {
          position: relative;
          img.close {
            background: #e6e8eb;
            width: 12px;
            height: 12px;
            border: 1px solid;
            border-radius: 50%;
            opacity: 0.3;
            position: absolute;
            right: -6px;
            top: -6px;
            z-index: 10;
            cursor: pointer;
          }
          img.demo {
            height: calc(100% - 20px);
          }
        }
      }
      .img_show_area {
        width: calc(100% - 20%);
        background: #fafafa;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 3%;
        border-radius: 10px;
        padding: 10px 0;
        height: 600px;
        img {
          // width: 300px;
        }
      }
    }
  }
  .right {
    width: 20%;
    .title {
      font-size: 14px;
      color: #000;
    }
    .btn-list {
      margin-top: 12px;
      margin-bottom: 24px;
      .btn {
        background: #ffffff;
        font-size: 14px;
        color: #000;
        border: 1px solid #e6e8eb;
        padding: 8px 20px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
      }
      .btn:nth-child(2) {
        margin-top: 12px;
      }
      .btn:hover {
        background: #f6f6f6;
      }
    }
    ul.watermark_list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin-top: 10px;
      overflow: auto;
      max-height: 500px;
      padding-bottom: 40px;
      li {
        border: 1px solid #e6e8eb;
        padding: 5px;
        border-radius: 4px;
        margin-bottom: 10px;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      li:nth-child(3n) {
        margin-right: 0px;
      }
    }
  }
}
</style>
