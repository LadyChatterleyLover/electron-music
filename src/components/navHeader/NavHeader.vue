<template>
  <div class="container flex a-center j-between" >
    <div class="left flex a-center">
      <div class="title flex a-center">
        <div class="icon">
          <i class="iconfont icon-yinle"></i>
        </div>
        <div class="name">网易云音乐</div>
      </div>
      <div class="ipt home__input">
        <el-input
          size="mini"
          v-model="searchValue"
          placeholder="搜索音乐,视频,歌词,电台"
          suffix-icon="el-icon-search"
        ></el-input>
      </div>
    </div>
    <div class="right flex a-center">
      <div class="avatar flex a-center">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
      </div>
      <div class="login flex a-center">
        <div class="flex a-center">未登录</div>
        <div class="flex a-center">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
      </div>
      <div class="vip flex a-center">开通vip</div>
      <div class="fu">
        <i class="iconfont icon-huanfu icon"></i>
      </div>
      <div class="emai">
        <i class="iconfont icon-youxiang icon"></i>
      </div>
      <div class="setting">
        <i class="iconfont icon-shezhi icon"></i>
      </div>
      <div class="line"></div>
      <div>
        <i class="iconfont icon-zuixiaohua action"></i>
      </div>
      <div @click="min">
        <i class="iconfont icon-suoxiao action"></i>
      </div>
      <div @click="max">
        <i class="iconfont icon-cub action" v-if='flag'></i>
        <i class="iconfont icon-suoxiao1 action" v-else></i>
      </div>
      <div @click="close">
        <i class="iconfont icon-cha action"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
export default {
  name: '',
  props: {
  },
  components: {

  },
  data() {
    return {
      searchValue: '',
      flag: true
    }
  },
  methods: {
    min() {
      ipcRenderer.send('min')
    },
    max() {
      this.flag = !this.flag
      ipcRenderer.send('max', this.flag)
    },
    close() {
      ipcRenderer.send('close')
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
  height: 50px;
  width: 100%;
  -webkit-app-region: drag;
  .title {
    color: #fff;
    .name {
      margin-left: 6px;
    }
  }
  .ipt {
    margin-left: 20px;
  }
  .right {
    -webkit-app-region: no-drag;
  }
  .login,
  .avatar,
  .vip {
    height: 50px;
    font-size: 14px;
    color: rgb(236, 184, 184);
    div {
      height: 100%;
      &:hover {
        color: #fff;
        cursor: pointer;
      }
    }
  }
  .avatar {
    margin-right: 10px;
    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }
  .vip {
    margin: 0 10px;
    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }
  .icon {
    font-size: 20px;
    color: rgb(236, 184, 184);
    margin: 0 6px;
    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }
  .email {
    margin: 0 12px;
  }
  .line {
    width: 1px;
    height: 25px;
    background: rgb(168, 40, 40);
    margin: 0 6px;
  }
  .action {
    font-size: 18px;
    color: rgb(236, 184, 184);
    margin: 0 4px;
    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>