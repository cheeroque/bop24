<template>
  <div class="swiper swiper-main">
    <swiper ref="swiperMain" :options="swiperOptions">
      <swiper-slide v-for="(slide, index) in items" :key="`slide-${index}`">
        <div :style="slide.style" class="slide-wrapper">
          <b-container class="slide-wrapper-container">
            <img :src="slide.img" class="slide-img" />
            <div class="slide-content">
              <!-- eslint-disable-next-line vue/no-v-html -->
              <div class="slide-text" v-html="slide.text"></div>
              <b-button :href="slide.link" variant="white" class="slide-link">
                Подробнее
              </b-button>
            </div>
          </b-container>
        </div>
      </swiper-slide>
      <div
        slot="pagination"
        class="swiper-pagination swiper-main-pagination"
      ></div>
      <div
        slot="button-prev"
        class="swiper-nav swiper-button-prev"
        @click="swiperPrev"
      ></div>
      <div
        slot="button-next"
        class="swiper-nav swiper-button-next"
        @click="swiperNext"
      ></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        grabCursor: true,
        pagination: {
          el: '.swiper-main-pagination',
          type: 'bullets'
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.swiperMain.$swiper
    }
  },
  methods: {
    swiperNext() {
      this.swiper.slideNext()
    },
    swiperPrev() {
      this.swiper.slidePrev()
    }
  }
}
</script>
