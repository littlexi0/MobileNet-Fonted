<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-6">
        <h4>文献库修改</h4>
        <!-- <p>
          We’re constantly trying to express ourselves and actualize our dreams.
          If you have the opportunity to play.
        </p> -->
      </div>
      <div
        class="text-right col-lg-6 d-flex flex-column justify-content-center"
      >
        <button
          type="button"
          class="mt-2 mb-0 btn bg-gradient-success ms-lg-auto me-lg-0 me-auto mt-lg-0"
        >
          Save
        </button>
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-lg-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="font-weight-bolder">许可证书（不可修改）</h5>
            <div class="row">
              <div class="col-12">
                <img
                  class="mt-3 shadow-lg w-100 border-radius-lg"
                  src="https://qny.littlexi.love/FiQ_Bqmwws98Zec24l2xbChbNx-k"
                  alt="product_image"
                />
              </div>
              <!-- <div class="mt-4 col-12">
                <div class="d-flex">
                  <button
                    class="mb-0 btn bg-gradient-success btn-sm me-2"
                    type="button"
                    name="button"
                  >
                    Edit
                  </button>
                  <button
                    class="mb-0 btn btn-outline-dark btn-sm"
                    type="button"
                    name="button"
                  >
                    Remove
                  </button>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 col-lg-8 mt-lg-0">
        <div class="card">
          <div class="card-body">
            <h5 class="font-weight-bolder">文献库信息</h5>
            <div class="row">
              <div class="col-12 col-sm-6">
                <label>名字</label>
                <input
                  class="form-control"
                  type="text"
                  value="Minimal Bar Stool"
                />
              </div>
              <div class="mt-3 col-12 col-sm-6 mt-sm-0">
                <label>主题</label>
                <input class="form-control" type="number" value="2" />
              </div>
            </div>
            <div class="row">
              <!-- <div class="col-3">
                <label class="mt-4">Collection</label>
                <input class="form-control" type="text" value="Summer" />
              </div> -->
              <!-- <div class="col-3">
                <label class="mt-4">Price</label>
                <input class="form-control" type="text" value="$90" />
              </div> -->
              <!-- <div class="col-3">
                <label class="mt-4">Quantity</label>
                <input class="form-control" type="number" value="50" />
              </div> -->
            </div>
            <div class="row">
              <div class="col-sm-6">
                <label class="mt-4">描述</label>
                <p class="text-xs form-text text-muted ms-1 d-inline">
                  (optional)
                </p>
                <div id="edit-description-edit" class="h-50">
                  <!-- Long sleeves black denim jacket with a twisted design.
                  Contrast stitching. Button up closure. White arrow prints on
                  the back. -->
                </div>
              </div>
              <div class="col-sm-6">
                <label class="mt-4">是否公开</label>
                <select
                  id="choices-category-edit"
                  class="form-control"
                  name="choices-category"
                >
                  <option value="Choice 1" selected="">Yes</option>
                  <option value="Choice 2">No</option>
                </select>
                <!-- <label>Color</label>
                <select
                  id="choices-color-edit"
                  class="form-control"
                  name="choices-color"
                >
                  <option value="Choice 1" selected="">Black</option>
                  <option value="Choice 2">White</option>
                  <option value="Choice 3">Blue</option>
                  <option value="Choice 4">Orange</option>
                  <option value="Choice 5">Green</option>
                </select> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="font-weight-bolder">机构/组织</h5>
            <label>组织名称</label>
            <input class="form-control" type="text" :value=library.orgnization_name />
            <label class="mt-4">组织类型</label>
            <input class="form-control" type="text" :value=library.orgnization_type />
            <label class="mt-4">组织官网链接</label>
            <input class="form-control" type="text" :value=library.orgnization_url />
          </div>
        </div>
      </div>
      <div class="mt-4 col-sm-8 mt-sm-0">
        <div class="card">
          <h3>Tips:</h3>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;1.定期更新内容：确保文献库中的文献内容保持最新和全面。定期检查和添加最新的学术论文、期刊文章和会议论文，以及更新过时的内容。</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;2.统一的标准和格式：使用统一的标准和格式来记录文献的属性，如标题、作者、机构、摘要和关键词。这有助于提高文献的可读性和检索效率。</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;3.精细的分类和标签：为文献库中的文献添加精细的分类和标签，以便用户能够更轻松地浏览和检索相关文献。考虑使用学科分类、主题标签或关键词索引等方法。</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;4.强调核心文献：对于某个特定领域的文献库，将核心文献与其他文献区分开来，并给予其更高的权重和可见性。这有助于用户更快地找到最重要的研究成果。</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;5.提供全文或链接：尽可能提供文献的全文内容或指向在线文献的链接。这使用户能够直接阅读或下载文献，提供更便利的访问体验。</p>
          <!-- <div class="card-body">
            <div class="row">
              <h5 class="font-weight-bolder">Pricing</h5>
              <div class="col-3">
                <label>Price</label>
                <input class="form-control" type="number" value="99.00" />
              </div>
              <div class="col-4">
                <label>Currency</label>
                <select
                  id="choices-currency-edit"
                  class="form-control"
                  name="choices-sizes"
                >
                  <option value="Choice 1" selected="">USD</option>
                  <option value="Choice 2">EUR</option>
                  <option value="Choice 3">GBP</option>
                  <option value="Choice 4">CNY</option>
                  <option value="Choice 5">INR</option>
                  <option value="Choice 6">BTC</option>
                </select>
              </div>
              <div class="col-5">
                <label>SKU</label>
                <input class="form-control" type="text" value="71283476591" />
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <label class="mt-4">Tags</label>
                <select
                  id="choices-tags-edit"
                  class="form-control"
                  name="choices-tags"
                  multiple
                >
                  <option value="Choice 1" selected>In Stock</option>
                  <option value="Choice 2">Out of Stock</option>
                  <option value="Choice 3">Sale</option>
                  <option value="Choice 4">Black Friday</option>
                </select>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quill from "quill";
import Choices from "choices.js";

export default {
  name: "EditProduct",
  data(){
    return{
      library:this.$store.state.library,
    }
  },
  mounted() {
    if (document.getElementById("edit-description-edit")) {
      new Quill("#edit-description-edit", {
        theme: "snow", // Specify theme in configuration
      });
    }
    this.getChoices("choices-category-edit");
    this.getChoices("choices-color-edit");
    this.getChoices("choices-currency-edit");

    if (document.getElementById("choices-tags-edit")) {
      var tags = document.getElementById("choices-tags-edit");
      const examples = new Choices(tags, {
        removeItemButton: true,
      });

      examples.setChoices(
        [
          {
            value: "One",
            label: "Expired",
            disabled: true,
          },
          {
            value: "Two",
            label: "Out of Stock",
            selected: true,
          },
        ],
        "value",
        "label",
        false
      );
    }
  },
  methods: {
    getChoices(id) {
      if (document.getElementById(id)) {
        var element = document.getElementById(id);
        return new Choices(element, {
          searchEnabled: false,
        });
      }
    },
  },
};
</script>
