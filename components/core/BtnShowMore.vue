<template>
  <b-button
    :class="{ busy: isBusy }"
    variant="link"
    class="btn-show-more"
    @click="showMore"
  >
    Показать ещё
    <svg-icon name="refresh" width="20" height="20" class="ml-2" />
  </b-button>
</template>

<script>
export default {
  data() {
    return {
      isBusy: false
    }
  },
  methods: {
    showMore() {
      this.isBusy = true
      const unsetBusy = setTimeout(() => {
        this.isBusy = false
        clearTimeout(unsetBusy)
      }, 2000)
    }
  }
}
</script>
