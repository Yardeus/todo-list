
import * as axios from "axios";



const instance = axios.default.create({
//настройки
    baseURL: 'https://jsonplaceholder.typicode.com/',
});


export const todoAPI = {
    getTodos() {
        return instance.get(`todos`)
            .then(response => response.data)
    },
}