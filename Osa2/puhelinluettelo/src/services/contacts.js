import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}`/{id}, newObject)
}

const deletePerson = (id) => {
    console.log('Tuleeko deletePerson funktioon ja mikä id ', id)
    console.log('baseurl ja id ', baseUrl +'/'+ id)
    return axios.delete(baseUrl +'/'+ id)
}


export default { getAll, create, update, deletePerson }