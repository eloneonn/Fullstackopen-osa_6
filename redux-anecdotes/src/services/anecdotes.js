import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
    const object = { 
        content: content,
        votes: 0}
    const response = await axios.post(baseUrl, object)
    return response.data
}

const update = async (newObj) => {
    const response = await axios.put(`${baseUrl}/${newObj.id}`, newObj)
    return response.data
}

const exportedObject = { getAll, createNew, update }
export default exportedObject