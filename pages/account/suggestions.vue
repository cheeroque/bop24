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
              Персональные предложения
            </span>
          </b-button>

          <p
            class="font-size-4 font-weight-medium text-uppercase text-gray-700 mb-lg-4"
          >
            Продукты долгого хранения
          </p>

          <b-row class="mb-4">
            <b-col md="4" class="mb-3">
              <b-link to="/catalog/category" class="card card-banner">
                <div class="embed-responsive embed-responsive-3by2">
                  <img
                    src="/images/cards/veggies.jpg"
                    class="card-img embed-responsive-item"
                  />
                </div>
                <div class="card-body card-img-overlay d-flex flex-column">
                  <span class="text-white font-size-4">
                    #дача
                  </span>

                  <b-button
                    variant="white"
                    class="font-size-1 line-height-120 mt-auto mr-auto"
                  >
                    Подробнее
                  </b-button>
                </div>
              </b-link>
            </b-col>
            <b-col md="4" class="mb-3">
              <b-link to="/catalog/category" class="card card-banner">
                <div class="embed-responsive embed-responsive-3by2">
                  <img
                    src="/images/cards/gardening.jpg"
                    class="card-img embed-responsive-item"
                  />
                </div>
                <div class="card-body card-img-overlay d-flex flex-column">
                  <span class="text-white font-size-4">
                    #дача
                  </span>

                  <b-button
                    variant="white"
                    class="font-size-1 line-height-120 mt-auto mr-auto"
                  >
                    Подробнее
                  </b-button>
                </div>
              </b-link>
            </b-col>
            <b-col md="4" class="mb-3">
              <b-link to="/catalog/category" class="card card-banner">
                <div class="embed-responsive embed-responsive-3by2">
                  <img
                    src="/images/cards/sports.jpg"
                    class="card-img embed-responsive-item"
                  />
                </div>
                <div class="card-body card-img-overlay d-flex flex-column">
                  <span class="text-white font-size-4">
                    #дача
                  </span>

                  <b-button
                    variant="white"
                    class="font-size-1 line-height-120 mt-auto mr-auto"
                  >
                    Подробнее
                  </b-button>
                </div>
              </b-link>
            </b-col>
          </b-row>

          <p
            class="font-size-4 font-weight-medium text-uppercase text-gray-700 mb-lg-4"
          >
            Продукты долгого хранения
          </p>
          <b-row class="catalog-items mb-lg-4">
            <b-col
              v-for="i in 6"
              :key="`suggestion-${i}`"
              cols="12"
              lg="4"
              class="mb-3 mb-lg-30"
            >
              <card-product :item="item"></card-product>
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
        {
          text: 'Персональные предложения',
          to: '/account/suggestions',
          active: true
        }
      ],
      item: {
        title: 'Макароны без яиц Antico Pastificio “Пенне Дзита Ригате” 500 г',
        price: '162,50',
        rating: 5,
        img: '/images/products/pasta.jpg',
        discount: 50
      }
    }
  }
}
</script>
