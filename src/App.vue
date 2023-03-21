<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: { AppHeader },
};
</script>

<template>
  <AppHeader />
  <RouterView />
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>
