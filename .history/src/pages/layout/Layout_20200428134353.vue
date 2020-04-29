<template>
  <div>
    <el-container>
      <el-header height="50px">
        <nav-header></nav-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <nav-left></nav-left>
        </el-aside>
        <el-main class="flex a-center j-center">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import navHeader from '../../components/navHeader/NavHeader'
import navLeft from '../../components/navLeft/NavLeft'
export default {
  name: '',
  props: {
  },
  components: {
    navHeader,
    navLeft
  },
  data() {
    return {

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
.el-header {
  background: rgb(198, 47, 47);
  display: flex;
  align-items: center;
}
.el-aside {
  border-right: 1px solid #ccc;
  background: rgb(245, 245, 247);
}
.el-main {
  width: 1200px !important;
  height: calc(100vh - 50px);
  flex-shrink: 0;
}
</style>