<template>
  <b-container class="my-4">
    <b-button-group class="header-tags">
      <b-button
        v-for="(tag, index) in tags"
        :key="`tag-${index}`"
        variant="outline-gray-700"
      >
        #{{ tag }}
      </b-button>
    </b-button-group>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        'продукты',
        'хозтовары',
        'гигиена',
        'косметика',
        'дача',
        'дети',
        'спорт',
        'зоотовары',
        'праздник'
      ]
    }
  }
}
</script>
