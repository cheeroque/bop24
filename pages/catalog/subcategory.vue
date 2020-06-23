<template>
  <main class="container">
    <b-breadcrumb :items="breadcrumbs" class="d-none d-md-flex"></b-breadcrumb>

    <b-row>
      <b-col md="6" lg="4" xl="3">
        <b-row align-v="center" class="mb-3 d-md-none">
          <b-col cols="2">
            <b-button
              to="/catalog/category"
              variant="link"
              class="text-left mb-2 px-0"
              block
            >
              <svg-icon name="arrow-backlink" width="19" height="7" />
            </b-button>
          </b-col>
          <b-col cols="8">
            <p class="catalog-controls-header text-center mb-2">
              #мясо
            </p>
          </b-col>
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
          <b-button
            to="/catalog/category"
            variant="outline-dark"
            class="backlink mb-3 d-none d-md-flex"
            block
          >
            <svg-icon name="arrow-backlink" width="19" height="7" />
            <span class="caption">
              Категории товаров
            </span>
          </b-button>

          <collapse-catalog-sidebar
            v-for="(subcat, S) in category"
            :key="`sidebar-collapse-${S}`"
            :title="subcat.title"
            :class="S === category.length - 1 ? 'mb-4' : 'mb-2'"
          >
            <ul class="list-unstyled mb-0">
              <li
                v-for="(item, I) in subcat.items"
                :key="`item-${S}-${I}`"
                :class="I === subcat.items.length - 1 ? null : 'mb-3'"
              >
                <b-link to="/subcategory" class="font-weight-medium text-reset">
                  {{ item.title }}
                </b-link>
              </li>
            </ul>
          </collapse-catalog-sidebar>
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
        <div class="catalog-controls">
          <p class="catalog-controls-header mb-0">
            #мясо
          </p>
          <p class="ml-xl-auto mr-auto mr-xl-30 mb-0 text-gray-500">
            Найдено 678 позиций
          </p>
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
          <b-form-radio-group
            v-model="viewMode"
            buttons
            button-variant="link"
            class="catalog-view-controls"
          >
            <b-form-radio value="grid">
              <svg-icon name="catalog-view-grid" width="16" height="16" />
            </b-form-radio>
            <b-form-radio value="table">
              <svg-icon name="catalog-view-table" width="16" height="16" />
            </b-form-radio>
          </b-form-radio-group>
        </div>
        <transition name="fade" mode="out-in">
          <b-row
            :key="viewMode"
            :class="`catalog-items-${viewMode}`"
            class="catalog-items"
          >
            <b-col
              :lg="viewMode === 'table' ? 12 : 6"
              :xl="viewMode === 'table' ? 12 : 4"
              :class="viewMode === 'table' ? 'mb-2' : 'mb-3 mb-lg-30'"
              cols="12"
            >
              <card-product :item="productDiscounted"></card-product>
            </b-col>
            <b-col
              v-for="i in 17"
              :key="`product-${i}`"
              :lg="viewMode === 'table' ? 12 : 6"
              :xl="viewMode === 'table' ? 12 : 4"
              :class="viewMode === 'table' ? 'mb-2' : 'mb-3 mb-lg-30'"
              cols="12"
            >
              <card-product :item="product"></card-product>
            </b-col>
          </b-row>
        </transition>

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
import CardProduct from '@/components/cards/CardProduct'
import CollapseCatalogSidebar from '@/components/catalog/CollapseCatalogSidebar'
import CollapseCatalogFilter from '@/components/catalog/CollapseCatalogFilter'
import FilterRange from '@/components/catalog/FilterRange'
import BtnShowMore from '@/components/core/BtnShowMore'

export default {
  components: {
    CardProduct,
    CollapseCatalogSidebar,
    CollapseCatalogFilter,
    FilterRange,
    BtnShowMore
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Главная', href: '/' },
        { text: 'Каталог', href: '/catalog' },
        { text: 'Продукты', href: '/catalog/category' },
        { text: 'Мясо', to: '/catalog/subcategory', active: true }
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
      viewMode: 'grid',
      price: {
        min: 100,
        max: 900
      },
      priceRange: {
        min: 0,
        max: 1000
      },
      selectedCheckboxes: [],
      selectedRadio: null
    }
  },
  computed: {
    catalog() {
      return this.$store.state.catalog
    },
    category() {
      return this.$store.state.category
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
