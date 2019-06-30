import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/view/index'
Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        //{
        //     path: '/index', //和router-link to相呼应，导航到/
        //     name: 'index',
        //     component: resolve => require(['../view/index.vue'], resolve),
        // }
        {
            path: '/index',
            name: 'index',
            component: index
        }
    ]
})
export default router