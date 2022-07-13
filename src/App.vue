<template>
  <v-app>
    <v-main>
      <div class="header">
        <div class="d-flex justify-center mb-6">

          <router-link :to="{name:'analysis'}">
            <v-btn class="ma-2 pa-2" color="white" variant="text">短视频解析</v-btn>
          </router-link>

          <router-link :to="{name:'pdf'}">
            <v-btn class="ma-2 pa-2" color="white" variant="text">PDF转图片</v-btn>
          </router-link>

          <router-link :to="{name:'office'}">
            <v-btn class="ma-2 pa-2" color="white" variant="text">WORD转PDF</v-btn>
          </router-link>

          <router-link :to="{name:'pinyin'}">
            <v-btn class="ma-2 pa-2" color="white" variant="text">中文转拼音</v-btn>
          </router-link>

          <router-link :to="{name:'pkg'}">
            <v-btn class="ma-2 pa-2" color="white" variant="text">国内源</v-btn>
          </router-link>

        </div>
      </div>
      <router-view/>
      <v-footer app  class="text-center" color="#e85846">
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
<style scoped>
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
