import {HomeRoutesEnum} from "@/core/modules/home/enums/HomeRoutesEnum";

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/default/Default.vue'),
        children: [
            {
                path: '',
                name: HomeRoutesEnum.home,
                component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
            },
        ],
        meta: {
            isProtected: true,
        },
    },
]


export default routes;
