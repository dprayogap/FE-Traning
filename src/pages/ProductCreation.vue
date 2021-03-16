<template>
  <div class="product-creation">
    <div class="product-creation__container">
      <div class="product-creation__left-section">
        <div class="product-creation__left-section-frame">
          <ProductCreationForm @submit="submitCreation"/>
        </div>
      </div>
      <div class="product-creation__right-section">
        <div class="product-creation__right-section-frame">
          <BliCard>
            <BliCardContent>
              <ProductCardPreview />
            </BliCardContent>
          </BliCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
const ProductCardPreview = () => import(/* webpackChunkName: "c-product-card-review" */ '@/components/product/ProductCardPreview')
const ProductCreationForm = () => import(/* webpackChunkName: "c-product-creation-form" */ '@/components/product/ProductCreationForm')

export default {
  name: 'ProductCreation',

  components: {
    ProductCardPreview,
    ProductCreationForm
  },

  computed: {
    ...mapState('product', ['productCreation'])
  },

  methods: {
    ...mapActions('product', ['createProduct']),

    async submitCreation () {
      const payload = this.productCreation

      try {
        await this.createProduct(payload)
        this.$router.push({ name: 'Product' })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.product-creation {

  &__container {
    display: flex;
    justify-content: space-evenly;
  }

  &__left-section {
    width: 50%;
  }

  &__left-section-frame {
    width: 500px;
  }

  &__right-section-frame {
    width: fit-content;
  }
}
</style>
