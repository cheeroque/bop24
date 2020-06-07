<template>
  <main class="container">
    <b-breadcrumb :items="breadcrumbs" class="d-none d-md-flex"></b-breadcrumb>

    <h2 class="font-size-2 font-weight-bold mb-3 d-md-none">
      Каталог
    </h2>

    <b-row>
      <b-col
        v-for="(category, index) in catalog"
        :key="`category-${index}`"
        cols="6"
        md="4"
      >
        <card-catalog-category :item="category"></card-catalog-category>
      </b-col>
    </b-row>
  </main>
</template>

<script>
import CardCatalogCategory from '@/components/cards/CardCatalogCategory'

export default {
  components: {
    CardCatalogCategory
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Главная', href: '/' },
        { text: 'Каталог', to: '/catalog', active: true }
      ]
    }
  },
  computed: {
    catalog() {
      return this.$store.state.catalog
    }
  }
}
</script>
