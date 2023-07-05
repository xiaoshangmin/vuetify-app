<template>
  <v-container>
    <v-row justify="center" class="mt-5">
      <v-card :width="cardWidth">
        <v-card-text>
          <v-row justify="center">
            <v-col md="12" sm="12" lg="12">
              <v-textarea
                v-model="url"
                :rules="[rules.required]"
                clearable
                label="请输入url"
                counter
                variant="outlined"
                auto-grow
                rows="2"
              >
              </v-textarea>
            </v-col>
          </v-row>
          <v-row justify="center" class="mt-8">
            <v-col class="d-flex" cols="12" sm="12">
              <v-select
                :items="paperSize"
                label="页面大小"
                variant="outlined"
                v-model="paperSelect"
                return-object
                item-title="state"
                item-value="abbr"
              ></v-select>
            </v-col>
          </v-row>
          <v-row justify="center" class="mt-2 mb-5">
            <v-btn   append-icon="mdi-reload" elevation="2" color="#ff8170" @click="make" :loading="loading">
              开始转换
            </v-btn>
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
    snackbar: false,
    msg: "",
    dialog: false,
    correctLevel: 1,
    url: "",
    paper: "",
    rules: {
      required: (value) => !!value || "Required.",
    },
    paperSelect: { state: "A4(8.27 x 11.7)", abbr: "8" },
    paperSize: [
      { state: "Letter(8.5 x 11)", abbr: "0" },
      { state: "Legal(8.5 x 14)", abbr: "1" },
      { state: "Tabloid(11 x 17)", abbr: "2" },
      { state: "Ledger(17 x 11)", abbr: "3" },
      { state: "A0(33.1 x 46.8)", abbr: "4" },
      { state: "A1(23.4 x 33.1)", abbr: "5" },
      { state: "A2(16.54 x 23.4)", abbr: "6" },
      { state: "A3(11.7 x 16.54)", abbr: "7" },
      { state: "A4(8.27 x 11.7)", abbr: "8" },
      { state: "A5(5.83 x 8.27)", abbr: "9" },
      { state: "A6(4.13 x 5.83)", abbr: "10" },
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
  created() {},
  methods: {
    make() {
      if (!this.url) {
        this.msg = "请输入url";
        this.snackbar = true;
        return;
      }
      this.loading = true;
      this.paper = parseInt(this.paperSelect.abbr);

      let param = new FormData(); //创建form对象
      param.append("paper", this.paper); //为创建的form对象增加上传的文件
      param.append("url", this.url);

      this.$http
        .post("/api/pdfTool/urlToPdf", param)
        .then((res) => { 
          this.loading = false;
          this.disabled = false;
        })
        .catch((res) => {
          console.log("error", res);
          this.msg = res.message;
          this.loading = false;
          this.snackbar = true;
          this.disabled = false;
        });
    },
  },
};
</script>

<style scoped></style>
