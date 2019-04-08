import Vue from 'vue'
import Router from 'vue-router'
import ContactPage from './views/ContactPage'
import AboutPage from './views/AboutPage'
import HomePage from './views/HomePage'
import WorkPage from './views/WorkPage'
// import links from './components/notFound/links'
import BlogPage from './views/BlogPage'
import newPost from './components/blog/newPost'
import showPost from './components/blog/showPost'
import editPost from './components/blog/editPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/contact',      
      component: ContactPage
    },
    {
      path:'/about',   
      component: AboutPage
    },
    {
      path:'/',  
      component: HomePage
    },
    {
      path:'/work',    
      component: WorkPage,
      name:'WorkPage'
    },
    { 
      path: '/blog',
      component: BlogPage,
      name:'blog-page'
    },
    {
      path: '/blog/newPost',
      component: newPost,
      name:'new-post'
    },
    {
      path:'/blog/:id',
      component: showPost,
      name: 'show-post'
    },
    {
      path:'/blog/:id/edit',
      component: editPost,
      name: 'edit-post'
    }

    // {
    //   path: '*',
    //   component: NotFound
    // },
    // {
    //   path: '/Link',
    //   name: 'links',
    //   component: links
    // }
  ]
})
