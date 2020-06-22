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
        <b-row class="mb-md-2">
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
                    <b-link
                      href="#"
                      class="embed-responsive embed-responsive-5by4 link-lightbox"
                      @click="showImgModal"
                    >
                      <img
                        :src="`/images/catalog/${slide}.jpg`"
                        class="embed-responsive-item"
                      />
                    </b-link>
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
                <dropdown-share class="mx-auto mt-auto"></dropdown-share>
              </b-col>
              <b-col lg="6" class="mb-3 mb-lg-0 d-none d-lg-block">
                <div class="card card-white card-catalog-item-controls">
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
                    <dropdown-share class="mx-auto mt-auto"></dropdown-share>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <b-row class="d-none d-md-block">
          <b-col xl="11" offset-xl="1">
            <b-form-radio-group
              v-model="tabIndex"
              buttons
              button-variant="outline-light"
              class="product-tabs"
            >
              <b-form-radio id="specsTab" :value="0">
                Характеристика
              </b-form-radio>
              <b-form-radio id="aboutTab" :value="1">
                О&nbsp;товаре
              </b-form-radio>
              <b-form-radio id="reviewsTab" :value="2">
                Отзывы
              </b-form-radio>
              <b-form-radio id="deliveryTab" :value="3">
                Доставка и&nbsp;возврат
              </b-form-radio>
              <b-form-radio id="documentationTab" :value="4">
                Документация
              </b-form-radio>
            </b-form-radio-group>
          </b-col>
        </b-row>

        <div class="tab-content product-tabs-content">
          <div :class="{ 'active show': tabIndex === 0 }" class="tab-pane fade">
            <b-row class="tab-inner">
              <b-col lg="6">
                <table class="table table-striped table-borderless">
                  <tbody>
                    <tr v-for="(row, R) in tabs.specs" :key="`row-${R}`">
                      <td>{{ row.title }}</td>
                      <td>{{ row.val }}</td>
                    </tr>
                  </tbody>
                </table>
              </b-col>
              <b-col lg="6">
                <table class="table table-striped table-borderless">
                  <tbody>
                    <tr v-for="(row, R) in tabs.specs" :key="`row-double-${R}`">
                      <td>{{ row.title }}</td>
                      <td>{{ row.val }}</td>
                    </tr>
                  </tbody>
                </table>
              </b-col>
            </b-row>
          </div>
          <div :class="{ 'active show': tabIndex === 1 }" class="tab-pane fade">
            <b-row class="tab-inner">
              <b-col lg="10" xl="7" offset-xl="1">
                <p v-for="(paragraph, P) in tabs.about" :key="`p-${P}`">
                  {{ paragraph }}
                </p>
              </b-col>
            </b-row>
          </div>
          <div
            :class="{ 'active show': tabIndex === 2 }"
            class="tab-pane fade show-xs"
          >
            <b-row class="tab-inner">
              <b-col>
                <p class="font-size-4 font-weight-medium mb-4 d-md-none">
                  Отзывы
                </p>
                <b-row>
                  <b-col md="7" lg="8" offset-xl="1">
                    <b-row align-v="center" class="mb-3 mb-md-4 mb-lg-5">
                      <b-col cols="6" lg="8" xl="7">
                        <div class="reviews-summary">
                          <p class="reviews-count">
                            <b-link to="/catalog/reviews" class="text-underline"
                              >23</b-link
                            >&nbsp;отзыва о&nbsp;товаре
                          </p>
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
                            <span class="rating-caption">
                              Отличный товар
                            </span>
                          </div>
                        </div>
                      </b-col>
                      <b-col cols="6" lg="4" xl="3" class="align-self-start">
                        <b-button
                          variant="outline-primary"
                          block
                          @click="addReview"
                        >
                          Оставить отзыв
                        </b-button>
                      </b-col>
                    </b-row>
                    <div class="d-md-none mb-3">
                      <review-filter-by-rating
                        link="/catalog/reviews"
                        :count="reviewStars"
                      ></review-filter-by-rating>
                    </div>
                    <review-item
                      v-for="(review, R) in tabs.reviews"
                      :key="`review-${R}`"
                      :item="review"
                    >
                    </review-item>
                  </b-col>
                  <b-col md="5" lg="4" xl="3" class="d-none d-md-block">
                    <review-filter-by-rating
                      link="/catalog/reviews"
                      :count="reviewStars"
                    ></review-filter-by-rating>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </div>
          <div :class="{ 'active show': tabIndex === 3 }" class="tab-pane fade">
            <b-row class="tab-inner">
              <b-col>
                Доставка и&nbsp;возврат
              </b-col>
            </b-row>
          </div>
          <div :class="{ 'active show': tabIndex === 4 }" class="tab-pane fade">
            <b-row class="tab-inner">
              <b-col xl="11" offset-xl="1">
                <ul class="list-unstyled">
                  <li
                    v-for="(doc, D) in tabs.documentation"
                    :key="`doc-${D}`"
                    class="mb-2"
                  >
                    <a
                      :href="`/uploads/${doc.file}`"
                      class="media align-items-center text-reset font-weight-medium"
                    >
                      <div class="align-self-start mr-3">
                        <svg-icon name="filetypes/pdf" width="18" height="23" />
                      </div>
                      <div class="media-body">
                        {{ doc.title }}
                      </div>
                    </a>
                  </li>
                </ul>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <swiper-products
        id="swiperProductsRecommended"
        :items="productsRecommended"
        title="С этим товаром покупают"
        class="mb-5"
      ></swiper-products>
    </div>

    <b-sidebar
      v-model="showSidebar"
      bg-variant="white"
      class="sidebar-product-info"
      width="100%"
      lazy
      right
      no-header
    >
      <template v-slot:default="{ hide }">
        <header class="b-sidebar-header">
          <span class="sidebar-title">
            Информация о&nbsp;товаре
          </span>
          <b-button-close @click="hide">
            <svg-icon name="close" width="14" height="14" />
          </b-button-close>
        </header>
        <div class="mb-4">
          <p class="font-weight-medium">
            О&nbsp;товаре
          </p>
          <p v-for="(paragraph, P) in tabs.about" :key="`sidebar-about-p-${P}`">
            {{ paragraph }}
          </p>
        </div>
        <div class="mb-4">
          <p class="font-weight-medium">
            Характеристика
          </p>
          <ul class="list-unstyled list-specs">
            <li v-for="(spec, S) in tabs.specs" :key="`sidebar-specs-${S}`">
              <span class="title">{{ spec.title }}</span>
              <span class="spacer spacer-dots"></span>
              <span class="value">{{ spec.val }}</span>
            </li>
          </ul>
        </div>
        <div class="mb-4">
          <p class="font-weight-medium">
            Документация
          </p>
          <ul class="list-unstyled">
            <li
              v-for="(doc, D) in tabs.documentation"
              :key="`sidebar-doc-${D}`"
              class="mb-2"
            >
              <a
                :href="`/uploads/${doc.file}`"
                class="media align-items-center text-reset font-weight-medium"
              >
                <div class="align-self-start mr-3">
                  <svg-icon name="filetypes/pdf" width="18" height="23" />
                </div>
                <div class="media-body">
                  {{ doc.title }}
                </div>
              </a>
            </li>
          </ul>
        </div>
      </template>
    </b-sidebar>
    <modal-gallery :items="gallery"></modal-gallery>
    <modal-review></modal-review>
  </main>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import ReviewFilterByRating from '@/components/catalog/ReviewFilterByRating'
