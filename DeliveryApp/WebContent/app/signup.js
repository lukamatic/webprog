Vue.component('signup', {
  data: function () {
    return {};
  },
  template: ` 
    <div>
      <navbar path="signup"></navbar>
      <div class="d-flex flex-column align-items-center bg-light">


            <div class="d-flex flex-column align-items-center w-50 p-4 mt-5 bg-white box-shadow">
				<form method="POST" action="#/restaurants">
                <table>
                    <tr>
                        <td><label for="fname" class="mx-3 mt-2">
                                <h5>First name:</h5>
                            </label></td>
                        <td><input name="fname" id="fname" placeholder="first name" class="ml-2 input-size"></td>
                    </tr>
                    <tr>
                        <td><label for="lname" class="mx-3 mt-2">
                                <h5>Last name:</h5>
                            </label></td>
                        <td><input name="lname" id="lname" placeholder="last name" class="ml-2 input-size"></td>
                    </tr>
                    <tr>
                        <td><label for="dateOfBirth" class="mx-3 mt-2">
                                <h5>Date of birth:</h5>
                            </label></td>
                        <td><input type="date" name="dateOfBirth" id="dateOfBirth" placeholder="date of birth"
                                class="ml-2 input-size"></td>
                    </tr>
                    <tr>
                        <td><label for="gender" class="mx-3 mt-2">
                                <h5>Gender:</h5>
                            </label></td>
                        <td><select name="gender" id="gender" class="ml-2 input-size">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select></td>
                    </tr>
                    <tr>
                        <td><label for="username" class="mx-3 mt-2">
                                <h5>Username:</h5>
                            </label></td>
                        <td><input name="username" id="username" placeholder="username" class="ml-2 input-size"></td>
                    </tr>
                    <tr>
                        <td><label for="password" class="mx-3 mt-2">
                                <h5>Password:</h5>
                            </label></td>
                        <td><input name="password" id="password" placeholder="password" class="ml-2 input-size"></td>
                    </tr>
                    <tr>
                        <td><label for="passwordConfirmation" class="mx-3 mt-2">
                                <h5>Confirm password:</h5>
                            </label></td>
                        <td><input name="passwordConfirmation" id="passwordConfirmation" placeholder="confirm password"
                                class="ml-2 input-size"></td>
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
});
