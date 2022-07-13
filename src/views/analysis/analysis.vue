<template>
  <v-container>
    <v-snackbar v-model="snackbar" :timeout="timeout" vertical location="center">
      {{ text }}
      <template v-slot:actions>
        <v-btn color="blue" variant="text" @click="snackbar = false">
          关闭
        </v-btn>
      </template>
    </v-snackbar>
    <v-row justify="center">
      <v-col md="12" sm="12" lg="10">
        <v-card max-width="1400">
          <v-card-text>
            <v-row justify="center">
              <v-col md="8" sm="12" lg="8">
                <v-textarea
                    v-model="url"
                    clearable
                    label="请粘贴分享的链接或者视频url地址"
                    auto-grow
                    hide-details
                    rows="2"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col md="8" sm="12" lg="8">
                <v-chip color="primary" class="ma-2">抖音</v-chip>
                <v-chip color="secondary" class="ma-2">快手</v-chip>
                <v-chip color="red" class="ma-2">微博</v-chip>
                <v-chip color="green" class="ma-2">哔哩哔哩</v-chip>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-btn append-icon="mdi-cloud-search-outline" elevation="2" color="#ff8170" @click="analysis"
                     :disabled="disabled" :loading="loading">
                开始解析
              </v-btn>
            </v-row>
            <v-row v-if="finish" justify="center">
              <v-divider class="ma-1 pa-1"
              ></v-divider>
              <v-col cols="10">
                <v-row justify="center" align="center">
                  <video v-if="info.type == 'video'" width="270" height="480" controls autoplay>
                    <source :src="info.videoUrl" type="video/mp4">
                    您的浏览器不支持 video 标签。
                  </video>
                  <v-row v-if="info.type == 'images'">
                    <v-col
                        v-for="url in info.pics"
                        :key="url"
                        class="d-flex child-flex"
                        cols="4"
                    >
                      <v-img
                          :src="url"
                          :lazy-src="url"
                          aspect-ratio="1"
                          cover
                          class="bg-grey-lighten-2"
                      >
                        <template v-slot:placeholder>
                          <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                          >
                            <v-progress-circular
                                indeterminate
                                color="grey-lighten-5"
                            ></v-progress-circular>
                          </v-row>
                        </template>
                      </v-img>
                    </v-col>
                  </v-row>
                </v-row>
              </v-col>
              <v-divider class="ma-2"
              ></v-divider>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    finish: false,
    snackbar: false,
    text: '',
    timeout: 2000,
    loading: false,
    disabled: false,
    info: {},
    url: '',
  }),
  created() {

  },
  methods: {
    analysis() {
      this.loading = true
      this.disabled = true
      const url = /http[s]?:\/\/([\w./-]+)\??[\w=&:.\-+%]*[/]*/.exec(this.url);

      if (url == null) {
        this.text = '复制的文案或者链接错误'
        this.snackbar = !this.snackbar
        return;
      }
      //TODO 批量处理
      let param = {
        url: url[0]
      }
      this.$http.post("/api/analysis/media", param).then((res) => {
        console.log(res.data);
        if (1 == res.data.code) {
          this.info = res.data.data
        }
        this.loading = false;
        this.finish = true;
        this.disabled = false
      }).catch((res) => {
        console.log('error', res)
        this.loading = false
        this.disabled = false
      });
    },
  }
}
</script>

<style>
.header,
.footer {
  -webkit-transition: background .5s ease-in;
  transition: background .5s ease-in;
  background: linear-gradient(46deg, #e85846, #ff8170);
}
</style>