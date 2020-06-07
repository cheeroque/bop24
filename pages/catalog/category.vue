<template>
  <main class="container">
    <b-breadcrumb :items="breadcrumbs" class="d-none d-md-flex"></b-breadcrumb>

    <b-row>
      <b-col md="4" lg="3" class="d-none d-md-block">
        <div class="catalog-sidebar">
          <collapse-catalog-sidebar
            v-for="(cat, C) in catalog"
            :key="`sidebar-collapse-${C}`"
            :title="`#${cat.title}`"
            class="mb-2"
          >
            <ul class="list-unstyled mb-0">
              <li
                v-for="(item, I) in cat.items"
                :key="`item-${C}-${I}`"
                :class="I === cat.items.length - 1 ? null : 'mb-3'"
              >
                <b-link to="/subcategory" class="font-weight-medium text-reset">
                  {{ item.title }}
                </b-link>
              </li>
            </ul>
          </collapse-catalog-sidebar>
        </div>
      </b-col>
      <b-col md="8" lg="9">
        <b-row align-v="center">
          <b-col md="6" lg="8">
            <b-button
              to="/catalog"
              variant="outline-dark"
              class="backlink mb-3 d-md-none"
              block
            >
              <svg-icon name="arrow-backlink" width="19" height="7" />
              <span class="caption">
                Категории товаров
              </span>
            </b-button>
            <p class="font-weight-bold font-size-md-4 mb-3">
              #продукты
            </p>
            <div class="embed-responsive embed-responsive-16by3 mb-3 d-md-none">
              <img
                src="/images/catalog/groceries.jpg"
                class="embed-responsive-item"
              />
            </div>
          </b-col>
          <b-col md="6" lg="4" class="d-none d-md-block">
            <p class="text-gray-500 text-right mb-3">
              Найдено 678 позиций
            </p>
          </b-col>
        </b-row>
        <b-row class="mx-n3 mx-md-n15 mb-3 mb-md-0">
          <b-col
            v-for="(subcategory, index) in category"
            :key="`subcategory-${index}`"
            md="6"
            lg="4"
          >
            <card-catalog-subcategory
              :item="subcategory"
            ></card-catalog-subcategory>
          </b-col>
        </b-row>

        <b-row align-v="center" class="mb-4">
          <b-col md="6" lg="4" offset-lg="4">
            <div class="text-lg-center">
              <b-button variant="outline-dark" class="rounded-sm">
                Показать ещё
                <svg-icon name="refresh" width="20" height="20" class="ml-2" />
              </b-button>
            </div>
          </b-col>
          <b-col md="6" lg="4">
            <b-pagination
              v-model="currentPage"
              total-rows="100"
              per-page="12"
              align="end"
              hide-goto-end-buttons
              class="mb-0"
              prev-class="page-item-prev"
              next-class="page-item-next"
            >
              <template v-slot:prev-text>
                <svg-icon name="page-prev" width="14" height="14" />
              </template>
              <template v-slot:next-text>
                <svg-icon name="page-next" width="14" height="14" />
              </template>
            </b-pagination>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </main>
</template>

<script>
import CardCatalogSubcategory from '@/components/cards/CardCatalogSubcategory'
import CollapseCatalogSidebar from '@/components/catalog/CollapseCatalogSidebar'

export default {
  components: {
    CardCatalogSubcategory,
    CollapseCatalogSidebar
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Главная', href: '/' },
        { text: 'Каталог', href: '/catalog' },
        { text: 'Продукты', to: '/catalog/category', active: true }
      ],
      currentPage: 1
    }
  },
  computed: {
    catalog() {
      return this.$store.state.catalog
    },
    category() {
      return this.$store.state.category
    }
  }
}
</script>
