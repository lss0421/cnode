import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        redirect: '/'
    },
    {
        path: '/',
        name: 'Layout',
        component: () =>
            import ('../views/layout/Layout.vue'),
        meta: {
            title: '首页'
        },

        children: [{
                path: '',
                name: 'Home',
                component: () =>
                    import ('../views/Home.vue'),
                meta: {
                    title: '主页'
                }
            },
            {
                path: 'detail',
                name: 'Detail',
                component: () =>
                    import ('../views/detail/Detail.vue'),
                meta: {
                    title: '详情页'
                }
            }
        ]
    },

    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/login/Login.vue'),
        meta: {
            title: '登陆'
        },
    },



    {
        path: '/about',
        name: 'About',

        component: () =>
            import ('../views/About.vue'),
        meta: {
            title: '其它'
        },
    },

    {
        path: '*',
        name: 'Err',
        component: () =>
            import ('../views/err/Err.vue'),
        meta: {
            title: '错误'
        },
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})


export default router