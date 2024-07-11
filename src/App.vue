<template>
  <v-app id="app" :theme="theme">
    <v-app-bar class="px-3" density="compact" flat>
      <v-spacer></v-spacer>
      <v-tabs color="grey-darken-2" centered>
        <v-tab key="AI-移除背景" text="AI-移除背景"></v-tab>
        <v-tab key="IT 工具箱" text="IT 工具箱" @click="goItTools"></v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <v-btn :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" slim @click="onClick"></v-btn>
    </v-app-bar>
    <v-main>
      <router-view />

      <!--公共弹窗-->
      <v-dialog transition="dialog-bottom-transition" v-model="dialog" persistent>
        <v-card>
          <v-card-title class="text-h5">
            温馨提示
          </v-card-title>
          <v-card-text>
            与服务器连接建立失败 处理结果无法及时接收，请刷新页面重试
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-spacer></v-spacer>
            <v-btn text color="secondary" @click="refresh">刷新
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!--      底部-->
      <v-footer app class="text-center d-flex flex-column">
        <!-- <div class="d-flex">
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text" @click="feedback"></v-btn>
        </div> -->
        <v-divider></v-divider>
        <div class="d-flex justify-center align-center">
          <v-btn variant="text">
            <v-icon icon="mdi-account-circle" size="x-large"></v-icon>
            <v-tooltip activator="parent" location="top" class="custom-tooltip"> <v-img :width="150" aspect-ratio="1"
                src="../../qccode_official_account.jpg"></v-img></v-tooltip>
          </v-btn>
          <v-btn variant="text">
            <v-icon icon="mdi-wechat" size="x-large"></v-icon>
            <v-tooltip activator="parent" location="top" class="custom-tooltip"> <v-img :width="150" aspect-ratio="1"
                src="../../qrcode_mini_program.jpg"></v-img></v-tooltip>
          </v-btn>
          <v-btn variant="text" @click="feedback">
            <v-icon icon="mdi-qqchat" size="x-large"></v-icon>
          </v-btn>
        </div>
        <div class="">
          {{ new Date().getFullYear() }} — Make By Love
          <v-icon size="x-small" color="red darken-2">
            mdi-heart
          </v-icon>
        </div>
      </v-footer>

    </v-main>
  </v-app>
</template>

<script>
import { uuid } from '@/utils/utils'

export default {
  name: 'App',
  data: () => ({
    theme: 'light',
    dialog: false,
  }),
  created() {
    const savedTheme = localStorage.getItem('theme') || 'light'; // 默认使用light主题
    this.theme = savedTheme
    let uid = localStorage.getItem("uid")
    if (!uid) {
      uid = uuid();
    }
    localStorage.setItem('uid', uid)
    //http request 拦截器
    this.$http.interceptors.request.use(
      config => {
        if (uid) {
          // 判断是否存在token，如果存在的话，则每个http header都加上token
          config.headers.Auth = `${uid}`;
        }
        return config;
      },
      err => {
        return Promise.reject(err);
      }
    );
    //http response 拦截器
    this.$http.interceptors.response.use(
      response => {
        if (response.data) {
          if (401 == response.data.code) {
            return;
          }
        }
        return response;
      },
      err => {
        return Promise.reject(err);
      }
    );
    // this.$socket.initOpen((res) => {
    //   this.dialog = true
    // })
  },
  methods: {
    refresh() {
      this.dialog = false
      location.reload()
    },
    goItTools() {
      window.open("https://tools.wowyou.cc")
    },
    onClick() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', this.theme);
    },
    feedback() {
      window.open('https://support.qq.com/product/423219')
    }
  }
}
</script>
<style>
.custom-tooltip .v-overlay__content {
  margin: 0 !important;
  padding: 0 !important;
}
</style>