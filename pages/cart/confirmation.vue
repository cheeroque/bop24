<template>
  <main class="container">
    <b-breadcrumb :items="breadcrumbs" class="d-none d-md-flex"></b-breadcrumb>

    <b-row class="my-4 py-3">
      <b-col md="6" lg="4">
        <div class="d-flex align-items-center">
          <div class="align-self-start mr-3">
            <svg-icon
              name="cart/confirm"
              width="50"
              height="50"
              class="fill-primary"
            />
          </div>
          <div>
            <p class="font-size-3 text-primary mb-1">
              Ваш заказ №54674 отправлен
            </p>
            <p class="font-size-6 font-weight-medium mb-0">
              Спасибо, Виктория!
            </p>
          </div>
        </div>
      </b-col>
      <b-col md="6" lg="8" xl="7" offset-xl="1" class="d-none d-md-block">
        <div class="d-flex align-items-center">
          <p class="font-size-3 text-gray-700 mb-0 mr-lg-5 mr-xl-60">
            Мы в социальных сетях:
          </p>
          <a href="#" target="_blank" class="text-primary mr-2">
            <svg-icon name="social-instagram" width="24" height="24" />
          </a>
          <a href="#" target="_blank" class="text-primary mr-2">
            <svg-icon name="social-vk" width="24" height="24" />
          </a>
          <a href="#" target="_blank" class="text-primary mr-2">
            <svg-icon name="social-facebook" width="24" height="24" />
          </a>
        </div>
      </b-col>
    </b-row>

    <b-row class="mb-4">
      <b-col md="6" lg="5" xl="4" class="mb-4">
        <div class="card rounded-sm h-100">
          <div class="card-body">
            <div class="d-flex align-items-center mb-4">
              <b-button variant="outline-primary" class="py-1">
                Изменить
              </b-button>
              <b-button
                variant="outline-gray-700"
                class="d-flex rounded-pill p-2 ml-auto"
              >
                <svg-icon name="cart/order-download" width="19" height="19" />
              </b-button>
              <b-button
                variant="outline-gray-700"
                class="d-flex rounded-pill p-2 ml-2"
              >
                <svg-icon name="cart/order-print" width="19" height="19" />
              </b-button>
            </div>

            <p>
              Информация по&nbsp;заказу
            </p>
            <div class="text-gray-600 mb-4">
              <p>
                Заказ №488789 от 23.10.2020
              </p>
              <p>
                Сумма:
                <span class="font-weight-medium text-body"
                  >3&nbsp;450.00&nbsp;р.</span
                >
              </p>
              <p>
                Баллы:
                <span class="font-weight-medium text-body">456</span>
              </p>
            </div>

            <p>
              Адрес
            </p>
            <p class="text-gray-600 mb-4">
              Виктория Ковалева<br />
              Лужнецкая набережная 9/4 стр 17 Москва Москва, 119270<br />
              Россия
            </p>

            <p>
              Доставка
            </p>
            <p class="text-gray-600 mb-4">
              Курьером по&nbsp;Москве
            </p>

            <p>
              Оплата
            </p>
            <p class="text-gray-600 mb-4">
              Наличными при&nbsp;получении
            </p>
          </div>
          <div class="card-footer d-flex bg-transparent border-0 pt-0 pb-4">
            <b-button variant="outline-gray-500" class="flex-fill mr-3">
              Отменить
            </b-button>
            <b-button variant="primary" class="flex-fill">
              Отследить заказ
            </b-button>
          </div>
        </div>
      </b-col>
      <b-col md="6" lg="7" offset-xl="1" class="mb-4">
        <div class="d-flex flex-column h-100">
          <div class="d-flex align-items-center mb-4 d-md-none">
            <p class="font-size-3 text-gray-700 mb-0 mr-4">
              Мы в социальных сетях:
            </p>
            <a href="#" target="_blank" class="text-primary mr-2">
              <svg-icon name="social-instagram" width="24" height="24" />
            </a>
            <a href="#" target="_blank" class="text-primary mr-2">
              <svg-icon name="social-vk" width="24" height="24" />
            </a>
            <a href="#" target="_blank" class="text-primary mr-2">
              <svg-icon name="social-facebook" width="24" height="24" />
            </a>
          </div>
          <div class="card flex-fill bg-gray-50 border-0 mb-4">
            <div class="card-body">
              <b-row>
                <b-col xl="9">
                  <p
                    class="font-size-4 font-size-lg-6 font-weight-medium text-gray-700 mb-lg-4"
                  >
                    Делитесь с&nbsp;другими, экономьте и&nbsp;зарабатывайте еще
                    больше!
                  </p>
                </b-col>
              </b-row>
              <p class="text-gray-600 mb-4 mb-xl-5">
                Поделитесь Вашим кодом для&nbsp;вознаграждений
                <strong class="font-weight-medium text-primary">КНГРП</strong>
                с&nbsp;Вашими друзьями и&nbsp;семьей. Они получат
                5%&nbsp;скидки, а&nbsp;Вы заработаете 5%&nbsp;вознаграждений!
              </p>

              <p class="text-gray-600">
                Или поделитесь этой ссылкой
              </p>
              <span class="share-link mb-4">
                https://www.figma.com/file/K0A6guKr7SvSw0eiSNVcHD/bop?
              </span>
            </div>
            <div class="card-footer d-flex bg-transparent border-0 pt-0 pb-4">
              <dropdown-share></dropdown-share>
              <b-button variant="outline-primary" class="ml-auto">
                Подробнее
              </b-button>
            </div>
          </div>
          <div
            class="card flex-fill text-white border-0 rounded-0"
            style="background-color: #fb479d;"
          >
            <div class="card-body">
              <p class="font-size-3 font-weight-medium">
                Скидка на&nbsp;следующий заказ<br />
                в&nbsp;разделе велосипеды
              </p>
            </div>
            <div class="card-footer bg-transparent border-0 pt-0 pb-4">
              <b-button variant="outline-white">
                Подробнее
              </b-button>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>

    <swiper-products
      id="swiperRecommended"
      :items="products"
      title="Рекомендуемые товары"
      class="mb-5"
    ></swiper-products>

    <swiper-products
      id="swiperRecent"
      :items="products"
      title="Недавно просмотренные"
      class="mb-5"
    ></swiper-products>
  </main>
</template>

<script>
import SwiperProducts from '@/components/home/SwiperProducts'
import DropdownShare from '@/components/core/DropdownShare'

export default {
  components: {
    SwiperProducts,
    DropdownShare
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Главная', href: '/' },
        { text: 'Корзина', to: '/cart' },
        { text: 'Подтверждение заказа', to: '/cart/confirmation', active: true }
      ],
      products: [
        {
          title:
            'Макароны без яиц Antico Pastificio “Пенне Дзита Ригате” 500 г',
          price: '162,50',
          discount: 10,
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
