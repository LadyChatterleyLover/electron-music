<template>
  <div class="personal">
    <div class="top flex a-center j-between">
      <div>推荐歌单</div>
      <div class="more">更多></div>
    </div>
    {{weekday[week]}}
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
      weekday: ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
    }
  },
  methods: {

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
        color: rgb(102,102,102);
      }
    }
  }
</style>