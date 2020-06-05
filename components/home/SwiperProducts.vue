<template>
  <div class="swiper swiper-products">
    <b-row class="swiper-header">
      <b-col md="9" xl="10">
        <p class="section-title text-md-left mb-0">
          {{ title }}
        </p>
      </b-col>
      <b-col md="3" xl="2">
        <div class="d-none d-md-flex justify-content-end">
          <div class="swiper-nav swiper-button-prev" @click="swiperPrev"></div>
          <div class="swiper-nav swiper-button-next" @click="swiperNext"></div>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="10" md="12" offset="1" offset-md="0">
        <swiper ref="swiperProducts" :options="swiperOptions">
          <swiper-slide v-for="(slide, index) in items" :key="`slide-${index}`">
            <card-product :item="slide"></card-product>
          </swiper-slide>
        </swiper>
        <div class="d-md-none">
          <div class="swiper-nav swiper-button-prev" @click="swiperPrev"></div>
          <div class="swiper-nav swiper-button-next" @click="swiperNext"></div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import CardProduct from '@/components/cards/CardProduct'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
    CardProduct
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        grabCursor: true,
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.swiperProducts.$swiper
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
