<template>
  <div class="banner__active">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <div class="img">
          <img :src="item.imageUrl" alt="">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    banners: {
      type: Array,
      required: true
    }
  },
  components: {

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
  .img {
    width: 100%;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>