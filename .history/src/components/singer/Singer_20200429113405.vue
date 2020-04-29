<template>
  <div>
    <div class="content flex a-center">
      <div>语种: </div>
      <div class="item" v-for="(item, index) in lang" :key="index">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../http/api'
import {lang, category, initials} from '../../data/singer'
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
      initial: '',
      singers: [],
      lang,
      category,
      initials
    }
  },
  methods: {
    getData() {
      api.getSinger(this.type, this.area, this.initial).then(res => {
        if (res.code === 200) {
          this.singers = res.artists
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