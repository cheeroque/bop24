<template>
  <main>
    <swiper-main :items="swiperItems"></swiper-main>
    <b-container>
      <b-row class="mb-3 mb-lg-5">
        <b-col md="4" class="mb-3 mb-md-0">
          <b-link to="/catalog" class="card card-banner card-banner-sm">
            <img src="/images/cards/veggies.jpg" class="card-img" />
            <div class="card-body card-img-overlay">
              <span class="text-white">
                #вегетарианство
              </span>
            </div>
          </b-link>
        </b-col>
        <b-col md="4" class="mb-3 mb-md-0">
          <b-link to="/catalog" class="card card-banner card-banner-sm">
            <img src="/images/cards/gardening.jpg" class="card-img" />
            <div class="card-body card-img-overlay">
              <span class="text-white">
                #всевсад
              </span>
            </div>
          </b-link>
        </b-col>
        <b-col md="4" class="mb-3 mb-md-0">
          <b-link to="/catalog" class="card card-banner card-banner-sm">
            <img src="/images/cards/sports.jpg" class="card-img" />
            <div class="card-body card-img-overlay">
              <span class="text-white">
                #спорт
              </span>
            </div>
          </b-link>
        </b-col>
      </b-row>

      <swiper-products
        id="swiperProducts1"
        :items="products"
        title="Продукты долгого хранения"
        class="mb-5"
      ></swiper-products>

      <div class="mb-5">
        <p class="section-title">
          Велосипеды
        </p>

        <b-link to="/catalog" class="card card-banner card-banner-lg">
          <img src="/images/cards/bike.jpg" class="card-img" />
          <div class="card-body card-img-overlay text-white">
            <div class="h-100 d-flex flex-column">
              <b-row no-gutters>
                <b-col cols="8">
                  <p class="h3 mb-1">
                    #наспорте
                  </p>
                  <p>
                    Инвентарь для&nbsp;активных выходных
                  </p>
                </b-col>
              </b-row>
              <b-button variant="white" class="card-link mt-auto mr-auto">
                Подробнее
              </b-button>
            </div>
          </div>
        </b-link>
      </div>

      <div class="mb-5">
        <p class="section-title">
          Вдохновляйтесь
        </p>

        <b-row>
          <b-col md="7" lg="8" xl="9" class="mb-4 mb-md-0">
            <b-link to="/catalog" class="card card-banner card-banner-lg">
              <img src="/images/cards/vitamins.jpg" class="card-img" />
              <div class="card-body card-img-overlay text-white">
                <div class="h-100 d-flex flex-column">
                  <b-row no-gutters>
                    <b-col cols="8">
                      <p class="h3 mb-1">
                        #витаминоваябомба
                      </p>
                      <p>
                        Лучшие рецеты для&nbsp;иммунитета
                      </p>
                    </b-col>
                  </b-row>
                  <b-button variant="white" class="card-link mt-auto mr-auto">
                    Подробнее
                  </b-button>
                </div>
              </div>
            </b-link>
          </b-col>
          <b-col md="5" lg="4" xl="3" class="mb-4 mb-md-0">
            <div class="d-flex flex-column h-100">
              <b-link
                to="/blog/item"
                class="card card-banner card-banner-vertical flex-fill mb-3"
              >
                <img src="/images/cards/sanitizer.jpg" class="card-img" />
                <div class="card-body card-img-overlay text-white">
                  <div class="h-100 d-flex flex-column">
                    <b-row no-gutters>
                      <b-col cols="8">
                        <p>
                          #блог
                        </p>
                      </b-col>
                    </b-row>
                    <b-button variant="white" class="card-link mt-auto mx-auto">
                      Подробнее
                    </b-button>
                  </div>
                </div>
              </b-link>

              <b-button to="/blog" variant="outline-secondary">
                Больше идей
              </b-button>
            </div>
          </b-col>
        </b-row>
      </div>

      <swiper-products
        id="swiperProducts2"
        :items="products"
        title="Чистый дом: Станьте экспертом по чистоте"
        class="mb-5"
      ></swiper-products>

      <div class="mb-5">
        <p class="section-title">
          Преимущества для&nbsp;вас
        </p>

        <b-row>
          <b-col md="4">
            <a href="#" class="home-benefit">
              <b-row align-v="center">
                <b-col cols="3" md="12" class="mb-3 text-right text-md-center">
                  <svg-icon name="benefit-delivery" width="60" height="60" />
                </b-col>
                <b-col cols="9" md="12" class="mb-3 text-md-center">
                  <p class="font-weight-medium text-uppercase mb-1">
                    Бесплатная доставка
                  </p>
                  <p class="mb-1">
                    Условия по&nbsp;бесплатной доставке
                  </p>
                </b-col>
              </b-row>
            </a>
          </b-col>
          <b-col md="4">
            <a href="#" class="home-benefit">
              <b-row align-v="center">
                <b-col cols="3" md="12" class="mb-3 text-right text-md-center">
                  <svg-icon name="benefit-wallet" width="60" height="60" />
                </b-col>
                <b-col cols="9" md="12" class="mb-3 text-md-center">
                  <p class="font-weight-medium text-uppercase mb-1">
                    Гарантия возврата
                  </p>
                  <p class="mb-1">
                    Условия по&nbsp;возврату денег
                  </p>
                </b-col>
              </b-row>
            </a>
          </b-col>
          <b-col md="4">
            <a href="#" class="home-benefit">
              <b-row align-v="center">
                <b-col cols="3" md="12" class="mb-3 text-right text-md-center">
                  <svg-icon name="benefit-target" width="60" height="60" />
                </b-col>
                <b-col cols="9" md="12" class="mb-3 text-md-center">
                  <p class="font-weight-medium text-uppercase mb-1">
                    Гарантия возврата
                  </p>
                  <p class="mb-1">
                    Условия по&nbsp;возврату денег
                  </p>
                </b-col>
              </b-row>
            </a>
          </b-col>
        </b-row>
      </div>

      <swiper-reviews
        :items="reviews"
        title="Отзывы"
        class="mb-5"
      ></swiper-reviews>
    </b-container>
  </main>
