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
                Адреса
              </span>
            </b-button>

            <b-row cols="9" class="mb-4 my-lg-4">
              <b-col lg="3" xl="2">
                <b-button
                  to="/account/address/add"
                  variant="outline-primary"
                  class="font-weight-medium"
                  block
                >
                  + Новый адрес
                </b-button>
              </b-col>
            </b-row>
            <b-row cols="9" class="mb-lg-4">
              <b-col lg="7" xl="5">
                <div
                  v-for="(item, I) in items"
                  :key="`address-${I}`"
                  class="mb-2 mb-lg-4"
                >
                  <b-row align-v="center">
                    <b-col cols="9">
                      <p class="font-weight-medium text-primary mb-2 pl-4">
                        #{{ item.title }}
                      </p>
                    </b-col>
                    <b-col cols="3" class="text-right d-lg-none">
                      <b-form-checkbox
                        :checked="item.default"
                        size="lg"
                        class="mb-2"
                        switch
                        @change="toggleDefault($event, I)"
                      ></b-form-checkbox>
                    </b-col>
                  </b-row>
                  <b-row align-v="center">
                    <b-col cols="12" lg="8" class="mb-2">
                      <div class="card card-rounded card-address">
                        <div class="card-body">
                          <p class="font-weight-medium mb-0">
                            {{ item.name }}
                          </p>
                          <p>
                            {{ item.address }}
                          </p>
                          <p class="font-weight-medium mb-0">
                            {{ item.phonenumber }}
                          </p>
                          <p
                            v-if="item.comment"
                            class="font-size-1 text-gray-500 mt-3 mb-0"
                          >
                            {{ item.comment }}
                          </p>
                        </div>
                      </div>
                    </b-col>
                    <b-col cols="12" lg="4" class="mb-2">
                      <div class="px-3 px-lg-0">
                        <b-row>
                          <b-col cols="12" class="mt-2 mb-3 d-none d-lg-block">
                            <b-form-checkbox
                              :checked="item.default"
                              size="lg"
                              class="mb-2"
                              switch
                              @change="toggleDefault($event, I)"
                            ></b-form-checkbox>
                          </b-col>
                          <b-col cols="6" lg="12" class="mb-2">
                            <b-link
                              class="d-inline-flex align-items-center text-gray-600 text-decoration-none"
                              @click="removeItem(I)"
                            >
                              <svg-icon
                                name="search-clear"
                                width="14"
                                height="14"
                                class="mr-2"
                              />
                              Удалить адрес
                            </b-link>
                          </b-col>
                          <b-col
                            cols="6"
                            lg="12"
                            class="text-right text-lg-left mb-2"
                          >
                            <b-link
                              to="/account/address/add"
                              class="d-inline-flex align-items-center text-gray-600 text-decoration-none"
                            >
                              <svg-icon
                                name="edit"
                                width="14"
                                height="14"
                                class="mr-2"
                              />
                              Редактировать
                            </b-link>
                          </b-col>
                        </b-row>
                      </div>
                    </b-col>
                  </b-row>
                </div>
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
        { text: 'Адрес', to: '/account/address', active: true }
      ],
      items: [
        {
          title: 'дом',
          name: 'Виктория Ковалева',
          address:
            'Лужнецкая набережная 9/4 стр 17 Москва Москва, 119270 Россия',
          phonenumber: '+79991234567',
          default: true
        },
        {
          title: 'работа',
          name: 'Виктория Ковалева',
          address:
            'Лужнецкая набережная 9/4 стр 17 Москва Москва, 119270 Россия',
          phonenumber: '+79991234567',
          comment: 'Комментарий для адреса, про который все забыли в макете',
          default: false
        },
        {
          title: 'родители',
          name: 'Виктория Ковалева',
          address:
            'Лужнецкая набережная 9/4 стр 17 Москва Москва, 119270 Россия',
          phonenumber: '+79991234567',
          default: false
        }
      ]
    }
  },
  methods: {
    toggleDefault(value, index) {
      for (let i = 0; i < this.items.length; i++) this.items[i].default = false
      this.items[index].default = value
    },
    removeItem(index) {
      this.items.splice(index, 1)
    }
  }
}
</script>
