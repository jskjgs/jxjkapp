import axios from 'axios'
export default (val) => {
  axios.defaults.headers.post['Authorization'] = val
  axios.defaults.headers.get['Authorization'] = val
  axios.defaults.headers.delete['Authorization'] = val
  axios.defaults.headers.put['Authorization'] = val
}
