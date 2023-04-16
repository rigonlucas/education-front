import {defineStore} from 'pinia'
import {UserEntity} from "@/core/modules/auth/entities/UserEntity";
import {LocalStorageKeysEnum} from "@/core/modules/auth/enums/LocalStorageKeysEnum";
import {AuthInterface} from "@/core/modules/auth/interfaces/AuthInterface";
import {UserInterface} from "@/core/modules/auth/interfaces/UserInterface";

const storageKeysEnum = LocalStorageKeysEnum
export const useAuthStore = defineStore(storageKeysEnum.stateName, {
    state: (): AuthInterface => ({
        user: JSON.parse(localStorage.getItem(storageKeysEnum.user) ?? '') as UserEntity | null,
        token: localStorage.getItem(storageKeysEnum.token) as string | null,
    }),
    actions: {
        setAuthUser(name: string, email: string, avatar: string | null = null) {
            this.user = new UserEntity(name, email, avatar)
            localStorage.setItem('auth-user', JSON.stringify(this.user));
        },
        setAuthUserToken(token: string | null) {
            if (token === null) {
                localStorage.removeItem(storageKeysEnum.token)
                this.token = null
                return
            }
            this.token = token
            localStorage.setItem(storageKeysEnum.token, JSON.stringify(this.token));
        },
    },
    getters: {
        getUser(): UserInterface {
            return this.user as UserInterface
        },
        getToken(): string | null {
            return this.token
        },
        isAuthenticated(): boolean {
            if (this.token === null) {
                return false
            }
            return !!this.token
        },
        getUserNameInicials(): string {
            const nameWords = this.user?.name.split(' ') ?? [];

            if (nameWords.length == 0) {
                return 'US'
            }

            if (nameWords.length === 1) {
                return nameWords[0].substring(0, 2).toUpperCase();
            }
            
            return (nameWords[0].substring(0, 1) + nameWords[nameWords.length - 1].substring(0, 1)).toUpperCase();
        }
    }
})
