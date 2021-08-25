Vue.component('navbar', {
  props: ['path'],
  data: function () {
    return {
      activeItemClass: 'nav-item active',
      inactiveItemClass: 'nav-item',
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
                    <a class="nav-link" href="#/restaurants">Restaurants<span class="sr-only">(current)</span></a>
                </li>
                <li :class="[this.path == 'login' ? activeItemClass : inactiveItemClass]"  v-if="!$cookies.get('role')">
                    <a class="nav-link" href="#/login">Log In</a>
                </li>
                <li :class="[this.path == 'signup' ? activeItemClass : inactiveItemClass]"  v-if="!$cookies.get('role')">
                    <a class="nav-link" href="#/signup">Sign Up</a>
                </li>
                <li :class="[this.path == 'users' ? activeItemClass : inactiveItemClass]"  v-if="$cookies.get('role') == 'admin'">
                    <a class="nav-link" href="#/users">Users</a>
                </li>
                <li :class="[this.path == 'restaurant' ? activeItemClass : inactiveItemClass]"  v-if="$cookies.get('role') == 'manager'">
                    <a class="nav-link" href="#/restaurant">My restaurant</a>
                </li>
                <li :class="[this.path == 'customer-orders' ? activeItemClass : inactiveItemClass]"  v-if="$cookies.get('role') == 'customer'">
                    <a class="nav-link" href="#/customer-orders">My orders</a>
                </li>
                <li :class="[this.path == 'orders' ? activeItemClass : inactiveItemClass]"  v-if="$cookies.get('role') == 'deliverer'">
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
  methods: {
    logOut() {
      $cookies.keys().forEach((cookie) => this.$cookies.remove(cookie));
      location.reload();
    },
  }
});