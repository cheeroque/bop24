<template>
  <main class="container">
    <b-breadcrumb :items="breadcrumbs" class="d-none d-md-flex"></b-breadcrumb>

    <b-row align-v="center" class="mb-3 mb-lg-4">
      <b-col cols="7">
        <h2 class="font-size-2 font-weight-bold mb-0">
          #избранное
        </h2>
      </b-col>
      <b-col cols="5" class="text-right">
        <b-dropdown
          :class="{ desc: sortDesc }"
          variant="link"
          class="dropdown-catalog-sort"
          no-caret
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
    <b-row class="catalog-items">
      <b-col
        v-for="i in 24"
        :key="`product-${i}`"
        md="6"
        lg="4"
        xl="3"
        class="mb-3 mb-lg-30"
      >
        <card-product :item="product" has-remove></card-product>
      </b-col>
    </b-row>
  </main>
</template>

<script>
import CardProduct from '@/components/cards/CardProduct'

export default {
  components: {
    CardProduct
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Главная', href: '/' },
        { text: 'Избранное', to: '/favorites', active: true }
      ],
      activeSort: { value: 'recommended', text: 'Мы рекомендуем' },
      sortOptions: [
        { value: 'price', text: 'Цена' },
        { value: 'popularity', text: 'Популярность' },
        { value: 'recommended', text: 'Мы рекомендуем' }
      ],
      sortDesc: false,
      product: {
        title: 'Макароны без яиц Antico Pastificio “Пенне Дзита Ригате” 500 г',
        price: '162,50',
        rating: 5,
        img: '/images/products/pasta.jpg'
      }
    }
  },
  methods: {
    setSort(sort) {
      if (this.activeSort === sort) this.sortDesc = !this.sortDesc
      else {
        this.activeSort = sort
        this.sortDesc = false
      }
    }
  }
}
</script>
