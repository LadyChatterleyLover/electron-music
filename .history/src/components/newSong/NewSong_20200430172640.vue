<template>
  <div>
    <div class="top flex a-center j-center">
      <div class="t-item" :class="{typeActive: typeIndex === 0}" @click="types = 0">新歌速递</div>
      <div class="t-item" :class="{typeActive: typeIndex === 1}" @click="types = 1">新碟上架</div>
    </div>
    <div class="type flex a-center">
      <div
        class="item"
        v-for="(item, index) in types"
        :key="index"
        :class="{active: activeIndex === index}"
      >{{item.name}}</div>
    </div>
    <div class="list">
      <div
        class="l-item flex a-center"
        :class="{odd: index % 2 !== 0}"
        v-for="(item, index) in newSong"
        :key="index"
      >
        <div class="f-1 flex a-center">
          <div class="index">{{index + 1}}</div>
          <div class="l-img">
            <img :src="item.album.blurPicUrl" alt />
          </div>
          <div class="name flex j-center f-1">{{item.name}}</div>
        </div>
        <div class="author flex j-center f-1">{{item.artists[0].name}}</div>
        <div class="album flex j-center f-1">{{item.album.name}}</div>
        <div class="time f-1 flex a-center">
          <div>{{item.mins}}</div>
          <div style="margin: 0 4px;">:</div>
          <div>{{item.seconds}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { types } from '../../data/menu'
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
            item.seconds = Math.floor(item.duration / 1000 - item.mins * 60)
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
.list {
  border: 1px solid #eee;
  margin-top: 20px;
  .l-item {
    padding-left: 10px;
    height: 50px;
    font-size: 12px;
    &:hover {
      cursor: pointer;
    }
    .l-img {
      width: 30px;
      height: 30px;
      margin: 0 15px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.active {
  color: rgb(198, 47, 47) !important;
}
.typeActive {
  background: rgb(198, 47, 47);
  color: #fff;
}
.odd {
  background: rgb(243, 245, 247);
  &:hover {
    background: rgb(238, 238, 238);
  }
}
</style>