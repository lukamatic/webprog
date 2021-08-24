Vue.component('restaurants', {
  data: function () {
    return {
      restaurants: null,
      isSearchDivHidden: true,
    };
  },
  template: `
  <div>
    <navbar path="restaurants"></navbar>
    <div class="d-flex flex-column align-items-center pb-5 bg-light">
    <div
        class="
          d-flex
          flex-column
          align-items-center
          border border-dark
          w-50
          p-4
          mt-4
          bg-white
        "
      >
        <button
          class="btn btn-dark w-75 font-weight-bold"
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
          <div class="d-flex flex-row align-items-center flex-wrap">
            <label class="pt-3" for="name"><h5>Restaurant name:</h5></label>
            <input
              class="ml-2"
              name="name"
              id="name"
              placeholder="restaurant name"
            />
          </div>
          <div class="d-flex flex-row align-items-center flex-wrap">
            <label class="pt-3" for="type"><h5>Restaurant type:</h5></label>
            <select class="ml-2" name="type" id="type">
              <option value="grill">Grill</option>
              <option value="italian">Italian</option>
              <option value="chinese">Chinese</option>
              <option value="vegan">Vegan</option>
            </select>
          </div>
          <div class="d-flex flex-row align-items-center flex-wrap">
            <label class="pt-3" for="location"><h5>Location:</h5></label>
            <input
              class="ml-2"
              name="location"
              id="location"
              placeholder="city or country name"
            />
          </div>
          <div class="d-flex flex-row align-items-center flex-wrap">
            <label class="pt-3" for="from"><h5>Average rating:</h5></label>
            <label class="ml-4 pt-2" for="from">from:</label>
            <input
              class="ml-2"
              name="from"
              id="from"
              type="number"
              min="0"
              max="5"
            />
            <label class="ml-2 pt-2" for="to">to:</label>
            <input
              class="ml-2"
              name="to"
              id="to"
              type="number"
              min="0"
              max="5"
            />
            <button class="btn btn-dark ml-5">Search</button>
          </div>
        </div>
        <div class="d-flex flex-row flex-wrap w-100 justify-content-center">
          <div class="mt-4 mx-3">
            <div>
              <label for="condition"><h5>Sort restaurants by:</h5></label>
              <select class="ml-2" name="condition" id="cars">
                <option value="name">Name</option>
                <option value="location">Location</option>
                <option value="rating">Average rating</option>
              </select>
            </div>
            <div>
              <label for="order"><h5>Sort order:</h5></label>
              <select class="ml-2" name="order" id="cars">
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
              <select class="ml-2" name="typeFilter" id="typeFilter">
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
                  id="subscribeNews"
                  name="subscribe"
                  value="newsletter"
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
