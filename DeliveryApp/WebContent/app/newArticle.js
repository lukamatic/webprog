Vue.component('new-article', {
  data: function () {
    return {
      restaurantId: -1,
    };
  },
  template: ` 
    <div>
      <navbar path="restaurant"></navbar>
      {{restaurantId}}
      
      
    </div>		  
`,
  mounted(){
  	console.log(this.$route);
  	this.restaurantId = this.$route.query.restaurantId;
  
  }
});