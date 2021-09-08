Vue.component('new-restaurant', {
  data: function () {
    return {
      map: null,
      markers: null,
      newRestaurant: {
	    name: "",
	    restaurantType: "",
        location: {
          latitude: null,
          longitude: null,
          address: {
	        street: "",
	        streetNumber: "",
	        city: "",
	        country: "",
	        postalCode: ""
	      }
        },
      },
      managers: null,
      managerId: null,
      file: null,
      errorText: "",
      isErrorLabelVisible: false
    }
  },
  template: ` 
  <div>
  	<navbar></navbar>
    <div class="d-flex flex-column align-items-center bg-light">
            <div class="d-flex flex-column align-items-center p-4 bg-white box-shadow w-75 mt-3">
                <form v-on:submit.prevent="createNewRestaurant">
                    <table>
                        <tr>
                            <td>
                                <label for="name" class="mx-3 mt-2">
                                    <h5 class="pb-0 mb-0">Restaurant name:</h5>
                                </label>
                            </td>
                            <td>
                                <input name="fname" id="name" placeholder="restaurant name" class="ml-2 input-size" v-model="newRestaurant.name">
                            </td>
                            <td class="pl-5">
                                <label for="manager" class="mx-3 mt-2">
                                    <h5 class="pb-0 mb-0">Manager:</h5>
                                </label>
                            </td>
                            <td rowspan="2">
                                <select name="manager" id="manager" class="ml-2 input-size" v-model="managerId">
                                    <option v-for="manager in managers" :key="manager.id" :value="manager.id">{{ manager.firstName + ' ' + manager.lastName }}</option>
                                </select>
                                <br>
                                <button class="btn btn-sm btn-outline-secondary float-right m-2">New manager</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="type" class="mx-3 mt-2">
                                    <h5 class="pb-0 mb-0">Restaurant type:</h5>
                                </label>
                            </td>
                            <td>
                                <select name="type" id="type" class="ml-2 input-size"  v-model="newRestaurant.restaurantType">
                                    <option value="ITALIAN">Italian</option>
                                    <option value="CHINESE">Chinese</option>
                                    <option value="GRILL">Grill</option>
                                    <option value="VEGAN">Vegan</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="street" class="mx-3 mt-2">
                                    <h5 class="pb-0 mb-0">Street:</h5>
                                </label>
                            </td>
                            <td>
                                <input name="street" id="street" placeholder="street" class="ml-2 input-size" v-model="newRestaurant.location.address.street">
                            </td>
                            <td class="pl-5">
                                <label for="logo" class="mx-3 mt-2">
                                    <h5 class="pb-0 mb-0">Logo:</h5>
                                </label>
                            </td>
                            <td rowspan="2">
                                <input type="file" ref="file" v-on:change="handleFileUpload()"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="number" class="mx-3 mt-2">
                                    <h5 class="pb-0 mb-0">Street number:</h5>
                                </label>
                            </td>
                            <td>
                                <input name="number" id="number" placeholder="number" class="ml-2 input-size" v-model="newRestaurant.location.address.streetNumber">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="city" class="mx-3 mt-2">
                                    <h5 class="pb-0 mb-0">City:</h5>
                                </label>
                            </td>
                            <td>
                                <input name="city" id="city" placeholder="city" class="ml-2 input-size" v-model="newRestaurant.location.address.city">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="country" class="mx-3 mt-2">
                                    <h5 class="pb-0 mb-0">Country:</h5>
                                </label>
                            </td>
                            <td>
                                <input name="country" id="country" placeholder="country" class="ml-2 input-size" v-model="newRestaurant.location.address.country">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="postalCode" class="mx-3 mt-2">
                                    <h5 class="pb-0 mb-0">PostalCode:</h5>
                                </label>
                            </td>
                            <td>
                                <input name="postalCode" id="postalCode" placeholder="postal code" class="ml-2 input-size" v-model="newRestaurant.location.address.postalCode">
                            </td>
                        </tr>
                        <tr>
                        	<td colspan="2"><p v-if="isErrorLabelVisible" class="m-3 px-4 text-danger text-center">{{ errorText }}</p></td>
                            <td colspan="2" class="text-right"><input type="submit" value="Create restaurant"
                                    class="btn btn-dark mb-2 px-4"></td>
                        </tr>
                    </table>
                </form>
        		<div id="map" class="d-flex w-100 shadow" style="height:500px;"></div>
            </div>
        </div>
      </div>
`,
  mounted() {
    axios.get('/DeliveryApp/rest/managers/available').then((response) => this.managers = response.data);
    this.map = this.initMap();
    vm = this;
    this.map.on('singleclick', function (evt) {
      // convert coordinate to EPSG-4326
      vm.putMarker(ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'));
    });
  },
  methods: {
    initMap: function() {
      var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([20.4612, 44.8125]),
          zoom: 10
        })
      })
      
      this.markers = new ol.layer.Vector({
  		source: new ol.source.Vector(),
  		style: new ol.style.Style({
    	  image: new ol.style.Icon({
      	    anchor: [0.5, 1],
      	    src: 'marker.png',
      	    scale: 0.05
    	  })
  	    })
      });
      
	  map.addLayer(this.markers);
    
      return map
    },
    putMarker: function(coordinates) {
	  this.markers.getSource().clear();
	  marker = new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat(coordinates)));
	  this.markers.getSource().addFeature(marker);
	  this.newRestaurant.location.latitude = coordinates[0];
	  this.newRestaurant.location.longitude = coordinates[1];
    },
    handleFileUpload(){
    this.file = this.$refs.file.files[0];
  },
    createNewRestaurant: function() {
    		if (!this.validateRestaurant()) {
    			return;
    		}
    
    		let formData = new FormData();
    
            formData.append('file', this.file);
            const restaurantJSON = JSON.stringify(this.newRestaurant);
            formData.append('restaurantJSON', restaurantJSON);
            console.log(this.newRestaurant)
            formData.append('managerId', this.managerId);
            axios.post( '/DeliveryApp/rest/restaurants/create',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
	      this.errorText = error.response.data;
	      this.isErrorLabelVisible = true;	
        });
    },
    validateRestaurant: function() {
    	if (!this.newRestaurant.name || !this.newRestaurant.restaurantType
    		|| !this.newRestaurant.location.address.street || !this.newRestaurant.location.address.streetNumber 
    		|| !this.newRestaurant.location.address.city || !this.newRestaurant.location.address.country || !this.newRestaurant.location.address.postalCode) {
	      this.errorText = "Please fill out all the fields.";
	      this.isErrorLabelVisible = true;
	      return false;
    	}
    	
    	console.log(this.managerId);
    	
    	if (this.managerId == null) {
	      this.errorText = "Please select manager.";
	      this.isErrorLabelVisible = true;	
	      return false;
    	}
    	
    	if (!this.newRestaurant.location.latitude || !this.newRestaurant.location.longitude) {
	      this.errorText = "Please pin location on the map.";
	      this.isErrorLabelVisible = true;	
	      return false;
    	}
    	
    	this.errorText = "";
	    this.isErrorLabelVisible = false;
	    return true;
    }
  }
});
