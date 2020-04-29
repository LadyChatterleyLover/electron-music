<template>
  <div>
    <banners :banners="banners"></banners>
  </div>
</template>

<script>
import banners from './Banners'
import api from '../../http/api'
export default {
  name: '',
  props: {
  },
  components: {
    banners
  },
  data() {
    return {
      banners: []
    }
  },
  methods: {
    getBanners() {
      api.getBanners().then(res => {
        if (res.code === 200) {
          this.banners = res.banners
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getBanners()
  },
  watch: {

  },
  computed: {

  }
}
</script>

<style scoped lang='scss'>
</style>