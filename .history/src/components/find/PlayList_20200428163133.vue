<template>
  <div></div>
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
      hot: []
    }
  },
  methods: {
    getHot() {
      api.getHotCategory(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getHot()
  },
  watch: {

  },
  computed: {

  }
}
</script>

<style scoped lang='scss'>
</style>