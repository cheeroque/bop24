<template>
  <div>
    <div class="container">
      <b-breadcrumb
        :items="breadcrumbs"
        class="d-none d-md-flex"
      ></b-breadcrumb>

      <h2 class="font-size-4 mb-4 d-none d-md-flex">
        #личный кабинет
      </h2>
    </div>
    <div class="container">
      <b-row>
        <b-col md="6" lg="4" xl="3" class="d-none d-md-block">
          <account-menu></account-menu>
        </b-col>
        <b-col md="6" lg="8" xl="9">
          <b-button
            to="/account"
            variant="link"
            class="account-backlink d-md-none"
          >
            <svg-icon name="arrow-backlink" width="19" height="7" />
            <span class="caption">
              Любимые товары
            </span>
          </b-button>

          <b-row>
            <b-col cols="12" lg="8" xl="7">
              <p class="mb-lg-4">
                Оцените товар или&nbsp;оставьте отзыв и&nbsp;заработайте скидку
                или&nbsp;баллы на&nbsp;следующие покупки
              </p>
            </b-col>
            <b-col cols="12" lg="3" offset-lg="1" offset-xl="2" class="d-flex">
              <b-dropdown
                :class="{ desc: sortDesc }"
                variant="link"
                class="dropdown-catalog-sort ml-auto mb-3"
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

          <b-row>
            <b-col
              v-for="i in 6"
              :key="`liked-product-${i}`"
              cols="12"
              lg="4"
              class="mb-3 mb-lg-30"
            >
              <card-liked-product :item="item"></card-liked-product>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import AccountMenu from '@/components/account/AccountMenu'
import CardLikedProduct from '@/components/cards/CardLikedProduct'

export default {
  layout: 'account',
  components: {
    AccountMenu,
    CardLikedProduct
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
