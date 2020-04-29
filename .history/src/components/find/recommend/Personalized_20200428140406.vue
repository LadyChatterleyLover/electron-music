<template>
  <div class="personal">
    <div class="top flex a-center j-between">
      <div>推荐歌单</div>
      <div class="more">更多></div>
    </div>
  </div>
</template>

<script>
import api from '../../../http/api'
export default {
  name: '',
  props: {
  },
  components: {

  },
  data() {
    return {

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
      border-bottom: 1px solid #eee;
      padding-bottom: 12px;
      .more {
        font-size: 14px;
        color: rgb(102,102,102);
      }
    }
  }
</style>