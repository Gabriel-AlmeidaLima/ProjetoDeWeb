<template lang="html">
  <v-container fluid grid-list-lg>
    <h2 class="font-weight-light text-uppercase">{{mode.title}}</h2>
    <v-layout mt-3 row wrap>
      <v-flex xs6 sm3 lg3 v-for="movie in movies" :key="movie.id" d-flex child-flex>
        <v-hover>
          <v-card flat class="white--text" slot-scope="{ hover }">
            <v-layout column>
              <v-flex xs12
                @click="openDialog(movie.id)">
                <v-img
                  :src="poster(movie.poster_path)"
                  :lazy-src="`https://picsum.photos/10/6?image=${movies.length * 5 + 10}`"
                  class="grey lighten-1"
                  contain
                >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey darken-4 v-card--reveal display-3 white--text"
                    style="height: 100%; width: 100%"
                  >
                  {{movie.vote_average}}
                  </div>
                </v-expand-transition>
                </v-img>
              </v-flex>
              <v-flex xs12>
                <v-card-text>
                  <div class="font-weight-light grey--text caption">{{movie.title}}</div>
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
    <v-layout xs12> 
      <v-flex text-xs-center v-if="mode.type !== 'search'">
        <v-btn
          depressed 
          :loading="loading"
          :disabled="loading"
          @click="loader = 'loading'"
          class="grey--text"
        >
        Carregar
          <template v-slot:loader>
            <span class="custom-loader">
              <v-icon light>cached</v-icon>
            </span>
          </template>
        </v-btn>
      </v-flex>
    </v-layout>
    <movieDetails :dialog="modal" @close-dialog="closeDialog"></movieDetails>
  </v-container>
</template>

<script>
import axios from "axios"
import { mapState, mapActions, mapGetters} from "vuex"

export default {
  name: "popularMovies",
  props: {
    mode: String,
  },
  data: () => ({
    loading: false,
    loader: null,
    page: 1,
    modal: false,
    movies: []
  }),
  mounted() {
    this.callAction(this.mode)
  },
  computed: {
    ...mapState(["movie", "modes"]),
    ...mapGetters(["poster", "popularMovies", "topRatedMovies", "upcomingMovies", "searchResults"])
  },
  methods: {
    ...mapActions(["getPopularMovies", "getMovie", "getTopRatedMovies", "getUpcomingMovies", "search"]),
    openDialog(id) {
      this.modal = true
      this.getMovie(id)
    },
    closeDialog() {
      this.modal = false
    },
    callAction(mode) {
    switch (mode) {
      case this.modes[0].type:
        this.mode = this.modes[0]
        this.getPopularMovies(this.page)   
        this.movies = this.popularMovies
        break;
      case this.modes[1].type:
        this.mode = this.modes[1]
        this.getTopRatedMovies(this.page)
        this.movies = this.topRatedMovies
        break;
      case this.modes[2].type:
        this.mode = this.modes[2]
        this.getUpcomingMovies(this.page)
        this.movies = this.upcomingMovies
        break;
      case this.modes[3].type:
        this.mode = this.modes[3]
        let text = this.$route.query.text
        this.search(text)
        this.movies = this.searchResults
        break;
      default:
        break;
    }
  }
  },
  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]
      setTimeout(() => (this[l] = false), 3000)
      this.page++
      this.callAction(this.mode.type)
      this.loader = null
    },
    '$route' (to, from) {
      if(from.query.text && to.query.text){ 
        this.$router.go()
      }   
      this.callAction(this.mode)
    },
  }
}
</script>
<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>