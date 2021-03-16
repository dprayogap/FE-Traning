<template>
  <div class="product-card">
    <div class="product-card__wrapper">
      <div class="product-card__image-frame">
        <img :src="imgUrl" alt="image">
      </div>
      <div class="product-card__info-frame">
        <div class="product-card__name">
          {{ name }}
          <span v-if="nameLength > 40">...</span>
        </div>

        <div class="product-card__price">
          <div class="product-card__original-price font-grey">
            {{ originalPrice | toIdr }}
          </div>
          <div class="product-card__final-price">
            {{ finalPrice | toIdr }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import helpers from '@/utils/helpers'

export default {
  name: 'ProductCard',

  filters: {
    toIdr: helpers.convertNumberToIdr
  },

  computed: {
    ...mapState('product', { productDetail: 'productCreation' }),

    nameLength () {
      return this.productDetail.name.length || null
    },

    imgUrl () {
      return this.productDetail.imgUrl || 0
    },

    name () {
      return this.productDetail.name.substring(0, 40) || ''
    },

    originalPrice () {
      return this.productDetail.originalPrice || 0
    },

    finalPrice () {
      return this.productDetail.finalPrice || 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .product-card {

    &__wrapper {
      width: 190px;
    }

    &__image-frame {
      width: 190px;
      height: 190px;
    }

    &__name {
      margin: 5px 0 15px;
    }

    &__original-price {
      font-size: 14px;
      text-decoration: line-through;
    }

    &__final-price {
      font-size: 18px;
      font-weight: bold;
      color: darkorange;
    }
  }
</style>
