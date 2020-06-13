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
          <b-link to="/account/cards" class="text-dark text-decoration-none">
            <svg-icon name="arrow-backlink" width="19" height="7" />
            <span class="ml-2">
              Все карты
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
            <b-button
              to="/account/cards"
              variant="link"
              class="account-backlink d-md-none"
            >
              <svg-icon name="arrow-backlink" width="19" height="7" />
              <span class="caption">
                Новая карта
              </span>
            </b-button>

            <div class="mb-3 my-lg-4 py-2 d-none d-md-block">
              <p class="font-size-4 font-weight-medium mb-0">
                Новая карта
              </p>
            </div>
            <b-button
              variant="link"
              class="d-flex align-items-center text-dark text-decoration-none mb-3 p-0 d-lg-none"
            >
              <svg-icon name="scan-card" width="30" height="27" class="mr-2" />
              Сканировать карту
            </b-button>

            <b-row class="mb-lg-4">
              <b-col cols="10" lg="6" xl="4" class="mb-3">
                <div class="card card-credit">
                  <div class="card-content">
                    <div class="card-body">
                      <div class="card-type">
                        VISA
                      </div>
                      <div class="card-field card-number">
                        <b-form-input
                          v-model="newNumber"
                          type="text"
                          placeholder="1111   2222   3333   4444"
                          :formatter="formatCardNumber"
                        ></b-form-input>
                      </div>
                      <div class="card-field card-valid-thru">
                        <b-form-input
                          v-model="newValidThru"
                          type="text"
                          placeholder="00/00"
                          :formatter="formatCardValidThru"
                        ></b-form-input>
                      </div>
                      <div class="card-field card-holder">
                        <b-form-input
                          v-model="newHolder"
                          type="text"
                          placeholder="ИМЯ ФАМИЛИЯ"
                          :formatter="formatCardHolder"
                        ></b-form-input>
                      </div>
                    </div>
                    <div class="card-footer">
                      <span>CVS</span>
                      <div class="card-field card-secret">
                        <b-form-input
                          v-model="newSecret"
                          type="text"
                          :formatter="formatCardSecret"
                        ></b-form-input>
                      </div>
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col cols="10" lg="6" xl="4" class="align-self-center">
                <b-row align-v="center">
                  <b-col cols="7" lg="12" order-lg="2" class="mb-3">
                    <span class="text-gray-600">
                      Сделать основной
                    </span>
                  </b-col>
                  <b-col
                    cols="5"
                    lg="12"
                    order-lg="1"
                    class="text-right text-lg-left mb-3 pr-1"
                  >
                    <b-form-checkbox
                      v-model="newDefault"
                      size="lg"
                      switch
                    ></b-form-checkbox>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row class="mb-4">
              <b-col cols="8" lg="6" xl="4">
                <b-button to="/account/cards" variant="primary" block>
                  Сохранить новую карту
                </b-button>
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
        { text: 'Кредитные карты', to: '/account/cards' },
        { text: 'Новая карта', to: '/account/cards/add', active: true }
      ],
      newNumber: '',
      newValidThru: '',
      newHolder: '',
      newSecret: '',
      newDefault: false
    }
  },
  methods: {
    formatCardNumber(value) {
      if (value.length < 2 && !/^\d+$/.test(value)) return ''
      const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
      const matches = v.match(/\d{4,16}/g)
      const match = (matches && matches[0]) || ''
      const parts = []
      for (let i = 0; i < match.length; i += 4) {
        parts.push(match.substring(i, i + 4))
      }
      if (parts.length) {
        return parts.join('   ')
      } else {
        return value
      }
    },
    formatCardValidThru(value) {
      const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
      const result = v.match(/(\d{2})(\d{2})/)
      if (result && result.length) return `${result[1]}/${result[2]}`
      else return value
    },
    formatCardHolder(value) {
      return value.toUpperCase()
    },
    formatCardSecret(value) {
      return value
        .replace(/\s+/g, '')
        .replace(/[^0-9]/gi, '')
        .substring(0, 3)
    }
  }
}
</script>
