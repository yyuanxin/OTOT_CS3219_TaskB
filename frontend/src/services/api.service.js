import axios from 'axios'

export default {
  getRes () {
    return axios.get('/api').then(res => res.data)
  }
}
