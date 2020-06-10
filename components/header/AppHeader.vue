<template>
  <div class="app-header-wrapper">
    <header :class="{ sticky: headerIsSticky }" class="app-header">
      <b-container class="d-flex px-0">
        <a href="/" class="navbar-brand d-none d-md-flex">
          <img src="/images/logo.svg" class="logo" />
        </a>
        <div class="header-content">
          <nav class="navbar navbar-light navbar-expand navbar-top">
            <b-navbar-brand href="/" class="d-md-none">
              <img src="/images/logo-sm.svg" class="logo" />
            </b-navbar-brand>
            <b-navbar-nav class="w-100">
              <li class="flex-fill d-md-none">
                <dropdown-search size="sm"></dropdown-search>
              </li>
              <b-nav-item-dropdown no-caret toggle-class="menu-toggle">
                <template v-slot:button-content>
                  <svg-icon name="menu-toggle" width="25" height="5" />
                </template>
                <b-dropdown-text class="mr-md-auto">
                  <a href="#" class="location-link mr-3">
                    <svg-icon name="location" width="10" height="16" />
                    <span class="caption">
                      Москва
                    </span>
                  </a>
                  <a href="#" class="app-link">
                    <svg-icon name="app-apple" width="12" height="12" />
                  </a>
                  <a href="#" class="app-link">
                    <svg-icon name="app-google" width="12" height="12" />
                  </a>
                </b-dropdown-text>
                <b-dropdown-text class="d-md-none">
                  <b-button to="/account" variant="secondary" size="sm">
                    <svg-icon name="account" width="22" height="20" />
                    <span class="caption">
                      Личный кабинет
                    </span>
                  </b-button>
                </b-dropdown-text>
                <b-dropdown-item
                  v-for="(item, index) in menu"
                  :key="`menuitem-${index}`"
                  :to="item.link"
                  :class="item.itemClass"
                >
                  {{ item.text }}
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </nav>
          <nav class="navbar navbar-dark navbar-expand navbar-bottom">
            <b-navbar-nav>
              <main-menu></main-menu>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
              <li class="flex-fill mr-4 mr-xl-5 d-none d-md-block">
                <dropdown-search></dropdown-search>
              </li>
              <b-nav-item to="/account" class="d-none d-md-flex">
                <svg-icon name="account" width="22" height="20" />
                <span class="caption">
                  Личный кабинет
                </span>
              </b-nav-item>
              <b-nav-item to="/favorites">
                <svg-icon name="heart" width="22" height="20" />
                <span class="caption">
                  Избранное
                </span>
              </b-nav-item>
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
        </div>
      </b-container>
    </header>
    <header-tags v-if="showTags"></header-tags>
  </div>
</template>

<script>
import MainMenu from '@/components/header/MainMenu'
import DropdownSearch from '@/components/header/DropdownSearch'
import HeaderTags from '@/components/header/HeaderTags'

export default {
  components: {
    MainMenu,
    DropdownSearch,
    HeaderTags
  },
  data() {
    return {
      offsetY: 0,
      headerIsSticky: false,
      tagsHeight: null,
      catalog: [
        {
          title: 'продукты',
          items: [
            {
              title: 'молоко, яйца, сыр',
              items: ['телятина', 'говядина', 'птица', 'хлеб', 'сладости']
            },
            {
              title: 'мясо',
              items: ['телятина', 'говядина', 'птица', 'хлеб', 'сладости']
            },
            {
              title: 'рыба и морепродукты',
              items: ['телятина', 'говядина', 'птица', 'хлеб', 'сладости']
            },
            {
              title: 'овощи',
              items: ['телятина', 'говядина', 'птица', 'хлеб', 'сладости']
            },
            {
              title: 'фрукты',
              items: ['телятина', 'говядина', 'птица', 'хлеб', 'сладости']
            },
            {
              title: 'зелень',
              items: ['телятина', 'говядина', 'птица', 'хлеб', 'сладости']
            },
            {
              title: 'хлеб',
              items: ['телятина', 'говядина', 'птица', 'хлеб', 'сладости']
            },
            {
              title: 'сладости',
              items: ['телятина', 'говядина', 'птица', 'хлеб', 'сладости']
            },
            {
              title: 'консервы',
              items: ['телятина', 'говядина', 'птица', 'хлеб', 'сладости']
            },
            {
              title: 'бакалея',
              items: ['телятина', 'говядина', 'птица', 'хлеб', 'сладости']
            },
            {
              title: 'замороженные продукты',
              items: ['телятина', 'говядина', 'птица', 'хлеб', 'сладости']
            }
          ]
        },
        { title: 'хозтовары' },
        { title: 'гигиена' },
        { title: 'косметика' },
        { title: 'дача' },
        { title: 'дети' },
        { title: 'спорт' },
        { title: 'зоотовары' },
        { title: 'праздник' },
        { title: 'канцтовары' },
        { title: 'аптека' },
        { title: 'ремонт' }
      ],
      menu: [
        { text: 'Бесплатная доставка', link: 'delivery' },
        { text: 'Программа лояльности', link: 'loyalty-program' },
        { text: 'Бонусы и акции', link: 'promo' },
        { text: 'Новинки', link: 'new' },
        { text: 'Помощь', link: 'help', itemClass: 'item-help' }
      ]
    }
  },
  computed: {
    showTags() {
      return this.$route.path === '/' || this.$route.path === '/catalog'
    }
  },
  created() {
    if (process.client) {
      // eslint-disable-next-line
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    // eslint-disable-next-line
    if (process.client) {
      // eslint-disable-next-line
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    handleScroll() {
      const delta = window.scrollY - this.offsetY
      this.offsetY = window.scrollY
      if (delta < 0 && window.scrollY > 0) {
        this.headerIsSticky = true
        this.tagsHeight = 0
        document.body.classList.add('header-sticky')
      } else {
        this.headerIsSticky = false
        this.tagsHeight = 'auto'
        document.body.classList.remove('header-sticky')
      }
    }
  }
}
</script>
