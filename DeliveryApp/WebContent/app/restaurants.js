Vue.component('restaurants', {
  data: function () {
    return {
      restaurants: null,
      displayedRestaurants: null,
      isSearchDivHidden: true,
      searchParameters: { type: 'any' },
      sortOptions: { condition: '', order: 'asc' },
      filterOptions: { type: 'any', open: false },
    };
  },
  template: `
  <div>
  	<navbar path="restaurants"></navbar> 
    <div class="d-flex flex-column align-items-center pb-5 bg-light">
      <a v-if="$cookies.get('role') == 'ADMIN'"
        class="btn btn-dark align-self-end mr-5 mt-4"
        href="#/newRestaurant"
      >Create new restaurant</a>
    
      <div
        class="
          d-flex
          flex-column
          align-items-center
          w-50
          p-4
          mt-4
          bg-white
          shadow-lg
        "
      >
        <button
          class="btn btn-dark w-75"
          v-on:click="isSearchDivHidden = false"
          :hidden="!isSearchDivHidden"
        >
          Search for restaurant
        </button>
        <div
          class="bg-light border boreder-dark w-100 p-3"
          :hidden="isSearchDivHidden"
        >
          <div class="d-flex flex-row justify-content-between">
            <h4>Search for restaurant:</h4>
            <button
              class="btn btn-dark font-weight-bold"
              v-on:click="isSearchDivHidden = true"
            >
              ✕
            </button>
          </div>
          <table>
            <tr>
              <td>
                <label class="pt-3" for="name"><h5>Restaurant name:</h5></label>
              </td>
              <td>
                <input
                  class="ml-2"
                  name="name"
                  id="name"
                  placeholder="restaurant name"
                  v-model="searchParameters.name"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label class="pt-3" for="type"><h5>Restaurant type:</h5></label>
              </td>
              <td>
                <select
                  class="ml-2"
                  name="type"
                  id="type"
                  v-model="searchParameters.type"
                >
                  <option value="any">Any</option>
                  <option value="grill">Grill</option>
                  <option value="italian">Italian</option>
                  <option value="chinese">Chinese</option>
                  <option value="vegan">Vegan</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label class="pt-3" for="location"><h5>Location:</h5></label>
              </td>
              <td>
                <input
                  class="ml-2"
                  name="location"
                  id="location"
                  placeholder="city or country name"
                  v-model="searchParameters.location"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label class="pt-3" for="from"><h5>Average rating:</h5></label>
              </td>
              <td>
                <label class="ml-4 pt-2" for="from">from:</label>
                <input
                  class="ml-2"
                  name="from"
                  id="from"
                  type="number"
                  min="0"
                  max="5"
                  v-model="searchParameters.from"
                />
                <label class="ml-2 pt-2" for="to">to:</label>
                <input
                  class="ml-2"
                  name="to"
                  id="to"
                  type="number"
                  min="0"
                  max="5"
                  v-model="searchParameters.to"
                />
              </td>
            </tr>
            <tr>
              <td colspan="2" class="text-center">
                <button
                  class="btn btn-dark"
                  v-on:click="search(searchParameters)"
                >
                  Search
                </button>
              </td>
            </tr>
          </table>
        </div>
        <div class="d-flex flex-row flex-wrap w-100 justify-content-center">
          <div class="mt-4 mx-3">
            <div>
              <label for="condition"><h5>Sort restaurants by:</h5></label>
              <select
                class="ml-2"
                name="condition"
                id="condition"
                v-on:change="sort"
                v-model="sortOptions.condition"
              >
                <option value="name">Name</option>
                <option value="location">Location</option>
                <option value="rating">Average rating</option>
              </select>
            </div>
            <div>
              <label for="order"><h5>Sort order:</h5></label>
              <select
                class="ml-2"
                name="order"
                id="cars"
                v-on:change="sort"
                v-model="sortOptions.order"
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>
          <div class="mt-4 mx-3">
            <div>
              <label for="typeFilter"
                ><h5>Filter by restaurant type:</h5></label
              >
              <select
                class="ml-2"
                name="typeFilter"
                id="typeFilter"
                v-on:change="filter"
                v-model="filterOptions.type"
              >
                <option value="any">Any</option>
                <option value="grill">Grill</option>
                <option value="italian">Italian</option>
                <option value="chinese">Chinese</option>
                <option value="vegan">Vegan</option>
              </select>
            </div>
            <div>
              <h5>
                <input
                  type="checkbox"
                  id="openFilter"
                  name="openFilter"
                  v-on:change="filter"
                  v-model="filterOptions.open"
                />
                <label for="openFilter" class="ml-1"
                  >Show only open restaurants</label
                >
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div
        v-for="restaurant in displayedRestaurants"
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
          shadow
        "
        v-on:click="choose(restaurant.id)" style="cursor:pointer"
      >
        <img class="m-3" :src="'Images/' + restaurant.logoImageName" width="200" height="200" />
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
           <h5>Average rating: {{ restaurant.averageRating.toFixed(2) }}</h5>
        </div>
      </div>
    </div>
  </div>
`,
  mounted() {
    axios.get('/DeliveryApp/rest/restaurants').then((response) => {
      this.restaurants = response.data;
      this.displayedRestaurants = this.restaurants;
      this.displayedRestaurants = this.displayedRestaurants.sort((a, b) =>
        this.sortByOpen(a, b)
      )
    });
  },
  filters: {
    formatAddress: (address) => {
      return (
        address.street +
        ' ' +
        address.streetNumber +
        ', ' +
        address.city +
        ', ' +
        address.country
      );
    },
  },
  methods: {
    search: function (searchParameters) {
      var params = '';

      if (searchParameters.name) {
        params = params.concat('name=' + searchParameters.name);
      }

      if (searchParameters.type) {
        params = params.concat('&type=' + searchParameters.type);
      }

      if (searchParameters.location) {
        params = params.concat('&location=' + searchParameters.location);
      }

      if (searchParameters.from) {
        params = params.concat('&from=' + searchParameters.from);
      }

      if (searchParameters.to) {
        params = params.concat('&to=' + searchParameters.from);
      }

      axios
        .get('/DeliveryApp/rest/restaurants/search?' + params)
        .then((response) => {
          this.restaurants = response.data;
          this.displayedRestaurants = this.restaurants;
          this.displayedRestaurants = this.displayedRestaurants.sort((a, b) =>
            this.sortByOpen(a, b)
      	  )
        });
    },
    sort: function () {
      if (this.sortOptions.condition) {
        switch (this.sortOptions.condition) {
          case 'name':
            this.displayedRestaurants = this.displayedRestaurants.sort((a, b) =>
              this.sortByName(a, b, this.sortOptions.order)
            );
            break;
          case 'location':
            this.displayedRestaurants = this.displayedRestaurants.sort((a, b) =>
              this.sortByLocation(a, b, this.sortOptions.order)
            );
            break;
        }
      }
    },
    sortByOpen: function(a, b) {
    	if (a.open && !b.open) {
          return -1;
        }
        else {
          return 1;
        }
    },
    sortByName: function(a, b, order) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (order == 'asc') {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      } else {
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
      }
      return 0;
    },
    sortByLocation: function(a, b, order) {
      const locationA = this.$options.filters
        .formatAddress(a.location.address)
        .toUpperCase();
      const locationB = this.$options.filters
        .formatAddress(b.location.address)
        .toUpperCase();

      if (order == 'asc') {
        if (locationA < locationB) {
          return -1;
        }
        if (locationA > locationB) {
          return 1;
        }
      } else {
        if (locationA < locationB) {
          return 1;
        }
        if (locationA > locationB) {
          return -1;
        }
      }
      return 0;
    },
    filter: function () {
      this.displayedRestaurants = this.restaurants.filter((r) =>
        this.filterOptions.open ? r.open : true
      );

      this.sort();

      switch (this.filterOptions.type) {
        case 'grill':
          this.displayedRestaurants = this.displayedRestaurants.filter(
            (r) => r.restaurantType == 'GRILL'
          );
          break;
        case 'italian':
          this.displayedRestaurants = this.displayedRestaurants.filter(
            (r) => r.restaurantType == 'ITALIAN'
          );
          break;
        case 'chinese':
          this.displayedRestaurants = this.displayedRestaurants.filter(
            (r) => r.restaurantType == 'CHINESE'
          );
          break;
        case 'vegan':
          this.displayedRestaurants = this.displayedRestaurants.filter(
            (r) => r.restaurantType == 'VEGAN'
          );
          break;
      }
    },
    choose: function (restaurantId) {
      window.location.href = '#/restaurant?id=' + restaurantId;

      //});
    },
  },
});
