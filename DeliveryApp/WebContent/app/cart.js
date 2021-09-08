Vue.component('cart', {
  data: function () {
    return {
    	customer: { cart: { }},
    	restaurantName: "", 
    	discount: 0,
    	isCartEmpty: true,
    };
  },
  template: ` 
    <div>
      <navbar path="cart"></navbar>
      
      <div class="d-flex flex-column align-items-center bg-light ">
            <br>

            <!--1 restoran-->
            <div v-if="!isCartEmpty">
                <div class="d-flex flex-row justify-content-between align-items-end">
                    <h3 class="mx-5 mt-5 mb-3">{{restaurantName}}</h3>
                    <button class=" ml-5 px-4 btn " v-on:click="clearCart()">Remove all</button>
                </div>

                <!--1 proizvod-->
                <div class="bg-white subtile-box-shadow m-1 p-2 d-flex flex-row"
                    style="min-height: 100px; min-width: 600px; width: 1000px"
                    v-for="item in customer.cart.items" :key="item.article.id">

                    <img src="" width="90" height="90">
                    <div class="d-flex flex-fill">
                        <div class="d-flex flex-column align-items-start ml-3 mr-auto">
                            <h5 class="pb-0 mb-0">{{item.article.name}}</h5>
                            <p><span v-if="item.article.articleSize">{{item.article.articleSize.ammount}}{{ item.article.articleSize.unit == 'GRAMS' ? "g" : "ml" }}</span></p>
                            <span v-if="discount">
                                <span class="font-weight-bold mr-2"><s>{{parseFloat(item.article.price).toFixed(2)}} RSD</s></span>
                                <span class="font-weight-bold mx-2">{{parseFloat(calculateDiscountPrice(item.article.price)).toFixed(2)}} RSD</span>
                            </span>
                            <span v-else>
                            <span class="font-weight-bold mr-2">{{parseFloat(item.article.price).toFixed(2)}} RSD</span>
                            </span>
                        </div>

                        <div class="d-flex flex-column justify-content-between align-items-end mr-2">
                            <button class="btn btn-sm font-weight-bold" v-on:click="removeItem(item.article.id)">
                                ✕
                            </button>
                            <span>
                                <button type="button" class="btn btn-light mx-2 p-0 pb-1 border-radius border"
                                    style="height: 30px; width: 30px; border-radius: 15px" v-on:click="decreaseCount(item.article.id)">
                                    -
                                </button>
                                {{item.count}}
                                <button type="button" class="btn btn-light border p-0 mx-2 mr-4 pb-1"
                                    style="height: 30px; width: 30px; border-radius:15px" v-on:click="increaseCount(item.article.id)">
                                    +
                                </button>
                                <span class="font-weight-bold mr-1" style="width: 100px">{{parseFloat(calculateItemDiscountPrice(item)).toFixed(2)}} RSD</span>
                            </span>
                        </div>
                    </div>
                </div>
                
                <div class="float-right mt-2">
                    <label for="total-price mr-5 ml-auto">Total:</label>
                    <span class="font-weight-bold ml-5 mr-4">{{parseFloat( calculateTotal()).toFixed(2) }} RSD</span>
                </div>
                <br>
                <br>
                <button class="float-right ml-5 mt-2 px-4 btn btn-primary">Make order</button>
                <br>
            </div>
            
            <div v-else class="d-flex flex-column align-items-center w-50 p-4 mt-5 bg-white box-shadow">
                <span class="mx-3 mt-5 mb-1 lead font-weight-bold">CART IS EMPTY</span>
            	<a href="#/restaurants"><p class="mb-5 mt-1 px-4">Continue shopping.</p></a>
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
        if(response.data){
        	this.customer = response.data;
        	this.discount = this.customer.customerType.discount;
        }
        

        if(this.customer.cart.items){
        	if(this.customer.cart.items.length > 0){
        		axios.get('/DeliveryApp/rest/restaurants/' + this.customer.cart.items[0].article.restaurantId).then((response) => {
	          		this.restaurantName = (response.data).name;
	          		this.isCartEmpty = false;
	       		});
    		}
    	}
    	
      });
    });
      
       
    
  },
  methods: {
    calculateDiscountPrice: function (price) {
      return price*(1-this.discount/100);
    },
    calculateItemDiscountPrice: function (item){
    	return item.article.price * item.count * (1-this.discount/100);
    },
    calculateTotal: function (){
    	let total = 0;
    	if(this.customer.cart.items){
	    	for(let i of this.customer.cart.items){
	    		total += i.count * i.article.price;
	    	}
	    	total = total * (1-this.discount/100);
	    	this.customer.cart.price = total;
    	}
    	return total;
    	
    },
    increaseCount: function(id) {
	  if(this.customer.cart.items){
	    	for(let i of this.customer.cart.items){
	    		if (i.article.id == id){
					i.count += 1;
					this.updateCart();	    		
	    		}
	    	}
    	}
	  
    },
    decreaseCount: function(id) {
     	if(this.customer.cart.items){
	    	for(let i of this.customer.cart.items){
	    		if (i.article.id == id && i.count > 1){
					i.count -= 1;
					this.updateCart();	    		
	    		}
	    	}
    	}
    },
    updateCart: function() {
    	axios.put('/DeliveryApp/rest/customers/cart', this.customer.cart);
    },
    clearCart: function() {
    	if(this.customer.cart.items){
	    	while (this.customer.cart.items.length > 0){
	    		this.customer.cart.items.pop();
	    	}
	    	this.isCartEmpty = true;
	    	this.updateCart();
    	}
    },
    removeItem: function(id) {
    	if(this.customer.cart.items){
	    	for(let i in this.customer.cart.items){
	    		if (this.customer.cart.items[i].article.id == id){
	    			this.customer.cart.items.splice(i, 1);
    			}
	    	}
	    	if(this.customer.cart.items.length == 0){
	    		this.isCartEmpty = true;
	    	}
	    	this.updateCart();
    	}
    }
  },
});