<template>
  <div class="container flex a-center">
    <div class="content flex" v-for="(item, index) in topList" :key="index">
      <div class="img">
        <img :src="item.coverImgUrl" alt />
      </div>
      <div class="desc">
        {{item.description}}
      </div>
    </div>
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
      topList: []
    }
  },
  methods: {
    getData() {
      api.getTop().then(res => {
        if (res.code === 200) {
          this.topList = res.list
        }
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getData()
  },
  watch: {

  },
  computed: {

  }
}
</script>

<style scoped lang='scss'>
.container {
  flex-wrap: wrap;
  .content {
    width: 48%;
    margin-right: 1%;
    margin-bottom: 15px;
    .img {
      width: 120px;
      height: 120px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .desc {
      flex: 1;
      font-size: 14px;
      margin-left: 6px;
    }
  }
}
</style>