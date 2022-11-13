<template>
    <div class="row">
      <div class="col-lg-12">
        <div class="page-content">
          <!-- 面包屑 -->
          <div class="Nbreadcrumb" style="margin-top: 10px;margin-bottom: 0px;margin-left:20px;">
            <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">返回首页</el-breadcrumb-item>
            <el-breadcrumb-item>小说列表</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <!-- ***** Most Popular Start ***** -->
          <div class="most-popular" style="margin-top: 20px;">
            <div class="row">
              <div class="col-lg-12">
                <div class="heading-section">
                  <h4><em>小说作品</em></h4>
                </div>
                <div class="row">
                  <div class="col-lg-2 col-sm-6" v-for="(item, index) in books" :key="index">
                    <div class="novel-content" @click="novelDetail(item.id)">
                      <!-- 图片url -->
                      <img :src='item.img' alt="" />
                      <!-- 小说名 -->
                      <h6>{{item.novel_name}}</h6>
                      <!-- 类别名 -->
                      <h6><i>{{item.category_name}}</i> 作者：{{item.author_name}}</h6>
                    </div>
                  </div>
                      <!-- 分页 -->
                      <el-pagination 
                      small
                      :background="backgroud"
                      :page-size="pageSize"
                      :total="total"
                      class="mt-4"
                      layout="prev, pager, next" />
                </div>
              </div>
            </div>
          </div>
          <!-- ***** Most Popular End ***** -->
        </div>
      </div>
    </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { novelListApi } from "../../../api/novelApi";
export default {
  name: "BookUpdateRank",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      books: [],
      // 分页设置
      backgroud: true,
      total: 100,
      pageSize: 10,
    });
    
    const search = () => {
      novelListApi().then(res=>{
          console.log(res);
          state.books = res.data
      })
    }
    const novelDetail = (novelId) => {
      router.push({ path: `/novel/${novelId}` });
    };
    search()
    return {
      ...toRefs(state),
      novelDetail,
      search,
    };
  },
};
</script>

<style scoped>
.novel-div {
    margin-top: 100px;
}
.page_content {
    margin-top: 20px;
    text-align: center;
}
.input_box {
    width: 300px;
    margin-left:auto;
    margin-right:auto;
}
.novelForm {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left:auto;
    margin-right:auto;
}
.novelForm img {
    height: 100px;
    width: 150px;
}
.novelBox{
    margin-left:auto;margin-right:auto;
    border:1px solid rgb(0, 174, 255)
}
</style>