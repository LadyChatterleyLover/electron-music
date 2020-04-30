<template>
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
    <div class="other flex a-center f-wrap">
      <div class="o-desc" v-for="(item, index) in playList" :key="index">
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
      hot: [],
      categortId: 5001,
      cat: '全部',
      activeIndex: -1,
      playList: []
    }
  },
  methods: {
    getHot() {
      api.getHotCategory().then(res => {
        if (res.code === 200) {
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
    margin-right: 16px;
    font-size: 14px;
  }
  .tag {
    font-size: 12px;
    color: rgb(102, 102, 102);
  }
  .line {
    width: 1px;
    height: 12px;
    background: #ccc;
    margin: 0 16px;
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
        width: 150px;
        background: linear-gradient(
          to right,
          transparent 0,
          rgba(0, 0, 0, 0.5)
        );
        padding-right: 10px;
      }
    }
  }
}
.active {
  background: rgb(198, 47, 47);
  color: #fff !important;
  padding: 0 8px;
}
</style>