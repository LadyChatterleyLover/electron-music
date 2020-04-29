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
      getData() {
        api.getTop().then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
      }
    }
  },
  methods: {

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