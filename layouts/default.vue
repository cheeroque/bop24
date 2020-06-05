<template>
  <div>
    <app-header />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/header/AppHeader'
import AppFooter from '@/components/footer/AppFooter'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
