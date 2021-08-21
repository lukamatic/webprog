const Restaurants = { template: '<restaurants></restaurants>' };
const Login = { template: '<login></login>' };
const Signup = { template: '<signup></signup>' };

const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', component: Restaurants },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
  ],
});

var app = new Vue({
  router: router,
  el: '#app',
});
