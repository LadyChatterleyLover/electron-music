<template>
  <div>
    <banners></banners>
    <item v-if='recommends.length > 0' :list='recommends'></item>
    <item v-if='newList.length > 0' :list='newList'></item>
  </div>
</template>

<script>
import api from '../../../http/api'
import banners from './Banners'
import item from './Item'
export default {
  name: '',
  props: {
  },
  components: {
    banners,
    item
  },
  data() {
    return {
       recommends: [],
       newList: []
    }
  },
  methods: {
    getPersonalized() {
      api.getPersonalized().then(res => {
        if (res.code === 200) {
          this.recommends = res.result
          this.recommends.map(item => {
            this.$set(item, 'showHover', false)
          })
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getNewList() {
      api.getNew().then(res => {
        if (res.code === 200) {
          this.newList = res.result
        }
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getPersonalized()
    this.getNewList()
  },
  watch: {

  },
  computed: {

  }
}
</script>

<style scoped lang='scss'>
</style>