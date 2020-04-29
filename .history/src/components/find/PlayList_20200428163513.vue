<template>
  <div class="list flex a-center">
    <div>热门标签:</div>
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
  .tag {
  }
  .line {
    width: 1px;
    height: 12px;
    background: #ccc;
  }
}
</style>