</template>

<script>
import SwiperMain from '@/components/home/SwiperMain'
import SwiperProducts from '@/components/home/SwiperProducts'
import SwiperReviews from '@/components/home/SwiperReviews'

export default {
  components: {
    SwiperMain,
    SwiperProducts,
    SwiperReviews
  },
  data() {
    return {
      swiperItems: [
        {
          img: '01',
          link: '/catalog',
          text: `<h2>#stopcovid</h2><p>Поддержим масочный режим</p>`,
          style: { color: '#ffffff', backgroundColor: '#18d4c9' }
        },
        {
          img: '02',
          link: '/catalog',
          text: `<h2>#stopcovid</h2><p>Поддержим масочный режим</p>`,
          style: { color: '#ffffff', backgroundColor: '#e03e7e' }
        },
        {
          img: '03',
          link: '/catalog',
          text: `<h2>#stopcovid</h2><p>Поддержим масочный режим</p>`,
          style: { color: '#ffffff', backgroundColor: '#0173b4' }
        },
        {
          img: '04',
          link: '/catalog',
          text: `<h2>#stopcovid</h2><p>Поддержим масочный режим</p>`,
          style: { color: '#ffffff', backgroundColor: '#f6a429' }
        },
        {
          img: '05',
          link: '/catalog',
          text: `<h2>#stopcovid</h2><p>Поддержим масочный режим</p>`,
          style: { color: '#ffffff', backgroundColor: '#46aae1' }
        },
        {
          img: '06',
          link: '/catalog',
          text: `<h2>#stopcovid</h2><p>Поддержим масочный режим</p>`,
          style: { color: '#636363', backgroundColor: '#ffe177' }
        }
      ],
      products: [
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
      ],
      reviews: [
        {
          author: 'Елена Фахеева',
          rating: 5,
          img: '/images/users/user.jpg',
          content: 'Прекрасный магазин. Все быстро привезли.'
        },
        {
          author: 'Елена Фахеева',
          rating: 5,
          img: '/images/users/user.jpg',
          content: 'Прекрасный магазин. Все быстро привезли.'
        },
        {
          author: 'Елена Фахеева',
          rating: 5,
          img: '/images/users/user.jpg',
          content: 'Прекрасный магазин. Все быстро привезли.'
        },
        {
          author: 'Елена Фахеева',
          rating: 4,
          img: '/images/users/user.jpg',
          content: 'Прекрасный магазин. Все быстро привезли.'
        }
      ]
    }
  }
}
</script>
