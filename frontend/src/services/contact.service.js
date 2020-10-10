import axios from 'axios'

export default {
  getAll () {
    return axios.get('/api/contacts').then(res => res.data)
  },

  updateContact (id, contact) {
    return axios.put('/api/contacts/' + id, contact)
  },

  createContact (contact) {
    return axios.post('/api/contacts', contact)
  },

  deleteContact (id) {
    return axios.delete('/api/contacts/' + id)
  }
}
