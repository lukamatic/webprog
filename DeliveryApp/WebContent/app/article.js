Vue.component('articleComponent', {
  data: function () {
    return {
      backupArticle: null,
      article: {
        name: "",
        articleType: null,
        price: null,
        imageName: "",
        articleSize: {
          ammount: null,
          unit: null
        }
      },
      file: null,
      readonlyModeOn: false,
    };
  },
  template: ` 
  <div>
    <navbar path="restaurant"></navbar>
    <div class="d-flex flex-column align-items-center bg-light">
      <div
        class="
          d-flex
          flex-column
          align-items-center
          p-4
          bg-white
          box-shadow
          w-75
          mt-5
        "
      >
        <button
          v-if="readonlyModeOn"
          class="btn btn-dark align-self-end mr-5 mt-2"
          v-on:click="turnEditModeOn"
        >
          Edit article
        </button>
        <form v-on:submit.prevent="saveArticle">
          <table>
            <tr>
              <td>
                <label for="name" class="mx-3 mt-2">
                  <h5 class="pb-0 mb-0">Article name:</h5>
                </label>
              </td>
              <td>
                <input
                  name="name"
                  id="name"
                  placeholder="article name"
                  class="ml-2 input-size"
                  v-model="article.name"
                  :readonly="readonlyModeOn"
                />
              </td>
              <td rowspan="5" class="pl-5" style="vertical-align: top">
                <label class="mx-3 mt-2">
                  <h5 class="pb-0 mb-0">Description:</h5> </label
                ><br />
                <textarea
                  id="description"
                  name="description"
                  placeholder="description"
                  rows="10"
                  cols="60"
                  class="p-1"
                  style="resize: none"
                  v-model="article.description"
                  :readonly="readonlyModeOn"
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <label for="type" class="mx-3 mt-2">
                  <h5 class="pb-0 mb-0">Article type:</h5>
                </label>
              </td>
              <td>
                <select
                  name="type"
                  id="type"
                  class="ml-2 input-size"
                  v-model="article.articleType"
                  :disabled="readonlyModeOn"
                  v-on:change="changeUnit"
                >
                  <option value="FOOD">Food</option>
                  <option value="BEVERAGE">Beverage</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label for="price" class="mx-3 mt-2">
                  <h5 class="pb-0 mb-0">Price:</h5>
                </label>
              </td>
              <td>
                <input
                  name="price"
                  id="price"
                  type="number"
                  placeholder="price"
                  class="ml-2 input-size"
                  v-model="article.price"
                  :readonly="readonlyModeOn"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="ammount" class="mx-3 mt-2">
                  <h5 class="pb-0 mb-0">{{"Ammount: (" + article.articleSize.unit + ")" }}</h5>
                </label>
              </td>
              <td>
                <input
                  name="ammount"
                  id="ammount"
                  type="number"
                  placeholder="ammount"
                  class="ml-2 input-size"
                  v-model="article.articleSize.ammount"
                  :readonly="readonlyModeOn"
                />
              </td>
            </tr>
            <tr>
              <td style="vertical-align: top">
                <label for="image" class="mx-3 mt-2">
                  <h5 class="pb-0 mb-0">Image:</h5>
                </label>
              </td>
              <td>
                <img ref="image" class="my-2" width="200" height="200" />
                <br />
                <input
                  v-if="!readonlyModeOn"
                  type="file"
                  ref="file"
                  v-on:change="handleFileUpload()"
                />
              </td>
            </tr>
            <tr v-if="!readonlyModeOn">
              <td colspan="2" class="text-center">
                <button
                  class="btn btn-light border-dark mt-5 ml-5"
                  style="width: 120px"
                  v-on:click="cancelChanges"
                >
                  Cancel
                </button>
              </td>
              <td colspan="2" class="text-center">
                <input
                  type="submit"
                  class="btn btn-dark mt-5 mr-5"
                  style="width: 120px"
                  value="Save article"
                >
                </input>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  </div>
`,
  mounted() {
  	this.article.id = this.$route.query.id;
  	if (this.article.id) {
  	  this.readonlyModeOn = true;
      axios.get('rest/articles/' + this.article.id)
      .then((response) => {
        this.article = response.data;
        this.$refs['image'].src = "Images/" + this.article.imageName;
      });
  	}
  },
  methods: {
    handleFileUpload: function () {
      this.file = this.$refs.file.files[0];
      this.$refs["image"].src = window.URL.createObjectURL(this.file);
    },
    changeUnit: function() {
      if (this.article.articleType == "FOOD") {
        this.article.articleSize.unit = "GRAMS";
      } else {
        this.article.articleSize.unit = "MILLILITERS";
      }
    },
    turnEditModeOn: function () {
      this.readonlyModeOn = false;
      this.backupArticle = { 
        name: this.article.name,
        articleType: this.article.articleType,
        price: this.article.price,
        imageName: this.article.imageName,
        articleSize: {
          ammount: this.article.articleSize.ammount,
          unit: this.article.articleSize.unit
        }
      };
    },
    cancelChanges: function () {
      this.article = this.backupArticle;
      this.changeUnit();
      this.$refs["image"].src = this.article.imageName
        ? "Images/" + this.article.imageName
        : "Images/default_article.png";
      this.readonlyModeOn = true;
    },
    saveArticle: function () {},
  },
});