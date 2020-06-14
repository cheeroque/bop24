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
          <b-link to="/account/address" class="text-dark text-decoration-none">
            <svg-icon name="arrow-backlink" width="19" height="7" />
            <span class="ml-2">
              Все адреса
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
              to="/account/address"
              variant="link"
              class="account-backlink d-md-none"
            >
              <svg-icon name="arrow-backlink" width="19" height="7" />
              <span class="caption">
                Новый адрес
              </span>
            </b-button>

            <div class="mb-3 my-lg-4 py-2 d-none d-md-block">
              <p class="font-size-4 font-weight-medium mb-0">
                Новый адрес
              </p>
            </div>

            <b-form class="mb-lg-4">
              <b-row cols="9">
                <b-col cols="12" lg="4" xl="3">
                  <b-form-group>
                    <b-form-input
                      v-model="title"
                      type="text"
                      placeholder="#название"
                      class="text-primary"
                      :formatter="formatTitle"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-input
                      v-model="city"
                      type="text"
                      placeholder="Введите город"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-input
                      v-model="street"
                      type="text"
                      placeholder="Введите улицу, дом"
                    ></b-form-input>
                  </b-form-group>
                  <b-row>
                    <b-col cols="6">
                      <b-form-group>
                        <b-form-input
                          v-model="building"
                          type="text"
                          placeholder="строение"
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col cols="6">
                      <b-form-group>
                        <b-form-input
                          v-model="apartment"
                          type="text"
                          placeholder="квартира"
                        ></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-form-group>
                    <b-form-input
                      v-model="postalIndex"
                      type="text"
                      placeholder="Индекс"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-textarea
                      v-model="comment"
                      rows="3"
                      placeholder="Комментарий"
                    ></b-form-textarea>
                  </b-form-group>
                </b-col>
                <b-col cols="12" lg="5" xl="6" class="mb-3">
                  <div class="d-flex flex-column h-100">
                    <p class="text-gray-600">
                      Не&nbsp;определился адрес? Поставьте точку на&nbsp;карте
                      и&nbsp;мы Вас найдем!
                    </p>
                    <div class="account-map-wrapper flex-fill bg-light"></div>
                  </div>
                </b-col>
                <b-col cols="12" lg="3" xl="2" class="mb-4">
                  <div class="d-flex align-items-center flex-lg-row-reverse">
                    <span
                      class="d-flex flex-fill align-items-center font-size-1 line-height-120 ml-lg-3"
                      @click="toggleSwitch"
                    >
                      Сделать основным
                    </span>
                    <b-form-checkbox
                      ref="defaultSwitch"
                      v-model="isDefault"
                      size="lg"
                      switch
                    ></b-form-checkbox>
                  </div>
                </b-col>
              </b-row>
              <b-row cols="9">
                <b-col cols="12" lg="4" xl="3">
                  <b-button
                    to="/account/address"
                    variant="primary"
                    class="mb-4"
                    block
                  >
                    Сохранить новый адрес
                  </b-button>
                </b-col>
              </b-row>
            </b-form>
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
        { text: 'Адрес', to: '/account/address' },
        { text: 'Новый адрес', to: '/account/address/add', active: true }
      ],
      title: '',
      city: '',
      street: '',
      building: '',
      apartment: '',
      postalIndex: '',
      comment: '',
      isDefault: false
    }
  },
  methods: {
    toggleSwitch() {
      const input = this.$refs.defaultSwitch.$el.querySelector(
        '[type="checkbox"]'
      )
      if (input) input.click()
    },
    formatTitle(value) {
      let result = value
      if (result[0] === '#') result = result.substring(1)
      result = result.replace(/^#?/, '')
      if (result && result.length > 0) return '#' + result
      else return value
    }
  }
}
</script>
