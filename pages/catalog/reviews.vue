<template>
  <main class="container">
    <b-breadcrumb :items="breadcrumbs" class="d-none d-md-flex"></b-breadcrumb>

    <b-row class="catalog-items catalog-items-table mb-4 mb-lg-5">
      <b-col lg="10" xl="9">
        <card-product :item="product"></card-product>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="7" lg="8">
        <b-row align-v="center" class="mb-3 mb-md-4 mb-lg-5">
          <b-col cols="6" lg="8" xl="7">
            <div class="reviews-summary">
              <p class="reviews-count">
                <span class="text-primary">23</span>&nbsp;отзыва о&nbsp;товаре
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
            <b-button variant="outline-primary" block @click="addReview">
              Оставить отзыв
            </b-button>
          </b-col>
        </b-row>
        <div class="d-md-none mb-3">
          <review-filter-by-rating
            :count="reviewStars"
          ></review-filter-by-rating>
        </div>
        <review-item
          v-for="(review, R) in reviews"
          :key="`review-${R}`"
          :item="review"
        >
        </review-item>
      </b-col>
      <b-col md="5" lg="4" class="d-none d-md-block">
        <review-filter-by-rating :count="reviewStars"></review-filter-by-rating>
      </b-col>
    </b-row>
    <modal-review></modal-review>
  </main>
</template>

<script>
import CardProduct from '@/components/cards/CardProduct'
import ReviewFilterByRating from '@/components/catalog/ReviewFilterByRating'
import ReviewItem from '@/components/catalog/ReviewItem'
import ModalReview from '@/components/modals/ModalReview'

export default {
  components: {
    CardProduct,
    ReviewFilterByRating,
    ReviewItem,
    ModalReview
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Главная', href: '/' },
        { text: 'Каталог', href: '/catalog' },
        { text: 'Продукты', href: '/catalog/category' },
        {
          text: 'Набор специй Antico Pastificio “Пенне Дзита Ригате” 100 г',
          to: '/catalog/item'
        },
        { text: 'Отзывы', to: '/catalog/reviews', active: true }
      ],
      rating: 5,
      reviewStars: [12, 4, 2, 4, 1],
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
          },
          comments: [
            {
              author: { name: 'Петр П.', img: 'petr-p' },
              date: '12.10.2020',
              content:
                'Наша подборка включает питательные увлажняющие кремы, пенки для\xA0умывания, омолаживающие сыворотки, а\xA0также волшебный культовый эликсир красоты, изготовленный из\xA0100%\xA0натуральных ингредиентов.'
            },
            {
              author: { name: 'Иван У.' },
              date: '14.10.2020',
              content:
                'Наша подборка включает питательные увлажняющие кремы, пенки для\xA0умывания, омолаживающие сыворотки, а\xA0также волшебный культовый эликсир красоты, изготовленный из\xA0100%\xA0натуральных ингредиентов.'
            }
          ]
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
              date: '12.10.2020',
              content:
                'Наша подборка включает питательные увлажняющие кремы, пенки для\xA0умывания, омолаживающие сыворотки, а\xA0также волшебный культовый эликсир красоты, изготовленный из\xA0100%\xA0натуральных ингредиентов.'
            }
          ]
        },
        {
          author: {
            name: 'Павел Сидорович'
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
      ],
      product: {
        title: 'Макароны без яиц Antico Pastificio “Пенне Дзита Ригате” 500 г',
        price: '162,50',
        rating: 5,
        img: '/images/products/pasta.jpg',
        discount: 10
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
