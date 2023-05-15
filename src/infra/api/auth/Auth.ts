import {api} from "@/plugins/axios";

export async function login(email: string, password: string) {
    const {data} = await api.post('login', {email, password})

    return data
}

export default {
    login
}
