<template>
  <div class="account-menu">
    <ul
      v-for="(section, S) in menuItems"
      :key="`menu-section-${S}`"
      class="nav flex-column"
    >
      <li class="navbar-text nav-item-title">
        <svg-icon :name="section.icon" width="24" height="24" />
        <span class="caption">
          {{ section.title }}
        </span>
      </li>
      <li
        v-for="(item, I) in section.items"
        :key="`menu-item-${S}-${I}`"
        class="nav-item"
      >
        <b-link :to="item.link" class="nav-link">
          {{ item.title }}
          <span class="caret">
            <svg-icon name="caret" width="12" height="12" />
          </span>
        </b-link>
      </li>
    </ul>

    <ul class="nav flex-column">
      <li class="nav-item">
        <b-link to="/account/auth" class="nav-link border-0 py-4 pt-md-3">
          Выйти
        </b-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          title: 'Мой аккаунт',
          icon: 'account/account',
          items: [
            { title: 'Профиль', link: '/account/profile' },
            { title: 'Заказы', link: '/account/orders' },
            { title: 'Кредитные карты', link: '/account/cards' },
            { title: 'Адреса', link: '/account/address' },
            { title: 'Любимые товары', link: '/account/likes' },
            { title: 'Избранное', link: '/account/favorites' }
          ]
        },
        {
          title: 'Мой бонусный счет',
          icon: 'account/star',
          items: [
            { title: 'Персональные предложения', link: '/account/suggestions' }
          ]
        },
        {
          title: 'Настройки',
          icon: 'account/settings',
          items: [
            { title: 'Информация об\xA0аккаунте', link: '/account/settings' },
            { title: 'Настройки общения', link: '/account/notifications' },
            { title: 'Лист ожидания', link: '/account/watchlist' }
          ]
        }
      ]
    }
  }
}
</script>
