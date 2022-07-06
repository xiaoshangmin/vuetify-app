<template>
  <v-app>
    <v-main>
      <div class="header">
        <div class="d-flex justify-center mb-6">
          <v-btn class="ma-2 pa-2" color="white" variant="text">
            PDf转图片
          </v-btn>
        </div>
      </div>
      <router-view />
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
import { uuid } from '@/utils/utils'
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
        if (uuid) {
          // 判断是否存在token，如果存在的话，则每个http header都加上token
          config.headers.auth = `${uuid}`;
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

