<template>
  <main class="container">
    <b-breadcrumb :items="breadcrumbs" class="d-none d-md-flex"></b-breadcrumb>

    <b-row>
      <b-col md="6" lg="4" xl="3" class="d-none d-md-block">
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
                <b-link
                  to="/catalog/subcategory"
                  class="font-weight-medium text-reset"
                >
                  {{ item.title }}
                </b-link>
              </li>
            </ul>
          </collapse-catalog-sidebar>
          <div class="collapse-catalog-sidebar">
            <b-button
              to="/catalog/subcategory"
              variant="link"
              class="collapse-toggle"
            >
              #раздел без подразделов
            </b-button>
          </div>
        </div>
      </b-col>
      <b-col md="6" lg="8" xl="9" class="overflow-hidden">
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
            lg="6"
            xl="4"
          >
            <card-catalog-subcategory
              :item="subcategory"
            ></card-catalog-subcategory>
          </b-col>
        </b-row>

        <b-row align-v="center" class="mb-4">
          <b-col lg="4" offset-lg="4">
            <div class="text-center">
              <btn-show-more></btn-show-more>
            </div>
          </b-col>
          <b-col lg="4" class="d-none d-lg-block">
            <b-pagination-nav
              v-model="currentPage"
              :number-of-pages="10"
              align="end"
              hide-goto-end-buttons
              prev-class="page-item-prev"
              next-class="page-item-next"
            >
              <template v-slot:prev-text>
                <svg-icon name="page-prev" width="14" height="14" />
              </template>
              <template v-slot:next-text>
                <svg-icon name="page-next" width="14" height="14" />
              </template>
            </b-pagination-nav>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </main>
</template>

<script>
import CardCatalogSubcategory from '@/components/cards/CardCatalogSubcategory'
import CollapseCatalogSidebar from '@/components/catalog/CollapseCatalogSidebar'
import BtnShowMore from '@/components/core/BtnShowMore'

export default {
  components: {
    CardCatalogSubcategory,
    CollapseCatalogSidebar,
    BtnShowMore
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
