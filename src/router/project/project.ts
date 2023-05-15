import {ProjectRoutesEnum} from "@/core/modules/project/enums/ProjectRoutesEnum";

const routes = [
    {
        path: '/projeto',
        component: () => import('@/layouts/default/Default.vue'),
        children: [
            {
                path: 'lista',
                name: ProjectRoutesEnum.peoject_list,
                component: () => import(/* webpackChunkName: "login" */ '@/views/project/list/ProjectListView.vue'),
            },
            {
                path: 'configuracoes',
                name: ProjectRoutesEnum.peoject_config,
                component: () => import(/* webpackChunkName: "login" */ '@/views/project/config/ProjectConfigView.vue'),
            },
        ],
        meta: {
            isProtected: true,
        },
    },
]


export default routes;
