Vue.component('users', {
  data: function () {
    return {
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
  	<navbar path="users"></navbar>
    <div class="d-flex flex-column align-items-center pb-5 bg-light">
      <div class="d-flex w-100 justify-content-end mt-2 mr-5">
        <button
          class="btn btn-dark mr-5"
          v-on:click="createNewUser">Create new user</button>
      </div>
      <div
        class="
          d-flex
          flex-column
          align-items-center
          w-50
          mt-2
          p-4
          bg-white
          shadow-lg
        "
      >
        <button
          class="btn btn-dark w-75"
          v-on:click="isSearchDivHidden = false"
          :hidden="!isSearchDivHidden"
        >
          Search for user
        </button>
        <div
          class="bg-light border boreder-dark w-100 p-3"
          :hidden="isSearchDivHidden"
        >
          <div class="d-flex flex-row justify-content-between">
            <h4>Search for user:</h4>
            <button
              class="btn btn-dark"
              v-on:click="isSearchDivHidden = true"
            >
              ✕
            </button>
          </div>
          <table>
            <tr>
              <td>
                <label class="pt-3" for="firstName"><h5>First name:</h5></label>
              </td>
              <td>
                <input
                  class="ml-2"
                  name="firstName"
                  id="firstName"
                  placeholder="first name"
                  v-model="searchParameters.firstName"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label class="pt-3" for="lastName"><h5>Last name:</h5></label>
              </td>
              <td>
                <input
                  class="ml-2"
                  name="lastName"
                  id="lastName"
                  placeholder="last name"
                  v-model="searchParameters.lastName"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label class="pt-3" for="username"><h5>Username:</h5></label>
              </td>
              <td>
                <input
                  class="ml-2"
                  name="username"
                  id="username"
                  placeholder="username"
                  v-model="searchParameters.username"
                />
              </td>
            </tr>
            <tr>
              <td colspan="2" class="text-center">
                <button
                  class="btn btn-dark"
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
              <label for="condition"><h5>Sort users by:</h5></label>
              <select
                class="ml-2"
                name="condition"
                id="condition"
                v-on:change="sort"
                v-model="sortOptions.condition"
              >
                <option value="firstName">First name</option>
                <option value="lastName">Last name</option>
                <option value="username">Username</option>
                <option value="points">Points</option>
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
              <label for="roleFilter"
                ><h5>Filter by user role:</h5></label
              >
              <select
                class="ml-2"
                name="roleFilter"
                id="roleFilter"
                v-on:change="filter"
                v-model="filterOptions.role"
              >>
                <option value="any">Any</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="customer">Customer</option>
                <option value="deliverer">Deliverer</option>
              </select>
            </div>
            <div>
              <label for="customerTypeFilter"
                ><h5>Filter by customer type:</h5></label
              >
              <select
                class="ml-2"
                name="customerTypeFilter"
                id="customerTypeFilter"
                v-on:change="filter"
                v-model="filterOptions.customerType"
              >>
                <option value="any">Any</option>
                <option value="bronze">Bronze</option>
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
              </select>
            </div>
            <div>
              <h5>
                <input
                  type="checkbox"
                  id="suspiciousFilter"
                  name="suspiciousFilter"
                  v-on:change="filter"
                  v-model="filterOptions.suspicious"
                />
                <label for="suspiciousFilter" class="ml-1"
                  >Show only suspicious users</label
                >
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div
        v-for="user in displayedUsers"
        :key="user.id"
        v-if="!users.isDeleted"
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
              class="btn btn-danger mt-3 mr-3"
              style="width: 120px; pointer-events: none"
            >
              Suspicious
            </button>
          </div>
          <div>
            <button
              class="btn btn-dark my-2 mr-3"
              style="width: 120px"
              v-if="!user.blocked"
              v-on:click="block(user.id)"
            >
              Block
            </button>
            <button
              class="btn btn-light border-dark my-2 mr-3"
              style="width: 120px"
              v-if="user.blocked"
              v-on:click="unblock(user.id)"
            >
              Unblock
            </button>
          </div>
          <div>
            <button
              class="btn btn-dark mb-2 mr-3"
              style="width: 120px"
              v-on:click="deleteUser(user.id)"
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
  methods: {
    search: function(searchParameters) {
      var params = "";

      if (searchParameters.firstName) {
        params = params.concat("firstName=" + searchParameters.firstName);
      }

      if (searchParameters.lastName) {
        params = params.concat("&lastName=" + searchParameters.lastName);
      }

      if (searchParameters.username) {
        params = params.concat("&username=" + searchParameters.username);
      }

      axios.get("/DeliveryApp/rest/users/search?" + params).then((response) => {
        this.users = response.data;
        this.displayedUsers = this.users;
      });
    },
	sort: function () {
      if (this.sortOptions.condition) {
        switch (this.sortOptions.condition) {
          case "firstName":
            this.displayedUsers = this.displayedUsers.sort((a, b) =>
              this.sortByFirstName(a, b, this.sortOptions.order)
            );
            break;
          case "lastName":
            this.displayedUsers = this.displayedUsers.sort((a, b) =>
              this.sortByLastName(a, b, this.sortOptions.order)
            );
            break;
          case "username":
            this.displayedUsers = this.displayedUsers.sort((a, b) =>
              this.sortByUsername(a, b, this.sortOptions.order)
            );
            break;
          case "points":
            this.displayedUsers = this.displayedUsers.sort((a, b) =>
              this.sortByPoints(a, b, this.sortOptions.order)
            );
            break;
        }
      }
    },
    sortByFirstName: function (a, b, order) {
      const firstNameA = a.firstName.toUpperCase();
      const firstNameB = b.firstName.toUpperCase();

      if (order == "asc") {
        if (firstNameA < firstNameB) {
          return -1;
        }
        if (firstNameA > firstNameB) {
          return 1;
        }
      } else {
        if (firstNameA < firstNameB) {
          return 1;
        }
        if (firstNameA > firstNameB) {
          return -1;
        }
      }
      return 0;
    },
    sortByLastName: function (a, b, order) {
      const lastNameA = a.lastName.toUpperCase();
      const lastNameB = b.lastName.toUpperCase();

      if (order == "asc") {
        if (lastNameA < lastNameB) {
          return -1;
        }
        if (lastNameA > lastNameB) {
          return 1;
        }
      } else {
        if (lastNameA < lastNameB) {
          return 1;
        }
        if (lastNameA > lastNameB) {
          return -1;
        }
      }
      return 0;
    },
    sortByUsername: function (a, b, order) {
      const usernameA = a.username.toUpperCase();
      const usernameB = b.username.toUpperCase();

      if (order == "asc") {
        if (usernameA < usernameB) {
          return -1;
        }
        if (usernameA > usernameB) {
          return 1;
        }
      } else {
        if (usernameA < usernameB) {
          return 1;
        }
        if (usernameA > usernameB) {
          return -1;
        }
      }
      return 0;
    },
    sortByPoints: function (a, b, order) {
      const pointsA = a.points;
      const pointsB = b.points;

      if (order == "asc") {
        if (pointsA < pointsB) {
          return 1;
        }
        if (pointsA > pointsB) {
          return -1;
        }
      } else {
        if (pointsA < pointsB) {
          return -1;
        }
        if (pointsA > pointsB) {
          return 1;
        }
      }
      if (a.role == 'CUSTOMER' && b.role != 'CUSTOMER') {
      	return -1;
      }
      if (a.role != 'CUSTOMER' && b.role == 'CUSTOMER') {
      	return 1;
      }
      return 0;
    },
    filter: function () {
      this.displayedUsers = this.users.filter((u) =>
        this.filterOptions.suspicious ? u.suspicious : true
      );
      
      this.sort();

      switch (this.filterOptions.role) {
        case "admin":
          this.displayedUsers = this.displayedUsers.filter(
            (u) => u.role == "ADMIN"
          );
          break;
        case "manager":
          this.displayedUsers = this.displayedUsers.filter(
            (u) => u.role == "MANAGER"
          );
          break;
        case "customer":
          this.displayedUsers = this.displayedUsers.filter(
            (u) => u.role == "CUSTOMER"
          );
          break;
        case "deliverer":
          this.displayedUsers = this.displayedUsers.filter(
            (u) => u.role == "DELIVERER"
          );
          break;
      }
      
      switch (this.filterOptions.customerType) {
        case "bronze":
          this.displayedUsers = this.displayedUsers.filter(
            (u) => u.customerType ? u.customerType.customerTypeName == "BRONZE" : false
          );
          break;
        case "silver":
          this.displayedUsers = this.displayedUsers.filter(
            (u) => u.customerType ? u.customerType.customerTypeName == "SILVER" : false
          );
          break;
        case "gold":
          this.displayedUsers = this.displayedUsers.filter(
            (u) => u.customerType ? u.customerType.customerTypeName == "GOLD" : false
          );
          break;
      }
    },
  	createNewUser: function() {
  	  router.push('newUser');
  	},
  	block: function(id) {
    	const vm = this;
	  	axios.patch('/DeliveryApp/rest/users/' + id + '/block')
	    .then(function (response) {
			const index = vm.displayedUsers.findIndex((u) => u.id == id);
			vm.displayedUsers[index].blocked = true;
	  	  }
	    )
	    .catch(function (error) {
	      console.log(error);
	    });
  	},
  	unblock: function(id) {
    	const vm = this;
	  	axios.patch('/DeliveryApp/rest/users/' + id + '/unblock')
	    .then(function (response) {
			const index = vm.displayedUsers.findIndex((u) => u.id == id);
			vm.displayedUsers[index].blocked = false;
	  	  }
	    )
	    .catch(function (error) {
	      console.log(error);
	    });
  	}, 
  	deleteUser(id){
  		axios.delete('/DeliveryApp/rest/users/'+id).then((response) => {
		    axios.get('/DeliveryApp/rest/users').then((response) => {
		      this.users = response.data;
		      this.displayedUsers = Array.from(this.users);
		      this.search(this.searchParameters);
		      this.filter();
		      this.sort();
		    });
    	})
  	}
  }
});
