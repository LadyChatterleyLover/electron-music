<template>
  <div class="container">
    <div class="content" v-for="(item, index) in menus" :key="index">
      <div class="title">{{item.title}}</div>
      <div
        class="desc flex a-center"
        :class="{active: activeIndex === child.url}"
        v-for="(child, idx) in item.children"
        :key="idx"
        @click="clickItem(child)"
      >
        <div class="item flex a-center">
          <div class="icon">
            <i class="iconfont" :class="child.icon"></i>
          </div>
          <div>{{child.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { menus } from '../../data/menu'
export default {
  name: '',
  props: {
  },
  components: {

  },
  data() {
    return {
      menus,
      activeIndex: '/find'
    }
  },
  methods: {
    clickItem(item) {
      this.activeIndex = item.url
      this.$router.push(item.url)
    }
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
.container {
  font-size: 14px;
  color: rgb(125, 125, 125);
  .content {
    &:hover {
      cursor: pointer;
    }
    .title {
      padding: 10px;
    }
    .desc {
      height: 40px;
      .item {
        width: 180px;
        position: fixed;
        left: 20px;
        &:hover {
          color: #000;
        }
        .icon {
          margin-right: 12px;
        }
      }
    }
  }
}
.active {
  background: rgb(230, 231, 234);
  border-left: 3px solid rgb(198, 47, 47);
}
</style>