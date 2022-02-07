import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import Contact from './views/Contact.vue'
import FAQ from './views/FAQ.vue'


/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [{
    name: 'Home',
    path: '/',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    name: 'Contact',
    path: '/contact',
    component: Contact,
    meta: {
      title: 'Contact'
    }
  },
  {
    name: 'About',
    path: '/about',
    meta: {
      title: 'About'
    },
    component: About,
  },
  {
    name: 'Faq',
    path: '/faq',
    meta: {
      title: 'FAQs'
    },
    component: FAQ,
  },
  {
    name: 'NotFound',
    path: '/:path(.*)',
    component: NotFound
  },
]