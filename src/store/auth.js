export const ACTION_KEY_LOGIN = 'login'
export const ACTION_KEY_SIGNUP = 'signup'

export const state = () => ({
  user: null
})

export const getters = {
  user: (state) => state.user
}

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  }
}

export const actions = {
  init({ commit }) {
    this.$netlifyIdentity.on('init', (user) => {
      if (user) {
        commit('SET_USER', {
          username: user.user_metadata.full_name,
          email: user.email,
          access_token: user.token.access_token,
          expires_at: user.token.expires_at,
          refresh_token: user.token.refresh_token,
          token_type: user.token.token_type
        })
      }
    })
    this.$netlifyIdentity.init({
      APIUrl: process.env.NETLIFY_IDENTITY_ENDPOINT_URL
    })
  },
  openSignup({ dispatch }) {
    dispatch('open', ACTION_KEY_SIGNUP)
  },
  openLogin({ dispatch }) {
    dispatch('open', ACTION_KEY_LOGIN)
  },
  logout({ commit }) {
    this.$netlifyIdentity.logout()
    commit('SET_USER', null)
  },
  open({ commit }, action) {
    this.$netlifyIdentity.open(action)
    this.$netlifyIdentity.on(action, (user) => {
      commit('SET_USER', {
        username: user.user_metadata.full_name,
        email: user.email,
        access_token: user.token.access_token,
        expires_at: user.token.expires_at,
        refresh_token: user.token.refresh_token,
        token_type: user.token.token_type
      })
      this.$netlifyIdentity.close()
    })
  }
}
