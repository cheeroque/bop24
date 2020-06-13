<template>
  <div>
    <div class="container">
      <b-breadcrumb
        :items="breadcrumbs"
        class="d-none d-md-flex"
      ></b-breadcrumb>

      <h2 class="font-size-4 mb-4 d-none d-md-block">
        #личный кабинет
      </h2>
    </div>
    <div class="bg-lg-gray-50">
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
                Заказы
              </span>
            </b-button>
            <b-row cols="9" class="mb-3 my-lg-4">
              <b-col lg="6" xl="4">
                <b-form-input
                  type="search"
                  placeholder="Введите номер или дату заказа"
                  class="icon-prepend border-gray-300"
                ></b-form-input>
              </b-col>
            </b-row>

            <div
              v-for="i in 6"
              :key="`order-${i}`"
              class="card card-rounded p-2 py-lg-1 mb-2"
            >
              <div class="card-body p-0 p-lg-3">
                <b-row cols="9" align-v="center">
                  <b-col lg="5">
                    <b-row class="mx-n2 mb-3 mb-lg-0">
                      <b-col cols="6" class="px-2">
                        <p class="mb-1">
                          Заказ
                          <b-link
                            to="/account/orders/item"
                            class="font-weight-medium"
                          >
                            №&nbsp;754759
                          </b-link>
                        </p>
                        <p class="font-weight-light text-gray-500 mb-0">
                          от&nbsp;03.12.2020
                        </p>
                      </b-col>
                      <b-col cols="6" class="text-right text-lg-left px-2">
                        <p class="mb-1">
                          Сумма:
                          <span class="font-weight-medium"
                            >6&nbsp;897&nbsp;р.</span
                          >
                        </p>
                        <p class="mb-0">
                          Баллов за&nbsp;покупку:
                          <span class="font-weight-medium text-primary"
                            >897</span
                          >
                        </p>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col lg="4">
                    <b-row class="mx-n2">
                      <b-col cols="6" class="px-2">
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
                      </b-col>
                      <b-col cols="6" class="px-2">
                        <b-button
                          to="/account/orders/item"
                          variant="primary"
                          class="line-height-120"
                          block
                        >
                          Детали заказа
                        </b-button>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </div>
            </div>

            <div class="my-4 text-center">
              <btn-show-more></btn-show-more>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import AccountMenu from '@/components/account/AccountMenu'
import BtnShowMore from '@/components/core/BtnShowMore'

export default {
  layout: 'account',
  components: {
    AccountMenu,
    BtnShowMore
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Главная', href: '/' },
        { text: 'Личный кабинет', to: '/account' },
        { text: 'Заказы', to: '/account/orders', active: true }
      ]
    }
  }
}
</script>
