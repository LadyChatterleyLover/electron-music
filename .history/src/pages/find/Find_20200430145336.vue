<template>
  <div class="home__tab">
    <el-tabs v-model="activeName">
      <el-tab-pane label="个性推荐" name="1">
        <recommend></recommend>
      </el-tab-pane>
      <el-tab-pane label="歌手" name="2">
        <singer></singer>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="3">
        <play-list></play-list>
      </el-tab-pane>
      <el-tab-pane label="排行榜" name="4">
        <rank></rank>
      </el-tab-pane>
      <el-tab-pane label="最新音乐" name="5">
        <newSong></newSong>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import recommend from '../../components/find/recommend/Recommend'
import playList from '../../components/find/PlayList'
import singer from '../../components/singer/Singer'
import rank from '../../components/rank/Rank'
import newSong from '../../components/newSong/NewSong'
export default {
  name: '',
  props: {
  },
  components: {
    recommend,
    playList,
    singer,
    rank,
    newSong
  },
  data() {
    return {
      banners: [],
      activeName: '5'
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