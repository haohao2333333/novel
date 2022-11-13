<template>

<div class="novel">
    <!-- 面包屑 -->
    <div class="Nbreadcrumb">
      <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">返回首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/novel' }">小说列表</el-breadcrumb-item>
      <el-breadcrumb-item :to="{}" @click="back">小说章节</el-breadcrumb-item>
      <el-breadcrumb-item>小说详情</el-breadcrumb-item>
      </el-breadcrumb>
  </div>
  <!-- 小说内容 -->
  <div :v-show="novel" class="novel-content">
    <h3 class="h3" style="margin: 20px">{{novel.chapter_name}}</h3>
    <div v-html="novel.content" class="novelContent">
      
    </div>
  </div>
</div>

</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { reactive, toRefs, onMounted, onBeforeUnmount, onUnmounted } from "vue";
import { findByNovelChapterApi } from '../../../api/novelApi'

export default {
    name: "novelContent",
    setup(){
        const route = useRoute();
        const router = useRouter();
        const state = reactive({
            novelId: "",
            novel: {},
        }); 
        const novelId = route.params.id;
        const findByNovelChapter = () =>{
            findByNovelChapterApi(route.params.chapterId).then(res=>{
                console.log("用户数据",res);
                state.novel = res.data;
            })
        }
        // 返回
        const back = () => {
            router.go(-1);
        }
        findByNovelChapter()
        return {
            ...toRefs(state),
            findByNovelChapter,
            back
        }
    }
  }

</script>
  
<style lang="less" scoped>
.novel {
    height: 100vh auto;
    background-color: #fff;
    text-align: center;
    width: 100%;
}
.novel .novel-content {
  margin-top: 20px;
  text-align: center;
  width: 100%;
}
.novel .novel-content .novelContent {
  margin-top: 30px;
}
</style>
  