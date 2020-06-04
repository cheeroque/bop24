<template>
  <main>
    <header-tags></header-tags>
    <swiper-main :items="swiperItems"></swiper-main>
  </main>
</template>

<script>
import HeaderTags from '@/components/header/HeaderTags'
import SwiperMain from '@/components/home/SwiperMain'

export default {
  components: {
    HeaderTags,
    SwiperMain
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
      ]
    }
  }
}
</script>
