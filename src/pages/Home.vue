<template>
  <div class="home">
    <div class="home__container">
      <div class="home__left-section">
        <div class="home__text font-blue">
          Blibli Intern Training
        </div>
      </div>
      <div class="home__right-section">
        <img src="https://www.static-src.com/frontend/member/static/img/desktop-login.c26891b.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
  .home {

    &__container {
      box-shadow: 0 0 16px -4px rgb(0 0 0 / 12%);
      border-radius: 16px;
      overflow: hidden;
      display: flex;
    }

    &__left-section {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__right-section {
      width: 50%;
      display: flex;
      justify-content: flex-end;
    }

    &__text {
      font-size: 31px;
      font-weight: bold;
    }
  }
</style>
