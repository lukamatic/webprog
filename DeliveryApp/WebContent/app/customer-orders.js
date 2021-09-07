Vue.component('customer-orders', {
  data: function () {
    return {
      user: null,
      orders: null,
      ordersDTO: [],
      allOrdersDTO: [],
      displayedOrders: null,
      displayedOrdersDTO: [],
      isSearchDivHidden: true,
      searchParameters: { type: "any" },
      sortOptions: { condition: "", order: "asc" },
      filterOptions: { type: "any", open: false },
    };
  },
  template: ` 
    <div>
      <navbar path="customer-orders"></navbar>
      
      <div class="d-flex flex-column align-items-center bg-light">
      <div
        class="
          d-flex
          flex-column
          align-items-center
          w-50
          p-4
          mt-4
          bg-white
          box-shadow
        "
      >
        <button
          class="btn btn-dark w-75 font-weight-bold"
          v-on:click="isSearchDivHidden = false"
          :hidden="!isSearchDivHidden"
        >
          Search orders
        </button>
        <div
          class="bg-light border boreder-dark w-100 p-3"
          :hidden="isSearchDivHidden"
        >
          <div class="d-flex flex-row justify-content-between">
            <h4>Search orders:</h4>
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
                  v-model="searchParameters.restaurantName"
                />
              </td>
            </tr>
            
            
            <tr>
              <td>
                <label class="pt-3" for="from"><h5>Price:</h5></label>
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
                  v-model="searchParameters.fromPrice"
                />
                <label class="ml-2 pt-2" for="to">to:</label>
                <input
                  class="ml-2"
                  name="to"
                  id="to"
                  type="number"
                  min="0"
                  max="5"
                  v-model="searchParameters.toPrice"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label class="pt-3"><h5>Date created:</h5></label>
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
                  v-model="searchParameters.fromDate"
                />
                <label class="ml-2 pt-2" for="to">to:</label>
                <input
                  class="ml-2"
                  name="to"
                  id="to"
                  type="number"
                  min="0"
                  max="5"
                  v-model="searchParameters.toDate"
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
                <option value="name">Restaurant name</option>
                <option value="location">Price</option>
                <option value="rating">Date created</option>
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
              <label for="statusFilter"
                ><h5>Filter by order status:</h5></label
              >
              <select
                class="ml-2"
                name="statusFilter"
                id="statusFilter"
                v-on:change="filter"
                v-model="filterOptions.status"
              >
                <option value="any">Any</option>
                <option value="PROCESSING">Processing</option>
                <option value="IN_PREPARATION">In preparation</option>
                <option value="WAITING_FOR_DELIVERY">Waiting for delivery</option>
                <option value="IN_TRANSPORT">In transport</option>
                <option value="DELIVERED">Delivered</option>
                <option value="CANCELED">Canceled</option>
              </select>
            </div>
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
            
          </div>
        </div>
      </div>
      
<!-- --------NARUDZBINE-------- -->
	<div class="d-flex flex-column align-items-center bg-light">
            
            <br>

            <div class="d-flex flex-column">

                <div class="bg-white subtile-box-shadow m-1 p-2 d-flex flex-row justify-content-between"
                    style="min-height: 100px; min-width: 600px; width: 1000px;" v-for="orderDTO in displayedOrdersDTO" :key="orderDTO.order.id">
                    <div class="d-flex flex-column pl-5">
                    	<h4 class="pt-2">{{orderDTO.restaurantName}}</h4>
                        <ul class="p-0">
                            <li v-for="item in orderDTO.order.items" :key="item.article.id">{{item.count}} x {{item.article.name}}</li> 
                        </ul>
                    </div>
                    <div class="d-flex flex-column align-items-start m-2 mr-4">
                        <div>Created at {{orderDTO.order.dateTimeCreated | formatDate('hh:mm on DD.MM.YYYY.') }}
                        </div>
                        <div>
                            Status: {{orderDTO.order.orderStatus}}
                        </div>
                        <div>
                          <b>Total: {{parseFloat(orderDTO.order.price).toFixed(2)}} RSD</b>
                        </div>
                        <div>
                            <button v-if="orderDTO.order.orderStatus == 'DELIVERED'" class="btn btn-sm btn-outline-primary mt-3">Leave a comment</button>
                            <button v-if="orderDTO.order.orderStatus == 'PROCESSING'" class="btn btn-sm btn-outline-secondary mt-3">Cancel order</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
      
      </div>
      
    </div>		  
`,
  mounted() {

    let p = "";
    axios.get('/DeliveryApp/rest/auth/').then((response) => {
      p = response.data;
      var path = "/DeliveryApp/rest/users/" + p.username + "/";
      axios.get(path).then((response) => {
        this.user = response.data;

        axios.get('/DeliveryApp/rest/orders/user/' + this.user.id).then((response) => {
          this.orders = response.data;
          for(let o of this.orders) {
          	let restaurant = null;
	        axios.get('/DeliveryApp/rest/restaurants/' + o.restaurantId).then((response) => {
	          restaurant = response.data;
	          let name = restaurant.name;
	          let odto = {order: o, restaurantName: restaurant.name, restaurantType: restaurant.restaurantType};
	          this.ordersDTO.push(odto);
	          this.allOrdersDTO.push(odto);
	          this.displayedOrdersDTO.push(odto);
	          /*this.allOrdersDTO = Array.from(this.ordersDTO);
              this.displayedOrdersDTO = Array.from(this.ordersDTO);*/
	        });
	        
          }
          
          
        });
        
        
      });
    });

    
  },
  filters: {
    formatDate: function (value, format) {
      var parsed = moment(value);
      return parsed.format(format);
    },
  },
  methods: {
    search: function (searchParameters) {
      /*var params = "";

      if (searchParameters.name) {
        params = params.concat("name=" + searchParameters.name);
      }

      if (searchParameters.type) {
        params = params.concat("&type=" + searchParameters.type);
      }

      if (searchParameters.location) {
        params = params.concat("&location=" + searchParameters.location);
      }

      if (searchParameters.from) {
        params = params.concat("&from=" + searchParameters.from);
      }

      if (searchParameters.to) {
        params = params.concat("&to=" + searchParameters.from);
      }

      axios.get("/DeliveryApp/rest/restaurants/search?" + params).then((response) => {
        this.restaurants = response.data;
        this.displayedRestaurants = this.restaurants;
      });*/
    },
    sort: function () {
      /*if (this.sortOptions.condition) {
        switch (this.sortOptions.condition) {
          case "name":
            this.displayedRestaurants = this.displayedRestaurants.sort((a, b) =>
              this.sortByName(a, b, this.sortOptions.order)
            );
            break;
          case "location":
            this.displayedRestaurants = this.displayedRestaurants.sort((a, b) =>
              this.sortByLocation(a, b, this.sortOptions.order)
            );
            break;
        }
      }
    },
    sortByName: function (a, b, order) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (order == "asc") {
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
    sortByLocation: function (a, b, order) {
      const locationA = this.$options.filters.formatAddress(a.location.address).toUpperCase();
      const locationB = this.$options.filters.formatAddress(b.location.address).toUpperCase();

      if (order == "asc") {
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
      return 0;*/
    },
    filter: function () {
      /*this.displayedRestaurants = this.restaurants.filter((r) =>
        this.filterOptions.open ? r.open : true
      );

      this.sort();

      switch (this.filterOptions.type) {
        case "grill":
          this.displayedRestaurants = this.displayedRestaurants.filter(
            (r) => r.restaurantType == "GRILL"
          );
          break;
        case "italian":
          this.displayedRestaurants = this.displayedRestaurants.filter(
            (r) => r.restaurantType == "ITALIAN"
          );
          break;
        case "chinese":
          this.displayedRestaurants = this.displayedRestaurants.filter(
            (r) => r.restaurantType == "CHINESE"
          );
          break;
        case "vegan":
          this.displayedRestaurants = this.displayedRestaurants.filter(
            (r) => r.restaurantType == "VEGAN"
          );
          break;
      }*/

    },
  },
});