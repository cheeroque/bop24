<template>
  <div>
    <div class="container">
      <b-breadcrumb
        :items="breadcrumbs"
        class="d-none d-md-flex"
      ></b-breadcrumb>

      <b-row align-v="center" class="mb-4 d-none d-md-flex">
        <b-col md="6" lg="4" xl="3">
          <h2 class="font-size-4 mb-0">
            #личный кабинет
          </h2>
        </b-col>
        <b-col md="6" lg="8" xl="9" class="d-flex">
          <b-dropdown
            :class="{ desc: sortDesc }"
            variant="link"
            class="dropdown-catalog-sort ml-auto"
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
    </div>
    <div class="container">
      <b-row>
        <b-col md="6" lg="4" xl="3" class="d-none d-md-block">
          <account-menu></account-menu>
        </b-col>
        <b-col md="6" lg="8" xl="9">
          <b-row align-v="center" class="mb-2 pb-1 d-md-none">
            <b-col cols="6">
              <b-button
                to="/account"
                variant="link"
                class="account-backlink mb-0"
              >
                <svg-icon name="arrow-backlink" width="19" height="7" />
                <span class="caption">
                  Избранное
                </span>
              </b-button>
            </b-col>
            <b-col cols="6" class="d-flex">
              <b-dropdown
                :class="{ desc: sortDesc }"
                variant="link"
                class="dropdown-catalog-sort ml-auto"
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

          <b-row class="catalog-items mb-lg-4">
            <b-col
              v-for="i in 6"
              :key="`liked-product-${i}`"
              cols="12"
              lg="4"
              class="mb-3 mb-lg-30"
            >
              <card-product :item="item" has-remove></card-product>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import AccountMenu from '@/components/account/AccountMenu'
import CardProduct from '@/components/cards/CardProduct'

export default {
  layout: 'account',
  components: {
    AccountMenu,
    CardProduct
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Главная', href: '/' },
        { text: 'Личный кабинет', to: '/account' },
        { text: 'Любимые товары', to: '/account/likes', active: true }
      ],
      activeSort: { value: 'recommended', text: 'Мы рекомендуем' },
      sortOptions: [
        { value: 'price', text: 'Цена' },
        { value: 'popularity', text: 'Популярность' },
        { value: 'recommended', text: 'Мы рекомендуем' }
      ],
      sortDesc: false,
      item: {
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
