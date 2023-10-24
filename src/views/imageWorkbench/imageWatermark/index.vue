<template>
  <AppPage :showFooter="false">
    <div class="image_watermark_container" v-show="0">
      <div class="update_area" v-show="0">
        <div class="tip">
          <span>拖拽图片&粘贴图片&粘贴图片URL至此处</span>
          <span>支持JPG、JPEG、PNG、HEIC</span>
        </div>
        <div class="btton">
          <div class="btn" @click="selectImage">添加图片</div>
          <div class="btn">添加文件夹</div>
        </div>
        <input id="fileInput" type="file" @change="handleImgChange1" />
      </div>
    </div>
    <div class="watermark_area_container" v-show="1">
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
              <img class="demo" src="@/assets/images/demo.jpeg" alt="" />
            </li>
          </ul>
          <div class="img_show_area">
            <img src="@/assets/images/demo.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div class="right">
        <div class="title">添加水印样式</div>
        <div class="btn-list">
          <div class="btn">添加文字水印</div>
          <div class="btn">上传图片水印</div>
        </div>
        <div class="title">添加模版水印</div>
        <ul class="watermark_list">
          <li></li>
        </ul>
      </div>
    </div>
  </AppPage>
</template>

<script setup lang="ts" name="imageWatermark">
let imgUrl = ref('');
const selectImage = () => {
  console.log('233');
};

const handleImgChange = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;
  const fileList: any = inputElement.files;
  console.log('fileList', fileList[0]);
  if (fileList[0]) {
    readFileToArrayBuffer(fileList[0])
      .then(arrayBuffer => {
        const hexString = arrayBufferToHexString(arrayBuffer);
        // setFileContent(hexString);

        const blob = new Blob([hexString], { type: 'image/jpeg' });
        const imageURL = URL.createObjectURL(blob);
        console.log('hexString', hexString);
        imgUrl.value = imageURL;
      })
      .catch(error => {
        console.error('文件读取失败:', error);
      });
  } else {
    console.log('请选择一个文件');
  }
};

const handleImgChange1 = (event: any) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e: any) => {
    const imgURL = e.target.result;
    const previewImage: any = document.getElementById('previewImage');
    previewImage.src = imgURL;
  };

  reader.readAsDataURL(file);
};

//
const arrayBufferToHexString = (arrayBuffer: any) => {
  const uint8Array = new Uint8Array(arrayBuffer);
  let hexString = '';
  for (let i = 0; i < uint8Array.length; i++) {
    const hex = uint8Array[i].toString(16).padStart(2, '0');
    hexString += hex;
  }

  return hexString;
};

//
const readFileToArrayBuffer = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    // 注册文件读取完成后的回调函数
    reader.onload = function (event: any) {
      const arrayBuffer = event.target?.result;
      resolve(arrayBuffer);
    };

    // 读取文件内容到ArrayBuffer
    reader.readAsArrayBuffer(file);
  });
};
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

  #fileInput {
    // display: none;
  }
}
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
    // padding: 20px;
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
        img {
          width: 300px;
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
      }
      .btn:nth-child(2) {
        margin-top: 12px;
      }
    }
  }
}
</style>
