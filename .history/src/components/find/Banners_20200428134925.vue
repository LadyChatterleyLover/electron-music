<template>
  <div class="banner__active">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <div class="img">
          <img :src="item.imageUrl" alt />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import api from '../../http/api'
export default {
  name: '',
  props: {

  },
  components: {

  },
  data() {
    return {
      banners: []
    }
  },
  methods: {
    getBanners() {
      api.getBanners().then(res => {
        if (res.code === 200) {
          this.banners = res.banners
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getBanners()
  },
  watch: {

  },
  computed: {

  }
}
</script>

<style scoped lang='scss'>
.img {
  width: 100%;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>