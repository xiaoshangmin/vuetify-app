<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="3">
        <v-text-field :label="timestamp">
          <template v-slot:prepend>
            <span>时间戳：</span>
          </template>
          <template v-slot:append>
            <span>{{ d }}</span>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="3">
        <v-text-field :label="datetime">
          <template v-slot:prepend>
            <span>北京时间：</span>
          </template>
          <template v-slot:append>
            <span>{{ d }}</span>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    timestamp: (new Date()).getTime(),
    datetime: (new Date()).getTime(),
    d: '2022'
  }),

  created() {
  },
  methods: {}
}
</script>

<style scoped>
</style>