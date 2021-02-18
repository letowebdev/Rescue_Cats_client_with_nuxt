import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m);

const routes = [
  { path: '/', name: 'index', component: page('index.vue') },
  { path: '/login', name: 'login', component: page('auth/login.vue') },
  { path: '/register', name: 'register', component: page('auth/register.vue') },
  { path: '/upload', name: 'add-post', component: page('user/posts/upload.vue') },
  { path: '/posts/:id/create', name: 'create-post', component: page('user/posts/create.vue') },
  { path: '/posts/:id/update', name: 'update-post', component: page('user/posts/update.vue') },
  { path: '/search-posts', name: 'search.posts', component: page('posts/search.vue') },


  {
    path: '/settings',
    component: page('user/settings/index.vue'),
    children: [
      { path: '', redirect: { name: 'settings.dashboard' } },
      {
        path: 'dashboard',
        name: 'settings.dashboard',
        component: page('user/settings/dashboard.vue')
      },
      {
        path: 'profile',
        name: 'settings.profile',
        component: page('user/settings/profile.vue')
      },
      {
        path: 'posts',
        name: 'settings.posts',
        component: page('user/settings/posts.vue')
      },
      
    ]
  }
];

export function createRouter() {
  return new Router({
    routes,
    mode: 'history'
  });
}