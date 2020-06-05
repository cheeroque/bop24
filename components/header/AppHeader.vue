<template>
  <div class="app-header-wrapper">
    <header class="app-header container px-0">
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
              <b-form-input type="search" size="sm"></b-form-input>
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
            <b-nav-item-dropdown no-caret toggle-class="catalog-toggle">
              <template v-slot:button-content>
                <svg-icon name="catalog-toggle" width="28" height="20" />
                <span class="caption">
                  Каталог
                </span>
              </template>
            </b-nav-item-dropdown>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <li class="flex-fill mr-4 mr-xl-5 d-none d-md-block">
              <b-form-input type="search"></b-form-input>
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
            <b-nav-item to="/favorites" class="nav-item-cart">
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
    </header>
    <header-tags></header-tags>
  </div>
</template>

<script>
import HeaderTags from '@/components/header/HeaderTags'

export default {
  components: {
    HeaderTags
  },
  data() {
    return {
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
  }
}
</script>
