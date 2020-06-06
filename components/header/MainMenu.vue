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
        ref="catalogDropdown"
        :class="`level-${menuLevel}`"
        class="catalog-dropdown"
      >
        <div ref="catalogWrapper" class="catalog-wrapper">
          <div class="catalog-level catalog-level-0">
            <ul class="list-unstyled">
              <li
                v-for="(item0, index0) in menuItems"
                :key="`menuitem-0-${index0}`"
              >
                <div class="catalog-item">
                  <a
                    href="#"
                    class="catalog-link"
                    @mouseenter="
                      hoverCatalog(
                        $event,
                        1,
                        item0.items && item0.items.length > 0 ? index0 : null,
                        null,
                        index0,
                        null
                      )
                    "
                  >
                    #{{ item0.title }}
                  </a>
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
            v-show="activeLevel0 === index0"
            :key="`menupanel-1-${index0}`"
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
                  <a
                    href="#"
                    class="catalog-link"
                    @mouseenter="
                      hoverCatalog(
                        $event,
                        2,
                        index0,
                        item1.items && item1.items.length > 0 ? index1 : null,
                        index0,
                        index1
                      )
                    "
                  >
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
            v-show="activeLevel0 === index0"
            :key="`menupanel-2-${index0}`"
            class="flex-fill"
          >
            <div
              v-for="(item1, index1) in item0.items"
              v-show="activeLevel1 === index1"
              :key="`menupanel-2-${index0}-${index1}`"
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
            </div>
          </div>
          <div v-if="activeBanner" class="catalog-banner-wrapper">
            <a :href="activeBanner.link" class="catalog-banner">
              <img
                :src="`/images/mainmenu/${activeBanner.img}.jpg`"
                class="img-fluid"
              />
            </a>
          </div>

          <b-button-close class="catalog-close" @click="toggleMenu">
            <svg-icon name="close" width="14" height="14" />
          </b-button-close>
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
      hoverLevel0: null,
      activeLevel1: null,
      hoverLevel1: null,
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
  computed: {
    activeBanner() {
      let banner = null
      if (this.hoverLevel0 !== null) {
        banner = this.menuItems[this.hoverLevel0].banner

        if (this.hoverLevel1 !== null) {
          const category = this.menuItems[this.hoverLevel0].items[
            this.hoverLevel1
          ]
          const children = category.items

          if (children && children.length > 0) banner = null
          else banner = category.banner
        }
      }
      return banner
    }
  },
  methods: {
    menuClickOutside() {
      document.addEventListener('click', (e) => {
        const menu = e.target.closest('.catalog-dropdown')
        const menuToggle = e.target.closest('.catalog-toggle')
        const menuLink = e.target.closest(
          '.catalog-item:not(.catalog-item-header) .catalog-link'
        )
        const menuBanner = e.target.closest('.catalog-dropdown .catalog-banner')
        if ((!menu && !menuToggle) || menuLink || menuBanner) {
          this.showMenu = false
          document.removeEventListener('click', this.menuClickOutside)
        }
      })
    },
    toggleMenu() {
      if (!this.showMenu) {
        this.menuLevel = 0
        this.activeLevel0 = null
        this.hoverLevel0 = null
        this.activeLevel1 = null
        this.hoverLevel1 = null
        this.showMenu = true
        this.menuClickOutside()
      } else {
        this.showMenu = false
        document.removeEventListener('click', this.menuClickOutside)
      }
    },
    navigateCatalog(level, index0, index1) {
      this.menuLevel = level
      this.activeLevel0 = index0
      this.activeLevel1 = index1
    },
    hoverCatalog(event, level, index0, index1, hoverIndex0, hoverIndex1) {
      const target = event.target
      const hover = setTimeout(() => {
        this.navigateCatalog(level, index0, index1)
        this.hoverLevel0 = hoverIndex0
        this.hoverLevel1 = hoverIndex1
      }, 300)
      target.addEventListener('mouseout', () => {
        clearTimeout(hover)
      })
    }
  }
}
</script>
