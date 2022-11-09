<template>
    <div class="novel-chapter">
        <!-- 面包屑 -->
        <div class="Nbreadcrumb" style="margin-bottom: 20px;margin-top:20px;">
            <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">返回首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/novel' }">小说列表</el-breadcrumb-item>
            <el-breadcrumb-item>小说章节</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- 小说内容 -->
        <ul class="col-lg-3 col-sm-6" v-for="novel in novels" :key="novel.id"  @click="findByNid(novel)">
            <li class="item">
                <h3>小说名：{{novel.name}}</h3>
            </li>
        </ul>
    </div>
</template>

<script>
import {useRoute,useRouter} from 'vue-router'
import { reactive, onMounted, computed, toRefs, nextTick,onUpdated } from 'vue'
import { novelByIdApi, } from '../../../api/novelApi'

export default {
    name: "book",
    setup(){
        const route = useRoute();
        const router = useRouter();
        const state = reactive({
            novel: {},
            novels: [],
        });
        const findById = () =>{
            const { id } = route.params
            novelByIdApi(id).then(res=>{
                // console.log("用户数据",res);
                data.novels = res.data
                console.log(data.novels);
            })
        }
        // 根据章节跳转内容 
        const findByNid = (novel) =>{
            router.push({ path: `/novels-content/${novel.id}` })
        }
        findById()
        return {
            ...toRefs(state),
            findById,
            findByNid
        }
    }
}


</script>
  
<style>

</style>
  