<template>
  <v-container>
    <v-snackbar v-model="snackbar" :timeout="timeout" vertical location="center">
      {{ text }}
      <template v-slot:actions>
        <v-btn color="blue" variant="text" @click="snackbar = false"> 关闭 </v-btn>
      </template>
    </v-snackbar>
    <v-row justify="center">
      <v-col md="12" sm="12" lg="12">
        <v-card :loading="loading" max-width="1600">
          <v-progress-linear
            v-if="loading"
            class="position-absolute"
            style="z-index: 1"
            color="pink lighten-3"
            height="8"
            indeterminate
            rounded
            striped
          ></v-progress-linear>
          <v-img
            class="align-end text-white"
            height="200"
            src="https://oss.wowyou.cc/misc/pdf-header.jpg"
            cover
          >
          </v-img>
          <v-card-text>
            <v-row justify="center">
              <v-col md="10" sm="12" lg="12">
                <v-file-input
                  show-size
                  counter
                  label="选择需要转换的文件"
                  :rules="rules"
                  prepend-icon=""
                  append-inner-icon="mdi-file"
                  v-model="files"
                  :disabled="disabled"
                >
                </v-file-input>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col md="8" sm="12" lg="12">
                <v-chip color="primary" class="ma-1">.bi</v-chip>
                <v-chip color="primary" class="ma-1">.do</v-chip>
                <v-chip color="primary" class="ma-1">.xm</v-chip>
                <v-chip color="primary" class="ma-1">.doc</v-chip>
                <v-chip color="primary" class="ma-1">.fod</v-chip>
                <v-chip color="primary" class="ma-1">.htm</v-chip>
                <v-chip color="primary" class="ma-1">.lt</v-chip>
                <v-chip color="primary" class="ma-1">.tx</v-chip>
                <v-chip color="primary" class="ma-1">.od</v-chip>
                <v-chip color="primary" class="ma-1">.ot</v-chip>
                <v-chip color="primary" class="ma-1">.pd</v-chip>
                <v-chip color="primary" class="ma-1">.pd</v-chip>
                <v-chip color="primary" class="ma-1">.ps</v-chip>
                <v-chip color="primary" class="ma-1">.rt</v-chip>
                <v-chip color="primary" class="ma-1">.sd</v-chip>
                <v-chip color="primary" class="ma-1">.st</v-chip>
                <v-chip color="primary" class="ma-1">.sx</v-chip>
                <v-chip color="primary" class="ma-1">.uo</v-chip>
                <v-chip color="primary" class="ma-1">.vo</v-chip>
                <v-chip color="primary" class="ma-1">.wp</v-chip>
                <v-chip color="primary" class="ma-1">.epu</v-chip>
                <v-chip color="primary" class="ma-1">.pn</v-chip>
                <v-chip color="primary" class="ma-1">.bm</v-chip>
                <v-chip color="primary" class="ma-1">.em</v-chip>
                <v-chip color="primary" class="ma-1">.ep</v-chip>
                <v-chip color="primary" class="ma-1">.fod</v-chip>
                <v-chip color="primary" class="ma-1">.gi</v-chip>
                <v-chip color="primary" class="ma-1">.jp</v-chip>
                <v-chip color="primary" class="ma-1">.me</v-chip>
                <v-chip color="primary" class="ma-1">.od</v-chip>
                <v-chip color="primary" class="ma-1">.ot</v-chip>
                <v-chip color="primary" class="ma-1">.pb</v-chip>
                <v-chip color="primary" class="ma-1">.pc</v-chip>
                <v-chip color="primary" class="ma-1">.pg</v-chip>
                <v-chip color="primary" class="ma-1">.pp</v-chip>
                <v-chip color="primary" class="ma-1">.ra</v-chip>
                <v-chip color="primary" class="ma-1">.st</v-chip>
                <v-chip color="primary" class="ma-1">.sv</v-chip>
                <v-chip color="primary" class="ma-1">.sv</v-chip>
                <v-chip color="primary" class="ma-1">.sw</v-chip>
                <v-chip color="primary" class="ma-1">.sx</v-chip>
                <v-chip color="primary" class="ma-1">.sx</v-chip>
                <v-chip color="primary" class="ma-1">.tif</v-chip>
                <v-chip color="primary" class="ma-1">.xhtm</v-chip>
                <v-chip color="primary" class="ma-1">.xp</v-chip>
                <v-chip color="primary" class="ma-1">.fod</v-chip>
                <v-chip color="primary" class="ma-1">.pot</v-chip>
                <v-chip color="primary" class="ma-1">.po</v-chip>
                <v-chip color="primary" class="ma-1">.ppt</v-chip>
                <v-chip color="primary" class="ma-1">.pp</v-chip>
                <v-chip color="primary" class="ma-1">.pp</v-chip>
                <v-chip color="primary" class="ma-1">.pw</v-chip>
                <v-chip color="primary" class="ma-1">.sd</v-chip>
                <v-chip color="primary" class="ma-1">.sd</v-chip>
                <v-chip color="primary" class="ma-1">.st</v-chip>
                <v-chip color="primary" class="ma-1">.sx</v-chip>
                <v-chip color="primary" class="ma-1">.uo</v-chip>
                <v-chip color="primary" class="ma-1">.wm</v-chip>
                <v-chip color="primary" class="ma-1">.cs</v-chip>
                <v-chip color="primary" class="ma-1">.db</v-chip>
                <v-chip color="primary" class="ma-1">.di</v-chip>
                <v-chip color="primary" class="ma-1">.fod</v-chip>
                <v-chip color="primary" class="ma-1">.od</v-chip>
                <v-chip color="primary" class="ma-1">.ot</v-chip>
                <v-chip color="primary" class="ma-1">.px</v-chip>
                <v-chip color="primary" class="ma-1">.sd</v-chip>
                <v-chip color="primary" class="ma-1">.sl</v-chip>
                <v-chip color="primary" class="ma-1">.st</v-chip>
                <v-chip color="primary" class="ma-1">.sx</v-chip>
                <v-chip color="primary" class="ma-1">.uo</v-chip>
                <v-chip color="primary" class="ma-1">.xl</v-chip>
                <v-chip color="primary" class="ma-1">.xl</v-chip>
                <v-chip color="primary" class="ma-1">.xls</v-chip>
                <v-chip color="primary" class="ma-1">.ti</v-chip>
                <v-chip color="primary" class="ma-1">.jpe</v-chip>
                <v-chip color="primary" class="ma-1">.od</v-chip>
                <v-chip color="primary" class="ma-1">.od</v-chip>
                <v-chip color="primary" class="ma-1">.dot</v-chip>
                <v-chip color="primary" class="ma-1">.xltx</v-chip>
              </v-col>
            </v-row>

            <v-row v-if="finish" justify="center">
              <v-divider></v-divider>
              <v-col cols="10">
                <v-row justify="start" align="center">
                  <v-col cols="8">
                    {{ info.filename }}
                  </v-col>
                  <v-col cols="2">
                    {{ info.filesize }}
                  </v-col>
                  <v-col cols="2">
                    <a :href="info.download" target="_blank">
                      <v-icon icon="mdi-cloud-download" />
                    </a>
                  </v-col>
                </v-row>
              </v-col>
              <v-divider></v-divider>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col cols="12">
                <v-row justify="center">
                  <v-btn
                    append-icon="mdi-swap-horizontal"
                    elevation="2"
                    color="#ff8170"
                    @click="postFile"
                    :disabled="disabled"
                  >
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
import { filesize } from "@/utils/utils";

