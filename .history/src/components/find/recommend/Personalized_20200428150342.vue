<template>
  <div class="personal">
    <div class="top flex a-center j-between">
      <div>推荐歌单</div>
      <div class="more">更多></div>
    </div>
    <div class="content flex a-center">
      <div
        v-for="(item, index) in recommends"
        :key="item.id"
        class="item"
        @mouseenter="enter(item)"
        @mouseleave="leave(item)"
      >
        <div
          class="copywriter flex a-center j-center"
          :class="{hoverwriter: item.showHover}"
        >{{item.copywriter}}</div>
        <template v-if="index === 0">
          <div class="flex f-col a-center j-center desc">
            <div class="week">{{weekday[week]}}</div>
            <div class="day">{{day}}</div>
          </div>
          <div class="name">{{item.name}}</div>
        </template>
        <template v-else>
          <div class="img">
            <img :src="item.picUrl" />
          </div>
          <div class="name">{{item.name}}</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../../http/api'
import dayjs from 'dayjs'
export default {
  name: '',
  props: {
  },
  components: {

  },
  data() {
    return {
      day: new Date().getDate(),
      week: new Date().getDay(),
      weekday: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
      recommends: []
    }
  },
  methods: {
    getData() {
      api.getPersonalized().then(res => {
        if (res.code === 200) {
          let obj = {
            copywriter: '根据您的口味,生成每日更新'
          }
          res.result.unshift(obj)
          this.recommends = res.result
          this.recommends.map(item => {
            this.$set(item, 'showHover', false)
          })
          console.log(res.result)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    enter(item) {
      item.showHover = true
    },
    leave(item) {
      item.showHover = false
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
  transition: all 0.5s;
}
</style>