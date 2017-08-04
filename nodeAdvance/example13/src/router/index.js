import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import userList from '@/components/userList'
import userAdd from '@/components/userAdd'
import login from '@/components/login'

Vue.use(Router)

// mode切换路径模式，history模式也就是去掉#
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/userList',
      name: 'userList',
      component: userList,
      children: [{
        path: '/userAdd',
        name: 'userAdd',
        component: userAdd
      }]
    },
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
