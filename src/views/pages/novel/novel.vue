<template>
    <div class="novel">
        <!-- 面包屑 -->
        <div class="Nbreadcrumb">
            <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">返回首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/novel' }">小说列表</el-breadcrumb-item>
            <el-breadcrumb-item>小说章节</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- 小说内容 -->
        <div class="novelChapterList">
            <!-- 小说简介 -->            
            <div class="novelDesc" v-show="novel">
                <img :src='novel.img' /><br />
                <h2 class="h2" style="margin-top: 20px;color: black;">{{novel.novel_name}}</h2>
                <p>作者: {{novel.author_name}}</p>
                <p>类型: {{novel.category_name}}</p>
            </div>
            <!-- 小说章节 -->
            <div class="novelChapter">
                <h3 class="h3" style="color: black;">小说章节</h3>
                <div class="novel-chapter col-lg-3 col-sm-6"  v-for="novel in novels" :key="novel.id">
                    <div class="item"  @click="findByChapter(novel.novel_id,novel.id)">
                    <h4 class="h4" style="color: black;">{{novel.chapter_name}}</h4>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import {useRoute,useRouter} from 'vue-router'
import { reactive, onMounted, computed, toRefs, nextTick,onUpdated } from 'vue'
import { novelChapterListByIdApi,novelByIdApi } from '../../../api/novelApi'

export default {
    name: "book",
    setup(){
        const route = useRoute();
        const router = useRouter();
        const state = reactive({
            novel: {},
            novels: {},
            novelId: "",
        });
        const novelChapterListById = () =>{
            const { id } = route.params
            const { novelId } = route.params
            novelChapterListByIdApi(id).then(res=>{
                console.log("用户数据",res);
                state.novels = res.data;
                // console.log(data.novels);
            })
        }
        const novelById = () => {
            const { id } = route.params
            novelByIdApi(id).then(res=>{
                console.log("用户数据",res);
                state.novel = res.data
            })
        }
        // 根据章节跳转内容 
        const findByChapter = (novelId,chapterId) =>{
            router.push({ path: `/novel/${novelId}/${chapterId}` })
        }
        novelChapterListById()
        novelById()
        return {
            ...toRefs(state),
            novelChapterListById,
            novelById,
            findByChapter,
        }
    }
}


</script>

<style lang="less" scoped>
html, body {
    height: 100vh auto;
    background-color: #fff;
    text-align: center;
}
.novel {
    height: 100vh auto;
    background-color: #fff;
    text-align: center;
}
.novel .Nbreadcrumb {
    margin-left: 20px;
    margin-bottom: 20px;
}
.novelChapterList .novelDesc {
    width: 100%;
}
.novelChapterList .novelDesc img{
    height: 200px;
    width: 150px;

}
.novelChapterList .novelChapter {
    margin-top: 20px;
    width: 100%;
}
.novelChapterList .novelChapter .novel-chapter {
    width: 100%;
}
</style>
  