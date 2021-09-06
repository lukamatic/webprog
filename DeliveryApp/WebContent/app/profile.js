Vue.component('profile', {
  data: function () {
    return {
    	user: "",
    	editedUser: "", 
    	date: "",
      errorText: "",
      isErrorLabelVisible: false,
      oldPassword: "",
      newPassword: "",
      passwordConfirmation: ""
    };
  },
  template: ` 
    <div>
      <navbar path="profile"></navbar>
      
       <div class="d-flex flex-column align-items-center bg-light">

            <div class="
            d-flex
            flex-row
            align-items-center
            flex-wrap flex-md-nowrap
            w-100
            bg-white
            subtile-box-shadow
            mb-3
          " >
                <img src="Images/gold.jpg" width="75" height="100" class="m-2 mx-3">
                <div class="d-flex flex-column flex-wrap justify-content-start mr-auto mx-2 mt-2">
                    <h3 class="flex-fill">{{user.firstName}} {{user.lastName}}</h3>
                    <h5 class="mb-0">Gold costumer</h5>

                    <h6>8360 points </h6>
                </div>
                <div class="d-flex flex-column align-items-end flex-wrap m-2 mr-4">


                </div>
            </div>


            <div class="w-100 mt-2 p-3">

                <div class="tab-content m-2" id="myTabContent">
                    <!--MENU-->
                    <div class="row mt-3">

                        <div class="col-2 px-3">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link active" id="v-pills-info-tab" data-toggle="pill"
                                        href="#v-pills-info" role="tab" aria-controls="v-pills-info"
                                        aria-selected="true">Profile info</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="v-pills-edit-tab" data-toggle="pill" href="#v-pills-edit"
                                        role="tab" aria-controls="v-pills-edit" aria-selected="false">Edit profile</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="v-pills-points-tab" data-toggle="pill"
                                        href="#v-pills-points" role="tab" aria-controls="v-pills-points"
                                        aria-selected="false">Point system and costumer
                                        types</a>
                                </li>
                            </ul>
                        </div>

                        
                        <div class="col-8">
                            <div class="tab-content" id="v-pills-tabContent">
                                <!--PROFILE INFO-->
                                <div class="tab-pane fade show active" id="v-pills-info" role="tabpanel"
                                    aria-labelledby="v-pills-home-tab">
                                    <div class="d-flex flex-column align-items-center p-4 bg-white box-shadow">
                                        <table>
                                            <tr>
                                                <td class="mx-3 p-2">
                                                    <h5 class="pb-0 mb-0">First name:</h5>
                                                </td>
                                                <td class="ml-2 input-size lead">
                                                    {{user.firstName}}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="mx-3 p-2">
                                                    <h5 class="pb-0 mb-0">Last name:</h5>
                                                </td>
                                                <td class="ml-2 input-size lead">
                                                    {{user.lastName}}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="mx-3 p-2">
                                                    <h5 class="mr-3 pb-0 mb-0">Date of birth:</h5>
                                                </td>
                                                <td class="mr-3 input-size lead">
                                                    {{ user.dateOfBirth | formatDate('DD.MM.YYYY.') }}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="mx-3 p-2">
                                                    <h5 class="pb-0 mb-0">Gender:</h5>
                                                </td>
                                                <td class="ml-2 input-size lead">
                                                    {{ user.gender | formatEnum()}}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="mx-3 p-2">
                                                    <h5 class="pb-0 mb-0">Username:</h5>
                                                </td>
                                                <td class="ml-2 input-size lead">
                                                    {{ user.username }}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="mx-3 p-2">
                                                    <h5 class="pb-0 mb-0">Password:</h5>
                                                </td>
                                                <td>
                                                    <span class="lead small" v-for="(c, index) in user.password" :key="user.password.charAt(index)">&#9679;</span>
                                                </td>

                                            </tr>


                                        </table>
                                    </div>
                                </div>

                                <!--EDIT PROFILE-->
                                <div class="tab-pane fade" id="v-pills-edit" role="tabpanel"
                                    aria-labelledby="v-pills-edit-tab">

                                    <div class="d-flex flex-column align-items-center p-4 bg-white box-shadow">
                                        <form  v-on:submit.prevent="updateProfile">
                                            <table>
                                                <tr>
                                                    <td><label for="fname" class="mx-3 mt-2">
                                                            <h5 class="pb-0 mb-0">First name*:</h5>
                                                        </label></td>
                                                    <td><input name="fname" id="fname" class="ml-2 input-size" v-model="editedUser[0]"
                                                           /></td>
                                                </tr>
                                                <tr>
                                                    <td><label for="lname" class="mx-3 mt-2">
                                                            <h5 class="pb-0 mb-0">Last name*:</h5>
                                                        </label></td>
                                                    <td><input name="lname" id="lname" placeholder="last name"
                                                            class="ml-2 input-size"  v-model="editedUser[1]"></td>
                                                </tr>
                                                <tr hidden>
                                                    <td><label for="dateOfBirth" class="mx-3 mt-2">
                                                            <h5 class="pb-0 mb-0">Date of birth:</h5>
                                                        </label></td>
                                                    <td><!--input type="date" name="dateOfBirth" id="dateOfBirth"
                                                            placeholder="date of birth" class="ml-2 input-size" v-model="date"-->
                                                            </td>
                                                </tr>
                                                <tr>
                                                    <td><label for="gender" class="mx-3 mt-2">
                                                            <h5 class="pb-0 mb-0">Gender*:</h5>
                                                        </label></td>
                                                    <td><select name="gender" id="gender" class="ml-2 input-size " v-model="editedUser[4]">
                                                            <option value="MALE">Male</option>
                                                            <option value="FEMALE">Female</option>
                                                            <option value="OTHER" selected>Other</option>
                                                        </select></td>
                                                </tr>
                                                <tr>
                                                    <td><label for="username" class="mx-3 mt-2">
                                                            <h5 class="pb-0 mb-0">Username*:</h5>
                                                        </label></td>
                                                    <td><input name="username" placeholder="username"
                                                            class="ml-2 input-size" v-model="editedUser[2]">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><label for="oldPassword" class="mx-3 mt-2">
                                                            <h5 class="pb-0 mb-0">Old password:</h5>
                                                        </label></td>
                                                    <td><input name="oldPassword" placeholder="old password"  type="password"
                                                            class="ml-2 input-size" v-model="oldPassword">
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td><label for="password" class="mx-3 mt-2">
                                                            <h5 class="pb-0 mb-0">New password:</h5>
                                                        </label></td>
                                                    <td><input  type="password" name="password" placeholder="new password" 
                                                            class="ml-2 input-size" v-model="newPassword">
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td><label for="passwordConfirmation" class="mx-3 mt-2">
                                                            <h5 class="pb-0 mb-0">Confirm password:</h5>
                                                        </label></td>
                                                    <td><input name="passwordConfirmation" id="passwordConfirmation" type="password"
                                                            placeholder="confirm password" class="ml-2 input-size" v-model="passwordConfirmation"></td>
                                                </tr>
                                                
                                                <tr>
                        							<td colspan="2"><p v-if="isErrorLabelVisible" class="m-3 px-4 text-danger text-center">{{ errorText }}</p></td>
                    							</tr>
                                                <tr>
                                                    <td colspan="2" class="text-center"><input type="submit"
                                                            value="Save changes" class="btn btn-dark mt-4"></td>
                                                </tr>
	

                                            </table>
                                        </form>
                                    </div>
                                </div>

                                <!-- POINT SYSTEM COSTUMER TYPES-->
                                <div class="tab-pane fade" id="v-pills-points" role="tabpanel"
                                    aria-labelledby="v-pills-points-tab">
                                    <div class="d-flex flex-column align-items-start p-4 bg-white box-shadow">
                                        <div class="d-flex m-2">
                                            <img src="Images/bronze.jpg" width="75" height="100" class="m-2 mx-3">
                                            <div class="p-2">
                                                <h4>Bronze costumer</h4>
                                                <p>
                                                    By registering costumer gets the <em>Bronze badge</em>. Bronze
                                                    costumer can only collect points with every purchase and doesn't
                                                    have a discount.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="d-flex m-2">
                                            <img src="Images/silver.jpg" width="75" height="100" class="m-2 mx-3">
                                            <div class="p-2">
                                                <h4 class="mb-0 pb-0">Silver costumer</h4>
                                                <h5>5% discount</h5>
                                                <p>
                                                    When a costumer reaches 2500 points he gets the <em>Silver
                                                        badge</em>. Silver
                                                    costumer gets -5% on every purchase.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="d-flex m-2">
                                            <img src="Images/gold.jpg" width="75" height="100" class="m-2 mx-3">
                                            <div class="p-2">
                                                <h4 class="mb-0 pb-0">Gold costumer</h4>
                                                <h5>10% discount</h5>
                                                <p>
                                                    Costumers recieve the <em>Gold badge</em> with 7000 points reached.
                                                    With this badge you have 10% discount on all purcheses.
                                                </p>
                                            </div>
                                        </div>

                                        <div class="ml-3 mr-2 mt-2">
                                            <p>
                                                Number of points a recieved upon making an order is caluculated by
                                                formula: <br>
                                                <em class="mx-3 ">points gained = total price / 1000 * 133 </em>
                                            </p>
                                            <p>
                                                By cancelling an order costmer loses number of points is caluculated by
                                                formula: <br>
                                                <em class="mx-3">points lost = total price / 1000 * 133 * 4</em>
                                            </p>
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

`,
  mounted() {
     let p = "";
     axios.get('/DeliveryApp/rest/auth/').then((response) => {
      p = response.data;
      var path = "/DeliveryApp/rest/users/" + p.username + "/";
	    axios.get(path).then((response) => {
	      this.user = response.data;
	      this.editedUser = [this.user.firstName, this.user.lastName, this.user.username, this.user.password, this.user.gender]
		   
	    });
    });
    
    
    
       
  },
  filters: {
    formatDate: function (value, format) {
      var parsed = moment(value);
      return parsed.format(format);
    },
    formatEnum: function (value) {
      var formated = value;//.charAt(0) + value.substring(1).toLowerCase();
      return formated;
    },
  },
  methods: {
    updateProfile: function() {
      if (this.validateInput()) {
        if (this.newPassword) {
          this.user.password = this.newPassword;
        } 
        this.user.firstName = this.editedUser[0];
        this.user.lastName = this.editedUser[1];
        this.user.username = this.editedUser[2];
        this.user.gender = this.editedUser[4];
        this.oldPassword = "";
        this.newPassword = "";
        this.passwordConfirmation = "";
        
        if (this.user.role == "ADMIN") {
          //this.updateAdmin();
        } else if (this.user.role == "CUSTOMER") {
          this.updateCustomer();
        } else if (this.user.role == "MANAGER") {
          //this.updateManager();
        } else if (this.user.role == "DELIVERER") {
          //this.updateDeliverer();
        }
        
      }
    },
    validateInput: function() {
      if (!this.editedUser[0] || !this.editedUser[1] || !this.editedUser[2] || !this.editedUser[4] ){
      	this.errorText = "Please fill out all required the fields.";
      	this.isErrorLabelVisible = true;
      	return false;
      }
      if (this.newPassword != this.passwordConfirmation){
      	this.errorText = "Passwords don't match.";
      	this.isErrorLabelVisible = true;
      	return false;
      }
      if ((this.oldPassword || this.newPassword || this.passwordConfirmation)&&(this.oldPassword != this.user.password)){
      	this.errorText = "Old password incorrect.";
      	this.isErrorLabelVisible = true;
      	return false;
      }
      const regex = /^[A-Za-z0-9_]{1,30}$/;
      if (!regex.test(this.editedUser[2])) {
      	this.errorText = "Invalid username.";
      	this.isErrorLabelVisible = true;
      	return false;
      }
      this.errorText = "";
      this.isErrorLabelVisible = false;
      return true;
    },
    /*updateAdmin: function() {
    	const vm = this;
	  	axios.put('/DeliveryApp/rest/admins', this.user)
	    .then(function (response) {
			router.push('profile');
	  	  }
	    )
	    .catch(function (error) {
	      vm.errorText = error.response.data;
	      vm.isErrorLabelVisible = true;
	    });
    },*/
    updateCustomer: function() {
    	const vm = this;
	  	axios.put('/DeliveryApp/rest/customers', this.user)
	    .then(function (response) {
			router.push('profile');
	  	  }
	    )
	    .catch(function (error) {
	      vm.errorText = error.response.data;
	      vm.isErrorLabelVisible = true;
	    });
    },
    updateManager: function() {
    	const vm = this;
	  	axios.put('/DeliveryApp/rest/managers', this.user)
	    .then(function (response) {
			router.push('profile');
	  	  }
	    )
	    .catch(function (error) {
	      vm.errorText = error.response.data;
	      vm.isErrorLabelVisible = true;
	    });
    },
    /*updateDeliverer: function() {
    	const vm = this;
	  	axios.put('/DeliveryApp/rest/deliverers', this.user)
	    .then(function (response) {
			router.push('profile');
	  	  }
	    )
	    .catch(function (error) {
	      vm.errorText = error.response.data;
	      vm.isErrorLabelVisible = true;
	    });
    }*/
  }
});