<template>
  <v-container>
    <v-row justify="center" class="mt-5">
      <v-card :width="cardWidth">
        <v-card-text>
          <v-row justify="center">
            <v-col md="12" sm="12" lg="12">
              <v-textarea v-model="text" :rules="[rules.required, rules.counter]" clearable label="请输入内容" counter
                variant="outlined" auto-grow rows="2" maxlength="300">
              </v-textarea>
            </v-col>
          </v-row>
          <v-row justify="center" class="mt-8">
            <v-col class="d-flex" cols="12" sm="6">
              <v-select :items="ecl" label="容错级别" variant="outlined" v-model="eclSelect" return-object
                item-title="state" item-value="abbr"></v-select>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-select :items="dataCodewords" label="数据块缩放比例" variant="outlined" v-model="dataSelect" return-object
                item-title="state" item-value="abbr"></v-select>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-file-input accept="image/*" label="背景图" show-size v-model="bgSrcArr"
                prepend-icon="" variant="outlined" @change="uploadBg">
              </v-file-input>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-switch v-model="autoColor" label="使用背景图颜色" color="red" value="true" hide-details>
              </v-switch>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-file-input accept="image/*" label="Logo图" show-size v-model="logoSrcArr" prepend-icon=""
                variant="outlined" @change="uploadLogo">
              </v-file-input>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-text-field label="尺寸" variant="outlined" type="number" v-model="setSize" max="2000"
                :rules="[sizeValidation.max, sizeValidation.mix]">
              </v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center" class="mt-2 mb-5">
            <v-btn elevation="2" color="#ff8170" @click="make" :loading="loading">
              生成二维码
            </v-btn>
          </v-row>
          <v-row justify="center" v-if="qrData">
            <vue-qr :text="qrData" :autoColor="autoColor" :size="size" :bgSrc="qrBgSrc" :gifBgSrc="qrGifBgSrc"
              :logoSrc="qrLogoSrc" :dotScale="dotScale" :correctLevel="correctLevel" :margin="5" :bindElement="false"
              :callback="getQrcode">
            </vue-qr>
            <v-img max-height="300" max-width="300" :src="qrcode" contain></v-img>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>

    <!--弹窗-->
    <v-snackbar v-model="snackbar" location="center">
      {{ msg }}

      <template v-slot:actions>
        <v-btn color="pink" variant="text" @click="snackbar = false"> 好的 </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    qrcode: "",
    snackbar: false,
    msg: "",
    dialog: false,
    correctLevel: 1,
    setSize: 200,
    size: 200,
    dotScale: 0.5,
    logoSrc: "",
    gifBgSrc: "",
    bgSrc: "",
    qrLogoSrc: "",
    qrGifBgSrc: "",
    qrBgSrc: "",
    text: "",
    qrData: "",
    autoColor: false,
    bgSrcArr: [],
    logoSrcArr: [],
    rules: {
      required: (value) => !!value || "Required.",
      counter: (value) => value.length <= 300 || "最多300个字符",
    },
    sizeValidation: {
      max: (value) => value <= 2000 || "最大尺寸不超过2000px",
      mix: (value) => value >= 200 || "最小尺寸不小于200px",
    },
    eclSelect: { state: "15%", abbr: "1" },
    ecl: [
      { state: "7%", abbr: "0" },
      { state: "15%", abbr: "1" },
      { state: "25%", abbr: "2" },
      { state: "30%", abbr: "3" },
    ],
    dataSelect: { state: "0.5", abbr: "0.5" },
    dataCodewords: [
      { state: "0.1", abbr: "0.1" },
      { state: "0.2", abbr: "0.2" },
      { state: "0.3", abbr: "0.3" },
      { state: "0.4", abbr: "0.4" },
      { state: "0.5", abbr: "0.5" },
      { state: "0.6", abbr: "0.6" },
      { state: "0.7", abbr: "0.7" },
      { state: "0.8", abbr: "0.8" },
      { state: "0.9", abbr: "0.9" },
      { state: "1", abbr: "1" },
    ],
  }),
  computed: {
    cardWidth() {
      switch (this.$vuetify.display.name) {
        case "xs":
          return "100%";
        case "sm":
          return "100%";
        case "md":
          return "100%";
        case "lg":
          return "100%";
        case "xl":
          return "100%";
      }
    },
  },
  created() { },
  methods: {
    make() {
      if (!this.text) {
        this.msg = "请输入内容";
        this.snackbar = true;
        return;
      }
      this.loading = true;
      this.qrBgSrc = this.bgSrc;
      this.qrLogoSrc = this.logoSrc;
      this.qrGifBgSrc = this.gifBgSrc;
      this.correctLevel = parseInt(this.eclSelect.abbr);
      this.dotScale = parseFloat(this.dataSelect.abbr);
      this.size = parseInt(this.setSize);
      if (this.size > 2000) {
        this.msg = "最大尺寸不超过2000px";
        this.snackbar = true;
        return;
      }
      this.qrData = this.text;
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
    uploadBg() {
      this.bgSrc = "";
      this.gifBgSrc = "";
      let file = this.bgSrcArr[0] ? this.bgSrcArr[0] : "";
      let isGif = file.type == "image/gif" ? true : false;
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          const base64data = reader.result;
          console.log(base64data);
          if (isGif) {
            this.gifBgSrc = base64data;
          } else {
            this.bgSrc = base64data;
          }
        };
      }
    },
    uploadLogo() {
      this.logoSrc = "";
      let file = this.logoSrcArr[0] ? this.logoSrcArr[0] : "";
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          const base64data = reader.result;
          this.logoSrc = base64data;
        };
      }
    },
    getQrcode(data, id) {
      this.qrcode = data;
      this.loading = false;
    },
  },
};
</script>

<style scoped>
</style>
