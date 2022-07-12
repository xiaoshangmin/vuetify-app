<template>
  <v-app>
    <v-main>
      <div class="header">
        <div class="d-flex justify-center mb-6">
          <v-btn class="ma-2 pa-2" color="white" variant="text">
            <router-link :to="{name:'analysis'}">短视频解析</router-link>
          </v-btn>
          <v-btn class="ma-2 pa-2" color="white" variant="text">
            <router-link :to="{name:'pdf'}">PDF转图片</router-link>
          </v-btn>
          <v-btn class="ma-2 pa-2" color="white" variant="text">
            <router-link :to="{name:'office'}">WORD转PDF</router-link>
          </v-btn>
          <v-btn class="ma-2 pa-2" color="white" variant="text">
            <router-link :to="{name:'pinyin'}">中文转拼音</router-link>
          </v-btn>
          <v-btn class="ma-2 pa-2" color="white" variant="text">
            <router-link :to="{name:'pkg'}">国内源</router-link>
          </v-btn>

        </div>
      </div>
      <router-view/>
      <v-footer padless app>
        <v-row justify="center" no-gutters>
          <!-- <v-btn v-for="link in links" :key="link" color="white" variant="text" class="mx-2" rounded="xl">
            {{ link }}
          </v-btn> -->
          <v-col class="text-center  mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong>握游科技</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
import {uuid} from '@/utils/utils'

export default {
  name: 'App',

  data: () => ({
    links: [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
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
<style>
a {
  text-decoration: none; /* 去除默认的下划线 */
  color: #ffffff; /* 去除默认的颜色和点击后变化的颜色 */
}

.header,
.footer {
  -webkit-transition: background .5s ease-in;
  transition: background .5s ease-in;
  background: linear-gradient(46deg, #e85846, #ff8170);
}
</style>
