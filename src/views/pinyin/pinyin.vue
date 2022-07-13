<template>
  <v-container>
    <v-row justify="center">
      <v-card :width="width">
        <v-card-text>
          <v-text-field label="请输入中文" clearable
                        v-model="chinese" @input="onChange"
          ></v-text-field>
          <v-switch v-model="toneType" label="不带声调" color="red" value="true">
          </v-switch>
          <p class="font-weight-medium text-h5">
            {{ messages }}
          </p>
        </v-card-text>
      </v-card>
    </v-row>
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