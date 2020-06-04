<template>
  <main>
    <header-tags></header-tags>
    <swiper-main :items="swiperItems"></swiper-main>
    <b-container>
      <b-row class="mb-3 mb-lg-5">
        <b-col md="4" class="mb-3 mb-md-0">
          <a href="#" class="card card-banner card-banner-sm">
            <img src="/images/cards/veggies.jpg" class="card-img" />
            <div class="card-body card-img-overlay">
              <span class="text-white">
                #вегетарианство
              </span>
            </div>
          </a>
        </b-col>
        <b-col md="4" class="mb-3 mb-md-0">
          <a href="#" class="card card-banner card-banner-sm">
            <img src="/images/cards/gardening.jpg" class="card-img" />
            <div class="card-body card-img-overlay">
              <span class="text-white">
                #всевсад
              </span>
            </div>
          </a>
        </b-col>
        <b-col md="4" class="mb-3 mb-md-0">
          <a href="#" class="card card-banner card-banner-sm">
            <img src="/images/cards/sports.jpg" class="card-img" />
            <div class="card-body card-img-overlay">
              <span class="text-white">
                #спорт
              </span>
            </div>
          </a>
        </b-col>
      </b-row>

      <swiper-products
        :items="products"
        title="Продукты долгого хранения"
        class="mb-5"
      ></swiper-products>
    </b-container>
  </main>
</template>

<script>
import HeaderTags from '@/components/header/HeaderTags'
import SwiperMain from '@/components/home/SwiperMain'
import SwiperProducts from '@/components/home/SwiperProducts'

export default {
  components: {
    HeaderTags,
    SwiperMain,
    SwiperProducts
  },
  data() {
    return {
      swiperItems: [
        {
          img: '/images/slides/01.jpg',
          link: '#',
          text: `<h2>#stopcovid</h2><p>Поддержим масочный режим</p>`,
          style: { color: '#ffffff', backgroundColor: '#18d4c9' }
        },
        {
          img: '/images/slides/02.jpg',
          link: '#',
          text: `<h2>#stopcovid</h2><p>Поддержим масочный режим</p>`,
          style: { color: '#ffffff', backgroundColor: '#e03e7e' }
        },
        {
          img: '/images/slides/03.jpg',
          link: '#',
          text: `<h2>#stopcovid</h2><p>Поддержим масочный режим</p>`,
          style: { color: '#ffffff', backgroundColor: '#0173b4' }
        },
        {
          img: '/images/slides/04.jpg',
          link: '#',
          text: `<h2>#stopcovid</h2><p>Поддержим масочный режим</p>`,
          style: { color: '#ffffff', backgroundColor: '#f6a429' }
        },
        {
          img: '/images/slides/05.jpg',
          link: '#',
          text: `<h2>#stopcovid</h2><p>Поддержим масочный режим</p>`,
          style: { color: '#ffffff', backgroundColor: '#46aae1' }
        },
        {
          img: '/images/slides/06.jpg',
          link: '#',
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
      ]
    }
  }
}
</script>
