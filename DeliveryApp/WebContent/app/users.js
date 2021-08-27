Vue.component('users', {
  data: function () {
    return {
      users: null,
      displayedUsers: null,
      isSearchDivHidden: true,
      searchParameters: {},
      sortOptions: { condition: "", order: "asc" },
      filterOptions: { type: "all", open: false },
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
          border border-dark
        "
      >
        <div class="flex-column flex-fill mx-3">
          <h5 class="mt-2">Username: {{ user.username }}</h5>
          <h5>Name: {{ user.firstName }} {{ user.lastName }}</h5>
          <h5>Role: {{ user.role }}</h5>
          <h5>Date of birth: {{ user.dateOfBirth | formatDate('DD.MM.YYYY.') }}</h5>
          <h5>Gender: {{ user.gender }}</h5>
          <h5 v-if="user.role == 'CUSTOMER'">
            Customer type: {{ user.customerType.customerTypeName }}
          </h5>
          <h5 v-if="user.role == 'CUSTOMER'">Points: {{ user.points }}</h5>
        </div>
        <div v-if="user.role != 'ADMIN'" class="flex-column">
          <div v-if="user.suspicious">
            <button
              class="btn btn-danger font-weight-bold mt-3 mr-3"
              style="width: 120px; pointer-events: none"
            >
              Suspicious
            </button>
          </div>
          <div>
            <button
              class="btn btn-dark font-weight-bold my-2 mr-3"
              style="width: 120px"
            >
              Block
            </button>
          </div>
          <div>
            <button
              class="btn btn-dark font-weight-bold mb-2 mr-3"
              style="width: 120px"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
`,
  mounted() {
    axios.get("/DeliveryApp/rest/users").then((response) => {
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
