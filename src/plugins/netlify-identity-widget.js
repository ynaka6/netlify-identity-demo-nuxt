import netlifyIdentity from 'netlify-identity-widget'

export default async (context, inject) => {
  inject('netlifyIdentity', netlifyIdentity)
  await context.store.dispatch('auth/init', context)
}
