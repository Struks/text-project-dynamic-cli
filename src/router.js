import Vue from 'vue'
import Router from 'vue-router'
import ContactPage from './views/ContactPage'
import AboutPage from './views/AboutPage'
import HomePage from './views/HomePage'
import WorkPage from './views/WorkPage'
import links from './components/notFound/links'
import BlogPage from './views/BlogPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/Contact',      
      component: ContactPage
    },
    {
      path:'/About',   
      component: AboutPage
    },
    {
      path:'/',  
      component: HomePage
    },
    {
      path:'/Work',    
      component: WorkPage,
      name:'Work Page'
    },
    {
      path: '/Blog',
      component: BlogPage,
      name:'Blog Page'
    },
    // {
    //   path: '*',
    //   component: NotFound
    // }
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path: '/Link',
      name: 'links',
      component: links
    }
  ]
})