import ReviewItem from '@/components/catalog/ReviewItem'
import SwiperProducts from '@/components/home/SwiperProducts'
import DropdownShare from '@/components/core/DropdownShare'
import ModalGallery from '@/components/modals/ModalGallery'
import ModalReview from '@/components/modals/ModalReview'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide,
    ReviewFilterByRating,
    ReviewItem,
    SwiperProducts,
    DropdownShare,
    ModalGallery,
    ModalReview
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
      },
      gallery: ['product', 'product1', 'product2', 'product3'],
      tabIndex: 0,
      tabs: {
        specs: [
          { title: 'Бренд', val: 'Pastificio' },
          { title: 'Масса нетто', val: '100 г' },
          { title: 'Энергетическая ценность', val: '34 кКл' },
          { title: 'Страна-изготовитель', val: 'Индия' },
          { title: 'Размер упаковки', val: '30 × 27 × 5.5' },
          { title: 'Вес в упаковке', val: '108 г' }
        ],
        about: [
          'Основанный в\xA0Бордо в\xA01995\xA0году бренд Caudalie перерабатывает виноградные косточки, которые обычно нерационально выбрасываются во\xA0время сбора урожая, и\xA0получает ценнейшее масло, на\xA0основе которого затем создает свои эффективные инновационные косметические средства. Наша подборка включает питательные увлажняющие кремы, пенки для\xA0умывания, омолаживающие сыворотки, а\xA0также волшебный культовый эликсир красоты, изготовленный из\xA0100%\xA0натуральных ингредиентов.'
        ],
        documentation: [
          { title: 'Сертификат', file: 'certificate.pdf' },
          { title: 'Инструкция', file: 'manual.pdf' }
        ],
        reviews: [
          {
            author: {
              name: 'Павел А.',
              img: 'pavel-a'
            },
            date: '12.10.2020',
            rating: 5,
            content: {
              pros:
                'Основанный в\xA0Бордо в\xA01995\xA0году бренд Caudalie перерабатывает виноградные косточки, которые обычно нерационально выбрасываются во\xA0время сбора урожая, и\xA0получает ценнейшее масло, на\xA0основе которого затем создает свои эффективные инновационные косметические средства.',
              cons: 'Нет.',
              comment:
                'Наша подборка включает питательные увлажняющие кремы, пенки для\xA0умывания, омолаживающие сыворотки, а\xA0также волшебный культовый эликсир красоты, изготовленный из\xA0100%\xA0натуральных ингредиентов.'
            }
          },
          {
            author: {
              name: 'Павел А.',
              img: 'pavel-a'
            },
            date: '12.10.2020',
            rating: 5,
            content: {
              pros:
                'Основанный в\xA0Бордо в\xA01995\xA0году бренд Caudalie перерабатывает виноградные косточки, которые обычно нерационально выбрасываются во\xA0время сбора урожая, и\xA0получает ценнейшее масло, на\xA0основе которого затем создает свои эффективные инновационные косметические средства.',
              cons: 'Нет.',
              comment:
                'Наша подборка включает питательные увлажняющие кремы, пенки для\xA0умывания, омолаживающие сыворотки, а\xA0также волшебный культовый эликсир красоты, изготовленный из\xA0100%\xA0натуральных ингредиентов.'
            },
            comments: [
              {
                author: { name: 'Петр П.', img: 'petr-p' },
                content:
                  'Наша подборка включает питательные увлажняющие кремы, пенки для\xA0умывания, омолаживающие сыворотки, а\xA0также волшебный культовый эликсир красоты, изготовленный из\xA0100%\xA0натуральных ингредиентов.'
              }
            ]
          },
          {
            author: {
              name: 'Павел А.'
            },
            date: '12.10.2020',
            rating: 4,
            content: {
              pros:
                'Основанный в\xA0Бордо в\xA01995\xA0году бренд Caudalie перерабатывает виноградные косточки, которые обычно нерационально выбрасываются во\xA0время сбора урожая, и\xA0получает ценнейшее масло, на\xA0основе которого затем создает свои эффективные инновационные косметические средства.',
              cons: 'Нет.',
              comment:
                'Наша подборка включает питательные увлажняющие кремы, пенки для\xA0умывания, омолаживающие сыворотки, а\xA0также волшебный культовый эликсир красоты, изготовленный из\xA0100%\xA0натуральных ингредиентов.'
            }
          }
        ]
      },
      reviewStars: [12, 4, 2, 4, 1],
      showSidebar: false,
      productsRecommended: [
        {
          title:
            'Макароны без яиц Antico Pastificio “Пенне Дзита Ригате” 500 г',
          price: '162,50',
          rating: 5,
          img: '/images/products/pasta.jpg'
        },
        {
          title:
            'Макароны без яиц Antico Pastificio “Пенне Дзита Ригате” 500 г',
          price: '162,50',
          rating: 4,
          img: '/images/products/pasta.jpg'
        },
        {
          title:
            'Макароны без яиц Antico Pastificio “Пенне Дзита Ригате” 500 г',
          price: '162,50',
          rating: 5,
          img: '/images/products/pasta.jpg'
        },
        {
          title:
            'Макароны без яиц Antico Pastificio “Пенне Дзита Ригате” 500 г',
          price: '162,50',
          rating: 5,
          img: '/images/products/pasta.jpg'
        }
      ]
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
    toggleInfo() {
      this.showSidebar = !this.showSidebar
    },
    showImgModal() {
      this.$bvModal.show('modalGallery')
    },
    addReview() {
      this.$bvModal.show('modalReview')
    }
  }
}
</script>
