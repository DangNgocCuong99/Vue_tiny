import axios from 'axios'

export const getItem = (data) => {
    console.log(data,'fetchaaaaaaaaaaa')
    return axios({
        url: `http://localhost:3001/`,
        method: 'GET'
    })
}
export const addItem = (data) => {
    console.log(data,'fetchaaaaaaaaaaa')
    return axios({
        url: `http://localhost:3001/`,
        method: 'POST',
        data: data
    })
}
export const updateItem = (data) => {
    console.log(data,'fetchaaaaaaaaaaa')
    return axios({
        url: `http://localhost:3008/?name=${data.name}&id=${data.id}`,
        method: 'PUT'
    })
}
export const deleteItem = (data) => {
    console.log(data,'fetchaaaaaaaaaaa')
    return axios({
        url: `http://localhost:3008/?id=${data.id}`,
        method: 'DELETE'
    })
}