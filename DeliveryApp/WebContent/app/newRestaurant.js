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
          longitude: "",
          address: {
	        street: "",
	        streetNumber: ""
	      }
        },
      },
      managers: null
    }
  },
  template: ` 
  <div>
  	<navbar></navbar>
    <div class="d-flex flex-column align-items-center bg-light">
            <div class="d-flex flex-column align-items-center p-4 bg-white box-shadow w-75 mt-4">
                <form>
                    <table>
                        <tr>
                            <td>
                                <label for="name" class="mx-3 mt-2">
                                    <h5 class="pb-0 mb-0">Restaurant name:</h5>
                                </label>
                            </td>
                            <td>
                                <input name="fname" id="name" placeholder="restaurant name" class="ml-2 input-size">
                            </td>
                            <td class="pl-5">
                                <label for="manager" class="mx-3 mt-2">
                                    <h5 class="pb-0 mb-0">Manager:</h5>
                                </label>
                            </td>
                            <td rowspan="2">
                                <select name="manager" id="manager" class="ml-2 input-size">
 
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
                                <select name="type" id="type" class="ml-2 input-size">
                                    <option value="none" style="display:none" selected></option>
                                    <option value="italian">Italian</option>
                                    <option value="chinese">Chinese</option>
                                    <option value="grill">Grill</option>
                                    <option value="vegan">Vegan</option>
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
                                <input name="street" id="street" placeholder="street" class="ml-2 input-size">
                            </td>
                            <td class="pl-5">
                                <label for="logo" class="mx-3 mt-2">
                                    <h5 class="pb-0 mb-0">Logo:</h5>
                                </label>
                            </td>
                            <td rowspan="2">
                                <input type="file"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="street" class="mx-3 mt-2">
                                    <h5 class="pb-0 mb-0">Street number:</h5>
                                </label>
                            </td>
                            <td>
                                <input name="number" id="number" placeholder="number" class="ml-2 input-size">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="city" class="mx-3 mt-2">
                                    <h5 class="pb-0 mb-0">City:</h5>
                                </label>
                            </td>
                            <td>
                                <input name="city" id="city" placeholder="city" class="ml-2 input-size">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="country" class="mx-3 mt-2">
                                    <h5 class="pb-0 mb-0">Country:</h5>
                                </label>
                            </td>
                            <td>
                                <input name="country" id="country" placeholder="country" class="ml-2 input-size">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4" class="text-right"><input type="submit" value="Create restaurant"
                                    class="btn btn-dark my-4 px-4"></td>
                        </tr>
                    </table>
                </form>
        		<div id="map" class="d-flex w-100 shadow" style="height:500px;"></div>
            </div>
        </div>
      </div>
`,
  mounted() {
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
    }
  }
});
