<template>
  <v-app>
    <v-main>
      <v-tabs
          class="header"
          centered
          dark
          show-arrows
      >
        <v-tab>
          <router-link :to="{name:'analysis'}" class="pa-2">
            短视频解析
          </router-link>
        </v-tab>
        <v-tab>
          <router-link :to="{name:'pdf'}" class="pa-2">
            PDF转图片
          </router-link>
        </v-tab>
        <v-tab>
          <router-link :to="{name:'office'}" class="pa-2">
            WORD转PDF
          </router-link>
        </v-tab>
        <v-tab>
          <router-link :to="{name:'pinyin'}" class="pa-2">
            中文转拼音
          </router-link>
        </v-tab>
        <v-tab>
          <router-link :to="{name:'pkg'}" class="pa-2">
            国内源
          </router-link>
        </v-tab>
         <v-tab>
          <router-link :to="{name:'json'}" class="pa-2">
            格式JSON
          </router-link>
        </v-tab>
        <v-tab>
          <router-link :to="{name:'timestamp'}" class="pa-2">
            时间戳转换
          </router-link>
        </v-tab>
      </v-tabs>
      <router-view/>
      <v-footer
          app
          class="footer text-white text-center d-flex flex-column"
      >
        <div class="text-white pt-0">
          Make By Love
        </div>

        <v-divider></v-divider>

        <div class="text-white">
          {{ new Date().getFullYear() }} — <strong>wowyou</strong>
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
