<template>
  <b-link to="/catalog/subcategory" class="card card-catalog-subcategory">
    <div class="card-img">
      <img :src="`/images/catalog/${item.img}.jpg`" class="card-img-content" />
    </div>
    <div class="card-body">
      <p class="card-title">
        <span>{{ item.title }}</span>
      </p>
    </div>
  </b-link>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
