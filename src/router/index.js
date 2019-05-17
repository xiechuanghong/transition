import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/**helloworld */
const HelloWorld = r => require(['@/components/HelloWorld'],r)
/**底部导航 */
const base = r => require(['@/components/base'], r)
/**首页 */
const index = r => require(['@/components/tab/index'], r)
/**学校 */
const schoolTest = r => require(['@/components/tab/schoolTest'], r)
/**测试文件 */
const test = r => require(['@/components/test'],r)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path:'/base',
      component: base,
      redirect:'/index',
      children: [
        {
          path: '/index',
          component: index,
        },
        {
          path: '/schoolTest',
          component: schoolTest,
        }
      ]
    }
  ]
})
