// Composables
import {createRouter, createWebHistory, RouteRecordNormalized} from 'vue-router'
import login from "@/router/auth/login";
import {useAuthStore} from "@/store/auth";

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/default/Default.vue'),
        children: [
            {
                path: '',
                name: 'home',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
            },
        ],
        meta: {
            isProtected: true,
        },
    },
    ...login
]

function getMetaAttribute(attribute: string, routes: RouteRecordNormalized[]) {
    return routes.reduce((acc: any, route: RouteRecordNormalized) => {
        if (attribute in route.meta) {
            return route.meta[attribute]
        }

        return acc
    }, false)
}


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach((to, from, next) => {
    const auth = useAuthStore()
    const isAuthenticated = auth.isAuthenticated;
    const isProtectedRoute = getMetaAttribute('isProtected', to.matched)
    const isOnlyGuestRoute = getMetaAttribute('onlyGuest', to.matched)

    if (isOnlyGuestRoute && isAuthenticated) {
        return next(from || {name: 'home'})
    }

    if (!isProtectedRoute) {
        return next()
    }

    if (isAuthenticated) {
        return next()
    }

    return next({name: 'auth.login'})
});

export default router
