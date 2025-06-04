import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
const apiKey = import.meta.env.VITE_WEATHER_API_KEY

const get = (capital) => {
  const request = axios.get(`${baseUrl}${capital}&appid=${apiKey}&units=metric`)
  return request.then(response =>response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

export default { get, create, update, remove }