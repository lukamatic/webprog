Vue.component('profile', {
  data: function () {
    return {};
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
                    <h3 class="flex-fill">Ime Prezime</h3>
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
                                                    Ime
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="mx-3 p-2">
                                                    <h5 class="pb-0 mb-0">Last name:</h5>
                                                </td>
                                                <td class="ml-2 input-size lead">
                                                    Prezime
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="mx-3 p-2">
                                                    <h5 class="mr-3 pb-0 mb-0">Date of birth:</h5>
                                                </td>
                                                <td class="mr-3 input-size lead">
                                                    10.12.1985.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="mx-3 p-2">
                                                    <h5 class="pb-0 mb-0">Gender:</h5>
                                                </td>
                                                <td class="ml-2 input-size lead">
                                                    Female
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="mx-3 p-2">
                                                    <h5 class="pb-0 mb-0">Username:</h5>
                                                </td>
                                                <td class="ml-2 input-size lead">
                                                    username123
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="mx-3 p-2">
                                                    <h5 class="pb-0 mb-0">Password:</h5>
                                                </td>
                                                <td>
                                                    <span class="lead small">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                                                </td>

                                            </tr>


                                        </table>
                                    </div>
                                </div>

                                <!--EDIT PROFILE-->
                                <div class="tab-pane fade" id="v-pills-edit" role="tabpanel"
                                    aria-labelledby="v-pills-edit-tab">

                                    <div class="d-flex flex-column align-items-center p-4 bg-white box-shadow">
                                        <form method="POST" action="#/restaurants">
                                            <table>
                                                <tr>
                                                    <td><label for="fname" class="mx-3 mt-2">
                                                            <h5 class="pb-0 mb-0">First name:</h5>
                                                        </label></td>
                                                    <td><input name="fname" id="fname" placeholder="first name"
                                                            class="ml-2 input-size"></td>
                                                </tr>
                                                <tr>
                                                    <td><label for="lname" class="mx-3 mt-2">
                                                            <h5 class="pb-0 mb-0">Last name:</h5>
                                                        </label></td>
                                                    <td><input name="lname" id="lname" placeholder="last name"
                                                            class="ml-2 input-size"></td>
                                                </tr>
                                                <tr>
                                                    <td><label for="dateOfBirth" class="mx-3 mt-2">
                                                            <h5 class="pb-0 mb-0">Date of birth:</h5>
                                                        </label></td>
                                                    <td><input type="date" name="dateOfBirth" id="dateOfBirth"
                                                            placeholder="date of birth" class="ml-2 input-size"
                                                            value="10/10/2021"></td>
                                                </tr>
                                                <tr>
                                                    <td><label for="gender" class="mx-3 mt-2">
                                                            <h5 class="pb-0 mb-0">Gender:</h5>
                                                        </label></td>
                                                    <td><select name="gender" id="gender" class="ml-2 input-size">
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                            <option value="other" selected>Other</option>
                                                        </select></td>
                                                </tr>
                                                <tr>
                                                    <td><label for="username" class="mx-3 mt-2">
                                                            <h5 class="pb-0 mb-0">Username:</h5>
                                                        </label></td>
                                                    <td><input name="username" id="username" placeholder="username"
                                                            class="ml-2 input-size" value="username123">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><label for="password" class="mx-3 mt-2">
                                                            <h5 class="pb-0 mb-0">New password:</h5>
                                                        </label></td>
                                                    <td><input name="password" id="password" placeholder="password"
                                                            class="ml-2 input-size">
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td><label for="passwordConfirmation" class="mx-3 mt-2">
                                                            <h5 class="pb-0 mb-0">Confirm password:</h5>
                                                        </label></td>
                                                    <td><input name="passwordConfirmation" id="passwordConfirmation"
                                                            placeholder="confirm password" class="ml-2 input-size"></td>
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
});