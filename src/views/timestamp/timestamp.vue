<template>
  <v-container fluid>
    <v-row justify="center" align="center" class="mt-3">
      <v-col md="5" sm="12">
        <v-text-field :placeholder="nowTimestamp" hide-details v-model="timestamp" variant="outlined" @input="toDateTimeMethod">
          <template v-slot:prepend>
            <span>时间戳(秒)：</span>
          </template>
          <template v-slot:append>
            <span>{{ toDateTime }}</span>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col md="5" sm="12">
        <v-text-field :placeholder="nowDatetime" hide-details v-model="datetime" variant="outlined" @input="toTimeStampMethod">
          <template v-slot:prepend>
            <span>北京时间：</span>
          </template>
          <template v-slot:append>
            <span>{{ toTimeStamp }}</span>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col md="5" sm="12">
        <v-text-field v-model="nowD" readonly variant="outlined">
          <template v-slot:prepend>
            <span>当前时间：</span>
          </template>
          <template v-slot:append>
            <span>{{ nowT }}</span>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    nowTimestamp: parseInt((new Date()).getTime() / 1000).toString(),
    nowDatetime: (new Date()).toLocaleString(),
    toDateTime: '',
    toTimeStamp: '',
    timestamp: '',
    datetime: '',
    nowT: '',
    nowD: '',
  }),
  computed: {},
  created() {
    setInterval(() => {
      this.nowT = parseInt(Date.now() / 1000)
      this.nowD = (new Date()).toLocaleString()
    }, 1000)
  },
  methods: {
    toDateTimeMethod() {
      let date = new Date(this.timestamp * 1000)
      this.toDateTime = date.toLocaleString()
    },
    toTimeStampMethod() {
      let date = (new Date(this.datetime)).getTime()
      date = parseInt((date / 1000))
      this.toTimeStamp = date
    }
  }
}
</script>

<style scoped>
</style>