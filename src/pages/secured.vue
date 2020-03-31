<template>
  <div class="max-w-3xl mx-auto p-2">
    <h3 class="text-2xl text-center mt-10">
      Secured Page
    </h3>
    <pre class="mt-6 p-2 bg-gray-100 border rounded" v-text="user" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },
  created() {
    if (process.browser) {
      if (!this.user) {
        this.$router.push('/')
        this.$toast.show(`You'll need to login`)
      }
    }
  }
}
</script>
