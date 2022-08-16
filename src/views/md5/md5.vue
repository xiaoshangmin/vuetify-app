<template>
  <v-container>
    <v-row justify="center">
      <v-col md="12" sm="12" lg="10">
        <v-row justify="center">
          <v-col md="12" sm="12" lg="12">
            <v-textarea variant="outlined" v-model="content" clearable label="请输入需要加密的内容" auto-grow
                        hide-details rows="2" @input="update">
            </v-textarea>
          </v-col>
        </v-row>
        <v-col md="12" sm="12" lg="10">
          <v-radio-group
              v-model="encodeRadio"
              inline
          >
            <v-radio
                label="MD5"
                color="red"
                value="md5"
            ></v-radio>
            <v-radio
                label="base64"
                color="red"
                value="base64"
            ></v-radio>
          </v-radio-group>
        </v-col>
        <v-card max-width="1400" v-if="message" class="mt-4">
          <v-card-subtitle>结果</v-card-subtitle>
          <v-card-text>
            {{ message }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import md5 from "js-md5";
import {Base64} from 'js-base64'

export default {
  data: () => ({
    encodeRadio: 'md5',
    content: '',
    message: ''
  }),
  methods: {
    update() {
      if (this.content) {
        let res = ''
        if (this.encodeRadio == 'md5') {
          res = md5(this.content)
        } else if (this.encodeRadio == 'base64') {
          res = Base64.encode(this.content)
        }
        this.message = `${this.encodeRadio}(${this.content}) = ${res}`
      }
    }
  },
};
</script>
