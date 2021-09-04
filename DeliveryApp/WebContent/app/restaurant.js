Vue.component('restaurant', {
  data: function () {
    return {
      restaurant: "",
      address: "",
      displayedRestaurants: null,
      isSearchDivHidden: true,
      searchParameters: { type: "any" },
      sortOptions: { condition: "", order: "asc" },
      filterOptions: { type: "any", open: false },
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
                    <h6 class="mt-1"><span style='font-size:18px;'>&starf; </span>{{ restaurant.averageRating }}</h6>
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
                    <li class="nav-item" role="presentation">
                        <a class="nav-link text-dark" id="menu-tab" href="#" role="tab" aria-disabled="true"></a>
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
                                </ul>
                            </div>

                            <div class="col-8">
                                <div class="tab-content" id="v-pills-tabContent">
                                    <div class="tab-pane fade show active" id="v-pills-food" role="tabpanel"
                                        aria-labelledby="v-pills-home-tab">
                                        <!--dobaviti hranu-->
                                        <h3 class=" mx-4 mt-3">Food</h3>
                                        <div class="d-flex flex-wrap ">
                                            <div class="bg-white box-shadow m-1 p-2 d-flex"
                                                style="min-height: 200px; min-width: 600px; width: 1000px">

                                                <img src="" width="190" height="190">

                                                <div class="m-2  pl-3 d-flex flex-column">
                                                    <div class="d-flex flex-row justify-content-between">
                                                        <div class="d-flex flex-column align-items-start ">
                                                            <h5 class="pb-0 mb-0">Naziv</h5>
                                                            <p>300g</p>
                                                        </div>
                                                        <div class="d-flex flex-column align-items-end m-3">
                                                            <h5>360.00 RSD</h5>
                                                        </div>
                                                    </div>
                                                    <p class="pr-2">Opis: Lorem ipsum dolor sit amet, consectetur
                                                        adipiscing elit,
                                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                                        aliquaed do eiusmod tempor incididunt ut labore et dolore magna
                                                        aliqua.</p>

                                                    <div class="d-flex flex-row mt-auto align-items-center">
                                                        <div>
                                                            <span><button type="button"
                                                                    class="btn btn-light mx-2 p-0 pb-1 border-radius border"
                                                                    style="height: 30px; width: 30px; border-radius: 15px">
                                                                    -
                                                                </button>
                                                                <span>1</span>
                                                                <button type="button"
                                                                    class="btn btn-light border p-0 mx-2 mr-4 pb-1"
                                                                    style="height: 30px; width: 30px; border-radius:15px">
                                                                    +
                                                                </button>
                                                            </span>
                                                            <button class="mx-5 px-4 py-1 border btn btn-primary">
                                                                <span class="glyphicon glyphicon-star"></span> Add to
                                                                cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="bg-white box-shadow m-1 p-2 d-flex"
                                                style="min-height: 200px; min-width: 600px; width: 1000px;">

                                                <img src="" width="190" height="190">
                                            </div>
                                            <div class="bg-white box-shadow m-1 p-2 d-flex"
                                                style="min-height: 200px; min-width: 600px; width: 1000px;">

                                                <img src="" width="190" height="190">
                                            </div>
                                            <div class="bg-white box-shadow m-1 p-2 d-flex"
                                                style="min-height: 200px; min-width: 600px; width: 1000px;">

                                                <img src="" width="190" height="190">
                                            </div>
                                            <div class="bg-white box-shadow m-1 p-2 d-flex"
                                                style="min-height: 200px; min-width: 600px; width: 1000px;">

                                                <img src="" width="190" height="190">
                                            </div>

                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="v-pills-beverages" role="tabpanel"
                                        aria-labelledby="v-pills-beverages-tab">
                                        <!--Dobaviti pice-->
                                        <h3 class=" mx-4 mt-3">Beverages</h3>
                                        <div class="d-flex flex-wrap ">
                                            <div class="bg-white box-shadow m-1 p-2 d-flex"
                                                style="min-height: 200px; min-width: 600px; width: 1000px">

                                                <img src="" width="190" height="190">

                                                <div class="m-2  pl-3 d-flex flex-column">
                                                    <div class="d-flex flex-row justify-content-between">
                                                        <div class="d-flex flex-column align-items-start ">
                                                            <h5 class="pb-0 mb-0">Naziv</h5>
                                                            <p>300ml</p>
                                                        </div>
                                                        <div class="d-flex flex-column align-items-end m-3">
                                                            <h5>360.00 RSD</h5>
                                                        </div>
                                                    </div>
                                                    <p class="pr-2">Opis: Lorem ipsum dolor sit amet, consectetur
                                                        adipiscing elit,
                                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                                        aliquaed do eiusmod tempor incididunt ut labore et dolore magna
                                                        aliqua.</p>

                                                    <div class="d-flex flex-row mt-auto align-items-center">
                                                        <div>
                                                            <span><button type="button"
                                                                    class="btn btn-light mx-2 p-0 pb-1 border-radius border"
                                                                    style="height: 30px; width: 30px; border-radius: 15px">
                                                                    -
                                                                </button>
                                                                <span>1</span>
                                                                <button type="button"
                                                                    class="btn btn-light border p-0 mx-2 mr-4 pb-1"
                                                                    style="height: 30px; width: 30px; border-radius:15px">
                                                                    +
                                                                </button>
                                                            </span>
                                                            <button class="mx-5 px-4 py-1 border btn btn-primary">
                                                                <span class="glyphicon glyphicon-star"></span> Add to
                                                                cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="bg-white box-shadow m-1 p-2 d-flex"
                                                style="min-height: 200px; min-width: 600px; width: 1000px;">

                                                <img src="" width="190" height="190">
                                            </div>
                                            <div class="bg-white box-shadow m-1 p-2 d-flex"
                                                style="min-height: 200px; min-width: 600px; width: 1000px;">

                                                <img src="" width="190" height="190">
                                            </div>
                                            <div class="bg-white box-shadow m-1 p-2 d-flex"
                                                style="min-height: 200px; min-width: 600px; width: 1000px;">

                                                <img src="" width="190" height="190">
                                            </div>
                                            <div class="bg-white box-shadow m-1 p-2 d-flex"
                                                style="min-height: 200px; min-width: 600px; width: 1000px;">

                                                <img src="" width="190" height="190">
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
                                        style="min-height: 150px; min-width: 600px; width: 900px">
                                        <div class="m-2  pl-3 d-flex flex-column">
                                            <div class="d-flex flex-row justify-content-between">
                                                <div class="d-flex flex-column align-items-start ">
                                                    <h5 class="">Username</h5>
                                                    <p><span>3</span><span style='font-size:18px;'>&starf;</span></p>
                                                </div>
                                                <div class="d-flex flex-column align-items-end m-3">
                                                    <h6>21.08.2021.</h6>
                                                </div>
                                            </div>
                                            <p class="pr-2">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliquaed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliquaed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua. Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliquaed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua.</p>
                                        </div>
                                    </div>





                                    <div class="bg-white box-shadow m-1 p-2 d-flex"
                                        style="min-height: 150px; min-width: 600px; width: 900px;">
                                        <div class="m-2  pl-3 d-flex flex-column">
                                            <div class="d-flex flex-row justify-content-between">
                                                <div class="d-flex flex-column align-items-start ">
                                                    <h5 class="">Username</h5>
                                                    <p><span>5</span><span style='font-size:18px;'>&starf;</span></p>
                                                </div>
                                                <div class="d-flex flex-column align-items-end m-3">
                                                    <h6>21.08.2021.</h6>
                                                </div>
                                            </div>
                                            <p class="pr-2">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliquaed do eiusmod tempor incididunt ut labore et dolore magna
                                                aliqua.
                                            </p>
                                        </div>
                                    </div>




                                    <div class="bg-white box-shadow m-1 p-2 d-flex"
                                        style="min-height: 150px; min-width: 600px; width: 900px;">

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    
                    
                    
                    
                    
                    </div>
                
          </div>
            
    </div>
  	
  	

  </div>
`,
  mounted() {
  	let restaurantId = 0;
  	this.$root.$on('chosenRestaurantId', (id) => {restaurantId = id;});
    axios.get('/DeliveryApp/rest/restaurants/' + restaurantId).then((response) => {
      this.restaurant = response.data;
      if(this.restaurant.location && this.restaurant.location.address){
      	this.address = this.restaurant.location.address;
      }
      
    });
  },
  filters: {
    formatAddressStreet: (address) => {
      return address.street + ' ' + address.streetNumber;
    },
    formatAddressCity: (address) => {
      return address.postalCode + ' ' + address.city;
    },
  },
  methods: {
    search: function(searchParameters) {
      var params = "";

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
      });
    },
  },
});
  	