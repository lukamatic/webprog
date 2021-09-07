Vue.component('customer-orders', {
  data: function () {
    return {
      user: null,
      orders: null,
      ordersDTO: [],
      allOrdersDTO: [],
      displayedOrdersDTO: [],
      isSearchDivHidden: true,
      searchParameters: {  },
      sortOptions: { condition: "", order: "asc" },
      filterOptions: { type: "any", status: "any" },
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
                  step="0.01"
                  min="0"
                  v-model="searchParameters.priceFrom"
                />
                <label class="ml-2 pt-2" for="to">to:</label>
                <input
                  class="ml-2"
                  name="to"
                  id="to"
                  type="number"
                  step="0.01"
                  min="0"
                  v-model="searchParameters.priceTo"
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
                  type="date"
                  v-model="searchParameters.dateFrom"
                />
                <label class="ml-2 pt-2" for="to">to:</label>
                <input
                  class="ml-2"
                  name="to"
                  id="to"
                  type="date"
                  v-model="searchParameters.dateTo"
                />
              </td>
            </tr>
            <tr>
              <td colspan="2" class="text-center">
                <button
                  class="btn btn-dark px-3 mt-4"
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
              <label for="condition"><h5>Sort by:</h5></label>
              <select
                class="ml-2"
                name="condition"
                id="condition"
                v-on:change="sort"
                v-model="sortOptions.condition"
              >
                <option value="name">Restaurant name</option>
                <option value="price">Price</option>
                <option value="date">Date created</option>
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
                <option value="processing">Processing</option>
                <option value="in-preparation">In preparation</option>
                <option value="waiting-for-delivery">Waiting for delivery</option>
                <option value="in-transport">In transport</option>
                <option value="delivered">Delivered</option>
                <option value="undelivered">Undelivered</option>
                <option value="canceled">Canceled</option>
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
      var params = "user=" + this.user.id;
	  let dateFrom = moment(searchParameters.dateFrom).format("x");
	  let dateTo = moment(searchParameters.dateTo).format("x");
      if (searchParameters.restaurantName) {
        params = params.concat("&restaurantName=" + searchParameters.restaurantName);
      }

      if (searchParameters.priceFrom) {
        params = params.concat("&priceFrom=" + searchParameters.priceFrom);
      }

      if (searchParameters.priceTo) {
        params = params.concat("&priceTo=" + searchParameters.priceTo);
      }

      if (searchParameters.dateFrom) {
        params = params.concat("&dateFrom=" + dateFrom);
      }

      if (searchParameters.dateTo) {
        params = params.concat("&dateTo=" + dateTo);
      }

      axios.get("/DeliveryApp/rest/orders/search?" + params).then((response) => {
        this.orders = response.data;
        
	      this.ordersDTO = [];
	      this.displayedOrdersDTO = [];
        for(let o of this.orders) {
          	let restaurant = null;
	        axios.get('/DeliveryApp/rest/restaurants/' + o.restaurantId).then((response) => {
	          restaurant = response.data;
	          let name = restaurant.name;
	          let odto = {order: o, restaurantName: restaurant.name, restaurantType: restaurant.restaurantType};
	          this.ordersDTO.push(odto);
	          this.displayedOrdersDTO.push(odto);
	        });
          }
      });
    },
    sort: function () {
      if (this.sortOptions.condition) {
        switch (this.sortOptions.condition) {
          case "name":
            this.displayedOrdersDTO = this.displayedOrdersDTO.sort((a, b) =>
              this.sortByName(a, b, this.sortOptions.order)
            );
            break;
          case "price":
            this.displayedOrdersDTO = this.displayedOrdersDTO.sort((a, b) =>
              this.sortByPrice(a, b, this.sortOptions.order)
            );
            break;
          case "date":
            this.displayedOrdersDTO = this.displayedOrdersDTO.sort((a, b) =>
              this.sortByDate(a, b, this.sortOptions.order)
            );
            break;
        }
      }
    },
    sortByName: function (a, b, order) {
      const nameA = a.restaurantName.toUpperCase();
      const nameB = b.restaurantName.toUpperCase();

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
    sortByDate: function (a, b, order) {
      const dateA = moment(a.order.dateTimeCreated).format('yyyy.MM.dd.hh.mm');
      const dateB = moment(b.order.dateTimeCreated).format('yyyy.MM.dd.hh.mm');

      if (order == "asc") {
        if (dateA < dateB) {
          return -1;
        }
        if (dateA > dateB) {
          return 1;
        }
      } else {
        if (dateA < dateB) {
          return 1;
        }
        if (dateA > dateB) {
          return -1;
        }
      }
      return 0;
    },
    sortByPrice: function (a, b, order) {
      const priceA = a.order.price;
      const priceB = b.order.price;

      if (order == "asc") {
        if (priceA < priceB) {
          return -1;
        }
        if (priceA > priceB) {
          return 1;
        }
      } else {
        if (priceA < priceB) {
          return 1;
        }
        if (priceA > priceB) {
          return -1;
        }
      }
      return 0;
    },
    filter: function () {
      this.sort();
      this.displayedOrdersDTO = Array.from(this.ordersDTO);

      switch (this.filterOptions.type) {
        case "any":
          this.displayedOrdersDTO = this.displayedOrdersDTO = this.displayedOrdersDTO.filter((r) =>
         true);
          break;
        case "grill":
          this.displayedOrdersDTO = this.displayedOrdersDTO.filter(
            (r) => r.restaurantType == "GRILL"
          );
          break;
        case "italian":
          this.displayedOrdersDTO = this.displayedOrdersDTO.filter(
            (r) => r.restaurantType == "ITALIAN"
          );
          break;
        case "chinese":
          this.displayedOrdersDTO = this.displayedOrdersDTO.filter(
            (r) => r.restaurantType == "CHINESE"
          );
          break;
        case "vegan":
          this.displayedOrdersDTO = this.displayedOrdersDTO.filter(
            (r) => r.restaurantType == "VEGAN"
          );
          break;
      }
      
      switch (this.filterOptions.status) {
        case "any":
          this.displayedOrdersDTO.filter((r) =>
         true);
          break;
        case "processing":
          this.displayedOrdersDTO = this.displayedOrdersDTO.filter(
            (r) => r.order.orderStatus == "PROCESSING"
          );
          break;
        case "in-preparation":
          this.displayedOrdersDTO = this.displayedOrdersDTO.filter(
            (r) => r.order.orderStatus == "IN_PREPARATION"
          );
          break;
        case "waiting-for-delivery":
          this.displayedOrdersDTO = this.displayedOrdersDTO.filter(
            (r) => r.order.orderStatus == "WAITING_FOR_DELIVERY"
          );
          break;
        case "in-transport":
          this.displayedOrdersDTO = this.displayedOrdersDTO.filter(
            (r) => r.order.orderStatus == "IN_TRANSPORT"
          );
          break;
        case "delivered":
          this.displayedOrdersDTO = this.displayedOrdersDTO.filter(
            (r) => r.order.orderStatus == "DELIVERED"
          );
          break;
        case "undelivered":
          this.displayedOrdersDTO = this.displayedOrdersDTO.filter(
            (r) => r.order.orderStatus != "DELIVERED"
          );
          break;
        case "canceled":
          this.displayedOrdersDTO = this.displayedOrdersDTO.filter(
            (r) => r.order.orderStatus == "CANCELED"
          );
          break;
      }

    },
  },
});