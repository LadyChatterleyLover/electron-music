<template>
  <div class="rank">
    <div class="top">
      <div class="title">官方榜</div>
      <div class="line"></div>
    </div>
    <div class="container flex a-center">
      <div class="content flex a-center" v-for="(item, index) in topList" :key="index">
        <div class="img">
          <img :src="item.coverImgUrl" alt />
        </div>
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
      topList: [], // 官方排行榜
      newSong: [], // 新歌榜
      topSong: [], // 热歌榜
      upSong: [], // 飙升榜
      original: [], // 原创榜
    }
  },
  methods: {
    getData() {
      api.getTop().then(res => {
        if (res.code === 200) {
          res.list.map(item => {
            if (item.ToplistType) this.topList.push(item)
          })
        }
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    // 新歌
    getNewSong() {
      api.getRankDetail(0).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getData()
    this.getNewSong()
  },
  watch: {

  },
  computed: {

  }
}
</script>

<style scoped lang='scss'>
.rank {
  .top {
    margin-bottom: 20px;
    .line {
      width: 100%;
      height: 1px;
      background: #eee;
      margin-top: 10px;
    }
  }
  .container {
    flex-wrap: wrap;
    .content {
      width: 48%;
      margin-right: 1%;
      margin-bottom: 15px;
      .img {
        width: 200px;
        height: 75px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>