<template>
  <div>
    <div class="top flex a-center j-center">
      <div class="t-item" :class="{typeActive: typeIndex === 0}" @click="types = 0">新歌速递</div>
      <div class="t-item" :class="{typeActive: typeIndex === 0}"  @click="types = 1">新碟上架</div>
    </div>
    <div class="type flex a-center">
      <div class="item" v-for="(item, index) in types" :key="index" :class="{active: activeIndex === index}">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
import {types} from '../../data/menu'
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
  .top {
    font-size: 14px;
    .t-item {
      border: 1px solid #ccc;
      padding: 5px 10px;
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
  .active {
    color: rgb(198,47,47) !important;
  }
  .typeActive {
    background: rgb(198,47,47);
    color: #fff;
  }
</style>