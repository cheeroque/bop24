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
        <b-col md="6" lg="8" xl="9">
          <b-link to="/account/orders" class="text-dark text-decoration-none">
            <svg-icon name="arrow-backlink" width="19" height="7" />
            <span class="ml-2">
              Все заказы
            </span>
          </b-link>
        </b-col>
      </b-row>
    </div>
    <div class="bg-lg-gray-50">
      <div class="container">
        <b-row>
          <b-col md="6" lg="4" xl="3" class="d-none d-md-block">
            <account-menu></account-menu>
          </b-col>
          <b-col md="6" lg="8" xl="9">
            <b-row align-v="center" class="mb-3 mt-lg-4">
              <b-col cols="12" lg="4">
                <b-row align-v="center">
                  <b-col cols="7" lg="12">
                    <b-button
                      to="/account/orders"
                      variant="link"
                      class="account-backlink mb-2 d-md-none"
                    >
                      <svg-icon name="arrow-backlink" width="19" height="7" />
                      <span class="caption">
                        Заказ
                        <span class="font-weight-medium text-primary">
                          №&nbsp;754759
                        </span>
                      </span>
                    </b-button>
                    <p class="mb-2 d-none d-md-block">
                      Заказ
                      <b-link
                        to="/account/orders/item"
                        class="font-weight-medium"
                      >
                        №&nbsp;754759
                      </b-link>
                    </p>
                  </b-col>
                  <b-col cols="5" lg="12" class="text-right text-lg-left">
                    <p class="font-weight-light text-gray-500 mb-2">
                      от&nbsp;03.12.2020
                    </p>
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="12" lg="4" xl="5">
                <b-row align-v="center">
                  <b-col cols="5" lg="12">
                    <p class="mb-lg-2">
                      Сумма:
                      <span class="font-weight-medium">6&nbsp;897&nbsp;р.</span>
                    </p>
                  </b-col>
                  <b-col cols="7" lg="12" class="text-right text-lg-left">
                    <p class="mb-lg-2">
                      Баллов за&nbsp;покупку:
                      <span class="font-weight-medium text-primary">897</span>
                    </p>
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="6" md="7" lg="4" xl="3">
                <div class="mb-2">
                  <b-button
                    variant="outline-primary"
                    class="d-flex flex-center px-1 line-height-120"
                    block
                  >
                    <svg-icon
                      name="refresh"
                      width="20"
                      height="20"
                      class="mr-2 my-n1"
                    />
                    Повторить заказ
                  </b-button>
                </div>
              </b-col>
            </b-row>

            <div class="mb-3 mb-lg-5">
              <card-order-item
                v-for="i in 6"
                :key="`order-item-${i}`"
                :item="orderItem"
                class="mb-3 mb-lg-2"
              ></card-order-item>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import AccountMenu from '@/components/account/AccountMenu'
import CardOrderItem from '@/components/cards/CardOrderItem'

export default {
  layout: 'account',
  components: {
    AccountMenu,
    CardOrderItem
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Главная', href: '/' },
        { text: 'Личный кабинет', to: '/account' },
        { text: 'Заказы', to: '/account/orders' },
        { text: 'Заказ №\xA0754759', to: '/account/orders/item', active: true }
      ],
      orderItem: {
        title: 'Макароны без яиц Antico Pastificio “Пенне Дзита Ригате” 500 г',
        img: 'pasta',
        price: '162,50',
        count: 2,
        rating: 5
      }
    }
  }
}
</script>
