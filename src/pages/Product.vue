<template>
  <div class="product">
    <div class="product__container">
      <div
        v-for="product in products"
        :key="product.id"
        class="product__card"
      >
        <BliCard>
          <BliCardContent>
            <ProductCard :product-detail="product" />
          </BliCardContent>
        </BliCard>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
const ProductCard = () => import(/* webpackChunkName: "c-product-card" */ '@/components/product/ProductCard')

export default {
  name: 'Product',

  components: {
    ProductCard
  },

  computed: {
    ...mapState('product', ['products']),
    ...mapGetters('product', ['availableProducts']),

    productName () {
      return this.$route.query.search || ''
    }
  },

  created () {
    this.getProducts()
  },

  methods: {
    ...mapActions('product', ['fetchProducts']),

    async getProducts () {
      const config = {
        params: {
          productName: this.productName
        }
      }

      try {
        await this.fetchProducts(config)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .product {

    &__container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &__card {
      margin: 10px 20px 40px;
    }
  }
</style>
