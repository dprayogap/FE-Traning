<template>
  <form
    class="product-creation-form form"
    name="productCreationForm"
    @submit.prevent="requestSubmission"
  >
    <BliField
      class="form__field"
      type="dark"
      b-clearable
      message="E.g: https://placeimg.com/190/190/animals"
    >
      <BliInput
        v-model="form.imgUrl"
        class="form__input-image"
      />
      <label>Image Url</label>
    </BliField>

    <BliField
      class="form__field"
      type="dark"
      b-clearable
    >
      <BliInput
              v-model="form.name"
              class="form__input-name"
      />
      <label>Product Name</label>
    </BliField>

    <BliField
      class="form__field"
      type="dark"
      b-clearable
    >
      <BliInput
        v-model="form.originalPrice"
        type="number"
        class="form__input-original-price"
      />
      <label>Original Price</label>
    </BliField>

    <BliField
      class="form__field"
      type="dark"
      b-clearable
    >
      <BliInput
        v-model="form.finalPrice"
        type="number"
        class="form__input-final-price"
      />
      <label>Final Price</label>
    </BliField>

    <div class="form__actions">
      <router-link to="/home">Cancel</router-link>

      <BliButton
        class="form__btn-create"
        type="submit"
        color="secondary"
      >
        Create
      </BliButton>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProductCreationForm',
  data () {
    return {
      form: {
        imgUrl: '',
        name: '',
        originalPrice: null,
        finalPrice: null,
        available: true
      }
    }
  },

  watch: {
    form: {
      deep: true,
      handler (nv) {
        this.updateToStore(nv)
      }
    }
  },

  methods: {
    ...mapActions('product', ['updateProductCreation']),

    updateToStore (obj) {
      this.updateProductCreation(obj)
    },

    requestSubmission () {
      this.$emit('submit')
    }
  }
}
</script>

<style lang="scss" scoped>
.form {

  &__switch {
    margin-bottom: 20px;
  }

  &__actions {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
  }
}
</style>
