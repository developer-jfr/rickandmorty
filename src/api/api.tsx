import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/'
})



export const userAPI = {
    getUsers(currentPage:number, pageSize: number, name: string, status: string, gender: string) {
        return instance.get(`character/?name=${name}&status=${status}&gender=${gender}&page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    getSpecificUser(id: number) {
        return instance.get(`character/${id}`).then(res => res.data)
    }
}