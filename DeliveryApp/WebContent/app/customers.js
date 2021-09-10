Vue.component('customers', {
  props: ['restaurantIdProp'],
  data: function () {
    return {
      restaurantId: 1,
      users: null,
      displayedUsers: null,	
      isSearchDivHidden: true,
      searchParameters: {},
      sortOptions: { condition: "", order: "asc" },
      filterOptions: { role: "any", customerType: "any", suspicious: false },
    };
  },
  template: ` 
	
  <div>
    <div class="d-flex flex-column align-items-center pb-5 bg-light">
      <div
        v-for="user in displayedUsers"
        :key="user.id"
        class="
          d-flex
          flex-row
          align-items-center
          flex-wrap flex-md-nowrap
          justify-content-center
          w-75
          mt-4
          bg-white
          box-shadow
        "
      >
        <div class="flex-column flex-fill mx-3">
          <h5 class="mt-2">Username: {{ user.username }}</h5>
          <h5>Name: {{ user.firstName }} {{ user.lastName }}</h5>
          <h5>Date of birth: {{ user.dateOfBirth | formatDate('DD.MM.YYYY.') }}</h5>
          <h5>Gender: {{ user.gender }}</h5>
          <h5 v-if="user.role == 'CUSTOMER'">
            Customer type: {{ user.customerType.customerTypeName }}
          </h5>
          <h5 v-if="user.role == 'CUSTOMER'">Points: {{ user.points }}</h5>
        </div>
      </div>
    </div>
  </div>
`,
  mounted() {
    axios.get("/DeliveryApp/rest/customers/restaurantCustomers/" + this.restaurantId).then((response) => {
      this.users = response.data;
      this.displayedUsers = this.users;
    });
  },
  filters: {
    formatDate: function (value, format) {
      var parsed = moment(value);
      return parsed.format(format);
    },
  },
});
