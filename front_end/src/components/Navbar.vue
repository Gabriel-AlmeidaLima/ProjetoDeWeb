<template>
  <nav>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" fixed app>
      <v-list dense>
        <template v-for="(item, index) in menuItems">
          <v-list-tile :key="index" router :to="{name: item.name, params: { mode: item.param }}">
            <v-list-tile-action>
              <v-icon class="grey--text" x-medium>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="font-weight-light subheading">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-layout xs12 row fill-height align-content-center>
      <v-toolbar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        dark
        class="secundary"
        app
        fixed
      >
        <v-flex xs4 sm2>
          <v-toolbar-title>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          </v-toolbar-title>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs8 md4 lg5>
          <v-text-field
            prepend-icon="search"
            single-line
            class="caption font-weight-thin grey--text text-truncate"
            label="Search for movies"
            @input="textValue"
            @keydown.enter="search"
          ></v-text-field>
        </v-flex>
      </v-toolbar>
    </v-layout>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    drawer: null,
    title: "Vuems",
    text: ''
  }),
  computed: {
    ...mapState([ "menuItems"])
  },
  methods: {
    search (){
      this.$router.push({name:'moviesList', params: { mode: 'search'}, query: { text: this.text}})
    },
    textValue(value){
      this.text = value
    }
  }
};
</script>