export default {
  data: () => ({
    finish: false,
    snackbar: false,
    text: "",
    timeout: 2000,
    loading: false,
    disabled: false,
    files: [],
    info: {},
    rules: [
      (value) => !!value || "Required.",
      (value) => {
        console.log(value);
        return (
          !value || !value.length || value[0].size < 10486000 || "文件大小不能超过10 MB!"
        );
      },
    ],
  }),
  methods: {
    postFile() {
      if (this.files.length == 0) {
        this.text = "请选择需要转换的文件";
        this.snackbar = !this.snackbar;
        return;
      }
      //TODO 批量处理
      let file = this.files[0]; //拿到上传的file
      if (file.size > 10486000) {
        this.text = "文件大小不能超过10 MB!";
        this.snackbar = !this.snackbar;
        return;
      }
      this.loading = true;
      this.disabled = true;
      this.$socket.getMsg((res) => {
        if (typeof res === "object") {
          if (res.result) {
            this.loading = false;
            this.disabled = false;
            this.finish = true;
            res.filesize = filesize(res.filesize);
            this.info = res;
          }
        }
      });
      let param = new FormData(); //创建form对象
      param.append("file", file); //为创建的form对象增加上传的文件
      let config = {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (event) => {
          let complete = (((event.loaded / event.total) * 100) | 0) + "%";
          console.log(complete);
        },
        responseType: "blob",
      }; //请求头和上传进度
      this.$http
        .post("/api/pdfTool/fileToPdf", param, config)
        .then((res) => {
          console.log(res)
          this.loading = false;
          this.disabled = false;

          var arrayBuffer = res.data;
          const url = window.URL.createObjectURL(
            new Blob([arrayBuffer], { type: res.headers['content-type'] })
          );
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", file.name + ".pdf");
          document.body.appendChild(link);
          link.click();
        })
        .catch((res) => {
          console.log("error", res);
          this.text = res.message;
          this.snackbar = !this.snackbar;
          this.loading = false;
          this.disabled = false;
        });
    },
  },
};
</script>

<style>
.header,
.footer {
  -webkit-transition: background 0.5s ease-in;
  transition: background 0.5s ease-in;
  background: linear-gradient(135deg, #1d978f, #7ddecb);
}
</style>
