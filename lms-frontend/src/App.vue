<script>
import Toast from 'primevue/toast';
export default {
  name: 'App',
  components: {
    Toast
  }
}
</script>

<template>
  <router-view/>
  <Toast/>
</template>

<style lang="scss">
@import '../node_modules/bulma';
</style>
