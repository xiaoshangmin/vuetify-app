<template>
  <v-app>
    <v-main>
      <v-tabs
          class="header"
          centered
          dark
          show-arrows
      >
        <v-tab :to="{name:'analysis'}">
          短视频解析
        </v-tab>
        <v-tab :to="{name:'pdf'}">
          PDF转图片
        </v-tab>
        <v-tab :to="{name:'office'}">
          WORD转PDF
        </v-tab>
        <v-tab :to="{name:'pinyin'}">
          中文转拼音
        </v-tab>
        <v-tab :to="{name:'pkg'}">
          国内源
        </v-tab>
        <v-tab :to="{name:'json'}">
          格式JSON
        </v-tab>
        <v-tab :to="{name:'timestamp'}">
          时间戳转换
        </v-tab>
      </v-tabs>
      <router-view/>


      <v-footer
          app
          class="bg-indigo-lighten-1 text-white text-center d-flex flex-column"
      >
        <div class="d-flex">
          <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 text-white"
              :icon="icon"
              variant="text"
          ></v-btn>
        </div>
        <v-divider></v-divider>

        <div class="text-white">
          {{ new Date().getFullYear() }} — <strong>Wowyou</strong> Make By Love
          <v-icon size="x-small" color="red darken-2">
            mdi-heart
          </v-icon>
        </div>
      </v-footer>

    </v-main>
  </v-app>
</template>

<script>
import {uuid} from '@/utils/utils'

export default {
  name: 'App',

  data: () => ({
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
          return Promise.reject(err);
        }
    );
  }
}
</script>
<style scoped>
a {
  text-decoration: none; /* 去除默认的下划线 */
  color: #ffffff; /* 去除默认的颜色和点击后变化的颜色 */
}

.header {
  -webkit-transition: background .5s ease-in;
  transition: background .5s ease-in;
  background: linear-gradient(46deg, #e85846, #ff8170);
}
</style>
