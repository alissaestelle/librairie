import axios from 'axios'

export const baseURL = 'http://localhost:3001'
const Client = axios.create({ baseURL: baseURL })

export default Client
