<template>
  <v-app>
    <v-main>
      <div class="header">
        <div class="d-flex justify-center mb-6">
          <v-btn class="ma-2 pa-2" color="white" variant="text">
            PDf转图片
          </v-btn>
          <v-btn class="ma-2 pa-2" color="white" variant="text">
            PDf转图片
          </v-btn>
        </div>
      </div>
      <router-view />
      <v-footer class="bg-grey-lighten-1" elevation="10">
        <v-row justify="center" no-gutters>
          <v-btn v-for="link in links" :key="link" color="white" variant="text" class="mx-2" rounded="xl">
            {{ link }}
          </v-btn>
          <v-col class="text-center text-white mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
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
}
</script>
