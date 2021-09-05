const Restaurants = { template: '<restaurants></restaurants>' };
const Login = { template: '<login></login>' };
const Signup = { template: '<signup></signup>' };
const Users = { template: '<users></users>' };
const NewUser = { template: '<new-user></new-user>' };
const NewRestaurant = { template: '<new-restaurant></new-restaurant>' };

const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', redirect: '/restaurants' },
    { path: '/restaurants', component: Restaurants },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/users', component: Users },
    { path: '/newUser', component: NewUser },
    { path: '/newRestaurant', component: NewRestaurant },
  ],
});

var app = new Vue({
  router: router,
  el: '#app',
});
