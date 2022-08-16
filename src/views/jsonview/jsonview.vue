<template>
  <v-container>
    <v-row justify="end" v-if="jsonStr" class="mt-1 mb-3">
      <v-btn
          elevation="2"
          color="#ff8170"
          @click="toYaml"> 转成YAML格式
      </v-btn>
    </v-row>
    <v-row justify="center">
      <v-col cols="6">
        <v-textarea v-model="jsonStr" clearable rows="30" @input="update">
        </v-textarea>
      </v-col>
      <v-col cols="6" v-if="errorMessages != ''">
        <div class="pt-5 text-center">
          <strong class="red--text text--lighten-1">{{ errorMessages }}</strong>
        </div>
      </v-col>
      <v-col cols="6" v-else>
        <json-viewer :value="jsonView" expanded show-double-quotes :expand-depth="5" copyable></json-viewer>
      </v-col>
    </v-row>
    <!--弹窗-->
    <v-dialog
        transition="dialog-bottom-transition"
        v-model="dialog"
        persistent
    >
      <v-card max-width="1200">
        <v-card-title class="text-h5">
          YAML
        </v-card-title>
        <v-card-text>
          <pre class="text-body-1">{{ code }}</pre>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-spacer></v-spacer>
          <v-btn
              text
              color="secondary"
              @click="copy(code)"
          ><span v-if='!copied'>复制</span>
            <span v-else>复制成功</span>
          </v-btn>
          <v-btn
              text
              @click="close"
          >关闭
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import {useClipboard} from "@vueuse/core";

const {copy, copied, text, isSupported} = useClipboard({
  copiedDuring: 3000,
});
</script>
<script>
export default {
  data: () => ({
    code: '123',
    dialog: false,
    jsonStr: "",
    jsonView: [],
    errorMessages: '',
  }),

  created() {
  },
  methods: {
    update: function () {
      this.errorMessages = '';
      try {
        this.jsonView = JSON.parse(this.jsonStr)
      } catch (e) {
        this.errorMessages = e.message
      }
    },
    toYaml() {
      let param = {
        code: this.jsonView,
      };
      this.$http
          .post("/api/json/toyaml", param)
          .then((res) => {
            this.code = res.data.data
            this.dialog = true
          })
          .catch((res) => {
            console.log("error", res);
          });
    },
    close() {
      this.dialog = false
    }
  }
}
</script>
