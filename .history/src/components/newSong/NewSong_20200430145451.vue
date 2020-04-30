<template>
  <div>
    <div class="type flex a-center">
      <div class="item" v-for="(item, index) in types" :key="index">
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
      types
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
</style>