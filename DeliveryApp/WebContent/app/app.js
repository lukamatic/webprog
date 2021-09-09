const Restaurants = { template: '<restaurants></restaurants>' };
const Restaurant = { template: '<restaurant></restaurant>' };
const Login = { template: '<login></login>' };
const Signup = { template: '<signup></signup>' };
const Users = { template: '<users></users>' };
const NewUser = { template: '<new-user></new-user>' };
const NewArticle = { template: '<new-article></new-article>' };
const NewRestaurant = { template: '<new-restaurant></new-restaurant>' };
const NewManager = { template: '<new-manager></new-manager>' };
const Cart = { template: '<cart></cart>' };
const Profile = { template: '<profile></profile>' };
const Orders = { template: '<orders></orders>' };
const CustomerOrders = { template: '<customer-orders></customer-orders>' };

const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', redirect: '/restaurants' },
    { path: '/restaurants', component: Restaurants },
    { path: '/restaurant', component: Restaurant },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/users', component: Users },
    { path: '/newUser', component: NewUser },
    { path: '/newArticle', component: NewArticle },
    { path: '/newRestaurant', component: NewRestaurant },
    { path: '/newManager', component: NewManager },
    { path: '/cart', component: Cart },
    { path: '/profile', component: Profile },
    { path: '/orders', component: Orders },
    { path: '/customer-orders', component: CustomerOrders },
  ],
});

var app = new Vue({
  router: router,
  el: '#app',
});
