<template>
        <div class="row">
      <div class="col-lg-12">
        <div class="page-content">
          <!-- ***** Banner Start ***** -->
          <div class="main-banner">
            <div class="row">
              <div class="col-lg-7">
                <div class="header-text">
                  <h6>欢迎进入 影视模块</h6>
                  <h4><em>浏览</em> 我们的热门内容</h4>
                  <div class="main-button">
                    <router-link to="/index">点我浏览</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- ***** Banner End ***** -->
              <!-- 面包屑 -->
              <div class="Nbreadcrumb" style="margin-top: 20px;margin-bottom: 0px;margin-left:20px;">
                <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item :to="{ path: '/' }">返回首页</el-breadcrumb-item>
                <el-breadcrumb-item>影视列表</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
          <!-- ***** Most Popular Start ***** -->
          <div class="most-popular" style="margin-top: 20px;">
            <div class="row">
              <div class="col-lg-12">
                <div class="heading-section">
                  <h4><em>影视作品</em></h4>
                </div>
                <div class="row">
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


export default {
  name: "movieList",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const state = reactive({

      // 分页设置
      backgroud: true,
      total: 100,
      pageSize: 10,
    });
    return {
      ...toRefs(state)
    }
  }
}

</script>