<template>
  <div class="home__tab">
    <el-tabs v-model="activeName">
      <el-tab-pane label="个性推荐" name="1">
        <recommend></recommend>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="2">配置管理</el-tab-pane>
      <el-tab-pane label="主播电台" name="3">角色管理</el-tab-pane>
      <el-tab-pane label="排行榜" name="4">定时任务补偿</el-tab-pane>
      <el-tab-pane label="歌手" name="5">定时任务补偿</el-tab-pane>
    </el-tabs>
    
  </div>
</template>

<script>
import recommend from '../../components/find/recommend/Recommend'
export default {
  name: '',
  props: {
  },
  components: {
    recommend
  },
  data() {
    return {
      banners: [],
      activeName: '1'
    }
  },
  methods: {
    
  },
  mounted() {
    
  },
  watch: {

  },
  computed: {

  }
}
</script>

<style scoped lang='scss'>
</style>