<template>
  <div id="app" class="app">
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
