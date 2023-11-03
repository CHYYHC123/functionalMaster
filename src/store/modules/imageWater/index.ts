import { defineStore } from 'pinia'
export const useImageWaterStore = defineStore('imageWaterStore', {
  state() {
    return {
      imgUrl:''
    }
  },
  getters: {
    updateImgUrl(): string {
      return this.imgUrl || ''
    },
  },
  actions: {
    setUpdateImgUrl(imgUrl:string){
      this.imgUrl = imgUrl
    }
  },
})