<template>
  <main>
    <div class="container">
      <b-breadcrumb
        :items="breadcrumbs"
        class="d-none d-md-flex"
      ></b-breadcrumb>

      <div class="d-md-none">
        <b-button
          to="/catalog/subcategory"
          variant="outline-dark"
          class="backlink mb-3 d-md-none"
          block
        >
          <svg-icon name="arrow-backlink" width="19" height="7" />
          <span class="caption">
            мясо
          </span>
        </b-button>
      </div>
    </div>

    <div class="catalog-item-content">
      <div class="container">
        <b-row>
          <b-col xl="1" class="mb-3 d-none d-xl-block">
            <div class="swiper swiper-catalog-thumbs">
              <swiper ref="swiperThumbs" :options="swiperThumbsOptions">
                <swiper-slide
                  v-for="(slide, index) in gallery"
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
          <b-col md="6" lg="5" class="mb-3">
            <div class="item-gallery-wrapper">
              <div class="swiper swiper-catalog">
                <swiper ref="swiperMain" :options="swiperOptions">
                  <swiper-slide
                    v-for="(slide, index) in gallery"
                    :key="`slide-${index}`"
                  >
                    <div class="embed-responsive embed-responsive-5by4">
                      <img
                        :src="`/images/catalog/${slide}.jpg`"
                        class="embed-responsive-item"
                      />
                    </div>
                  </swiper-slide>
                  <div
                    slot="pagination"
                    class="swiper-pagination swiper-catalog-pagination"
                  ></div>
                </swiper>
              </div>
              <div class="card-badge">
                –10%
              </div>
              <b-button
                :class="{ active: inFav }"
                variant="link"
                class="btn-icon btn-fav"
                @click="inFav = !inFav"
              >
                <svg-icon name="heart-fill" width="22" height="20" />
              </b-button>
            </div>
          </b-col>
          <b-col md="6" lg="7" xl="6" class="mb-3">
            <b-row class="h-100">
              <b-col lg="6" class="mb-3 mb-lg-0">
                <div class="rating-wrapper">
                  <p class="vendor-code">
                    Артикул
                  </p>
                  <b-link
                    href="#reviewsTab"
                    class="text-dark mx-auto d-lg-none"
                  >
                    12&nbsp;отзывов
                  </b-link>
                  <div class="card-rating d-lg-none">
                    <svg-icon
                      v-for="i in rating"
                      :key="`star-${i}-full`"
                      name="rating"
                      width="11"
                      height="11"
                      class="icon-rating icon-rating-full"
                    />
                    <svg-icon
                      v-for="i in 5 - rating"
                      :key="`star-${i}`"
                      name="rating"
                      width="11"
                      height="11"
                      class="icon-rating"
                    />
                  </div>
                </div>
                <p class="item-header">
                  Набор специй Antico Pastificio “Пенне Дзита Ригате” 100&nbsp;г
                </p>
                <div class="item-controls">
                  <div class="item-price">
                    <p class="caption">
                      Цена за&nbsp;1&nbsp;уп.
                    </p>
                    <p class="price">
                      <span class="mr-4 text-striked">
                        162,50&nbsp;р.
                      </span>
                      <span class="text-danger">
                        162,50&nbsp;р.
                      </span>
                    </p>
                  </div>
                  <b-row class="mb-3 d-lg-none">
                    <b-col cols="5">
                      <b-form-spinbutton
                        v-model="count"
                        min="1"
                      ></b-form-spinbutton>
                    </b-col>
                    <b-col cols="7">
                      <b-button variant="primary" class="btn-cart">
                        <svg-icon name="cart" width="22" height="20" />
                        <span class="caption">
                          В&nbsp;корзину
                        </span>
                      </b-button>
                    </b-col>
                  </b-row>
                </div>
                <b-row align-v="center">
                  <b-col cols="5" lg="12">
                    <p class="stock-info text-success">
                      В&nbsp;наличии
                    </p>
                  </b-col>
                  <b-col cols="7" class="d-lg-none">
                    <p class="bonus-info">
                      15&nbsp;баллов за&nbsp;покупку
                    </p>
                  </b-col>
                </b-row>
                <b-button
                  variant="outline-dark"
                  class="btn-info-toggle"
                  block
                  @click="toggleInfo"
                >
                  Информация о&nbsp;товаре
                </b-button>
                <div class="delivery-info mb-4">
                  <p>
                    Доставка в&nbsp;<b-link href="#">г.&nbsp;Москва</b-link>
                  </p>
                  <p>
                    <span class="text-muted">
                      Самовывоз,
                    </span>
                    20&nbsp;мая
                  </p>
                  <p>
                    <span class="text-muted">
                      Доставка курьером,
                    </span>
                    22&nbsp;мая
                  </p>
                </div>
                <b-button variant="outline-dark" class="btn-share">
                  <span class="caption">
                    Поделиться
                  </span>
                  <svg-icon name="share" width="17" height="9" />
                </b-button>
              </b-col>
              <b-col lg="6" class="mb-3 mb-lg-0 d-none d-lg-block">
                <div class="card card-catalog-item-controls">
                  <div class="card-body">
                    <div class="rating-wrapper">
                      <div class="card-rating">
                        <svg-icon
                          v-for="i in rating"
                          :key="`star-${i}-full`"
                          name="rating"
                          width="11"
                          height="11"
                          class="icon-rating icon-rating-full"
                        />
                        <svg-icon
                          v-for="i in 5 - rating"
                          :key="`star-${i}`"
                          name="rating"
                          width="11"
                          height="11"
                          class="icon-rating"
                        />
                      </div>
                      <b-link href="#reviewsTab" class="text-dark ml-auto">
                        12&nbsp;отзывов
                      </b-link>
                    </div>
                    <div class="item-price">
                      <p class="caption">
                        Цена за&nbsp;1&nbsp;уп.
                      </p>
                      <p class="price">
                        <span class="mr-4 text-striked">
                          162,50&nbsp;р.
                        </span>
                        <span class="text-danger">
                          162,50&nbsp;р.
                        </span>
                      </p>
                    </div>
                    <b-row align-v="center" class="mb-3 mx-n2">
                      <b-col cols="5" xl="6" class="px-2">
                        <p class="count-caption mb-0">
                          Количество
                        </p>
                      </b-col>
                      <b-col cols="7" xl="6" class="px-2">
                        <b-form-spinbutton
                          v-model="count"
                          min="1"
                        ></b-form-spinbutton>
                      </b-col>
                    </b-row>
                    <div class="btn-cart-wrapper">
                      <b-button variant="primary" class="btn-cart">
                        <svg-icon name="cart" width="22" height="20" />
                        <span class="caption">
                          В&nbsp;корзину
                        </span>
                      </b-button>
                      <b-button
                        :class="{ active: inFav }"
                        variant="link"
                        class="btn-fav"
                        @click="inFav = !inFav"
                      >
                        <svg-icon name="heart-fill" width="22" height="20" />
                      </b-button>
                    </div>
                    <p class="bonus-info">
                      15&nbsp;баллов за&nbsp;покупку
                    </p>
                    <b-button variant="outline-dark" class="btn-share">
                      <span class="caption">
                        Поделиться
                      </span>
                      <svg-icon name="share" width="17" height="9" />
                    </b-button>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </div>
  </main>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Главная', href: '/' },
        { text: 'Каталог', href: '/catalog' },
        { text: 'Продукты', href: '/catalog/category' },
        { text: 'Мясо', to: '/catalog/subcategory', active: true }
      ],
      rating: 4,
      count: 1,
      inFav: false,
      swiperOptions: {
        loop: true,
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
      },
      gallery: ['product', 'product1', 'product2', 'product3']
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
    }
  }
}
</script>
