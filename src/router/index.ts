// Composables
import {createRouter, createWebHistory, RouteRecordNormalized} from 'vue-router'
import login from "@/router/auth/login";
import project from "@/router/project/project"
import home from "@/router/home"
import {useAuthStore} from "@/store/auth";

const routes = [
    ...home,
    ...login,
    ...project
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
