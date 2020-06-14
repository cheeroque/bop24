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
              Информация об&nbsp;аккаунте
            </span>
          </b-button>

          <b-form class="mb-4">
            <b-row>
              <b-col lg="6" xl="4">
                <b-form-group>
                  <b-form-input
                    type="text"
                    placeholder="ФИО*"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    type="tel"
                    placeholder="Телефон*"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    type="email"
                    placeholder="E-mail*"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group class="mb-5">
                  <b-form-input
                    type="password"
                    placeholder="Пароль"
                  ></b-form-input>
                </b-form-group>

                <b-button variant="primary" block>
                  Сохранить изменения
                </b-button>
              </b-col>
            </b-row>
          </b-form>
        </b-col>
      </b-row>
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
        {
          text: 'Информация об\xA0аккаунте',
          to: '/account/settings',
          active: true
        }
      ]
    }
  }
}
</script>
