<template>
  <div>singer</div>
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
      type: -1,
      area: -1,
      initial: ''
    }
  },
  methods: {
    getData() {
      api.getSinger(this.type, this.area, this.initial).then(res => {
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