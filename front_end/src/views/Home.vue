<template>
  <v-container fluid pa-0>
    <v-layout xs12  fill-height>
      <v-flex xs12 align-self-center>
        <v-img
          :src="images.home"
          :lazy-src="`https://picsum.photos/10/6?image=${5 + 10}`"
          gradient="to right top, rgba(4, 4, 5, 0.7), rgba(10, 104, 31, 0.76)"
          max-height="430px"
          width="100%"
        >
          <v-layout xs12 align-center justify-center column wrap pb-3  fill-height>
            <v-flex xs3 align-self-center >
              <h1 class="display-3 font-weight-bold text-xs-center white--text">VUEMS</h1>
            </v-flex>
            <v-flex xs3 align-self-center>
              <div class="headline font-weight-thin text-xs-center grey--text">Made With</div>
              <v-layout xs12 align-center justify-center row  fill-height>
                <v-flex xs6>
                  <v-img :src="images.vue" contain></v-img>
                </v-flex>
                <v-flex xs6>
                  <div class="headline font-weight-light text-xs-center grey--text">+</div>
                </v-flex>
                <v-flex xs6>
                  <v-img :src="images.vuetify" contain></v-img>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "home",
  computed: {
    ...mapState(["modes"])
  },
  data() {
    return {
      images: {
        home: require("../assets/home.jpg"),
        vue: require("../assets/logo.png"),
        vuetify: require("../assets/vuetify.png")
      }
    };
  }
};
</script>