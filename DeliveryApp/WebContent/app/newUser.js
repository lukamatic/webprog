Vue.component('new-user', {
  data: function () {
    return {
      dateOfBirth: null,
      newUser: {
	      firstName: "",
	      lastName: "",
	      dateOfBirth: null,
	      role: "",
	      gender: "",
	      username: "",
	      password: ""
      },
	  passwordConfirmation: "",
      errorText: "",
      isErrorLabelVisible: false
    };
  },
  template: ` 
    <div>
      <navbar path="users"></navbar>
      <div class="d-flex flex-column align-items-center bg-light">
            <div class="d-flex flex-column align-items-center w-50 p-4 mt-5 bg-white box-shadow">
				<form v-on:submit.prevent="createAccount">
                <table>
                    <tr>
                        <td><label for="fname" class="mx-3 mt-2">
                                <h5>First name:</h5>
                            </label></td>
                        <td><input name="fname" id="fname" placeholder="first name" class="ml-2 input-size" v-model="newUser.firstName"></td>
                    </tr>
                    <tr>
                        <td><label for="lname" class="mx-3 mt-2">
                                <h5>Last name:</h5>
                            </label></td>
                        <td><input name="lname" id="lname" placeholder="last name" class="ml-2 input-size" v-model="newUser.lastName"></td>
                    </tr>
                    <tr>
                        <td><label for="dateOfBirth" class="mx-3 mt-2">
                                <h5>Date of birth:</h5>
                            </label></td>
                        <td><input type="date" name="dateOfBirth" id="dateOfBirth" placeholder="date of birth"
                                class="ml-2 input-size" v-model="dateOfBirth"></td>
                    </tr>
                    <tr>
                        <td><label for="role" class="mx-3 mt-2">
                                <h5>Role:</h5>
                            </label></td>
                        <td><select name="role" id="role" class="ml-2 input-size" v-model="newUser.role">
                                <option value="MANAGER">Manager</option>
                                <option value="DELIVERER">Deliverer</option>
                            </select></td>
                    </tr>
                    <tr>
                        <td><label for="gender" class="mx-3 mt-2">
                                <h5>Gender:</h5>
                            </label></td>
                        <td><select name="gender" id="gender" class="ml-2 input-size" v-model="newUser.gender">
                                <option value="MALE">Male</option>
                                <option value="FEMALE">Female</option>
                                <option value="OTHER">Other</option>
                            </select></td>
                    </tr>
                    <tr>
                        <td><label for="username" class="mx-3 mt-2">
                                <h5>Username:</h5>
                            </label></td>
                        <td><input name="username" id="username" placeholder="username" class="ml-2 input-size" v-model="newUser.username"></td>
                    </tr>
                    <tr>
                        <td><label for="password" class="mx-3 mt-2">
                                <h5>Password:</h5>
                            </label></td>
                        <td><input type="password" name="password" id="password" placeholder="password" class="ml-2 input-size" v-model="newUser.password"></td>
                    </tr>
                    <tr>
                        <td><label for="passwordConfirmation" class="mx-3 mt-2">
                                <h5>Confirm password:</h5>
                            </label></td>
                        <td><input type="password" name="passwordConfirmation" id="passwordConfirmation" placeholder="confirm password"
                                class="ml-2 input-size" v-model="passwordConfirmation"></td>
                    </tr>
                    <tr>
                        <td colspan="2"><p v-if="isErrorLabelVisible" class="m-3 px-4 text-danger text-center">{{ errorText }}</p></td>
                    </tr>
                    <tr>
                            <td colspan="2" class="text-center"><input type="submit" value="Create account"
                                    class="btn btn-dark mt-4"></td>
                    </tr>
                </table>
                </form>
            </div>
        </div>
    </div>		  
`,
  methods: {
    createAccount: function() {
      this.newUser.dateOfBirth = moment(this.dateOfBirth).format("x");
      if (this.validateInput()) {
        if (this.newUser.role == "MANAGER") {
          this.createManager();
        } else if (this.newUser.role == "DELIVERER") {
          this.createDeliverer();
        }
      }
    },
    validateInput: function() {
      if (!this.newUser.firstName || !this.newUser.lastName || !this.newUser.dateOfBirth || !this.newUser.role || !this.newUser.gender
       || !this.newUser.username || !this.newUser.password || !this.passwordConfirmation) {
      	this.errorText = "Please fill out all the fields.";
      	this.isErrorLabelVisible = true;
      	return false;
      }
      const regex = /^[A-Za-z0-9_]{1,30}$/;
      if (!regex.test(this.newUser.username)) {
      	this.errorText = "Invalid username.";
      	this.isErrorLabelVisible = true;
      	return false;
      }
      if (this.newUser.password != this.passwordConfirmation) {
      	this.errorText = "Passwords don't match";
      	this.isErrorLabelVisible = true;
      	return false;
      }
      this.errorText = "";
      this.isErrorLabelVisible = false;
      return true;
    },
    createManager: function() {
    	const vm = this;
	  	axios.post('/DeliveryApp/rest/managers/create', this.newUser)
	    .then(function (response) {
			router.push('users');
	  	  }
	    )
	    .catch(function (error) {
	      vm.errorText = error.response.data;
	      vm.isErrorLabelVisible = true;
	    });
    },
    createDeliverer: function() {
      //TODO
    }
  }
});
