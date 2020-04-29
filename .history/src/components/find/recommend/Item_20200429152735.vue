<template>
  <div class="personal">
    <div class="top flex a-center j-between">
      <div>
        <slot name="title"></slot>
      </div>
      <div class="more">更多></div>
    </div>
    <div class="content flex a-center">
      <div
        v-for="(item, index) in list.slice(0, 10)"
        :key="index"
        class="item"
        @mouseenter="enter(item)"
        @mouseleave="leave(item)"
      >
        <div
          class="copywriter flex a-center j-center"
          :class="{hoverwriter: item.showHover}"
        >{{item.copywriter}}</div>
        <div class="count flex a-center" v-if="!item.showHover && item.playCount">
          <div>
            <i class="iconfont icon-erji"></i>
          </div>
          <div>{{(item.playCount / 10000).toFixed(0)}}万</div>
        </div>
        <div class="img">
          <img :src="item.picUrl" />
        </div>
        <div class="name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  components: {

  },
  data() {
    return {
     
    }
  },
  methods: {

    enter(item) {
      item.showHover = true
    },
    leave(item) {
      item.showHover = false
    }
  },
  mounted() {
    
  },
  watch: {

  },
  computed: {

  }
}
</script>

<style scoped lang='scss'>
.personal {
  margin-top: 20px;
  .top {
    border-bottom: 1px solid #ddd;
    padding-bottom: 12px;
    .more {
      font-size: 14px;
      color: rgb(102, 102, 102);
    }
  }
  .content {
    flex-wrap: wrap;
    .item {
      position: relative;
      width: 18%;
      height: 160px;
      margin-right: 10px;
      margin-top: 20px;
      cursor: pointer;
      .copywriter {
        width: calc(100% - 20px);
        position: absolute;
        top: 0;
        height: 0px;
        color: #fff;
        font-size: 12px;
        background: rgb(153, 153, 153);
        padding: 10px;
        opacity: 0;
      }
      .count {
        color: #fff;
        font-size: 12px;
        position: absolute;
        right: 0;
        top: 0;
        div {
          margin-right: 6px;
        }
      }
      .desc {
        height: 120px;
        border: 1px solid #eee;
        .week {
          position: relative;
          top: 10px;
        }
        .day {
          font-size: 80px;
          color: rgb(198, 47, 47);
        }
      }
      .img {
        width: 100%;
        height: 120px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .name {
        font-size: 12px;
        margin-top: 6px;
      }
    }
  }
}
.hoverwriter {
  height: 26px !important;
  opacity: 1 !important;
  transition: all 0.5s;
}
</style>