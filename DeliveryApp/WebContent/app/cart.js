Vue.component('cart', {
  data: function () {
    return {};
  },
  template: ` 
    <div>
      <navbar path="cart"></navbar>
      
      <div class="d-flex flex-column align-items-center bg-light ">
            <br>

            <!--1 restoran-->
            <div>
                <div class="d-flex flex-row justify-content-between align-items-end">
                    <h3 class="mx-5 mt-5 mb-3">Naziv Restorana</h3>
                    <button class=" ml-5 px-4 btn ">Remove all</button>
                </div>

                <!--1 proizvod-->
                <div class="bg-white subtile-box-shadow m-1 p-2 d-flex flex-row"
                    style="min-height: 100px; min-width: 600px; width: 1000px">

                    <img src="" width="90" height="90">
                    <div class="d-flex flex-fill">
                        <div class="d-flex flex-column align-items-start ml-3 mr-auto">
                            <h5 class="pb-0 mb-0">Naziv</h5>
                            <p>300g</p>
                            <span>
                                <span class="font-weight-bold mr-2"><s>400.00 RSD</s></span>
                                <span class="font-weight-bold mx-2">360.00 RSD</span>
                            </span>
                        </div>

                        <div class="d-flex flex-column justify-content-between align-items-end mr-2">
                            <button class=" btn btn-sm font-weight-bold">
                                ✕
                            </button>
                            <span>
                                <button type="button" class="btn btn-light mx-2 p-0 pb-1 border-radius border"
                                    style="height: 30px; width: 30px; border-radius: 15px">
                                    -
                                </button>
                                <span>2</span>
                                <button type="button" class="btn btn-light border p-0 mx-2 mr-4 pb-1"
                                    style="height: 30px; width: 30px; border-radius:15px">
                                    +
                                </button>
                                <span class="font-weight-bold mr-1">720.00 RSD</span>
                            </span>
                        </div>
                    </div>
                </div>
<!-- 1DEL-->

                <div class="bg-white subtile-box-shadow m-1 p-2 d-flex flex-row"
                    style="min-height: 100px; min-width: 600px; width: 1000px">

                    <img src="" width="90" height="90">
                    <div class="d-flex flex-fill">
                        <div class="d-flex flex-column align-items-start ml-3 mr-auto">
                            <h5 class="pb-0 mb-0">Naziv</h5>
                            <p>300g</p>
                            <span><span class="font-weight-bold mr-2"><s>400.00 RSD</s></span><span
                                    class="font-weight-bold mx-2">360.00 RSD</span></span>
                        </div>

                        <div class="d-flex flex-column justify-content-between align-items-end mr-2">
                            <button class=" btn btn-sm font-weight-bold">
                                ✕
                            </button>
                            <span><button type="button" class="btn btn-light mx-2 p-0 pb-1 border-radius border"
                                    style="height: 30px; width: 30px; border-radius: 15px">
                                    -
                                </button>
                                <span>2</span>
                                <button type="button" class="btn btn-light border p-0 mx-2 mr-4 pb-1"
                                    style="height: 30px; width: 30px; border-radius:15px">
                                    +
                                </button>
                                <span class="font-weight-bold mr-1">720.00 RSD</span>
                            </span>
                        </div>
                    </div>
                </div>
<!-- 2DEL-->
                <div class="float-right mt-2">
                    <label for="total-price mr-5 ml-auto">Total:</label>
                    <span class="font-weight-bold ml-5 mr-4">1440.00 RSD</span>
                </div>
                <br>
                <br>
                <button class="float-right ml-5 mt-2 px-4 btn btn-primary">Make order</button>
                <br>
                <br>
                <br>
            </div>

<!--3 DEL-->

            <div>
                <div class="d-flex flex-row justify-content-between align-items-end">
                    <h3 class="mx-5 mt-5 mb-3">Naziv Restorana</h3>
                    <button class=" ml-5 px-4 btn btn-link">Remove all</button>
                </div>

                <!--1 proizvod-->
                <div class="bg-white subtile-box-shadow m-1 p-2 d-flex flex-row"
                    style="min-height: 100px; min-width: 600px; width: 1000px">

                    <img src="" width="90" height="90">
                    <div class="d-flex flex-fill">
                        <div class="d-flex flex-column align-items-start ml-3 mr-auto">
                            <h5 class="pb-0 mb-0">Naziv</h5>
                            <p>300g</p>
                            <span><span class="font-weight-bold mr-2"><s>400.00 RSD</s></span><span
                                    class="font-weight-bold mx-2">360.00 RSD</span></span>
                        </div>

                        <div class="d-flex flex-column justify-content-between align-items-end mr-2">
                            <button class=" btn btn-sm font-weight-bold">
                                ✕
                            </button>
                            <span><button type="button" class="btn btn-light mx-2 p-0 pb-1 border-radius border"
                                    style="height: 30px; width: 30px; border-radius: 15px">
                                    -
                                </button>
                                <span>2</span>
                                <button type="button" class="btn btn-light border p-0 mx-2 mr-4 pb-1"
                                    style="height: 30px; width: 30px; border-radius:15px">
                                    +
                                </button>
                                <span class="font-weight-bold mr-1">720.00 RSD</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="bg-white subtile-box-shadow m-1 p-2 d-flex flex-row"
                    style="min-height: 100px; min-width: 600px; width: 1000px">

                    <img src="" width="90" height="90">
                    <div class="d-flex flex-fill">
                        <div class="d-flex flex-column align-items-start ml-3 mr-auto">
                            <h5 class="pb-0 mb-0">Naziv</h5>
                            <p>300g</p>
                            <span><span class="font-weight-bold mr-2"><s>400.00 RSD</s></span><span
                                    class="font-weight-bold mx-2">360.00 RSD</span></span>
                        </div>

                        <div class="d-flex flex-column justify-content-between align-items-end mr-2">
                            <button class=" btn btn-sm font-weight-bold">
                                ✕
                            </button>
                            <span><button type="button" class="btn btn-light mx-2 p-0 pb-1 border-radius border"
                                    style="height: 30px; width: 30px; border-radius: 15px">
                                    -
                                </button>
                                <span>2</span>
                                <button type="button" class="btn btn-light border p-0 mx-2 mr-4 pb-1"
                                    style="height: 30px; width: 30px; border-radius:15px">
                                    +
                                </button>
                                <span class="font-weight-bold mr-1">720.00 RSD</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="float-right mt-2">
                    <label for="total-price mr-5 ml-auto">Total:</label>
                    <span class="font-weight-bold ml-5 mr-4">1440.00 RSD</span>
                </div>
                <br>
                <br>
                <button class="float-right ml-5 mt-2 px-4 btn btn-primary">Make order</button>
                <br>
                <br>
                <br>
            </div>
<!--4 DEL-->
            
        </div>
      
      
      
    </div>		  
`,
});