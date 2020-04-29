<template>
  <div class="personal">
    <div class="top flex a-center j-between">
      <div>推荐歌单</div>
      <div class="more">更多></div>
    </div>
    <div class="content flex a-center">
      <div v-for="item in recommends" :key="item.id" class="item">
        <div class="img">
          <img :src="item.picUrl" alt />
        </div>
        <div class="name">{{item.name}}</div>
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
          this.recommends = res.result
          console.log(res.result)
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
      width: 20%;
      height: 160px;
      margin-right: 10px;
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
</style>