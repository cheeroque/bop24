<template>
  <div
    ref="searchWrapper"
    :class="{ expanded: fullscreen && isFocused }"
    class="dropdown-search-wrapper"
  >
    <b-button
      v-if="fullscreen"
      v-show="isFocused"
      variant="link"
      class="p-2 fill-gray-500 no-focus-ring d-md-none"
      @click="releaseFocus"
    >
      <svg-icon name="search-close" width="14" height="14" />
    </b-button>
    <div class="search-input-wrapper">
      <b-form-input
        v-if="fullscreen"
        ref="seachfieldFullscreen"
        key="seachfield-fullscreen"
        v-model="query"
        size="sm"
        type="search"
        @focus="onFocus"
        @update="toggleDropdown"
      ></b-form-input>
      <b-form-input
        v-else
        key="seachfield-default"
        v-model="query"
        type="search"
        @update="toggleDropdown"
      ></b-form-input>
      <div v-show="showSuggestion" class="overlay-suggestion">
        <span class="query">
          {{ query }}
        </span>
        <span class="suggestion">
          {{ suggestion }}
        </span>
      </div>
    </div>
    <b-button
      v-if="fullscreen"
      v-show="isFocused"
      variant="link"
      class="p-2 fill-gray-500 no-focus-ring d-md-none"
      @click="clearSearch"
    >
      <svg-icon name="search-clear" width="14" height="14" />
    </b-button>
    <transition name="fade">
      <div v-if="showDropdown" class="dropdown-search">
        <b-row>
          <b-col cols="12" md="5" lg="3" order-md="2" class="mb-2 mb-md-0">
            <p class="font-weight-medium text-secondary d-none d-md-block">
              Категории
            </p>
            <ul class="list-unstyled list-categories">
              <li class="list-item">
                <b-link to="/catalog/category" class="list-link">
                  <img
                    src="/images/catalog/countryhouse.jpg"
                    class="item-img"
                  />
                  <span class="caption">
                    #дача
                  </span>
                </b-link>
              </li>
              <li class="list-item">
                <b-link to="/catalog/category" class="list-link">
                  <img src="/images/catalog/household.jpg" class="item-img" />
                  <span class="caption">
                    #хозтовары
                  </span>
                </b-link>
              </li>
            </ul>
          </b-col>
          <b-col cols="12" md="7" lg="4" order-md="1" class="mb-2 mb-md-0">
            <ul class="list-unstyled">
              <li class="list-item">
                <b-link to="/catalog/item" class="list-link">
                  весы напольные
                </b-link>
              </li>
              <li class="list-item">
                <b-link to="/catalog/item" class="list-link">
                  весы кухонные
                </b-link>
              </li>
              <li class="list-item">
                <b-link to="/catalog/item" class="list-link">
                  весы бренд
                </b-link>
              </li>
            </ul>
          </b-col>
          <b-col cols="12" lg="5" order-md="3">
            <p class="font-weight-medium text-secondary">
              Популярные товары
            </p>
            <ul class="list-unstyled list-popular">
              <li class="list-item">
                <b-link to="/catalog/item" class="list-link">
                  <img src="/images/products/scale.jpg" class="item-img" />
                  <span class="caption">
                    Напольные весы Xiaomi Mi Smart Scale 2, White
                  </span>
                </b-link>
              </li>
              <li class="list-item">
                <b-link to="/catalog/category" class="list-link">
                  <img src="/images/products/scale.jpg" class="item-img" />
                  <span class="caption">
                    Напольные весы Xiaomi Mi Smart Scale 2, White
                  </span>
                </b-link>
              </li>
              <li class="list-item">
                <b-link to="/catalog/category" class="list-link">
                  <img src="/images/products/scale.jpg" class="item-img" />
                  <span class="caption">
                    Напольные весы Xiaomi Mi Smart Scale 2, White
                  </span>
                </b-link>
              </li>
            </ul>
          </b-col>
        </b-row>
      </div>
    </transition>
    <transition name="fade">
      <div
        v-if="fullscreen && (showDropdown || isFocused)"
        class="search-backdrop"
        @click="releaseFocus"
      ></div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'md'
    },
    fullscreen: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      isFocused: false,
      showDropdown: false,
      showSuggestion: false,
      suggestion: null,
      query: null,
      wrapperStyle: {
        top: null,
        right: null,
        bottom: null,
        left: null
      },
      onClickOutside: null
    }
  },
  methods: {
    onFocus(event) {
      this.isFocused = true
    },
    toggleDropdown(value) {
      if (value && value.length > 0) {
        this.showDropdown = true
        this.showSuggestion = true
        this.suggestion = 'одсказка'
        this.onClickOutside = document.addEventListener('click', (event) => {
          const input = event.target.closest(
            '.search-input-wrapper .form-control'
          )
          const dropdown = event.target.closest('.dropdown-search')
          const link = event.target.closest('.dropdown-search .list-link')
          const backdrop = event.target.closest('.search-backdrop')
          if ((!dropdown && !input) || link || backdrop) {
            this.releaseFocus()
          }
        })
      } else {
        document.removeEventListener('click', this.onClickOutside)
        this.closeDropdown()
      }
    },
    closeDropdown() {
      this.showDropdown = false
      this.query = null
      this.showSuggestion = false
      this.suggestion = null
    },
    clearSearch() {
      this.query = null
      this.showSuggestion = false
      this.suggestion = null
      this.$refs.seachfieldFullscreen.$el.focus()
    },
    releaseFocus() {
      this.isFocused = false
      this.closeDropdown()
    }
  }
}
</script>
