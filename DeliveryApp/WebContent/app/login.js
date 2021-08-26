Vue.component('login', {
  data: function () {
    return {};
  },
  template: ` 
    <div>
      <navbar path="login"></navbar> 
      <div class="d-flex flex-column align-items-center bg-light">


            <div class="d-flex flex-column align-items-center w-50 p-4 mt-5 bg-white box-shadow">
				<form method="POST" action="#/restaurants">
                <table>
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
                        <td colspan="2"><p class="m-3 px-4 text-danger align-items-center" hidden="hidden">Invalid data. Try again.</p></td>
                    </tr>
                    <tr>
                            <td colspan="2" class="text-center"><input type="submit" value="Log in"
                                    class="btn btn-dark mt-4 px-3"></td>
                    </tr>
                    <tr>
                        <td colspan="2"><a href="#/signup"><p class="m-3 px-4">Don't have an account? Create one now.</p></a></td>
                    </tr>
                </table>
                </form>
            </div>


        </div>
    </div>	  
`,
});
