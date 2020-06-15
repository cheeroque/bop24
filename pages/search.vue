<template>
  <main class="container">
    <b-breadcrumb :items="breadcrumbs" class="d-none d-md-flex"></b-breadcrumb>

    <b-row align-v="center">
      <b-col md="8">
        <p class="d-flex d-md-block align-items-center mb-4">
          <span class="font-size-4 font-weight-medium mr-auto mr-md-4">
            По&nbsp;запросу найдено
          </span>
          <span class="text-gray-500">
            678 позиций
          </span>
        </p>
      </b-col>
      <b-col md="4" class="d-none d-md-block">
        <b-dropdown
          :class="{ desc: sortDesc }"
          variant="link"
          class="dropdown-catalog-sort mb-4 float-right"
          no-caret
          right
          block
        >
          <template v-slot:button-content>
            <span class="caption">
              {{ activeSort.text }}
            </span>
            <svg-icon name="caret" width="12" height="12" />
          </template>
          <b-dropdown-item
            v-for="option in sortOptions"
            :key="option.value"
            @click="setSort(option)"
          >
            {{ option.text }}
          </b-dropdown-item>
        </b-dropdown>
      </b-col>
    </b-row>

    <div class="header-tags-wrapper border-0">
      <b-container class="mb-4 px-0">
        <b-button-group
          class="header-tags btn-group-pills justify-content-start mb-n2"
        >
          <div v-for="(tag, index) in tags" :key="`tag-${index}`" class="item">
            <b-button href="#" variant="outline-gray-700" class="rounded-pill">
              #{{ tag }}
            </b-button>
          </div>
        </b-button-group>
      </b-container>
    </div>

    <b-row>
      <b-col md="6" lg="4" xl="3">
        <b-row align-v="center" class="mb-3 d-md-none">
          <b-col cols="8">
            <b-dropdown
              :class="{ desc: sortDesc }"
              variant="link"
              class="dropdown-catalog-sort"
              no-caret
              block
            >
              <template v-slot:button-content>
                <span class="caption">
                  {{ activeSort.text }}
                </span>
                <svg-icon name="caret" width="12" height="12" />
              </template>
              <b-dropdown-item
                v-for="option in sortOptions"
                :key="option.value"
                @click="setSort(option)"
              >
                {{ option.text }}
              </b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col cols="4">
            <b-button
              variant="link"
              size="sm"
              class="catalog-sidebar-toggle"
              block
              @click="toggleSidebar"
            >
              Фильтры
            </b-button>
          </b-col>
        </b-row>
        <div
          class="catalog-sidebar catalog-sidebar-collapsible"
          :class="{ show: showSidebar }"
        >
          <div class="sidebar-header d-md-none">
            <p class="sidebar-title">Фильтры</p>
            <b-button-close @click="toggleSidebar">
              <svg-icon name="close" width="14" height="14" />
            </b-button-close>
          </div>

          <collapse-catalog-filter title="Цена">
            <filter-range
              :price="price"
              :price-range="priceRange"
              class="mt-3"
              @update="setPrice"
            />
          </collapse-catalog-filter>
          <collapse-catalog-filter title="Фильтр 1" class="mb-3">
            <b-form-checkbox-group
              v-model="selectedCheckboxes"
              size="lg"
              stacked
              switches
            >
              <b-form-checkbox value="1" class="reversed mb-2">
                <span class="font-size-2">
                  С высоким рейтингом
                </span>
              </b-form-checkbox>
              <b-form-checkbox value="2" class="reversed mb-2">
                <span class="font-size-2">
                  С высоким рейтингом
                </span>
              </b-form-checkbox>
            </b-form-checkbox-group>
          </collapse-catalog-filter>
          <collapse-catalog-filter title="Фильтр 2" class="mb-3">
            <b-form-checkbox-group v-model="selectedCheckboxes" stacked>
              <b-form-checkbox value="1" class="mb-2">
                С высоким рейтингом
              </b-form-checkbox>
              <b-form-checkbox value="2" class="mb-2">
                С высоким рейтингом
              </b-form-checkbox>
            </b-form-checkbox-group>
          </collapse-catalog-filter>
          <collapse-catalog-filter title="Фильтр 2" class="mb-3">
            <b-form-radio-group v-model="selectedRadio" stacked>
              <b-form-radio value="1" class="mb-2">
                С высоким рейтингом
              </b-form-radio>
              <b-form-radio value="2" class="mb-2">
                С высоким рейтингом
              </b-form-radio>
            </b-form-radio-group>
          </collapse-catalog-filter>
        </div>
      </b-col>
      <b-col md="6" lg="8" xl="9">
        <b-row class="catalog-items catalog-items-grid">
          <b-col cols="12" lg="6" xl="4" class="mb-3 mb-lg-30">
            <card-product :item="productDiscounted"></card-product>
          </b-col>
          <b-col
            v-for="i in 17"
            :key="`product-${i}`"
            cols="12"
            lg="6"
            xl="4"
            class="mb-3 mb-lg-30"
          >
            <card-product :item="product"></card-product>
          </b-col>
        </b-row>

        <b-row align-v="center" class="mb-4">
          <b-col lg="4" offset-lg="4">
            <div class="text-center">
              <btn-show-more></btn-show-more>
            </div>
          </b-col>
          <b-col lg="4" class="d-none d-lg-block">
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
import CardProduct from '@/components/cards/CardProduct'
import CollapseCatalogFilter from '@/components/catalog/CollapseCatalogFilter'
import FilterRange from '@/components/catalog/FilterRange'
import BtnShowMore from '@/components/core/BtnShowMore'

export default {
  components: {
    CardProduct,
    CollapseCatalogFilter,
    FilterRange,
    BtnShowMore
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Главная', href: '/' },
        { text: 'Результаты поиска', to: '/search', active: true }
      ],
      currentPage: 1,
      isBusy: false,
      product: {
        title: 'Макароны без яиц Antico Pastificio “Пенне Дзита Ригате” 500 г',
        price: '162,50',
        rating: 5,
        img: '/images/products/pasta.jpg'
      },
      productDiscounted: {
        title: 'Макароны без яиц Antico Pastificio “Пенне Дзита Ригате” 500 г',
        price: '161,17',
        rating: 5,
        img: '/images/products/pasta.jpg',
        discount: 10
      },
      activeSort: { value: 'recommended', text: 'Мы рекомендуем' },
      sortOptions: [
        { value: 'price', text: 'Цена' },
        { value: 'popularity', text: 'Популярность' },
        { value: 'recommended', text: 'Мы рекомендуем' }
      ],
      sortDesc: false,
      showSidebar: false,
      price: {
        min: 100,
        max: 900
      },
      priceRange: {
        min: 0,
        max: 1000
      },
      selectedCheckboxes: [],
      selectedRadio: null,
      tags: ['продукты', 'хозтовары', 'гигиена']
    }
  },
  computed: {
    catalog() {
      return this.$store.state.catalog
    }
  },
  methods: {
    setSort(sort) {
      if (this.activeSort === sort) this.sortDesc = !this.sortDesc
      else {
        this.activeSort = sort
        this.sortDesc = false
      }
    },
    toggleSidebar() {
      if (!this.showSidebar) {
        this.showSidebar = true
        document.body.classList.add('modal-open')
      } else {
        document.body.classList.remove('modal-open')
        this.showSidebar = false
      }
    },
    setPrice(price) {
      this.price = price
    },
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
