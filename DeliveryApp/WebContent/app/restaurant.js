Vue.component('restaurant', {
  data: function () {
    return {
      user: {},
      restaurant: "",
      address: "",
	  comments: "",
	  averageRating: 0,
	  food: "",
	  beverages: "",
	  
	  selectedItemCount: 1,
	  selectedId:0,
	  lastSelectedId:0,
	  
	  isManaged: false,
	  isSearchDivHidden: true,
	  
      orders: null,
      displayedOrders: null,
	  
      searchParameters: {  },
      sortOptions: { condition: "", order: "asc" },
      filterOptions: { status: "any" },
	  
    };
    
  },
  template: `
  <div>
  	<navbar path="restaurants"></navbar> 
  	
	<div class="d-flex flex-column align-items-center bg-light">



            <div class="
            d-flex
            flex-row
            align-items-center
            flex-wrap flex-md-nowrap
            w-100
            bg-white
            box-shadow
            mb-3
          ">
                <img src="" width="100" height="100" class="m-2 ml-3">
                <div class="d-flex flex-column flex-wrap justify-content-start mr-auto mx-2 mt-2">
                    <h3 class="flex-fill">{{restaurant.name}}</h3>
                    <h5>{{ restaurant.restaurantType }}</h5>
                    <h6 class="mt-1"><span style='font-size:18px;' v-on:>&starf; </span>{{ parseFloat(averageRating).toFixed(2) }}</h6>
                </div>
                <div class="d-flex flex-column align-items-end flex-wrap m-2 mr-4">
                    <h6 class="bg-dark text-white px-4 py-2 rounded mb-5 mt-1"> {{ restaurant.open ? "OPEN" : "CLOSED" }} </h6>


                </div>
            </div>
            <div class="w-100 mt-2 p-3">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link text-dark active" id="menu-tab" data-toggle="tab" href="#menu" role="tab"
                            aria-controls="menu" aria-selected="true">
                            Menu
                        </a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link text-dark" id="location-tab" data-toggle="tab" href="#location" role="tab"
                            aria-controls="profile" aria-selected="false">
                            Location
                        </a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link text-dark" id="comments-tab" data-toggle="tab" href="#comments" role="tab"
                            aria-controls="comments" aria-selected="false">
                            Comments
                        </a>
                    </li>
                    <li class="nav-item" role="presentation" v-if="isManaged">
                        <a class="nav-link text-dark" id="orders-tab" data-toggle="tab" href="#orders" role="tab"
                            aria-controls="orders" aria-selected="false">
                            Orders
                        </a>
                    </li>
                    <li class="nav-item" role="presentation" v-if="isManaged">
                        <a class="nav-link text-dark" id="customers-tab" data-toggle="tab" href="#customers" role="tab"
                            aria-controls="customers" aria-selected="false">
                            Customers
                        </a>
                    </li>
                </ul>
                
                 <div class="tab-content m-2" id="myTabContent">
                    <!--MENU-->

                    <div class="tab-pane fade show active" id="menu" role="tabpanel" aria-labelledby="menu-tab">
                        <div class="row mt-3">
                            <div class="col-2">
                                <ul class="nav flex-column">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="v-pills-food-tab" data-toggle="pill"
                                            href="#v-pills-food" role="tab" aria-controls="v-pills-food"
                                            aria-selected="true">Food</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="v-pills-beverages-tab" data-toggle="pill"
                                            href="#v-pills-beverages" role="tab" aria-controls="v-pills-beverages"
                                            aria-selected="false">Beverages</a>
                                    </li>
                                    <li v-if="isManaged" >
                                        <a class="nav-link" :href='"#/newArticle?restaurantId="+restaurant.id'>New article</a>
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="col-8">
                                <div class="tab-content" id="v-pills-tabContent">
                                    <div class="tab-pane fade show active" id="v-pills-food" role="tabpanel"
                                        aria-labelledby="v-pills-home-tab">
              				<!--dobaviti hranu-->
                                        <h3 class=" mx-4 mt-3">Food</h3>
                                        <div class="d-flex flex-wrap " >
                                            <div class="bg-white box-shadow m-1 p-2 d-flex"
                                                style="min-height: 200px; min-width: 600px; width: 1000px" 
                                                 v-for="f in food" :key="f.id" >
                                                <img :src="f.imagePath" width="190" height="190">
                                                <div class="m-2  pl-3 d-flex flex-column flex-fill">
                                                    <div class="d-flex flex-row justify-content-between">
                                                        <div class=" flex-fill d-flex flex-column align-items-start ">
                                                            <h5 class="pb-0 mb-0">{{ f.name }}</h5>
                                                            <p><span v-if="f.articleSize">{{f.articleSize.ammount}}{{ f.articleSize.unit == 'GRAMS' ? "g" : "ml" }}</span></p>
                                                        </div>
                                                        <div class="d-flex flex-column align-items-end m-3">
                                                            <h5>{{ parseFloat(f.price).toFixed(2) }} RSD</h5>
                                                        </div>
                                                    </div>
                                                    <div class="flex-fill">
                                                    	<p class="pr-2">{{f.description}}</p>
                                                    </div>
                                                    <div v-if="isManaged" class="d-flex flex-row mt-auto">
                                                    	<button class="btn btn-outline-secondary px-5 mr-3"> Edit </button>
                                                    	<button type="button" class="btn btn-outline-danger ml-1 px-5">  Delete</button>
                                                    </div>
                                                    
                                                    <div class="d-flex flex-row mt-auto align-items-center">
                                                        <div  v-if="$cookies.get('role') == 'CUSTOMER'">
                                                            <span><button type="button"
                                                                    class="btn btn-light mx-2 p-0 pb-1 border-radius border"
                                                                    style="height: 30px; width: 30px; border-radius: 15px"
                                                                     v-on:click="decreaseCount(f.id)">
                                                                    -
                                                                </button>
                                                                <span>{{ selectedId == f.id ? selectedItemCount : 1 }}</span>
                                                                <button type="button"
                                                                    class="btn btn-light border p-0 mx-2 mr-4 pb-1"
                                                                    style="height: 30px; width: 30px; border-radius:15px"
                                                                     v-on:click="increaseCount(f.id)">
                                                                    +
                                                                </button>
                                                            </span>
                                                            <button class="mx-5 px-4 py-1 border btn btn-primary" v-on:click="addToCart(f.id)">
                                                                 Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="v-pills-beverages" role="tabpanel"
                                        aria-labelledby="v-pills-beverages-tab">
           				<!--Dobaviti pice-->
                                        <h3 class=" mx-4 mt-3">Beverages</h3>
                                        <div class="d-flex flex-wrap ">
                                            <div class="bg-white box-shadow m-1 p-2 d-flex"
                                                style="min-height: 200px; min-width: 600px; width: 1000px" 
                                                 v-for="b in beverages" :key="b.id" >
                                                <img :src="b.imagePath" width="190" height="190">
                                                <div class="m-2  pl-3 d-flex flex-column  flex-fill">
                                                    <div class="d-flex flex-row justify-content-between">
                                                        <div class="d-flex flex-column align-items-start ">
                                                            <h5 class="pb-0 mb-0">{{ b.name }}</h5>
                                                            <p><span v-if="b.articleSize">{{b.articleSize.ammount}}{{ b.articleSize.unit == 'GRAMS' ? "g" : "ml" }}</span></p>
                                                        </div>
                                                        <div class="d-flex flex-column align-items-end m-3">
                                                            <h5>{{ parseFloat(b.price).toFixed(2) }} RSD</h5>
                                                        </div>
                                                    </div>
                                                    <div >
                                                    	<p class="pr-2">{{b.description}}</p>
                                                    </div>

                                                    <div class="d-flex flex-row mt-auto align-items-center">
                                                        <div v-if="$cookies.get('role') == 'CUSTOMER'">
                                                            <span><button type="button"
                                                                    class="btn btn-light mx-2 p-0 pb-1 border-radius border"
                                                                    style="height: 30px; width: 30px; border-radius: 15px"
                                                                     v-on:click="decreaseCount(b.id)">
                                                                    -
                                                                </button>
                                                                <span>{{ selectedId == b.id ? selectedItemCount : 1 }}</span>
                                                                <button type="button"
                                                                    class="btn btn-light border p-0 mx-2 mr-4 pb-1"
                                                                    style="height: 30px; width: 30px; border-radius:15px"
                                                                     v-on:click="increaseCount(b.id)">
                                                                    +
                                                                </button>
                                                            </span>
                                                            <button class="mx-5 px-4 py-1 border btn btn-primary" v-on:click="addToCart(b.id)">
                                                                Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!--LOCATION-->
                    <div class="tab-pane fade" id="location" role="tabpanel" aria-labelledby="location-tab">
                        <div class="row mt-3">
                            <div class="col-2">
                                <h5 class="my-3">Address:</h5>
                                <p>{{ address | formatAddressStreet }},<br>{{ address | formatAddressCity }}, <br>{{ address.country }}</p>
                            </div>
                            <div class="d-flex col-8">
                                <img src="" class="w-100 m-3 flex-fill box-shadow"
                                    style="min-height: 300px; height: 450px;">
                            </div>
                        </div>
                    </div>
                    
                    
                    <!--COMMENTS-->
                    <div class="tab-pane fade" id="comments" role="tabpanel" aria-labelledby="comments-tab">
                        <div class="row mt-3">
                            <div class="col-2">
                            </div>
                            <div class="d-flex col-8 m-3">
                                <div class="d-flex flex-wrap ">
                                    <div class="bg-white box-shadow m-1 p-2 d-flex"
                                        style="min-height: 150px; min-width: 600px; width: 900px" 
                                        v-for="comment in comments" :key="comment.id">
                                        <div class="m-2  pl-3 d-flex flex-column  flex-fill">
                                            <div class="d-flex flex-row justify-content-between ">
                                                <div class="d-flex flex-column align-items-start ">
                                                    <h5 class="mb-1">{{ comment.customerId }}</h5>
                                                    <p class="mt-0">{{ comment.rating }}<span style='font-size:18px;'>&starf;</span></p>
                                                    <p class="pr-2">{{ comment.text }}</p>
                                                </div>
                                                <div v-if="isManaged" class="m-2 pl-3 ml-auto d-flex flex-column align-items-end">
                                                	<b class="m-2">{{comment.status}}</b>
                                                	<button v-if="comment.status == 'PENDING'" 
                                                			v-on:click="approveComment(comment.id)"
                                                			type="button" class="btn btn-outline-secondary m-2">
                                                		Approve
                                                	</button>
													<button v-if="comment.status == 'PENDING'" 
															v-on:click="declineComment(comment.id)"
															type="button" class="btn btn-outline-danger m-2 px-3">
														Decline
													</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!--ORDERS-->
                    
                    <div  v-if="isManaged" class="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                       
                                  <div class="d-flex flex-column align-items-center bg-light">
      <div class=" d-flex flex-column align-items-center w-50 p-4 mt-4 mb-3 bg-white box-shadow">
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
                <label class="pt-3" for="from"><h5>Price:</h5></label>
              </td>
              <td>
                <label class="ml-4 pt-2" for="from">from:</label>
                <input class="ml-2" name="from" id="from" type="number" step="0.01" min="0"
                  		v-model="searchParameters.priceFrom"/>
                <label class="ml-2 pt-2" for="to">to:</label>
                <input class="ml-2" name="to" id="to" type="number" step="0.01" min="0"
          				v-model="searchParameters.priceTo"/>
              </td>
            </tr>
            <tr>
              <td>
                <label class="pt-3"><h5>Date created:</h5></label>
              </td>
              <td>
                <label class="ml-4 pt-2" for="from">from:</label>
                <input class="ml-2" name="from" type="date"
                  		v-model="searchParameters.dateFrom"/>
                <label class="ml-2 pt-2" for="to">to:</label>
                <input class="ml-2" name="to" id="to" type="date"
                  		v-model="searchParameters.dateTo"/>
              </td>
            </tr>
            <tr>
              <td colspan="2" class="text-center">
                <button class="btn btn-dark mx-2 px-3 mt-4" v-on:click="search(searchParameters)">
                  Search
                </button>
                <button type="button" class="btn btn-link mx-2 px-3 mt-4" v-on:click="clearSearchParameters()">Clear all</button>
              </td>
            </tr>
          </table>
        </div>
        <div class="d-flex flex-row flex-wrap w-100 justify-content-center">
          <div class="mt-4 mx-3">
            <div>
              <label for="condition"><h5>Sort by:</h5></label>
              <select class="ml-2" name="condition" id="condition" v-on:change="sort" v-model="sortOptions.condition">
                <option value="price">Price</option>
                <option value="date">Date created</option>
              </select>
            </div>
            <div>
              <label for="order"><h5>Sort order:</h5></label>
              <select class="ml-2"  name="order" id="order" v-on:change="sort" v-model="sortOptions.order">
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>
          <div class="mt-4 mx-3">
          <div>
              <label for="statusFilter"><h5>Filter by order status:</h5></label>
              <select class="ml-2" name="statusFilter" id="statusFilter" v-on:change="filter" v-model="filterOptions.status">
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
            
          </div>
      </div>
      </div>
      
<!-- --------NARUDZBINE-------- -->
	<div class="d-flex flex-column align-items-center bg-light m-0">
            
            <br>

            <div class="d-flex flex-column">

                <div class="bg-white box-shadow m-1 p-2 d-flex flex-row justify-content-between"
                    style="min-height: 100px; min-width: 600px; width: 1000px;" v-for="order in displayedOrders" :key="order.id">
                    <div class="d-flex flex-column pl-5">
                    	<h4 class="pt-2">{{restaurant.name}}</h4>
                        <ul class="p-0">
                            <li v-for="item in order.items" :key="item.article.id">{{item.count}} x {{item.article.name}}</li> 
                        </ul>
                    </div>
                    <div class="d-flex flex-column align-items-start m-2 mr-4">
                        <div>Created at {{order.dateTimeCreated | formatDate('hh:mm on DD.MM.YYYY.') }}
                        </div>
                        <div>
                            Status: {{order.orderStatus}}
                        </div>
                        <div>
                          <b>Total: {{parseFloat(order.price).toFixed(2)}} RSD</b>
                        </div>
                        <div>
                            <button v-if="order.orderStatus == 'WAITING_FOR_DELIVERY' && order.deliverers.length > 0"
                            		v-on:click="chooseDeliverer"
                             		class="btn btn-sm btn-outline-secondary mt-3">Choose deliverer</button>
                            <button v-if="order.orderStatus == 'PROCESSING'"
                            		v-on:click="startPreparation(order.id)"
                             		class="btn btn-sm btn-outline-secondary mt-3">Start preparation</button>
                             
                            <button v-if="order.orderStatus == 'IN_PREPARATION'"
                            		v-on:click="finishPreparation(order.id)"
                             		class="btn btn-sm btn-outline-secondary mt-3">Finish preparation</button>
                        </div>
                    </div>

                </div>

        </div>
      
      </div>
                        </div>
                    </div>
                    
                    <!--CUSTOMERS-->
                    <div v-if="isManaged" class="tab-pane fade" id="customers" role="tabpanel" aria-labelledby="customers-tab">
                        
                    </div>
                    
                </div>
                
          </div>
            
    </div>
  	
  	

  </div>
`,
  mounted() {
  	
    let restaurantId = 0;
    restaurantId = this.$route.query.id;
    console.log(restaurantId);
    axios.get('/DeliveryApp/rest/restaurants/' + this.$route.query.id).then(response => {
    	this.restaurant = response.data;
    	if(this.restaurant.location && this.restaurant.location.address){
    		this.address = this.restaurant.location.address;
		}
		let p = "";
     	axios.get('/DeliveryApp/rest/auth/').then((response) => {
      		p = response.data;
      		var path = "/DeliveryApp/rest/users/" + p.username + "/";
	    	axios.get(path).then((response) => {
		      	this.user = response.data;
			  	if(this.user.role == 'MANAGER'){
			  		if(this.user.restaurantId == this.restaurant.id){
			  			this.isManaged = true;
			  		}
			  	}
			  	let commentsPath = "";
			    if(this.isManaged || this.user.role == 'ADMIN'){
			    	commentsPath = '/DeliveryApp/rest/comments/' + restaurantId;
			    } else {
			    	commentsPath = '/DeliveryApp/rest/comments/' + restaurantId + '/approved';
			    }
			    axios.get(commentsPath).then((response) => {
			      this.comments = response.data;
			      let sum = 0;
			      let c = this.comments.length;
			      for(comment of this.comments){
			            sum += comment.rating;
			      }
			      this.averageRating = sum/c;
			    });
			    axios.get('/DeliveryApp/rest/orders/restaurant/' + this.restaurant.id).then((response) => {
          			this.orders = response.data;
          			this.displayedOrders = Array.from(this.orders);
      			})
	    	});
		});
    });
    
    
    axios.get('/DeliveryApp/rest/articles/' + restaurantId + '/food').then((response) => {
      this.food = response.data;
    });
    axios.get('/DeliveryApp/rest/articles/' + restaurantId + '/beverages').then((response) => {
      this.beverages = response.data;
    });
      
       
    
  },
  filters: {
    formatAddressStreet: (address) => {
      return address.street + ' ' + address.streetNumber;
    },
    formatAddressCity: (address) => {
      return address.postalCode + ' ' + address.city;
    },
    formatDate: function (value, format) {
      var parsed = moment(value);
      return parsed.format(format);
    },
  },
  methods: {
    increaseCount: function(id) {
	  this.lastSelectedId = this.selectedId;
	  this.selectedId = id;
	  if(this.selectedId == this.lastSelectedId){
	  	this.selectedItemCount += 1;
	  }
	  else{
	  	this.selectedItemCount = 2;
	  }
	  
    },
    decreaseCount: function(id) {
      this.lastSelectedId = this.selectedId;
	  this.selectedId = id;
	  if(this.selectedId == this.lastSelectedId && this.selectedItemCount > 1){
	  	this.selectedItemCount -= 1;
	  }
	  else{
	  	this.selectedItemCount = 1;
	  }
    },
    addToCart: function(id) {
    let item = { article:{}, count:1};
    let found = false;
    	if(this.selectedId == id){
	  		item.count = this.selectedItemCount;
	  	}
		else{
			this.selectedItemCount = 1;
		}
		for (let f of this.food){
			if(f.id == id){
				item.article = f;
				found = true;
			}
		}
		if (found == false){
			for (let b of this.beverages){
				if(b.id == id){
					item.article = b;
				}
			}
		}
		let p = "";
	     axios.get('/DeliveryApp/rest/auth/').then((response) => {
	      p = response.data;
	      let path = "/DeliveryApp/rest/users/" + p.username + "/";
		  axios.get(path).then((response) => {
		      let user = response.data;
		      if(user.id){
			  	axios.put('/DeliveryApp/rest/customers/item/' + user.id, item);
			  }
			  
		    });
	    });
    },
    approveComment(id){
    	axios.put('/DeliveryApp/rest/comments/approve/' + id).then((response) => {
    		for(let i = 0; i < this.comments.length; i++){
	    		if(this.comments[i].id == id){
	    			this.comments[i].status = "APPROVED";
	    		}
    		}
    	});
    	
    }, 
    declineComment(id){
    	axios.put('/DeliveryApp/rest/comments/decline/' + id).then((response) => {
    		for(let i = 0; i < this.comments.length; i++){
	    		if(this.comments[i].id == id){
	    			this.comments[i].status = "DECLINED";
	    		}
    		}
    	});
    }, 
    chooseDeliverer(){},
    startPreparation(){},
    finishPreparation(){},
    search: function (searchParameters) {
      /*var params = "user=" + this.user.id;
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
      
      this.sortOptions.condition = "";
      this.sortOptions.order = "asc";
      this.filterOptions.type = "any";
      this.filterOptions.status = "any";

      axios.get("/DeliveryApp/rest/orders/search?" + params).then((response) => {
       let orders = response.data;
        
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
      });*/
    },
    clearSearchParameters: function(){
    	this.searchParameters = {};
    	this.search(this.searchParameters);
    },
    sort: function () {
      if (this.sortOptions.condition) {
        switch (this.sortOptions.condition) {
          case "price":
            this.displayedOrders = this.displayedOrders.sort((a, b) =>
              this.sortByPrice(a, b, this.sortOptions.order)
            );
            break;
          case "date":
            this.displayedOrders = this.displayedOrders.sort((a, b) =>
              this.sortByDate(a, b, this.sortOptions.order)
            );
            break;
        }
      }
    },
    sortByDate: function (a, b, order) {
      const dateA = moment(a.dateTimeCreated).format('yyyy.MM.DD.hh.mm');
      const dateB = moment(b.dateTimeCreated).format('yyyy.MM.DD.hh.mm');

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
      const priceA = a.price;
      const priceB = b.price;

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
      this.displayedOrders = Array.from(this.orders);

      switch (this.filterOptions.status) {
        case "any":
          this.displayedOrders.filter((r) =>
         true);
          break;
        case "processing":
          this.displayedOrders = this.displayedOrders.filter(
            (r) => r.orderStatus == "PROCESSING"
          );
          break;
        case "in-preparation":
          this.displayedOrders = this.displayedOrders.filter(
            (r) => r.orderStatus == "IN_PREPARATION"
          );
          break;
        case "waiting-for-delivery":
          this.displayedOrders = this.displayedOrders.filter(
            (r) => r.orderStatus == "WAITING_FOR_DELIVERY"
          );
          break;
        case "in-transport":
          this.displayedOrders = this.displayedOrders.filter(
            (r) => r.orderStatus == "IN_TRANSPORT"
          );
          break;
        case "delivered":
          this.displayedOrders = this.displayedOrders.filter(
            (r) => r.orderStatus == "DELIVERED"
          );
          break;
        case "undelivered":
          this.displayedOrders = this.displayedOrders.filter(
            (r) => r.orderStatus != "DELIVERED"
          );
          break;
        case "canceled":
          this.displayedOrders = this.displayedOrders.filter(
            (r) => r.orderStatus == "CANCELED"
          );
          break;
      }

    },
  },
});
  	