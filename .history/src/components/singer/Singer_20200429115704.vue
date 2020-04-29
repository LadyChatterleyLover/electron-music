<template>
  <div>
    <div class="content flex a-center">
      <div class="title">语种:</div>
      <div
        class="item flex a-center"
        v-for="(item, index) in lang"
        :key="index"
        @click="clickLang(item, index)"
      >
        <div class="name" :class="{active: langIndex === index}">{{item.name}}</div>
        <div class="line" v-if="index !== lang.length - 1"></div>
      </div>
    </div>
    <div class="content flex a-center">
      <div class="title">分类:</div>
      <div
        class="item flex a-center"
        v-for="(item, index) in category"
        :key="index"
        @click="clickCategory(item, index)"
      >
        <div class="name flex a-center j-center" :class="{active: caIndex === index}">{{item.name}}</div>
        <div class="line" v-if="index !== category.length - 1"></div>
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
          <img :src="item.picUrl" alt />
        </div>
        <div class="d-name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../http/api'
import { lang, category, initials } from '../../data/singer'
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
      langIndex: 0,
      caIndex: 0,
      inIndex: 0,
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
    },
    clickLang(item, index) {
      this.type = item.id
      this.langIndex = index
      this.getData()
    },
    clickCategory(item, index) {
      this.area = item.id
      this.caIndex = index
      this.getData()
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
    }
  }
}
.active {
  background: rgb(143, 144, 150);
  color: #fff;
}
</style>