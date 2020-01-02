import axios from 'axios'

const api = axios.create({
    baseURL: 'http://172.22.120.165:3001'
})

export default api;