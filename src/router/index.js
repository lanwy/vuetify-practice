import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Login from '@/Login'
import demo from './config/demo'
import grid from './config/grid'
import framework from './config/framework'

let routers = [
    { path:'/', name:'login', component:Login }
]

routers.push(...demo);
routers.push(...grid);
routers.push(...framework);

export default new Router({
    routes: routers
})