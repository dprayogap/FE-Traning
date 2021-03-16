<template>
  <div class="about">
    <h1>This is an profile page</h1>
    {{ profile }}
  </div>
</template>

<script>
import profileApi from '@/api/profile'

export default {
  data () {
    return {
      profile: {}
    }
  },

  created () {
    this.getProfile()
  },

  methods: {
    async getProfile () {
      try {
        const response = await profileApi.fetchProfile()
        this.profile = response.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
