<template>
  <v-container>
    <v-row justify="center">
      <v-card :width="width">
        <v-card-text>
          <v-text-field label="请输入中文" variant="outlined" clearable v-model="chinese" @input="onChange"></v-text-field>
          <v-switch v-model="toneType" label="不带声调" color="red" value="true" v-on:change="switchMe">
          </v-switch>
          <div class="text-caption pa-2 bg-grey-lighten-3">
            <div class="text-grey"> 拼音</div>
            <div class="font-weight-medium text-h5">{{ messages }}</div>
          </div>
          <div class="text-caption pa-2 bg-grey-lighten-4">
            <div class="text-grey"> 繁体</div>
            <div class="font-weight-medium text-h5">{{ trad }}</div>
          </div>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { pinyin } from 'pinyin-pro';
import cnchar from 'cnchar-all';

export default {
  data: () => ({
    chinese: '',
    messages: '',
    trad: '',
    toneType: false,
  }),
  computed: {
    width() {
      switch (this.$vuetify.display.name) {
        case 'xs':
          return '100%'
        case 'sm':
          return '100%'
        case 'md':
          return '80%'
        case 'lg':
          return '80%'
        case 'xl':
          return '50%'
      }
    },
  },
  created() {
  },
  methods: {
    switchMe() {
      this.onChange()
    },
    onChange() {
      if (this.chinese) {
        let options = { v: true, toneType: this.toneType, removeNonZh: true }
        if (this.toneType) {
          options.toneType = 'none'
        }
        this.messages = pinyin(this.chinese, options)
        if (cnchar.isCnChar(this.chinese)) {
          this.trad = cnchar.convert.simpleToTrad(this.chinese)
        }
      }else{
        this.messages = '';
        this.trad = ''
      }
    }
  }
}
</script>

<style scoped>
</style>