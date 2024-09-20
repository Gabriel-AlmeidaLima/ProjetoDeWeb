<template>
  <v-container fluid>
    <v-layout xs12 lg12 row wrap justify-center>
      <v-dialog
        overlay
        v-model="dialog"
        max-width="50em"
        :fullscreen="$vuetify.breakpoint.xsOnly"
        dark
        persistent
        @keydown.esc="closeDialog"
      >
        <v-card>
          <v-layout xs12 column wrap>
            <v-img
              :src="backdrop"
              gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
              :lazy-src="`https://picsum.photos/10/6?image=${5 + 10}`"
              class="grey lighten-1"
              contain
              width="100%"
            >
              <v-layout align-center justify-center column fill-height pa-2>
                <v-flex xs12 align-self-end>
                  <v-btn icon @click="closeDialog">
                    <v-icon>close</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs12 center align-self-center>
                  <h1 class="font-weight-regular display-1 white--text">
                    {{ movie.title }}
                  </h1>
                  <h3 class="font-weight-thin body-2 white--text">
                    {{ movie.tagline }}
                  </h3>
                </v-flex>
              </v-layout>
            </v-img>
          </v-layout>
          <v-layout xs12 column wrap pa-3 align-center justify-center>
            <v-rating
              readonly
              :value="movie.vote_average"
              :length="10"
              background-color="white"
              color="yellow accent-4"
              dense
              half-increments
              size="18"
            >
            </v-rating>
            <v-flex xs12>
              <div
                class="grey--text text--lighten-2 body-2 mr-2 font-weight-thin"
              >
                ({{ movie.vote_average }}) - {{ movie.vote_count }} Votes
              </div>
            </v-flex>
          </v-layout>
          <v-layout xs12 column wrap pa-3>
            <v-flex xs12 mt-2 mb-2>
              <div class="font-weight-thin white--text">
                {{ movie.overview }}
              </div>
            </v-flex>
            <v-flex xs12 mt-2 mb-2>
              <h3 class="font-weight-regular text-uppercase teal--text">
                Genres
              </h3>
              <div
                class="font-weight-thin"
                v-for="genre in movie.genres"
                :key="genre.id"
              >
                {{ genre.name }}
              </div>
            </v-flex>
            <v-flex xs12 mt-2 mb-2>
              <h3 class="font-weight-regular text-uppercase teal--text">
                Release Date
              </h3>
              <div class="font-weight-thin">
                {{ movie.release_date | formatDate }}
              </div>
            </v-flex>
            <!-- Adicionar a seção de comentários -->
            <v-flex xs12 mt-2 mb-2>
              <h3 class="font-weight-regular text-uppercase teal--text">
                Comments
              </h3>
              <lista-do-comentario />
            </v-flex>
          </v-layout>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import listaDoComentario from "./ListaDoComentario.vue"; // Importando o componente de comentários

export default {
  name: "modalDetails",
  components: {
    listaDoComentario, // Registrando o componente de comentários
  },
  props: {
    dialog: Boolean,
  },
  computed: {
    ...mapState(["movie"]),
    ...mapGetters(["backdrop"]),
  },
  methods: {
    closeDialog() {
      this.$emit("close-dialog");
    },
  },
};
</script>
