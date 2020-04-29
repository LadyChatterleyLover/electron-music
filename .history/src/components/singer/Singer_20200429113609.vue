<template>
  <div>
    <div class="content flex a-center">
      <div class="title">语种:</div>
      <div class="item flex a-center" v-for="(item, index) in lang" :key="index">
        <div class="name">{{item.name}}</div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../http/api'
import {lang, category, initials} from '../../data/singer'
export default {
  name: '',
  props: {
  },
  components: {

  },
  data() {
    return {
      type: -1,
      area: -1,
      initial: '',
      singers: [],
      lang,
      category,
      initials
    }
  },
  methods: {
    getData() {
      api.getSinger(this.type, this.area, this.initial).then(res => {
        if (res.code === 200) {
          this.singers = res.artists
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
  .content {
    .title {
      margin-right: 8px;
      font-size: 14px;
    }
    .item {
      
      .name {
        font-size: 14px;
      }
      .line {
        width: 1px;
        height: 6px;
        background: #ccc;
      }
    }
  }
</style>