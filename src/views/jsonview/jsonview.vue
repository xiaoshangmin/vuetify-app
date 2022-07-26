<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <v-textarea v-model="jsonStr" clearable rows="24" @change="update" @input="update">
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
  </v-container>
</template>

<script>
export default {
  data: () => ({
    jsonStr: "",
    jsonView: null,
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
    }
  }
}
</script>

<style scoped>
</style>