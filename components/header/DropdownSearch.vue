<template>
  <div
    ref="searchWrapper"
    :class="{ expanded: isFocused }"
    class="dropdown-search-wrapper"
  >
    <b-button
      v-if="isFocused"
      variant="link"
      class="p-2 fill-dark no-focus-ring d-md-none"
      @click="closeDropdown"
    >
      <svg-icon name="catalog-prev" width="14" height="14" />
    </b-button>
    <div class="search-input-wrapper">
      <b-form-input
        v-model="query"
        :size="size"
        type="search"
        @focus="onFocus"
        @blur="onFocusOut"
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
      v-if="isFocused"
      variant="link"
      class="p-2 fill-dark no-focus-ring d-md-none"
      @click="clearSearch"
    >
      <svg-icon name="close" width="14" height="14" />
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
        v-if="isFocused"
        class="search-backdrop"
        @click="closeDropdown"
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
    }
  },
  data() {
    return {
      isFocused: false,
      query: null,
      wrapperStyle: {
        top: null,
        right: null,
        bottom: null,
        left: null
      }
    }
  },
  computed: {
    showDropdown() {
      return !!this.query
    },
    suggestion() {
      if (this.query && this.query.length > 0) return 'подсказка'
      else return false
    },
    showSuggestion() {
      return !!this.query && !!this.suggestion
    }
  },
  methods: {
    onFocus(e) {
      console.log(e)
      /* const wrapper = this.$refs.searchWrapper
      const box = wrapper.getBoundingClientRect()
      console.log(box)
      wrapper.classList.add('expanding')
      this.wrapperStyle.top = `${box.top}px`
      this.wrapperStyle.right = `${box.right}px`
      this.wrapperStyle.left = `${box.left}px`
      this.$nextTick(() => {
        wrapper.classList.remove('expanding')
        wrapper.classList.add('expanded')
        this.isFocused = true
      }) */
      this.isFocused = true
    },
    onFocusOut() {
      /* const wrapper = this.$refs.searchWrapper
      this.isFocused = false
      wrapper.classList.add('expanding')
      this.$nextTick(() => {
        wrapper.classList.remove('expanding')
        wrapper.classList.remove('expanded')
        this.wrapperStyle = {
          top: null,
          right: null,
          bottom: null,
          left: null
        }
      }) */
      /* this.isFocused = false */
    },
    closeDropdown() {
      this.clearSearch()
      this.isFocused = false
    },
    clearSearch() {
      this.query = null
    }
  }
}
</script>
