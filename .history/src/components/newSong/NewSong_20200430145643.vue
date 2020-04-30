<template>
  <div>
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
      activeIndex: 0
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
  .type {
    .item {
      margin-right: 10px;
      font-size: 12px;
    }
  }
  .active {
    color: rgb(198,47,47) !important;
  }
</style>