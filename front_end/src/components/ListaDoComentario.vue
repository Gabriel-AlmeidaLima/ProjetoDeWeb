<template>
  <div>
    <div>Lista comentário</div>
    <div v-for="comentario in listaDoComentario" :key="comentario.id">
      {{ comentario }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listaDoComentario: [],
    };
  },
  mounted() {
    this.$store.dispatch("getListaDeComentario").the((Response) => {
      this.listaDoComentario = Response;
    });
  },
};
</script>

<style></style>
