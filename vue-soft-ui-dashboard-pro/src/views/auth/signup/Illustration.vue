<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar
          is-blur="blur blur-rounded my-3 py-2 start-0 end-0 mx-4 shadow"
          btn-background="bg-gradient-success"
          :dark-mode="true"
        />
      </div>
    </div>
  </div>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div
              class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto"
            >
              <div class="card card-plain">
                <div class="card-header pb-0 text-left">
                  <h4 class="font-weight-bolder">登录</h4>
                  <p class="mb-0">请输入用户名和密码登录</p>
                  <p class="mb-0">Enter your username and password to register</p>
                </div>
                <div class="card-body pb-3">
                  <form role="form">
                    <label>用户名(username)</label>
                    <soft-input
                      id="name"
                      type="text"
                      placeholder="Name"
                      aria-label="Name"
                    />
                    <label>密码(Password)</label>
                    <soft-input
                      id="password"
                      type="password"
                      placeholder="Password"
                      aria-label="Password"
                    />
                    <soft-checkbox
                      id="flexCheckDefault"
                      class="font-weight-light"
                      name="terms"
                      checked
                    >
                      I agree the
                      <a href="#" class="text-dark font-weight-bolder"
                        >Terms and Conditions</a
                      >
                    </soft-checkbox>
                    <div class="text-center"  >
                      <soft-button
                        color="success"
                        variant="gradient"
                        full-width
                        class="w-100 mt-4 mb-0"
                        @click="signinclik"
                        >登录</soft-button
                      >
                    </div>
                  </form>
                </div>
                <div class="card-footer text-center pt-0 px-sm-4 px-1">
                  <p class="mb-4 mx-auto">
                    还没有账户？
                    <router-link
                      :to="{ name: 'Signin Illustration' }"
                      class="text-success text-gradient font-weight-bold"
                      >注册
                    </router-link>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column"
            >
              <div
                class="position-relative bg-gradient-success h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
              >
                <img
                  src="../../../assets/img/shapes/pattern-lines.svg"
                  alt="pattern-lines"
                  class="position-absolute opacity-4 start-0"
                />
                <h4 class="mt-5 text-white font-weight-bolder">
                  文渊-论文管理系统
                </h4>
                <p class="text-white">
                  Wenyuan Paper Management System
                </p>
                <p class="text-white">
                  &nbsp; &nbsp; &nbsp; &nbsp;你的私人知识财产管理系统，通过智能化的分类和搜索功能，轻松整理和管理文献、笔记和研究成果。安全加密技术保障您的数据安全，不用担心泄露和丢失。
                </p>
                <p class="text-white">
                  &nbsp; &nbsp; &nbsp; &nbsp;高度可定制的界面和功能，满足个性化需求。文渊不仅是一款工具，更是您知识创造和管理的得力助手。让文渊与您并肩，开启知识管理新纪元。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import SoftInput from "@/components/SoftInput.vue";
import SoftCheckbox from "@/components/SoftCheckbox.vue";
import SoftButton from "@/components/SoftButton.vue";
const body = document.getElementsByTagName("body")[0];

import { mapMutations } from "vuex";
export default {
  name: "SigninIllustration",
  components: {
    Navbar,
    SoftInput,
    SoftCheckbox,
    SoftButton,
  },
  created() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.add("bg-gray-100");
  },
  methods: {
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
    signinclik(){
      
    }
  },
};
</script>
