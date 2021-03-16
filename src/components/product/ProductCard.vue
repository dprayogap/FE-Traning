<template>
  <div class="product-card">
    <div class="product-card__wrapper">
      <div class="product-card__image-frame">
        <img :src="imgUrl">
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
import helpers from '@/utils/helpers'

export default {
  name: 'ProductCard',

  filters: {
    toIdr: helpers.convertNumberToIdr
  },

  props: {
    productDetail: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      imgUrl: '',
      name: '',
      originalPrice: null,
      finalPrice: null
    }
  },

  computed: {
    nameLength () {
      return this.productDetail.name.length || null
    }
  },

  created () {
    const { imgUrl, name, originalPrice, finalPrice } = this.productDetail
    this.imgUrl = imgUrl
    this.name = name.substring(0, 40)
    this.originalPrice = originalPrice
    this.finalPrice = finalPrice
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
