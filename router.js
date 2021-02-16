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
];

export function createRouter() {
  return new Router({
    routes,
    mode: 'history'
  });
}