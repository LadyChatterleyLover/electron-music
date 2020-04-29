import service from './index'

export default {
  // 轮播图
  getBanners() {
    return service.get('banner')
  },
  // 推荐歌单
  getPersonalized() {
    return service.get('personalized')
  },
  // 热门歌单分类
  getHotCategory() {
    return service.get('playlist/hot')
  }
}