import axios from 'axios';

// https://todo-api-post.herokuapp.com/
const API = axios.create({ baseURL: `https://todo-api-post.herokuapp.com/` });
// const API = axios.create();

/**
 * Metodos HTTP para interações Ajax
 */

export const getData = async(url) => {
    return API.get(url);
}

export const postData = async(url, data) => {
    return API.post(url, data);
}

export const putData = async(url, data) => {
    return API.put(url, data);
}

export const deleteData = async(url) => {
    return API.delete(url);
}

export default {
    getData,
    postData,
    putData,
    deleteData,
}
