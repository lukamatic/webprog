Vue.component('restaurants', {
  data: function () {
    return {
      restaurants: null,
    };
  },
  template: `
  <div>
    <navbar path="restaurants"></navbar>
    <div class="d-flex flex-column align-items-center pb-5 bg-light">
      <div
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        class="
          d-flex
          flex-row
          align-items-center
          flex-wrap flex-md-nowrap
          justify-content-center
          w-75
          mt-4
          bg-white
          border border-dark
        "
      >
        <img
          class="m-3"
          src=""
          width="200"
          height="200"
        />
        <div class="flex-column flex-fill mx-3">
          <div
            class="
              d-flex
              flex-row
              align-items-center
              flex-wrap
              justify-content-center
            "
          >
            <h2 class="flex-fill">{{ restaurant.name }}</h2>
            <h4 class="bg-dark text-white px-4 py-2 mr-2 rounded">
              {{ restaurant.open ? "OPEN" : "CLOSED" }}
            </h4>
          </div>
          <h5 class="mt-2">Restauarnt type: {{ restaurant.restaurantType }}</h5>
          <h5 style="min-width: 300px">
            Address: {{ restaurant.location.address | formatAddress }}
          </h5>
          <h5>Average rating: {{ restaurant.averageRating }}</h5>
        </div>
      </div>
    </div>
  </div>
`,
  mounted() {
    axios.get('/DeliveryApp/rest/restaurants/all').then((response) => {
      this.restaurants = response.data;
      console.log(this.restaurants);
    });
  },
  filters: {
    formatAddress: (address) => {
      return address.street + ' ' + address.streetNumber + ', ' + address.city + ', ' + address.country;
    },
  },
});
