<template>
  <div class="play">
    <div class="list flex a-center">
      <div class="title">热门标签:</div>
      <div
        v-for="(item, index) in hot"
        :key="index"
        class="content flex a-center"
        @click="clickTag(item, index)"
      >
        <div class="tag" :class="{active: activeIndex === index}">{{item.name}}</div>
        <div class="line" v-if="index !== hot.length - 1"></div>
      </div>
    </div>
    <div class="desc flex a-center f-wrap">
      <div class="list" v-for="(item, index) in playList" :key="index">
        <div class="img">
          <img :src="item.coverImgUrl" alt />
        </div>
        <div class="name">{{item.name}}</div>
        <div class="icon flex a-center j-end">
          <i class="iconfont icon-erji"></i>
          <div style="margin-left: 6px;">{{item.playCount | toFixed}}万</div>
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
      hot: [],
      categortId: 5001,
      cat: '全部',
      activeIndex: 0,
      playList: []
    }
  },
  methods: {
    getHot() {
      api.getHotCategory().then(res => {
        if (res.code === 200) {
          res.tags.unshift({
            name: '全部'
          })
          this.hot = res.tags
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getPlayList() {
      api.getPlayList(this.cat).then(res => {
        if (res.code === 200) {
          this.playList = res.playlists
        }
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    clickTag(item, index) {
      this.activeIndex = index
      this.cat = item.name
      this.getPlayList()
    }
  },
  mounted() {
    this.getHot()
    this.getPlayList()
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
.list {
  .title {
    margin-right: 10px;
    font-size: 14px;
  }
  .tag {
    font-size: 12px;
    color: rgb(102, 102, 102);
    &:hover {
      cursor: pointer;
    }
  }
  .line {
    width: 1px;
    height: 12px;
    background: #ccc;
    margin: 0 16px;
  }
}
.desc {
  margin-top: 30px;
  position: relative;
  .list {
    position: relative;
    width: 20%;
    margin-right: 30px;
    margin-bottom: 20px;
    .img {
      width: 160px;
      height: 160px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .name {
      width: 160px;
      font-size: 14px;
      color: #ccc;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 10px;
    }
    .icon {
      position: absolute;
      top: 0;
      color: #fff;
      width: 150px;
      padding-right: 10px;
      background: linear-gradient(to right, transparent 0, rgba(0, 0, 0, 0.5));
    }
  }
}
.active {
  background: rgb(198, 47, 47);
  color: #fff !important;
  padding: 0 8px;
}
</style>