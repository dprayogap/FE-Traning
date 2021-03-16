<template>
  <div
    id="app"
    class="app blu"
  >
    <div class="app__container">
      <header class="app__header">
        <app-header />
      </header>

      <div class="app__pages">
        <router-view class="app__content" />
      </div>

      <footer class="app__footer" />
    </div>
  </div>
</template>

<script>
const AppHeader = () => import(/* webpackChunkName: "c-app-header" */ '@/components/AppHeader')

export default {
  name: 'App',

  components: {
    AppHeader
  }
}
</script>

<style lang="scss" scoped>
  .app {

    &__content {
      max-width: 1200px;
      background-color: #fff;
      padding: 25px 0;
      margin: 0 auto;
    }
  }
</style>
