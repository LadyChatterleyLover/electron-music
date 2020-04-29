<template>
  <div>
    <banners></banners>
    <item v-if="recommends.length > 0" :list="recommends">
      <template v-slot:title>推荐歌单</template>
    </item>
    <item v-if="newList.length > 0" :list="newList">
      <template v-slot:title>音乐新势力</template>
    </item>
    <item v-if="program.length > 0" :list="program">
      <template v-slot:title>推荐节目</template>
    </item>
    <item v-if="dj.length > 0" :list="dj">
      <template v-slot:title>推荐电台</template>
    </item>
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
      newList: [],
      dj: [],
      program: []
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
      }).catch(err => {
        console.log(err)
      })
    },
    getDj() {
      api.getDj().then(res => {
        if (res.code === 200) {
          this.dj = res.result
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getProgram() {
      api.getProgram().then(res => {
        if (res.code === 200) {
          this.program = res.programs
        }
      }).catch(err => {
        console.log(err)
      })
    },
  },
  mounted() {
    this.getPersonalized()
    this.getNewList()
    this.getDj()
    this.getProgram()
  },
  watch: {

  },
  computed: {

  }
}
</script>

<style scoped lang='scss'>
</style>