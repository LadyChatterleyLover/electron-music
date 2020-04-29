<template>
  <div>
    <div class="content flex a-center">
      <div class="title">语种:</div>
      <div class="item flex a-center" v-for="(item, index) in lang" :key="index" :class="{active: langIndex === index}">
        <div class="name">{{item.name}}</div>
        <div class="line" v-if='index !== lang.length - 1'></div>
      </div>
    </div>
    <div class="content flex a-center">
      <div class="title">分类:</div>
      <div class="item flex a-center" v-for="(item, index) in category" :key="index" :class="{active: caIndex === index}">
        <div class="name">{{item.name}}</div>
        <div class="line" v-if='index !== lang.length - 1'></div>
      </div>
    </div>
    <div class="content flex a-center">
      <div class="title">筛选:</div>
      <div class="item flex a-center" v-for="(item, index) in initials" :key="index" :class="{active: inIndex === index}">
        <div class="name">{{item.name}}</div>
        <div class="line" v-if='index !== lang.length - 1'></div>
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
      langIndex: 0,
      caIndex: 0,
      inIndex: 0,
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
    flex-wrap: wrap;
    .title {
      margin-right: 8px;
      font-size: 14px;
    }
    .item {
      margin: 5px 0;
      .name {
        font-size: 14px;
      }
      .line {
        width: 1px;
        height: 12px;
        background: rgb(204,204,204);
        margin: 0 12px;
      }
    }
  }
  .active {
    background: rgb(143,144,150);
    color: #fff;
  }
</style>