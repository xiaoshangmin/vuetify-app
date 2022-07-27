<template>
  <v-container fluid>


    <v-row justify="center" align="center">
      <v-col md="5" sm="12">
        <v-card elevation="2" outlined>
          <v-card-title>
            当前时间：{{ nowD }} &nbsp; &nbsp; &nbsp; {{ nowT }}
          </v-card-title>
          <v-card-text class="text-h6" style="line-height: 30px">

            <p> 今日天干地支：{{ calendarInfo }} </p>
            <p> 今日农历：{{ calendarInfo2 }} </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>


    <v-row justify="center" align="center" class="mt-3">
      <v-col md="5" sm="12">
        <v-card elevation="2" outlined>
          <v-card-text>
            <v-text-field :placeholder="nowTimestamp" hide-details v-model="timestamp" variant="outlined"
                          @input="toDateTimeMethod">
              <template v-slot:prepend>
                <span>时间戳(秒)：</span>
              </template>
              <template v-slot:append>
                <span>{{ toDateTime }}</span>
              </template>
            </v-text-field>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col md="5" sm="12">
        <v-card elevation="2" outlined>
          <v-card-text>
            <v-text-field :placeholder="nowDatetime" hide-details v-model="datetime" variant="outlined"
                          @input="toTimeStampMethod">
              <template v-slot:prepend>
                <span>北京时间：</span>
              </template>
              <template v-slot:append>
                <span>{{ toTimeStamp }}</span>
              </template>
            </v-text-field>
            <span v-if="timestampCalendarInfo != ''">
              <p><strong>天干地支：{{ timestampCalendarInfo }}</strong></p>
              <p><strong>农历：{{ timestampCalendarInfo2 }}</strong></p>
            </span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import calendar from '../../utils/calendar'

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
    calendarInfo: '',
    calendarInfo2: '',
    timestampCalendarInfo: '',
    timestampCalendarInfo2: '',
  }),
  computed: {},
  created() {
    setInterval(() => {
      this.nowT = parseInt(Date.now() / 1000)
      this.nowD = (new Date()).toLocaleString()
    }, 1000)
    let res = calendar.solar2lunar()
    this.calendarInfo = `${res.gzYear}年 ${res.gzMonth}月 ${res.gzDay}日（${res.Animal}年）`
    this.calendarInfo2 = `${res.lYear}年${res.lMonth}月${res.lDay}日（${res.astro}）  ${res.ncWeek}`
    console.log('======', res)
  },
  methods: {
    toDateTimeMethod() {
      let date = new Date(this.timestamp * 1000)
      this.toDateTime = date.toLocaleString()
    },
    toTimeStampMethod() {
      let date = new Date(this.datetime)
      let time = date.getTime()
      this.toTimeStamp = parseInt((time / 1000))
      let res = calendar.solar2lunar(date.getFullYear(), date.getMonth() + 1, date.getDate())
      this.timestampCalendarInfo = `${res.gzYear}年 ${res.gzMonth}月 ${res.gzDay}日（${res.Animal}年）`
      this.timestampCalendarInfo2 = `${res.lYear}年${res.lMonth}月${res.lDay}日（${res.astro}）  ${res.ncWeek}`
    }
  }
}
</script>

<style scoped>
</style>