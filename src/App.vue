<template>
  <v-app>
    <v-main>
      <div class="header">
        <div class="d-flex justify-center mb-6">
          <v-btn class="ma-2 pa-2" color="white" variant="text">
            PDf转图片
          </v-btn>
        </div>
      </div>
      <router-view />
      <v-footer class="bg-grey-lighten-1 footer" app>
        <v-row justify="center" no-gutters>
          <v-btn v-for="link in links" :key="link" color="white" variant="text" class="mx-2" rounded="xl">
            {{ link }}
          </v-btn>
          <v-col class="text-center text-white mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong>握游科技</strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    links: [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ],
  }),
  // created() {
  //   const ws = new WebSocket('ws://localhost:9503/');
  //   // 监听ws事件
  //   ws.addEventListener("open", handleOpen);
  //   ws.addEventListener("error", handleError);
  //   ws.addEventListener("close", handleClose);
  //   ws.addEventListener("message", handleMessage);
  //   function handleOpen(e) {
  //     console.log("ws is opening....");
  //   }

  //   function handleError(e) {
  //     console.log("ws is error....");
  //   }

  //   function handleClose(e) {
  //     console.log("ws is closing....");
  //   }

  //   function handleMessage(e) {
  //     console.log("ws:",e.data)
  //   }
  //   function sendMsg(msg) {
  //     ws.send(JSON.stringify(msg))
  //   } 
  // }
}
</script>

