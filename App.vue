<template>
  <v-app light>
    <Navbar/>
    <v-content class="grey lighten-3">
        <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>