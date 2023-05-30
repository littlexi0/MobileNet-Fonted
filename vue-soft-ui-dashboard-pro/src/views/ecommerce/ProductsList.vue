<template>

  <div>

    <a
      href="./new-product"
      class="mb-0 btn bg-gradient-success btn-sm"
      style="float: right"
      >+&nbsp; 新建文献库</a
    >

  <a-table :columns="columns" :data-source="data">


    <!-- <template #name="{ text }">
      <a>{{ text }}</a>
    </template> -->
    <template #customTitle>
      <span>
        <smile-outlined />
        文献库名称
      </span>
    </template>
    <template #tags="{ text: tags }">
      <span>
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="green"
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
    </template>
    <template #action="{ record }">
      <span>
        <a-button
          type="text"
          size="small"
          class="mb-0 btn bg-gradient-success"
          @click="showModal(record)"
        >
          编辑
        </a-button>
        <a-button
          type="text"
          size="small"
          class="mb-0 btn bg-gradient-success"
          style="margin-left: 5px;"
          @click="showSwal(record)"
        >
          删除
      </a-button>
      </span>
    </template>
  </a-table>

  <!-- 修改弹窗 -->
  <div>
    <a-modal
      v-model:visible="visible"
      title="Title"
      mask=false
      ok-text="修改"
      cancel-text="取消"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
    >
      <p>{{ modalText }}</p>
    </a-modal>
  </div>


  </div>
</template>

<script>
import { DataTable } from "simple-datatables";
import setTooltip from "@/assets/js/tooltip.js";
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: "ProductsList",
  setup() {
    const modalText = ref('Content of the modal');
    const visible = ref(false);
    const confirmLoading = ref(false);
    const showModal = () => {
      console.log(visible.value)
      visible.value = true;
    };
    const handleOk = () => {
      modalText.value = 'The modal will be closed after two seconds';
      confirmLoading.value = true;
      setTimeout(() => {
        visible.value = false;
        confirmLoading.value = false;
      }, 2000);
    };
    return {
      modalText,
      visible,
      confirmLoading,
      showModal,
      handleOk,
    };
  },
  data(){
    return{
      pagination: {
      total: 200,
      current: 1,
      pageSize: 10
      },
      loading: false,
      columns : [
        {
          dataIndex: 'name',
          key: 'name',
          slots: {
            title: 'customTitle',
            customRender: 'name',
          },
        },
        {
          title: '主题',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '文章数量',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: '热度',
          key: 'tags',
          dataIndex: 'tags',
          slots: {
            customRender: 'tags',
          },
        },
        {
          title: '操作',
          key: 'action',
          slots: {
            customRender: 'action',
          },
        },
      ],
      data : [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ]
    }
  },
  mounted() {
    if (document.getElementById("products-list")) {
      const dataTableSearch = new DataTable("#products-list", {
        searchable: true,
        fixedHeight: false,
        perPage: 7
      });

      document.querySelectorAll(".export").forEach(function (el) {
        el.addEventListener("click", function () {
          var type = el.dataset.type;

          var data = {
            type: type,
            filename: "soft-ui-" + type
          };

          if (type === "csv") {
            data.columnDelimiter = "|";
          }

          dataTableSearch.export(data);
        });
      });
    }
    setTooltip(this.$store.state.bootstrap);
  },
  methods: {
    deleteclk(record){
      console.log(record);
    },
    showSwal(){
      this.$swal({
          title: "确定删除吗?",
          text: "删除操作将无法撤销!",
          showCancelButton: true,
          confirmButtonText: "删除",
          cancelButtonText: "取消",
          reverseButtons: true,
          customClass: {
            confirmButton: "btn bg-gradient-success",
            cancelButton: "btn bg-gradient-danger",
          },
          buttonsStyling: false,
        }).then((result) => {
          if (result.isConfirmed) {

            // 这里可以发送删除的axios请求

            this.$swal({
              title: "删除成功!",
              text: "你的文献库已经成功删除！",
              icon: "success",
              customClass: {
                confirmButton: "btn bg-gradient-success",
              },
              buttonsStyling: false,
            });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === this.$swal.DismissReason.cancel
          ) {
            this.$swal({
              title: "取消!",
              text: "你的文献库未被删除",
              icon: "error",
              customClass: {
                confirmButton: "btn bg-gradient-success",
              },
              buttonsStyling: false,
            });
          }
        });
    }

  },
});
</script>
