<template>
  <div class="container">
    <div>
      <logo />
      <div class="mt-10">
        <h1 class="text-center mb-2">
          Nuxt ＆ Netlify identity
        </h1>
        <client-only>
          <div class="flex justify-center">
            <template v-if="user">
              <a href="#" class="button--green" @click.prevent="logout">
                Logout
              </a>
            </template>
            <template v-else>
              <a href="#" class="button--green" @click.prevent="openLogin">
                Login
              </a>
              <a href="#" class="button--grey" @click.prevent="openSignup">
                Sign up
              </a>
            </template>
          </div>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },
  methods: {
    ...mapActions({
      openLogin: 'auth/openLogin',
      openSignup: 'auth/openSignup',
      logout: 'auth/logout'
    })
  }
}
</script>
