<template>
  <div class="card-catalog-category-wrapper">
    <b-link to="/catalog/category" class="card card-catalog-category">
      <div class="card-img">
        <img
          :src="`/images/catalog/${item.img}.jpg`"
          class="card-img-content"
        />
      </div>
      <div class="card-body">
        <p class="card-title">
          <span>#{{ item.title }}</span>
        </p>
      </div>
    </b-link>
    <ul class="list-unstyled card-catalog-category-children">
      <li v-for="i in childrenCount" :key="`child-${i}`" class="children-item">
        <b-link to="/catalog/subcategory" class="children-link">
          {{ item.items[i - 1].title }}
        </b-link>
      </li>
      <li v-if="item.items.length > 5" class="children-item children-item-all">
        <b-link to="/catalog/category" class="children-link">
          ещё категории
        </b-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    childrenCount() {
      if (this.item.items.length > 5) return 5
      else return this.item.items.length
    }
  }
}
</script>
