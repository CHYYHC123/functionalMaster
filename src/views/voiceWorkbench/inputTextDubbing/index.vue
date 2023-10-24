<template>
  <AppPage :showFooter="false">
    <div class="text-to-speech-container">
      <div class="text-input">
        <textarea id="textToSpeech" autocomplete="off"></textarea>
        <div class="bottom">
          <div class="left">
            <div class="btn">文案模版</div>
          </div>
          <div class="right">
            <span>0</span>
            <span>/</span>
            <span>30000</span>
          </div>
        </div>
      </div>
      <div class="set-parameter">
        <div class="title">设置参数</div>
        <ul class="dubbing-anchor">
          <li>
            <div class="left">配音主播</div>
            <div class="right">
              <span>知妙_多情感，多情感女声</span>
            </div>
          </li>
          <li>
            <div class="left">主播音量</div>
            <div class="right">
              <Slider :max="10" :min="0" :value="5"></Slider>
            </div>
          </li>
          <li>
            <div class="left">主播语速</div>
            <div class="right">
              <Slider :max="20" :min="0" :value="10"></Slider>
              <div class="tip">(调整语速可使您发声更加自然！)</div>
            </div>
          </li>
        </ul>
        <ul class="background-music dubbing-anchor">
          <li>
            <div class="left">背景音乐</div>
            <div class="right">
              <span>请选择</span>
            </div>
          </li>
          <li>
            <div class="left">背景音量</div>
            <div class="right">
              <Slider :max="10" :min="0" :value="5"></Slider>
            </div>
          </li>
        </ul>
        <ul class="delay dubbing-anchor">
          <li></li>
          <li>
            <div class="left">文本延迟播报</div>
            <div class="right">
              <Slider :max="10" :min="0" :value="0"></Slider>
            </div>
          </li>
          <li>
            <div class="left">文本语音结束后背景音乐继续播放</div>
            <div class="right">
              <Slider :max="10" :min="0" :value="0"></Slider>
            </div>
          </li>
        </ul>
      </div>
      <div class="bottom-output">
        <div class="left">
          <span class="title">输出格式</span>
          <Radio></Radio>
        </div>
        <div class="right">
          <div class="btn">
            <img src="@/assets/images/erji.png" alt="" />
            <span>试听前50字</span>
          </div>
          <div class="btn1 btn">
            <img src="@/assets/images/switch.png" alt="" />
            <span>立即转换</span>
          </div>
        </div>
      </div>
    </div>
  </AppPage>
</template>

<script setup lang="ts" name="textToSpeech"></script>

<style scoped lang="scss">
.text-to-speech-container {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.08);
  padding: 20px;
  box-sizing: border-box;
  .text-input {
    width: 100%;
    textarea {
      padding: 5px 4px;
      border-radius: 8px;
      width: 100%;
      background: #f5f7fa;
      min-height: 176px;
    }
    .bottom {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 10px;
      .left {
        .btn {
          width: 80px;
          height: 28px;
          background: #e9eaed;
          border-radius: 4px 4px 4px 4px;
          color: #1a72f6;
          text-align: center;
          line-height: 28px;
          font-size: 14px;
          cursor: pointer;
        }
      }
      .right {
        width: 100px;
        text-align: right;
      }
    }
  }
  .set-parameter {
    margin-top: 20px;
    .title {
      color: #000;
      font-size: 16px;
      font-weight: 600;
      margin-top: 16px;
    }
    ul.dubbing-anchor {
      display: flex;
      margin-top: 12px;
      li {
        display: flex;
        align-items: center;
        margin-right: 20px;
        .left {
          color: #505361;
          font-size: 14px;
          margin-right: 8px;
        }
      }
      li:nth-child(1) {
        .right {
          width: 120px;
          padding-right: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break: break-all;
          line-height: 28px;
          padding-left: 13px;
          box-sizing: border-box;
          border: 1px solid #c9cacc;
          border-radius: 16px;
          font-size: 12px;
          cursor: pointer;
          position: relative;
          span::after {
            content: '';
            width: 8px;
            height: 8px;
            position: absolute;
            top: 13px;
            right: 12px;
            display: inline-block;
            border-left: 1px solid #999;
            border-bottom: 1px solid #999;
            transform: translateY(-50%) rotate(-135deg);
          }
        }
      }
      li:nth-child(3) {
        .right {
          display: flex;
          align-items: center;
          .tip {
            margin-left: 15px;
          }
        }
      }
    }
    ul.background-music {
      margin: 15px 0;
    }
    ul.delay {
      li:nth-child(1) {
        display: none;
      }
    }
  }
  .bottom-output {
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      .title {
        color: #000;
        font-size: 14px;
        margin-right: 10px;
      }
    }
    .right {
      display: flex;
      align-items: center;
      .btn {
        border: 1px solid #3b64f6;
        color: #3b64f6;
        border-radius: 8px;
        width: 220px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 25px;
          height: 25px;
          margin-right: 10px;
        }
      }
      .btn1 {
        margin-left: 16px;
        background: #3b64f6;
        color: #fff;
      }
    }
  }
}
</style>
