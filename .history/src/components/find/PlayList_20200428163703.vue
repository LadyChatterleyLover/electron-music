<template>
  <div class="list flex a-center">
    <div class="title">热门标签:</div>
    <div v-for="(item, index) in hot" :key="index" class="content flex a-center">
      <div class="tag">{{item.name}}</div>
      <div class="line" v-if="index !== hot.length - 1"></div>
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
      hot: []
    }
  },
  methods: {
    getHot() {
      api.getHotCategory().then(res => {
        if (res.code === 200) {
          this.hot = res.tags
        }
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getHot()
  },
  watch: {

  },
  computed: {

  }
}
</script>

<style scoped lang='scss'>
.list {
  .title {
    margin-right:  10px;
  }
  .tag {
    font-size: 12px;
    color: rgb(102,102,102);
  }
  .line {
    width: 1px;
    height: 12px;
    background: #ccc;
    margin: 0 20px;
  }
}
</style>