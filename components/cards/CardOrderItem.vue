<template>
  <div class="card card-order-item">
    <b-row class="mx-n2">
      <b-col cols="3" lg="2" class="px-2 pr-lg-4">
        <div class="card-img-wrapper embed-responsive embed-responsive-1by1">
          <div class="embed-responsive-item d-flex">
            <img :src="`/images/products/${item.img}.jpg`" class="card-img" />
          </div>
        </div>
        <div class="text-center mt-1 d-lg-none">
          <div class="card-rating d-inline-flex">
            <svg-icon
              v-for="i in item.rating"
              :key="`star-${i}-full`"
              name="rating"
              width="11"
              height="11"
              class="icon-rating icon-rating-full"
            />
            <svg-icon
              v-for="i in 5 - item.rating"
              :key="`star-${i}`"
              name="rating"
              width="11"
              height="11"
              class="icon-rating"
            />
          </div>
        </div>
      </b-col>
      <b-col cols="9" lg="10" class="px-2 pl-lg-0">
        <div class="card-body">
          <b-row align-v="center" class="h-100">
            <b-col cols="12" lg="5" class="mb-2 mb-lg-auto">
              <div class="card-rating d-none d-lg-flex">
                <svg-icon
                  v-for="i in item.rating"
                  :key="`star-${i}-full`"
                  name="rating"
                  width="11"
                  height="11"
                  class="icon-rating icon-rating-full"
                />
                <svg-icon
                  v-for="i in 5 - item.rating"
                  :key="`star-${i}`"
                  name="rating"
                  width="11"
                  height="11"
                  class="icon-rating"
                />
              </div>
              <p class="font-size-lg-2 font-weight-medium mb-0">
                {{ item.title }}
              </p>
            </b-col>
            <b-col cols="12" lg="4">
              <div
                class="d-flex flex-column flex-lg-column-reverse text-gray-700"
              >
                <p class="mb-2 mb-lg-0">
                  Количество:
                  <span class="font-size-2 font-weight-medium text-secondary">
                    {{ item.count }}
                  </span>
                </p>
                <p class="mb-2">
                  Цена:
                  <span class="font-size-2 font-weight-medium text-secondary">
                    {{ item.price }}&nbsp;р.
                  </span>
                </p>
              </div>
            </b-col>
            <b-col cols="12" lg="3">
              <b-row align-v="center" no-gutters>
                <b-col
                  cols="6"
                  lg="12"
                  order-lg="2"
                  class="text-gray-700 text-lg-center"
                >
                  <b-link
                    to="/catalog/item"
                    class="text-reset text-decoration-none"
                  >
                    Оставить отзыв
                  </b-link>
                </b-col>
                <b-col cols="6" lg="12" order-lg="1" class="mb-lg-2">
                  <transition name="fade" mode="out-in">
                    <div v-if="!inCart" key="button" class="flex-fill">
                      <b-button
                        variant="primary"
                        class="btn-cart"
                        block
                        @click="addToCart"
                      >
                        <svg-icon
                          name="cart"
                          width="22"
                          height="20"
                          class="mr-3 my-n1 d-none d-xl-inline-block"
                        />
                        <span class="caption">
                          В&nbsp;корзину
                        </span>
                      </b-button>
                    </div>
                    <div v-else key="spinbutton" class="btn-cart">
                      <b-form-spinbutton
                        v-model="count"
                        min="0"
                        @change="setCount"
                      >
                      </b-form-spinbutton>
                    </div>
                  </transition>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
    <div class="card-img-wrapper"></div>
    <div v-if="item.discount" class="card-badge">–{{ item.discount }}%</div>
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
      inCart: false,
      count: 1
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
