<template>
  <div class="swiper swiper-reviews">
    <p class="section-title">
      {{ title }}
    </p>
    <b-row>
      <b-col cols="10" md="12" offset="1" offset-md="0">
        <swiper ref="swiperReviews" :options="swiperOptions">
          <swiper-slide v-for="(slide, index) in items" :key="`slide-${index}`">
            <div class="card card-review">
              <img v-if="slide.img" :src="slide.img" class="card-img" />
              <div v-else class="card-img">ВК</div>
              <div class="card-body">
                <div class="card-rating">
                  <svg-icon
                    v-for="i in slide.rating"
                    :key="`review-rating-${i}-full`"
                    name="rating"
                    width="13"
                    height="13"
                    class="icon-rating icon-rating-full"
                  />
                  <svg-icon
                    v-for="i in 5 - slide.rating"
                    :key="`review-rating-${i}`"
                    name="rating"
                    width="13"
                    height="13"
                    class="icon-rating"
                  />
                </div>
                <p class="font-size-3 font-weight-medium mb-1">
                  {{ slide.author }}
                </p>
                <p class="mb-0">
                  {{ slide.content }}
                </p>
              </div>
            </div>
          </swiper-slide>
          <div
            slot="pagination"
            class="swiper-pagination swiper-reviews-pagination"
          ></div>
        </swiper>
        <div
          class="swiper-nav swiper-button-prev d-md-none"
          @click="swiperPrev"
        ></div>
        <div
          class="swiper-nav swiper-button-next d-md-none"
          @click="swiperNext"
        ></div>
      </b-col>
    </b-row>
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
        pagination: {
          el: '.swiper-reviews-pagination',
          type: 'bullets'
        },
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
      return this.$refs.swiperReviews.$swiper
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
