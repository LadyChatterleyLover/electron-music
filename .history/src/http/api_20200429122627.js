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
  },
  // 获取歌单详情
  getPlatListDetail(id) {
    return service.get('related/detail?id=' + id)
  },
  // 歌手分类列表
  getSinger(type = -1, area = -1, initial) {
    if (initial) return service.get(`artist/list?type=${type}&area=${area}&initial=${initial}`)
    else return service.get(`artist/list?type=${type}&area=${area}`)
  }
}