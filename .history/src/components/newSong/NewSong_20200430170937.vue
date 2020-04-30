<template>
  <div>
    <div class="top flex a-center j-center">
      <div class="t-item" :class="{typeActive: typeIndex === 0}" @click="types = 0">新歌速递</div>
      <div class="t-item" :class="{typeActive: typeIndex === 1}"  @click="types = 1">新碟上架</div>
    </div>
    <div class="type flex a-center">
      <div class="item" v-for="(item, index) in types" :key="index" :class="{active: activeIndex === index}">
        {{item.name}}
      </div>
    </div>
    <div class="list">
      <div class="l-item flex a-center" v-for="(item, index) in newSong" :key="index">
        <div class="index">{{index + 1}}</div>
        <div class="name">{{item.name}}</div>
        <div class="album">{{item.album.name}}</div>
        <div class="time"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {types} from '../../data/menu'
import api from '../../http/api'
export default {
  name: '',
  props: {
  },
  components: {

  },
  data() {
    return {
      types,
      activeIndex: 0,
      typeIndex: 0,
      type: 0,
      newSong: []
    }
  },
  methods: {
    getNewSong() {
      api.getNewSong(this.type).then(res => {
        if (res.code === 200) {
          res.data.map(item => {
            item.mins = Math.floor((item.duration / 1000 / 60))
            item.seconds = item.duration / 1000 / 60 / 60
            console.log(item.seconds )
            // console.log(item.mins + '--' + item.seconds)
          })
          this.newSong = res.data
        }
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getNewSong()
  },
  watch: {

  },
  computed: {

  }
}
</script>

<style scoped lang='scss'>
  .top {
    font-size: 14px;
    margin-bottom: 14px;
    .t-item {
      border: 1px solid #ccc;
      padding: 5px 15px;
      &:first-child {
        border-radius: 4px 0 0 4px;
      }
      &:last-child {
        border-left: none;
        border-radius: 0 4px 4px 0;
      }
    }
  }
  .type {
    .item {
      margin-right: 10px;
      font-size: 12px;
    }
  }
  .active {
    color: rgb(198,47,47) !important;
  }
  .typeActive {
    background: rgb(198,47,47);
    color: #fff;
  }
</style>