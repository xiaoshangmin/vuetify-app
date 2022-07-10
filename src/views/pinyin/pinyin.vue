<template>
  <v-container>
    <v-text-field
        v-model="chinese" @input="onChange"
    ></v-text-field>
    <v-switch v-model="toneType" label="不带声调" color="red" value="true">
    </v-switch>
    <h1>{{ messages }}</h1>
  </v-container>
</template>

<script>
import {pinyin} from 'pinyin-pro';

export default {
  data: () => ({
    chinese: '',
    messages: '',
    toneType: false,
  }),
  created() {

  },
  methods: {
    onChange() {
      if (this.chinese) {
        let options = {v: true, toneType: this.toneType, removeNonZh: true}
        if (this.toneType) {
          options.toneType = 'none'
        }
        console.log(options)
        this.messages = pinyin(this.chinese, options)
      }
    }
  }
}
</script>

<style scoped>

</style>