import axios from 'axios'
export default (val) => {
  axios.defaults.headers.common['Authorization'] = val
}
