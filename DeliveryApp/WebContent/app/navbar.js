Vue.component('navbar', {
  props: ['path'],
  data: function () {
    return {
      activeItemClass: 'nav-item active',
      inactiveItemClass: 'nav-item',
      restaurantId: null,
    };
  },
  template: `
	<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#/">DeliveryApp</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li :class="[this.path == 'restaurants' ? activeItemClass : inactiveItemClass]">
                    <a class="nav-link" href="#/restaurants">Restaurants</a>
                </li>
                <li :class="[this.path == 'login' ? activeItemClass : inactiveItemClass]"  v-if="!$cookies.get('role')">
                    <a class="nav-link" href="#/login">Log In</a>
                </li>
                <li :class="[this.path == 'signup' ? activeItemClass : inactiveItemClass]"  v-if="!$cookies.get('role')">
                    <a class="nav-link" href="#/signup">Sign Up</a>
                </li>
                <li :class="[this.path == 'users' ? activeItemClass : inactiveItemClass]"  v-if="$cookies.get('role') == 'ADMIN'">
                    <a class="nav-link" href="#/users">Users</a>
                </li>
                <li :class="[this.path == ['restaurant?id=' + restaurantId] ? activeItemClass : inactiveItemClass]"  v-if="$cookies.get('role') == 'MANAGER'">
                    <a class="nav-link" href="#/" v-on:click="loadRestaurant">My restaurant</a>
                </li>
                <li :class="[this.path == 'cart' ? activeItemClass : inactiveItemClass]"  v-if="$cookies.get('role') == 'CUSTOMER'">
                    <a class="nav-link" href="#/cart">Cart</a>
                </li>
                <li :class="[this.path == 'customer-orders' ? activeItemClass : inactiveItemClass]"  v-if="$cookies.get('role') == 'CUSTOMER'">
                    <a class="nav-link" href="#/customer-orders">My orders</a>
                </li>
                <li :class="[this.path == 'orders' ? activeItemClass : inactiveItemClass]"  v-if="$cookies.get('role') == 'DELIVERER'">
                    <a class="nav-link" href="#/orders">Orders</a>
                </li>
                <li :class="[this.path == 'profile' ? activeItemClass : inactiveItemClass]"  v-if="$cookies.get('role')">
                    <a class="nav-link" href="#/profile">Profile</a>
                </li>
                <li :class="inactiveItemClass"  v-if="$cookies.get('role')">
                    <a v-on:click="logOut()" class="nav-link" href="#/restaurants">Log out</a>
                </li>
            </ul>
        </div>
    </nav>
`,
  created() {
	let p = "";
 	axios.get('/DeliveryApp/rest/auth/').then((response) => {
  		p = response.data;
  		var path = "/DeliveryApp/rest/users/" + p.username + "/";
    	axios.get(path).then((response) => {
	      	let user = response.data;
		  	if(user.role == 'MANAGER'){
		  		this.restaurantId = user.restaurantId;
		  	}
    	});
	});
  },
  methods: {
    logOut() {
      const vm = this;
  	  axios.post('/DeliveryApp/rest/auth/logout', {
	  })
	  .then(function (response) {
      	vm.$cookies.keys().forEach((cookie) => this.$cookies.remove(cookie));
      	router.push("login");
	  })
    },
    loadRestaurant() {
    	router.push('restaurant?id=' + this.restaurantId);
    	router.go();
    }
  }
});
