<template>
  <div class="card card-product card-liked-product">
    <div class="card-img-wrapper">
      <div class="embed-responsive embed-responsive-4by3">
        <div class="embed-responsive-item d-flex">
          <img :src="item.img" class="card-img" />
        </div>
      </div>
    </div>
    <div class="card-body">
      <b-link to="/catalog/item" class="item-title">
        {{ item.title }}
      </b-link>
      <div class="item-price">
        <p class="caption">
          Цена за&nbsp;1&nbsp;уп.
        </p>
        <p class="price">
          <span :class="{ 'mr-4 text-striked': item.discount }">
            {{ item.price }}&nbsp;р.
          </span>
          <span v-if="item.discount" class="text-danger">
            {{ finalPrice }}&nbsp;р.
          </span>
        </p>
      </div>
    </div>
    <div class="card-footer swiper-no-swiping">
      <transition name="fade" mode="out-in">
        <div v-if="!inCart" key="button" class="flex-fill">
          <b-button variant="primary" class="btn-cart" @click="addToCart">
            <svg-icon name="cart" width="22" height="20" />
            <span class="caption">
              В&nbsp;корзину
            </span>
          </b-button>
        </div>
        <div v-else key="spinbutton" class="btn-cart">
          <b-form-spinbutton v-model="count" min="0" @change="setCount">
          </b-form-spinbutton>
        </div>
      </transition>
      <b-dropdown
        v-model="showDropdown"
        variant="link"
        class="dropdown-liked-rating mr-2 ml-auto"
        toggle-class="p-0"
        no-caret
        dropup
        right
        block
      >
        <template v-slot:button-content>
          <svg-icon name="smile-5" width="32" height="32" />
        </template>
        <b-dropdown-item-button v-for="i in 5" :key="`dd-item-${i}`">
          {{ i }}
        </b-dropdown-item-button>
      </b-dropdown>
    </div>
    <b-link
      to="/catalog/item"
      target="_blank"
      class="card-badge card-badge-review"
    >
      <span class="icon">+</span>
      <span class="caption">Оставить отзыв</span>
    </b-link>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    hasRemove: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      inCart: false,
      inFav: false,
      count: 1
    }
  },
  computed: {
    finalPrice() {
      let result = this.item.price
      if (this.item.discount)
        result =
          Math.round(
            parseInt(this.item.price, 10) * (100 - this.item.discount)
          ) / 100
      return result
    }
  },
  methods: {
    addToCart() {
      if (this.count < 1) this.count = 1
      this.inCart = true
    },
    setCount() {
      if (this.count < 1) this.inCart = false
    }
  }
}
</script>
