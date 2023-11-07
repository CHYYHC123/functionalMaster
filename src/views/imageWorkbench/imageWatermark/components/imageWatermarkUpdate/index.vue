<template>
  <AppPage :showFooter="false">
    <div class="image_watermark_container">
      <div class="update_area">
        <div class="tip">
          <span>拖拽图片&粘贴图片&粘贴图片URL至此处</span>
          <span>支持JPG、JPEG、PNG、HEIC</span>
        </div>
        <div class="btton">
          <div class="btn" @click="selectImage">添加图片</div>
          <div class="btn" @click="selectFile">添加文件夹</div>
        </div>
        <input id="imgInput" ref="uploadRef" type="file" @change="handleImgChange" :multiple="true" />
        <input id="fileInput" ref="uploadRef" type="file" @change="handleFileChange" :multiple="true" webkitdirectory />

        <!-- <input type="file" id="file" style="display: none" @change="handleFile" />
        <button class="btn_color" @click="importBatch">批量导入</button> -->
      </div>
    </div>
  </AppPage>
</template>

<script setup lang="ts" name="imageWatermarkUpdate">
import { useImageWaterStore } from '@/store';
const imageWaterStore = useImageWaterStore();

const imgInput: any = ref(null);

// 点击选择图片按钮
const selectImage = () => {
  imgInput.value?.click();
};

const uploadRef: any = ref(null);
// 点击选择文件夹按钮
const selectFile = () => {
  uploadRef.value?.click();
};

// 处理单个图片文件
const handleImgChange = (event: Event) => {
  console.log('event', event);
  const file = (event.target as any)?.files[0];
  console.log('file', file);
  if (file?.type && file?.type?.include('image/')) {
    handleImg(file);
  }
};

// 处理文件夹
const handleFileChange = (event: Event) => {
  const file = (event.target as any)?.files;
  console.log('file', file);
  for (let i = 0; i < file.length; i++) {
    console.log('file[i]', file[i]);
    if (file[i]?.type && file[i]?.type?.include('image/')) {
      handleImg(file);
    }
  }
};

// 处理图片
let imgUrl = ref('');
const handleImg = (file: any) => {
  const reader = new FileReader();
  reader.onload = (e: any) => {
    const imgURL = e.target.result;
    imgUrl.value = imgURL;
    console.log('imgURL--', imgURL);
    let imgUrlList: any = [];
    imgUrlList?.push(imgUrl.value);
    imageWaterStore.setUpdateImgUrl(imgUrl.value);
  };
  reader.readAsDataURL(file);
};

//
// const arrayBufferToHexString = (arrayBuffer: any) => {
//   const uint8Array = new Uint8Array(arrayBuffer);
//   let hexString = '';
//   for (let i = 0; i < uint8Array.length; i++) {
//     const hex = uint8Array[i].toString(16).padStart(2, '0');
//     hexString += hex;
//   }

//   return hexString;
// };

//
// const readFileToArrayBuffer = (file: any) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     // 注册文件读取完成后的回调函数
//     reader.onload = function (event: any) {
//       const arrayBuffer = event.target?.result;
//       resolve(arrayBuffer);
//     };

//     // 读取文件内容到ArrayBuffer
//     reader.readAsArrayBuffer(file);
//   });
// };

// const importBatch = () => {
//   document.getElementById('file')?.click();
// };

// const handleFile = (event: Event) => {
//   const file = (event.target as any)?.files;
//   console.log('file', file);
// };
</script>

<style lang="scss" scoped>
.image_watermark_container {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.08);
  padding: 20px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  .update_area {
    border: 2px dashed #ebedf2;
    border-radius: 10px;
    width: 70%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all 0.3s ease-in-out;

    .tip {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: 14px;
      color: #000;
    }
    .btton {
      display: flex;
      align-items: center;
      margin-top: 50px;
      .btn {
        color: #fff;
        border: 1px solid #3b64f6;
        border-radius: 8px;
        width: 200px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #3b64f6;
        cursor: pointer;
        img {
          width: 25px;
          height: 25px;
          margin-right: 10px;
        }
      }
      .btn:nth-child(1) {
        margin-right: 40px;
      }
    }
  }
  .update_area:hover {
    border: 2px dashed #3b64f6;
  }

  #imgInput {
    display: none;
  }
  #fileInput {
    display: none;
  }
}
</style>
