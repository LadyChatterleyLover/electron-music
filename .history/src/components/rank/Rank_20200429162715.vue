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
      topList: []
    }
  },
  methods: {
    getData() {
      api.getTop().then(res => {
        if (res.code === 200) {
          this.topList = res.list
        }
        console.log(res)
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
</style>