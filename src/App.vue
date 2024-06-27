<template>
  <v-app id="app">
    <v-app-bar class="px-3" density="compact" flat>
      <v-spacer></v-spacer>
      <v-tabs color="grey-darken-2" centered>
        <v-tab v-for="link in links" :key="link" :text="link"></v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <v-avatar
        class="hidden-sm-and-down"
        color="grey-darken-1"
        size="32"
      ></v-avatar>
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
      <!-- <v-footer app class="bg-red-lighten-3 text-white text-center d-flex flex-column">
        <div class="d-flex">
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 text-white" :icon="icon" variant="text"
            @click="feedback"></v-btn>
        </div>
        <v-divider></v-divider>

        <div class="text-white">
          {{ new Date().getFullYear() }} — Make By Love
          <v-icon size="x-small" color="red darken-2">
            mdi-heart
          </v-icon>
        </div>
      </v-footer> -->

    </v-main>
  </v-app>
</template>

<script>
import { uuid } from '@/utils/utils'

export default {
  name: 'App',

  data: () => ({
    dialog: false,
    links: [
      'AI-移除背景',
      '拼字幕',
      'IT 工具箱',
      'Updates',
    ],
    icons: [
      'mdi-wechat',
      'mdi-qqchat',
      'mdi-sina-weibo',
      'mdi-instagram',
    ],
  }),
  created() {
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
        // if(err.response.status == 500){

        // }
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
    feedback() {
      window.open('https://support.qq.com/product/423219')
    }
  }
}
</script>