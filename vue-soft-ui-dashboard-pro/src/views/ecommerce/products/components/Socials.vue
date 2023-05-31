<template>
  <div
    class="p-3 bg-white card multisteps-form__panel border-radius-xl"
    data-animation="FadeIn"
  >
    <h5 class="font-weight-bolder">机构/组织</h5>
    <div class="multisteps-form__content">
      <div class="mt-3 row">
        <div class="col-12">
          <label>机构/组织名称</label>
          <soft-input
            class="multisteps-form__input"
            type="text"
            placeholder="复旦大学"
          />
        </div>
        <div class="mt-3 col-12">
          <label>机构/组织类型</label>
          <soft-input
            class="multisteps-form__input"
            type="text"
            placeholder="科研机构"
          />
        </div>
        <div class="mt-3 col-12">
          <label>机构/组织官网链接</label>
          <soft-input
            class="multisteps-form__input"
            type="text"
            placeholder="https://..."
          />
        </div>
      </div>
      <div class="row">
        <div class="mt-4 button-row d-flex col-12">
          <soft-button
            color="secondary"
            variant="gradient"
            class="mb-0 js-btn-prev"
            title="Prev"
            @click="this.$parent.prevStep"
            >上一步</soft-button
          >
          <soft-button
            type="button"
            color="dark"
            variant="gradient"
            class="mb-0 ms-auto js-btn-next"
            title="Next"
            @click="submit"
            >提交</soft-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SoftInput from "@/components/SoftInput.vue";
import SoftButton from "@/components/SoftButton.vue";
import axios from "axios";
export default {
  name: "Socials",
  components: {
    SoftInput,
    SoftButton,
  },
  methods: {
    submit() {
      // 发送提交的axios请求
      axios
        .post("/api/organization", {
          name: this.name,
          type: this.type,
          website: this.website,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
