<template>
  <div class="rank">
    <div class="top">
      <div class="title">官方榜</div>
      <div class="line"></div>
    </div>
    <div class="container flex a-center">
      <div class="content" v-for="(item, index) in topList" :key="index">
        <div class="img">
          <img :src="item.coverImgUrl" alt />
        </div>
        <div class="desc">
          <div
            class="child"
            v-for="(child, idx) in item.children"
            :key="idx"
            :class="{bg: idx % 2 === 0}"
          >
            <div class="flex a-center j-between">
              <div class="c-name flex a-center">
                <div class="index" :class="{indexActive: idx < 3}">{{idx + 1}}</div>
                <div class="name">{{child.name}}</div>
              </div>
              <div class="author">{{child.ar[0].name}}</div>
            </div>
          </div>
          <div class="all">查看全部 ></div>
        </div>
      </div>
    </div>
    <div class="top">
      <div class="title">全球榜</div>
      <div class="line"></div>
    </div>
    <div class="other flex a-center f-wrap">
      <div class="o-desc" v-for="(item, index) in allList" :key="index">
        <div class="o-img">
          <img :src="item.coverImgUrl" alt />
        </div>
        <div class="o-name flex a-center j-center">{{item.name}}</div>
        <div class="o-icon flex a-center j-end">
          <i class="iconfont icon-erji"></i>
          <div style="margin-left: 6px;">{{item.subscribedCount | toFixed}}万</div>
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
      allList: [], // 全国榜
    }
  },
  methods: {
    getData() {
      api.getTop().then(res => {
        if (res.code === 200) {
          this.getNewSong()
          this.getHotSong()
          this.getUpSong()
          this.getOriginal()
          res.list.map(item => {
            this.$set(item, 'children', [])
            if (item.ToplistType) this.topList.push(item)
            else this.allList.push(item)
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
        if (res.code === 200) {
          console.log(res)
          this.topSong = res.playlist.tracks.slice(0, 10)
          this.topList.map(item => {
            if (item.name === '云音乐新歌榜') {
              item.children = this.topSong
            }
          })
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 热歌
    getHotSong() {
      api.getRankDetail(1).then(res => {
        if (res.code === 200) {
          this.newSong = res.playlist.tracks.slice(0, 10)
          this.topList.map(item => {
            if (item.name === '云音乐热歌榜') {
              item.children = this.newSong
            }
          })
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 飙升
    getUpSong() {
      api.getRankDetail(3).then(res => {
        if (res.code === 200) {
          this.upSong = res.playlist.tracks.slice(0, 10)
          this.topList.map(item => {
            if (item.name === '云音乐飙升榜') {
              item.children = this.upSong
            }
          })
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 原创
    getOriginal() {
      api.getRankDetail(2).then(res => {
        if (res.code === 200) {
          this.original = res.playlist.tracks.slice(0, 10)
          this.topList.map(item => {
            if (item.name === '网易原创歌曲榜') {
              item.children = this.original
            }
          })
        }
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

  },
  filters: {
    toFixed(val) {
      return (Number(val) / 10000).toFixed(1)
    }
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
        width: 250px;
        height: 75px;
        &:hover {
          cursor: pointer;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .desc {
      width: 248px;
      background: #fff;
      margin-bottom: 20px;
      position: relative;
      border: 1px solid #ddd;
      padding-bottom: 30px;
      &:hover {
        cursor: pointer;
      }
      .all {
        position: absolute;
        bottom: 10px;
        right: 10px;
        font-size: 14px;
        color: #ccc;
      }
      .child {
        padding: 12px 10px 12px 15px;
        font-size: 12px;
        .c-name {
          .index {
            margin-right: 6px;
          }
        }
        .author {
          color: #ccc;
        }
      }
    }
  }
  .other {
    .o-desc {
      width: 20%;
      margin-right: 30px;
      margin-bottom: 15px;
      position: relative;
      &:hover {
        cursor: pointer;
      }
      .o-img {
        width: 160px;
        height: 160px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .o-name {
        width: 100%;
        font-size: 14px;
        margin-top: 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .o-icon {
        position: absolute;
        top: 0;
        color: #fff;
        width: 160px;
        background: linear-gradient(to right, transparent 0, rgba(0, 0, 0, 0.5));
      }
    }
  }
}
.bg {
  background: rgb(239, 239, 239) !important;
}
.indexActive {
  color: rgb(198, 47, 47);
}
</style>