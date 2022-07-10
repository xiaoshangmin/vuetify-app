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
        <v-card :loading="loading" max-width="1400">
          <v-progress-linear v-if="loading" class="position-absolute" style="z-index: 1"
                             color="pink lighten-3" height="8" indeterminate rounded striped></v-progress-linear>
          <v-img class="align-end text-white" height="200" src="https://oss.wowyou.cc/misc/pdf-header.jpg"
                 cover>
          </v-img>
          <v-card-text>
            <v-row justify="center">
              <v-col cols="10">
                <v-file-input show-size counter accept=".pdf" label="选择pdf文件" :rules="rules" prepend-icon=""
                              append-inner-icon="mdi-file" v-model="files" :disabled="disabled">
                </v-file-input>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="2">
                <v-switch v-model="merge" label="拼接图片" color="red" value="true">
                </v-switch>
              </v-col>
              <v-col cols="8"></v-col>
            </v-row>
            <v-row v-if="finish" justify="center">
              <v-divider
                  inset
              ></v-divider>
              <v-col cols="10">
                <v-row justify="start" align="center">
                  <v-col cols="8">
                    {{ info.filename }}
                  </v-col>
                  <v-col cols="2">
                    {{ info.filesize }}
                  </v-col>
                  <v-col cols="2">
                    <a :href="info.download">
                      <v-icon>
                        mdi-cloud-download
                      </v-icon>
                    </a>
                  </v-col>
                </v-row>
              </v-col>
              <v-divider
                  inset
              ></v-divider>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col cols="12">
                <v-row justify="center">
                  <v-btn append-icon="mdi-cloud-upload" elevation="2" color="#eb5d4c" @click="pdfToPic"
                         :disabled="disabled">
                    上传并转换
                  </v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import {filesize} from '@/utils/utils'

export default {
  data: () => ({
    finish: false,
    snackbar: false,
    text: '',
    timeout: 2000,
    loading: false,
    merge: false,
    disabled: false,
    files: [],
    info: {},
    rules: [
      value => !!value || 'Required.',
      value => {
        console.log(value)
        return !value || !value.length// || value[0].size < 5243000 || '文件大小不能超过5 MB!'
      },
    ],
  }),
  methods: {
    pdfToPic() {
      if (this.files.length == 0) {
        this.text = "请选择需要转换的文件"
        this.snackbar = !this.snackbar
        return;
      }
      this.loading = true
      this.disabled = true
      this.$socket.getMsg((res) => {
        if (typeof res === 'object') {
          if (res.result) {
            this.loading = false
            this.disabled = false
            this.finish = true
            res.filesize = filesize(res.filesize)
            this.info = res
          }
        }
      })
      //TODO 批量处理
      let file = this.files[0];//拿到上传的file
      let param = new FormData();//创建form对象
      param.append("file", file);//为创建的form对象增加上传的文件
      param.append('merge', this.merge);
      let config = {
        headers: {"Content-Type": "multipart/form-data"},
        onUploadProgress: event => {
          let complete = (event.loaded / event.total * 100 | 0) + '%'
          console.log(complete)
        }
      }//请求头和上传进度
      this.$http.post("/api/pdfToPic/upload", param, config).then((res) => {
        console.log(res.data);
        if (res.data.code) {
          this.text = "文件上传成功，正在转换请稍等片刻";
          this.snackbar = !this.snackbar
        }
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