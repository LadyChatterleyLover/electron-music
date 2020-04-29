import axios from 'axios'

const service = axios.create({
  baseURL: 'http://49.233.66.125:3000',
  timeout: 10000
})

service.interceptors.response.use(response => {
  return response.data
})

export default service