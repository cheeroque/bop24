<template>
  <div>
    <app-header class="d-none d-md-block" />
    <header class="app-header app-header-account d-md-none">
      <nav class="navbar navbar-light navbar-bottom">
        <b-navbar-brand href="/" class="d-md-none">
          <img src="/images/logo-sm.svg" class="logo" />
        </b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/cart" class="nav-item-cart">
            <div class="icon-wrapper">
              <svg-icon name="cart" width="22" height="20" />
              <span class="cart-count">
                0
              </span>
            </div>
            <span class="caption">
              7&nbsp;467&nbsp;р.
            </span>
          </b-nav-item>
        </b-navbar-nav>
      </nav>
      <div class="user-info">
        <b-link to="/account/settings" class="userpic">
          <img src="/images/users/viktoria.jpg" />
        </b-link>
        <div v-if="showWelcome" class="welcome-wrapper">
          <div class="username">
            <span class="caption">
              Виктория К. В.
            </span>
          </div>
          <b-button to="/account/settings" variant="link" class="btn-edit">
            <svg-icon name="edit" width="14" height="14" />
            <span class="caption">
              Редактировать
            </span>
          </b-button>
          <p class="welcome">
            Добро пожаловать в&nbsp;личный кабинет!
          </p>
        </div>
      </div>
    </header>
    <nuxt />
    <app-footer class="d-none d-md-block" />
    <footer class="app-footer d-md-none overflow-hidden">
      <div class="copyright">
        <b-container>
          <b-row>
            <b-col cols="10" offset="1">
              <p>
                <a href="/" target="_blank" class="text-reset">
                  <u>Главная</u>
                </a>
              </p>
              <p>
                <a href="#" target="_blank" class="text-reset">
                  <u>Обработка персональных данных</u>
                </a>
              </p>
              <p class="mb-4">
                <a href="#" target="_blank" class="text-reset">
                  <u>Политика возврата</u>
                </a>
              </p>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </footer>
  </div>
</template>

<script>
import AppHeader from '@/components/header/AppHeader'
import AppFooter from '@/components/footer/AppFooter'

export default {
  components: {
    AppHeader,
    AppFooter
  },
  computed: {
    showWelcome() {
      return this.$route.name === 'account'
    }
  },
  head: {
    bodyAttrs: {
      class: 'body-account'
    }
  }
}
</script>
