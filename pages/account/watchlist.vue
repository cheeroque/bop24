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
              Лист ожидания
            </span>
          </b-button>

          <b-row class="catalog-items catalog-items-table mb-4">
            <b-col
              v-for="(item, I) in items"
              :key="`product-${I}`"
              cols="12"
              class="mb-2"
            >
              <card-product-watchlist :item="item"></card-product-watchlist>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import AccountMenu from '@/components/account/AccountMenu'
import CardProductWatchlist from '@/components/cards/CardProductWatchlist'

export default {
  layout: 'account',
  components: {
    AccountMenu,
    CardProductWatchlist
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Главная', href: '/' },
        { text: 'Личный кабинет', to: '/account' },
        { text: 'Любимые товары', to: '/account/likes', active: true }
      ],
      items: [
        {
          title:
            'Макароны без яиц Antico Pastificio “Пенне Дзита Ригате” 500 г',
          price: '162,50',
          rating: 5,
          img: '/images/products/pasta.jpg',
          discount: 10,
          inStock: false
        },
        {
          title:
            'Макароны без яиц Antico Pastificio “Пенне Дзита Ригате” 500 г',
          price: '162,50',
          rating: 5,
          img: '/images/products/pasta.jpg',
          discount: 10,
          inStock: true
        }
      ]
    }
  }
}
</script>
