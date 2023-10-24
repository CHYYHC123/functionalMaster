<template>
  <div>
    <audio ref="audioPlayer" :src="currMp3Url" controls controlslist="nodownload" style="width: 100%"></audio>
  </div>
</template>

<script setup lang="ts">
let currMp3Url = ref('');
// let currMp3Buffer = Buffer.alloc(0);
const str =
  '<speak xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" xmlns:emo="http://www.w3.org/2009/10/emotionml" version="1.0" xml:lang="en-US"><voice name="zh-CN-XiaoxiaoNeural"><mstts:express-as  style="Default"><prosody rate="0%" pitch="0%">你好啊\n今天天气怎么样?</prosody></mstts:express-as></voice></speak>';
const encoder = new TextEncoder();
const data = encoder.encode(str);
console.log(data);
// const svlob = new Blob([mp3buffer]);
// this.currMp3Url = URL.createObjectURL(svlob);
const svlob = new Blob([data]);
currMp3Url.value = URL.createObjectURL(svlob);
console.log('currMp3Url.value', currMp3Url.value);
</script>

<style scoped></style>
