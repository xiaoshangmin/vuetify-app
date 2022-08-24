<template>
  <v-container>
    <v-row justify="center">
      <v-col md="12" sm="12" lg="10">
        <v-row justify="center">
          <v-col md="12" sm="12" lg="12">
            <v-textarea variant="outlined" v-model="content" clearable label="请输入需要加密的内容" auto-grow hide-details
              rows="2" @input="update">
            </v-textarea>
          </v-col>
        </v-row>
        <v-card max-width="1500" class="mt-4">
          <v-card-subtitle>结果</v-card-subtitle>
          <v-card-text>
            <div class="text-subtitle-1">MD5: <span class="text-h6">{{ md5Text }} </span></div>
            <div class="text-subtitle-1">BASE64编码: <span class="text-h6">{{ base64EncodeText }} </span></div>
            <div class="text-subtitle-1">BASE64解码: <span class="text-h6">{{ base64DecodeText }} </span></div>
            <div class="text-subtitle-1">url编码: <span class="text-h6">{{ urlEncodeText }} </span></div>
            <div class="text-subtitle-1">url解码:<span class="text-h6">{{ urlDecodeText }} </span></div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import md5 from "js-md5";
import { Base64 } from 'js-base64'

export default {
  data: () => ({
    content: '',
    md5Text: '',
    base64EncodeText: '',
    base64DecodeText:'',
    urlDecodeText: '',
    urlEncodeText: '',
  }),
  methods: {
    update() {
      if (this.content) {
        this.md5Text = md5(this.content)
        this.base64EncodeText = Base64.encode(this.content)
        this.base64DecodeText = Base64.decode(this.content)
        this.urlEncodeText = encodeURIComponent(this.content).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
          replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
        this.urlDecodeText = decodeURIComponent(this.content)
      }
    }
  },
};
</script>
