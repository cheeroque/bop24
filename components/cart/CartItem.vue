<template>
  <div :class="{ 'cart-item-removed': isRemoved }" class="cart-item">
    <div class="cart-item-img">
      <img :src="`/images/catalog/${item.img}.jpg`" />
    </div>
    <div class="cart-item-body">
      <div class="cart-item-content">
        <p class="font-weight-medium mb-2">
          <b-link to="/catalog/item" class="text-reset text-decoration-none">
            {{ item.title }}
          </b-link>
        </p>
        <p class="text-gray-500 mb-0 d-none d-lg-block">
          {{ item.vendorCode }}
        </p>
      </div>
      <div class="cart-item-controls">
        <p
          :class="item.stock ? 'text-success' : 'text-danger'"
          class="stock"
          v-text="item.stock ? 'В\xA0наличии' : 'Нет в\xA0наличии'"
        ></p>
        <b-form-spinbutton v-model="item.count" inline></b-form-spinbutton>
        <p class="price">{{ item.price }}&nbsp;р.</p>
      </div>
    </div>
    <div class="cart-item-remove">
      <b-button variant="link" @click="toggleRemove">
        <svg-icon name="close" width="14" height="14" />
      </b-button>
    </div>
    <transition name="fade">
      <div v-if="isRemoved" class="cart-item-overlay">
        <div class="cart-item-body">
          <div class="cart-item-content">
            <p class="font-size-base font-weight-bold mb-lg-0">
              Вы удалили товар
            </p>
            <p class="font-weight-medium mb-lg-0">
              <b-link href="#" class="text-gray-500" @click="cancelRemove">
                Восстановить
              </b-link>
            </p>
            <p class="mb-0">
              <b-link href="#" class="text-primary" @click="moveToFavorites">
                Переместить в&nbsp;избранное
              </b-link>
            </p>
          </div>
        </div>
        <div class="cart-item-remove">
          <b-button variant="link" @click="removeItem">
            <svg-icon name="close" width="14" height="14" />
          </b-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isRemoved: false,
      removeDelay: null
    }
  },
  methods: {
    toggleRemove() {
      this.isRemoved = true
      this.removeDelay = setTimeout(() => {
        this.removeItem()
      }, 5000)
    },
    cancelRemove() {
      clearTimeout(this.removeDelay)
      this.isRemoved = false
    },
    moveToFavorites() {
      this.removeItem()
    },
    removeItem() {
      this.$emit('remove')
      this.cancelRemove()
    }
  }
}
</script>
