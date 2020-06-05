<template>
  <div class="header-tags-wrapper">
    <b-container class="my-4">
      <b-button-group class="header-tags btn-group-pills">
        <div v-for="(tag, index) in tags" :key="`tag-${index}`" class="item">
          <b-button href="#" variant="outline-gray-700" class="rounded-pill">
            #{{ tag }}
          </b-button>
        </div>
      </b-button-group>
    </b-container>
  </div>
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
