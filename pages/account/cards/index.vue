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
                Кредитные карты
              </span>
            </b-button>

            <b-row cols="9" class="mb-4 my-lg-4">
              <b-col lg="3" xl="2">
                <b-button
                  to="/account/cards/add"
                  variant="outline-primary"
                  class="font-weight-medium"
                  block
                >
                  <span class="d-lg-none">
                    + Добавить новую карту
                  </span>
                  <span class="d-none d-lg-inline">
                    + Новая карта
                  </span>
                </b-button>
              </b-col>
            </b-row>

            <b-row
              v-for="(card, C) in cards"
              :key="`card-${C}`"
              class="mb-3 mb-lg-4"
            >
              <b-col cols="10" lg="6" xl="4" class="mb-3">
                <div class="card card-credit">
                  <div class="card-content">
                    <div class="card-body">
                      <div class="card-type">
                        {{ card.type }}
                      </div>
                      <div class="card-field card-number">
                        <span
                          v-for="(segment, S) in splitCardNumber(card.number)"
                          :key="`segment-${C}-${S}`"
                        >
                          {{ segment }}
                        </span>
                      </div>
                      <div class="card-field card-valid-thru">
                        {{ card.validThru.month }}/{{ card.validThru.year }}
                      </div>
                      <div class="card-field card-holder">
                        {{ card.holder }}
                      </div>
                    </div>
                    <div class="card-footer">
                      <span>CVS</span>
                      <div class="card-field card-secret">
                        <span>{{ card.secret }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col cols="10" lg="6" xl="4" class="align-self-center">
                <b-row align-v="center">
                  <b-col cols="7" lg="12" order-lg="2" class="mb-3">
                    <b-link
                      class="d-inline-flex align-items-center text-gray-600 text-decoration-none"
                      @click="removeCard(C)"
                    >
                      <svg-icon
                        name="search-clear"
                        width="14"
                        height="14"
                        class="mr-2"
                      />
                      Удалить карту
                    </b-link>
                  </b-col>
                  <b-col
                    cols="5"
                    lg="12"
                    order-lg="1"
                    class="text-right text-lg-left mb-3 pr-1"
                  >
                    <b-form-checkbox
                      :checked="card.default"
                      size="lg"
                      switch
                      @change="toggleDefault($event, C)"
                    ></b-form-checkbox>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import AccountMenu from '@/components/account/AccountMenu'

export default {
  layout: 'account',
  components: {
    AccountMenu
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Главная', href: '/' },
        { text: 'Личный кабинет', to: '/account' },
        { text: 'Кредитные карты', to: '/account/cards', active: true }
      ],
      cards: [
        {
          type: 'VISA',
          number: '23454555****3478',
          validThru: { month: '03', year: '22' },
          holder: 'Viktoriya Kovaleva',
          secret: '***',
          default: false
        },
        {
          type: 'VISA',
          number: '23454555****3478',
          validThru: { month: '03', year: '22' },
          holder: 'Viktoriya Kovaleva',
          secret: '***',
          default: true
        }
      ]
    }
  },
  methods: {
    splitCardNumber(number) {
      return number.match(/.{1,4}/g)
    },
    toggleDefault(value, index) {
      for (let i = 0; i < this.cards.length; i++) this.cards[i].default = false
      this.cards[index].default = value
    },
    removeCard(index) {
      this.cards.splice(index, 1)
    }
  }
}
</script>
