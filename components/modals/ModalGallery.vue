<template>
  <b-modal
    :id="id"
    size="xl"
    modal-class="modal-gallery"
    hide-header
    hide-footer
    lazy
  >
    <template v-slot:default="{ close }">
      <b-row>
        <b-col xl="1" class="d-none d-xl-block">
          <div class="swiper swiper-catalog-thumbs">
            <swiper ref="swiperThumbs" :options="swiperThumbsOptions">
              <swiper-slide
                v-for="(slide, index) in items"
                :key="`slide-thumb-${index}`"
              >
                <b-link
                  href="#"
                  class="slide-link"
                  @click="swiperSlideTo(index)"
                >
                  <img
                    :src="`/images/catalog/${slide}-thumb.jpg`"
                    class="slide-img"
                  />
                </b-link>
              </swiper-slide>
            </swiper>
          </div>
        </b-col>
        <b-col xl="11">
          <div class="item-gallery-wrapper">
            <div class="swiper swiper-catalog swiper-catalog-fullsize">
              <swiper ref="swiperMain" :options="swiperOptions">
                <swiper-slide
                  v-for="(slide, index) in items"
                  :key="`slide-${index}`"
                >
                  <img
                    :src="`/images/catalog/${slide}-full.jpg`"
                    class="slide-img"
                  />
                </swiper-slide>
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
          </div>
          <b-button-close @click="close">
            <svg-icon name="close" width="14" height="14" />
          </b-button-close>
        </b-col>
      </b-row>
    </template>
  </b-modal>
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
    id: {
      type: String,
      default: 'modalGallery'
    },
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOptions: {
        loop: false,
        grabCursor: true,
        preloadImages: false,
        lazy: true,
        pagination: {
          el: '.swiper-catalog-pagination',
          type: 'bullets'
        }
      },
      swiperThumbsOptions: {
        loop: false,
        direction: 'vertical',
        slidesPerView: 5,
        spaceBetween: 16
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.swiperMain.$swiper
    }
  },
  methods: {
    swiperSlideTo(index) {
      this.swiper.slideTo(index)
    },
    swiperNext() {
      this.swiper.slideNext()
    },
    swiperPrev() {
      this.swiper.slidePrev()
    }
  }
}
</script>
