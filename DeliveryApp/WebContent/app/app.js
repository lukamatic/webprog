const Restaurants = { template: '<restaurants></restaurants>' };
const Login = { template: '<login></login>' };
const Signup = { template: '<signup></signup>' };
const Users = { template: '<users></users>' };

const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', redirect: '/restaurants' },
    { path: '/restaurants', component: Restaurants },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/users', component: Users },
  ],
});

var app = new Vue({
  router: router,
  el: '#app',
});
