<template>
  <div class="container">
    <template v-if="isNotFount">
      <h1>404 not fount</h1>
      <nuxt-link to="/"> Back to home </nuxt-link>
    </template>
    <template v-else>
      <h1>Error</h1>
      <nuxt-link to="/"> Back to home </nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  props: ['error'],
  components: {
    isNotFound() {
      return this.error.statusCode == 404
    }
  }
}
</script>
