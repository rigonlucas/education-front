import {useAuthStore} from "@/store/auth";
import axios from "axios";

const api = axios.create({baseURL: 'http://localhost:3000/api/v1/'})

api.interceptors.request.use((request: any) => {
    const authStore = useAuthStore()
    if (authStore.getToken) {
        request.headers.common.Authorization = 'Bearer ' + authStore.getToken
    }

    return request
}, error => {
    return Promise.reject(error)
})

api.interceptors.response.use(response => {
    return response
}, (error) => {
    if (!axios.isAxiosError(error)) {
        return Promise.reject(error)
    }

    if (error.response?.status === 401) {
    //authStore.clearUserSession()
        console.log('aaaa 401')
    }

    return Promise.reject(error)
})

export {api}
