<template>
    <div>
        <vue3VideoPlay v-bind="options" :poster="poster" />
    </div>
</template>

<script>
import "vue3-video-play/dist/style.css";
import  vue3VideoPlay from "vue3-video-play";
import { reactive, toRefs } from "vue";

export default {
  components: {
    vue3VideoPlay,
  },
  props:['video_url','poster'],
  setup(props){
  let data = reactive({
    options:{
      width: "800px", //播放器高度
      height: "450px", //播放器高度
      color: "#409eff", //主题色
      title: "", //视频名称
      //src: require(''), //视频源 src: props.video_url
      muted: false, //静音
      webFullScreen: false,
      speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
      autoPlay: false, //自动播放
      loop: false, //循环播放
      mirror: false, //镜像画面
      ligthOff: true, //关灯模式
      volume: 0.3, //默认音量大小
      control: true, //是否显示控制
      controlBtns: [
        "audioTrack",
        "quality",
        "speedRate",
        "volume",
        "setting",
        "pip",
        "pageFullScreen",
        "fullScreen",
      ], //显示所有按钮,
    },
    poster:props.poster
});

    return {
      ...toRefs(data)
    }
  }
};
</script>