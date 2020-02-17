import axios from 'axios'

export const INITIAL_FETCH = 'INITIAL_FETCH'
export const SEND_SERVER = 'SEND_SERVER'

export function getInitialFetch() {
  return {
    type: INITIAL_FETCH,
    payload: {name: '', age: ''}
  }
}

export function sendServer(data) {
  const request = axios.post('http://localhost:9002/', {data})
  return {
    type: SEND_SERVER,
    payload: request
  }
}
