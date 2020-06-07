<template>
  <main class="container">
    <b-breadcrumb :items="breadcrumbs"></b-breadcrumb>

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
