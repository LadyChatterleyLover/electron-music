<template>
  <div>
    <div class="type flex a-center">
      <div class="t-item" v-for="(item, index) in typeList" :key="index">
        <div class="t-name">{{item.name}}</div>
      </div>
    </div>
    <div class="content flex a-center">
      <div class="title">筛选:</div>
      <div
        class="item flex a-center"
        v-for="(item, index) in initials"
        :key="index"
        @click="clickInitial(item, index)"
      >
        <div class="name" :class="{active: inIndex === index}">{{item.name}}</div>
        <div class="line" v-if="index !== initials.length - 1"></div>
      </div>
    </div>
    <div class="desc flex a-center">
      <div class="d-item" v-for="(item, index) in singers" :key="index">
        <div class="img">
          <img :src="item.picUrl"/>
        </div>
        <div class="d-name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../http/api'
import { typeList, initials } from '../../data/singer'
export default {
  name: '',
  props: {
  },
  components: {

  },
  data() {
    return {
      cat: '5001',
      singers: [],
      inIndex: 0,
      initials,
      typeList
    }
  },
  methods: {
    getData() {
      api.getSinger(this.cat).then(res => {
        if (res.code === 200) {
          this.singers = res.artists
        }
        // console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    clickInitial(item, index) {
      this.initial = item.id
      this.inIndex = index
      this.getData()
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
.content {
  flex-wrap: wrap;
  .title {
    margin-right: 8px;
    font-size: 12px;
  }
  .item {
    margin: 5px 0;
    &:hover {
      cursor: pointer;
    }
    .name {
      font-size: 12px;
      padding: 2px 8px;
    }
    .line {
      width: 1px;
      height: 12px;
      background: rgb(204, 204, 204);
      margin: 0 12px;
    }
  }
}
.type {
  flex-wrap: wrap;
  .t-item {
    padding: 5px 10px;
    border-radius: 20px;
    background: #ccc;
    color: #fff;
    font-size: 12px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
.desc {
  margin-top: 30px;
  flex-wrap: wrap;
  .d-item {
    width: 18%;
    margin-right: 10px;
    margin-bottom: 10px;
    .img {
      width: 100%;
      height: 140px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .d-name {
      font-size: 14px;
      margin-top: 6px;
    }
  }
}
.active {
  background: rgb(198,47,47)
  color: #fff;
}
</style>