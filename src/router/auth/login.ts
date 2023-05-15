import {LoginRoutesEnum} from "@/core/modules/auth/enums/AuthRoutesEnum";

const routes = [
    {
        path: '/auth',
        component: () => import('@/layouts/auth/Default.vue'),
        children: [
            {
                path: 'login',
                name: LoginRoutesEnum.login,
                component: () => import(/* webpackChunkName: "login" */ '@/views/auth/login/LoginView.vue'),
            },
        ],
        meta: {
            onlyGuest: true,
        },
    }
]


export default routes;
