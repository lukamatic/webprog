Vue.component('restaurant', {
  data: function () {
    return {
      restaurant: null,
      user: {},
      address: '',
      map: null,
      markers: null,
      comments: '',
      averageRating: 0,
      food: '',
      beverages: '',

      selectedItemCount: 1,
      selectedId: 0,
      lastSelectedId: 0,

      isManaged: false,
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
                <img :src="'Images/' + restaurant.logoImageName" width="100" height="100" class="m-2 ml-3">
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
                        <a class="nav-link text-dark" id="location-tab" data-toggle="tab" href="#location" role="tab" v-on:click="initMap"
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
                                        <a class="nav-link" href="#/newArticle">New article</a>
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
                                                style="min-height: 200px; min-width: 600px; width: 1000px" 
                                                 v-for="f in food" :key="f.id" >
                                                 
                                                <img :src="'Images/' + f.imageName" width="190" height="190">

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
                                                    	<a :href="'#/article?id=' + f.id"><button class="btn btn-outline-secondary px-5 mr-3"> Edit </button></a>
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

                                                <img :src="'Images/' + b.imageName" width="190" height="190">

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
                                                    <div v-if="isManaged" class="d-flex flex-row mt-auto">
                                                    	<a :href="'#/article?id=' + b.id"><button class="btn btn-outline-secondary px-5 mr-3"> Edit </button></a>
                                                    	<button type="button" class="btn btn-outline-danger ml-1 px-5">  Delete</button>
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
        						<div id="map" class="d-flex w-100 shadow" style="height:500px;"></div>
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
                        <div class="row mt-3">
                            <div class="col-2">
                                <h5 class="my-3">Orders</h5>
                                <p>{{ address | formatAddressStreet }},<br>{{ address | formatAddressCity }}, <br>{{ address.country }}</p>
                            </div>

                            <div class="d-flex col-8">
                                <img src="" class="w-100 m-3 flex-fill box-shadow"
                                    style="min-height: 300px; height: 450px;">
                            </div>
                        </div>
                    </div>
                    
                    <!--CUSTOMERS-->
                    <div v-if="isManaged" class="tab-pane fade" id="customers" role="tabpanel" aria-labelledby="customers-tab">
                        <div class="row mt-3">
                            <div class="col-2">
                                <h5 class="my-3">Customers</h5>
                                <p>{{ address | formatAddressStreet }},<br>{{ address | formatAddressCity }}, <br>{{ address.country }}</p>
                            </div>

                            <div class="d-flex col-8">
                                <img src="" class="w-100 m-3 flex-fill box-shadow"
                                    style="min-height: 300px; height: 450px;">
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
    restaurantId = this.$route.query.id;
    console.log(restaurantId);
    axios
      .get('/DeliveryApp/rest/restaurants/' + this.$route.query.id)
      .then((response) => {
        this.restaurant = response.data;
        if (this.restaurant.location && this.restaurant.location.address) {
          this.address = this.restaurant.location.address;
        }
        let p = '';
        axios.get('/DeliveryApp/rest/auth/').then((response) => {
          p = response.data;
          var path = '/DeliveryApp/rest/users/' + p.username + '/';
          axios.get(path).then((response) => {
            this.user = response.data;
            if (this.user.role == 'MANAGER') {
              if (this.user.restaurantId == this.restaurant.id) {
                this.isManaged = true;
              }
            }
            let commentsPath = '';
            if (this.isManaged || this.user.role == 'ADMIN') {
              commentsPath = '/DeliveryApp/rest/comments/' + restaurantId;
            } else {
              commentsPath =
                '/DeliveryApp/rest/comments/' + restaurantId + '/approved';
            }
            axios.get(commentsPath).then((response) => {
              this.comments = response.data;
              let sum = 0;
              let c = this.comments.length;
              for (comment of this.comments) {
                sum += comment.rating;
              }
              this.averageRating = sum / c;
            });
          });
        });
      });

    axios
      .get('/DeliveryApp/rest/comments/' + restaurantId + '/approved')
      .then((response) => {
        this.comments = response.data;
        let sum = 0;
        let c = this.comments.length;
        for (comment of this.comments) {
          sum += comment.rating;
        }
        this.averageRating = sum / c;
      });

    axios
      .get('/DeliveryApp/rest/articles/' + restaurantId + '/food')
      .then((response) => {
        this.food = response.data;
      });
    axios
      .get('/DeliveryApp/rest/articles/' + restaurantId + '/beverages')
      .then((response) => {
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
  },
  methods: {
    initMap: function () {
      if (this.map) {
        return;
      }

      this.map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM(),
          }),
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([
            this.restaurant.location.longitude,
            this.restaurant.location.latitude,
          ]),
          zoom: 15,
        }),
      });

      this.markers = new ol.layer.Vector({
        source: new ol.source.Vector(),
        style: new ol.style.Style({
          image: new ol.style.Icon({
            anchor: [0.5, 1],
            src: 'marker.png',
            scale: 0.05,
          }),
        }),
      });

      this.map.addLayer(this.markers);
      this.putMarker([
        this.restaurant.location.longitude,
        this.restaurant.location.latitude,
      ]);

      setTimeout(() => this.map.updateSize(), 1000);
    },
    putMarker: function (coordinates) {
      this.markers.getSource().clear();
      marker = new ol.Feature(
        new ol.geom.Point(ol.proj.fromLonLat(coordinates))
      );
      this.markers.getSource().addFeature(marker);
    },
    increaseCount: function (id) {
      this.lastSelectedId = this.selectedId;
      this.selectedId = id;
      if (this.selectedId == this.lastSelectedId) {
        this.selectedItemCount += 1;
      } else {
        this.selectedItemCount = 2;
      }
    },
    decreaseCount: function (id) {
      this.lastSelectedId = this.selectedId;
      this.selectedId = id;
      if (
        this.selectedId == this.lastSelectedId &&
        this.selectedItemCount > 1
      ) {
        this.selectedItemCount -= 1;
      } else {
        this.selectedItemCount = 1;
      }
    },
    addToCart: function (id) {
      let item = { article: {}, count: 1 };
      let found = false;
      if (this.selectedId == id) {
        item.count = this.selectedItemCount;
      } else {
        this.selectedItemCount = 1;
      }
      for (let f of this.food) {
        if (f.id == id) {
          item.article = f;
          found = true;
        }
      }
      if (found == false) {
        for (let b of this.beverages) {
          if (b.id == id) {
            item.article = b;
          }
        }
      }
      let p = '';
      axios.get('/DeliveryApp/rest/auth/').then((response) => {
        p = response.data;
        let path = '/DeliveryApp/rest/users/' + p.username + '/';
        axios.get(path).then((response) => {
          let user = response.data;
          if (user.id) {
            axios.put('/DeliveryApp/rest/customers/item/' + user.id, item);
          }
        });
      });
    },
    approveComment(id) {
      axios.put('/DeliveryApp/rest/comments/approve/' + id).then((response) => {
        for (let i = 0; i < this.comments.length; i++) {
          if (this.comments[i].id == id) {
            this.comments[i].status = 'APPROVED';
          }
        }
      });
    },
    declineComment(id) {
      axios.put('/DeliveryApp/rest/comments/decline/' + id).then((response) => {
        for (let i = 0; i < this.comments.length; i++) {
          if (this.comments[i].id == id) {
            this.comments[i].status = 'DECLINED';
          }
        }
      });
    },
  },
});
