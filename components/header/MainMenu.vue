<template>
  <li class="nav-item">
    <button class="nav-link catalog-toggle" @click="toggleMenu">
      <svg-icon name="catalog-toggle" width="28" height="20" />
      <span class="caption">
        Каталог
      </span>
    </button>
    <transition name="fade">
      <div
        v-show="showMenu"
        :class="`level-${menuLevel}`"
        class="catalog-dropdown"
      >
        <div class="catalog-wrapper">
          <div class="catalog-level catalog-level-0">
            <ul class="list-unstyled">
              <li
                v-for="(item0, index0) in menuItems"
                :key="`menuitem-0-${index0}`"
              >
                <div class="catalog-item">
                  <a href="#" class="catalog-link"> #{{ item0.title }} </a>
                  <div
                    v-if="item0.items && item0.items.length > 0"
                    class="catalog-next"
                  >
                    <svg-icon name="catalog-next" width="10" height="10" />
                    <b-button
                      variant="link"
                      class="catalog-btn"
                      @click="navigateCatalog(1, index0, null)"
                    ></b-button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div
            v-for="(item0, index0) in menuItems"
            :key="`menupanel-1-${index0}`"
            v-show="activeLevel0 === index0"
            class="catalog-level catalog-level-1"
          >
            <ul class="list-unstyled">
              <li class="catalog-item catalog-item-header">
                <button
                  class="catalog-link"
                  @click="navigateCatalog(0, null, null)"
                >
                  <!-- <svg-icon name="catalog-prev" width="10" height="10" /> -->
                  <span class="mx-auto"> #{{ item0.title }} </span>
                </button>
              </li>
              <li class="catalog-item catalog-item-all">
                <a href="#" class="catalog-link">
                  весь раздел
                </a>
              </li>
              <li
                v-for="(item1, index1) in item0.items"
                :key="`menuitem-1-${index0}-${index1}`"
              >
                <div class="catalog-item">
                  <a href="#" class="catalog-link">
                    {{ item1.title }}
                  </a>
                  <div
                    v-if="item1.items && item1.items.length > 0"
                    class="catalog-next"
                  >
                    <svg-icon name="catalog-next" width="10" height="10" />
                    <b-button
                      variant="link"
                      class="catalog-btn"
                      @click="navigateCatalog(2, index0, index1)"
                    ></b-button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div
            v-for="(item0, index0) in menuItems"
            :key="`menupanel-2-${index0}`"
            v-show="activeLevel0 === index0"
          >
            <div
              v-for="(item1, index1) in item0.items"
              :key="`menupanel-2-${index0}-${index1}`"
              v-show="activeLevel1 === index1"
              class="catalog-level catalog-level-2"
            >
              <ul
                v-if="item1.items && item1.items.length > 0"
                class="list-unstyled"
              >
                <li class="catalog-item catalog-item-header">
                  <button
                    class="catalog-link"
                    @click="navigateCatalog(1, index0, null)"
                  >
                    <span class="mx-auto">
                      {{ item1.title }}
                    </span>
                  </button>
                </li>
                <li
                  v-for="(item2, index2) in item1.items"
                  :key="`menuitem-2-${index0}-${index1}-${index2}`"
                  class="catalog-item"
                >
                  <a href="#" class="catalog-link">
                    {{ item2.title }}
                  </a>
                </li>
              </ul>

              <div v-else>
                <a
                  v-if="item1.banner"
                  :href="item1.banner.link"
                  class="catalog-banner"
                >
                  <img
                    :src="`/images/mainmenu/${item1.banner.img}.jpg`"
                    class="img-fluid"
                  />
                </a>
                <a
                  v-else-if="item0.banner"
                  :href="item0.banner.link"
                  class="catalog-banner"
                >
                  <img
                    :src="`/images/mainmenu/${item0.banner.img}.jpg`"
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      menuLevel: 0,
      activeLevel0: null,
      activeLevel1: null,
      menuItems: [
        {
          title: 'продукты',
          banner: { img: '03', link: '/' },
          items: [
            {
              title: 'молоко, яйца, сыр',
              banner: { img: '01', link: '/' },
              items: [
                { title: 'телятина' },
                { title: 'говядина' },
                { title: 'птица' },
                { title: 'хлеб' },
                { title: 'сладости' },
                { title: 'консервы' },
                { title: 'бакалея' },
                { title: 'замороженные продукты' }
              ]
            },
            {
              title: 'мясо',
              banner: { img: '02', link: '/' },
              items: [
                { title: 'телятина' },
                { title: 'говядина' },
                { title: 'птица' },
                { title: 'хлеб' },
                { title: 'сладости' },
                { title: 'консервы' },
                { title: 'бакалея' },
                { title: 'замороженные продукты' }
              ]
            },
            {
              title: 'рыба и морепродукты',
              banner: { img: '02', link: '/' },
              items: [
                { title: 'телятина' },
                { title: 'говядина' },
                { title: 'птица' },
                { title: 'хлеб' },
                { title: 'сладости' },
                { title: 'консервы' },
                { title: 'бакалея' },
                { title: 'замороженные продукты' }
              ]
            },
            {
              title: 'овощи',
              banner: { img: '02', link: '/' },
              items: [
                { title: 'телятина' },
                { title: 'говядина' },
                { title: 'птица' },
                { title: 'хлеб' },
                { title: 'сладости' },
                { title: 'консервы' },
                { title: 'бакалея' },
                { title: 'замороженные продукты' }
              ]
            },
            {
              title: 'фрукты',
              banner: { img: '02', link: '/' },
              items: [
                { title: 'телятина' },
                { title: 'говядина' },
                { title: 'птица' },
                { title: 'хлеб' },
                { title: 'сладости' },
                { title: 'консервы' },
                { title: 'бакалея' },
                { title: 'замороженные продукты' }
              ]
            },
            {
              title: 'зелень',
              banner: { img: '02', link: '/' },
              items: [
                { title: 'телятина' },
                { title: 'говядина' },
                { title: 'птица' },
                { title: 'хлеб' },
                { title: 'сладости' },
                { title: 'консервы' },
                { title: 'бакалея' },
                { title: 'замороженные продукты' }
              ]
            },
            {
              title: 'хлеб',
              banner: { img: '02', link: '/' },
              items: [
                { title: 'телятина' },
                { title: 'говядина' },
                { title: 'птица' },
                { title: 'хлеб' },
                { title: 'сладости' },
                { title: 'консервы' },
                { title: 'бакалея' },
                { title: 'замороженные продукты' }
              ]
            },
            {
              title: 'сладости',
              banner: { img: '02', link: '/' },
              items: [
                { title: 'телятина' },
                { title: 'говядина' },
                { title: 'птица' },
                { title: 'хлеб' },
                { title: 'сладости' },
                { title: 'консервы' },
                { title: 'бакалея' },
                { title: 'замороженные продукты' }
              ]
            },
            {
              title: 'консервы',
              banner: { img: '02', link: '/' },
              items: [
                { title: 'телятина' },
                { title: 'говядина' },
                { title: 'птица' },
                { title: 'хлеб' },
                { title: 'сладости' },
                { title: 'консервы' },
                { title: 'бакалея' },
                { title: 'замороженные продукты' }
              ]
            },
            {
              title: 'бакалея',
              banner: { img: '02', link: '/' },
              items: [
                { title: 'телятина' },
                { title: 'говядина' },
                { title: 'птица' },
                { title: 'хлеб' },
                { title: 'сладости' },
                { title: 'консервы' },
                { title: 'бакалея' },
                { title: 'замороженные продукты' }
              ]
            },
            {
              title: 'замороженные продукты',
              banner: { img: '02', link: '/' },
              items: [
                { title: 'телятина' },
                { title: 'говядина' },
                { title: 'птица' },
                { title: 'хлеб' },
                { title: 'сладости' },
                { title: 'консервы' },
                { title: 'бакалея' },
                { title: 'замороженные продукты' }
              ]
            }
          ]
        },
        {
          title: 'хозтовары',
          banner: { img: '03', link: '/' },
          items: [
            {
              title: 'молоко, яйца, сыр',
              banner: { img: '01', link: '/' },
              items: [
                { title: 'телятина' },
                { title: 'говядина' },
                { title: 'птица' },
                { title: 'хлеб' },
                { title: 'сладости' },
                { title: 'консервы' },
                { title: 'бакалея' },
                { title: 'замороженные продукты' }
              ]
            },
            {
              title: 'мясо',
              banner: { img: '02', link: '/' },
              items: []
            },
            {
              title: 'рыба и морепродукты',
              banner: { img: '02', link: '/' },
              items: []
            },
            {
              title: 'овощи',
              banner: { img: '02', link: '/' },
              items: [
                { title: 'телятина' },
                { title: 'говядина' },
                { title: 'птица' },
                { title: 'хлеб' },
                { title: 'сладости' },
                { title: 'консервы' },
                { title: 'бакалея' },
                { title: 'замороженные продукты' }
              ]
            },
            {
              title: 'фрукты',
              banner: { img: '02', link: '/' },
              items: []
            },
            {
              title: 'зелень',
              banner: { img: '02', link: '/' },
              items: []
            },
            {
              title: 'хлеб',
              banner: { img: '02', link: '/' },
              items: []
            },
            {
              title: 'сладости',
              banner: { img: '02', link: '/' },
              items: []
            },
            {
              title: 'консервы',
              banner: { img: '02', link: '/' },
              items: ['телятина', 'говядина', 'птица']
            },
            {
              title: 'бакалея',
              banner: { img: '02', link: '/' },
              items: [
                { title: 'телятина' },
                { title: 'говядина' },
                { title: 'птица' },
                { title: 'хлеб' },
                { title: 'сладости' },
                { title: 'консервы' },
                { title: 'бакалея' },
                { title: 'замороженные продукты' }
              ]
            },
            {
              title: 'замороженные продукты',
              banner: { img: '02', link: '/' },
              items: []
            }
          ]
        },
        {
          title: 'гигиена',
          banner: { img: '02', link: '/' },
          items: []
        },
        {
          title: 'косметика',
          banner: { img: '01', link: '/' },
          items: []
        },
        {
          title: 'дача',
          banner: { img: '03', link: '/' },
          items: []
        },
        {
          title: 'дети',
          items: []
        },
        {
          title: 'спорт',
          items: [
            {
              title: 'молоко, яйца, сыр',
              banner: { img: '01', link: '/' },
              items: []
            },
            {
              title: 'мясо',
              banner: { img: '02', link: '/' },
              items: []
            },
            {
              title: 'рыба и морепродукты',
              banner: { img: '02', link: '/' }
            },
            {
              title: 'овощи',
              banner: { img: '02', link: '/' },
              items: [
                { title: 'телятина' },
                { title: 'говядина' },
                { title: 'птица' },
                { title: 'хлеб' },
                { title: 'сладости' },
                { title: 'консервы' },
                { title: 'бакалея' },
                { title: 'замороженные продукты' }
              ]
            },
            {
              title: 'замороженные продукты',
              banner: { img: '01', link: '/' },
              items: [
                { title: 'телятина' },
                { title: 'говядина' },
                { title: 'птица' },
                { title: 'хлеб' },
                { title: 'сладости' },
                { title: 'консервы' }
              ]
            }
          ]
        },
        {
          title: 'зоотовары',
          items: [
            {
              title: 'молоко, яйца, сыр',
              banner: { img: '01', link: '/' },
              items: []
            },
            {
              title: 'мясо',
              banner: { img: '02', link: '/' },
              items: []
            },
            {
              title: 'рыба и морепродукты',
              banner: { img: '02', link: '/' }
            },
            {
              title: 'овощи',
              banner: { img: '02', link: '/' },
              items: [
                { title: 'телятина' },
                { title: 'говядина' },
                { title: 'птица' },
                { title: 'хлеб' },
                { title: 'сладости' },
                { title: 'консервы' },
                { title: 'бакалея' },
                { title: 'замороженные продукты' }
              ]
            },
            {
              title: 'замороженные продукты',
              banner: { img: '01', link: '/' },
              items: [
                { title: 'телятина' },
                { title: 'говядина' },
                { title: 'птица' },
                { title: 'хлеб' },
                { title: 'сладости' },
                { title: 'консервы' }
              ]
            }
          ]
        },
        {
          title: 'праздник',
          items: []
        },
        {
          title: 'канцтовары',
          items: []
        },
        {
          title: 'аптека',
          items: []
        }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    navigateCatalog(level, index0, index1) {
      this.menuLevel = level
      this.activeLevel0 = index0
      this.activeLevel1 = index1
    }
  }
}
</script>
