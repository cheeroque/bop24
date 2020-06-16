<template>
  <div>
    <div class="container">
      <b-breadcrumb
        :items="breadcrumbs"
        class="d-none d-md-flex"
      ></b-breadcrumb>

      <h2 class="font-size-4 mb-4 d-none d-md-block">
        #личный кабинет
      </h2>
    </div>
    <div class="container">
      <b-row>
        <b-col md="6" lg="4" xl="3">
          <account-menu></account-menu>
        </b-col>
        <b-col md="6" lg="8" xl="9" class="d-none d-md-block">
          <b-row no-gutters>
            <b-col lg="6" class="bg-gray-200 rounded-sm mb-3 mb-lg-5">
              <div class="p-3 py-xl-4">
                <div class="user-info">
                  <div class="userpic">
                    ВК
                  </div>
                  <div class="welcome-wrapper">
                    <div class="username">
                      <span class="caption">
                        Виктория К. В.
                      </span>
                    </div>
                    <b-button variant="link" class="btn-edit">
                      <svg-icon name="edit" width="14" height="14" />
                      <span class="caption">
                        Редактировать
                      </span>
                    </b-button>
                    <p class="welcome">
                      Добро пожаловать в&nbsp;личный кабинет!
                    </p>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col lg="6" class="bg-primary text-white rounded-sm mb-3 mb-lg-5">
              <div class="p-3 p-xl-4">
                <div class="account-balance">
                  <span class="caption">
                    <strong>Баланс:</strong>
                    <span>На вашем бонусном счете</span>
                  </span>
                  <div class="icon-wrapper">
                    <svg-icon name="account/balance" width="31" height="28" />
                  </div>
                  <span class="sum">
                    5&nbsp;986
                  </span>
                </div>
              </div>
            </b-col>
          </b-row>

          <div class="account-section-header d-lg-none">
            <b-row align-v="center">
              <b-col cols="6">
                <span class="text-primary">
                  Последний заказ:
                </span>
              </b-col>
              <b-col cols="6" class="text-right">
                <span class="text-success">
                  Отправлен
                </span>
              </b-col>
            </b-row>
          </div>

          <b-row class="mb-3 mx-n1">
            <b-col cols="6" lg="4" class="px-1">
              <p class="mb-2">
                <span class="d-inline-block mr-1">
                  Заказ
                  <b-link to="/account/orders/item" class="font-weight-medium">
                    №&nbsp;754759
                  </b-link>
                </span>
                <span class="d-inline-block font-weight-light text-gray-500 ">
                  от&nbsp;03.12.2020
                </span>
              </p>
            </b-col>
            <b-col cols="6" lg="5" class="text-right text-lg-left px-1">
              <span class="d-inline-block mr-lg-1">
                Сумма:
                <span class="font-weight-medium">6&nbsp;897&nbsp;р.</span>
              </span>
              <span class="d-inline-block ml-1 ml-lg-0">
                Баллов за&nbsp;покупку:
                <span class="font-weight-medium text-primary">897</span>
              </span>
            </b-col>
            <b-col lg="3" class="text-right d-none d-lg-block px-1">
              <span class="font-weight-medium text-success">
                Отправлен
              </span>
            </b-col>
          </b-row>
          <div class="swiper swiper-account">
            <div class="swiper-nav swiper-button-prev swiper-order-prev"></div>
            <swiper ref="swiperOrder" :options="swiperOrderOptions">
              <swiper-slide
                v-for="(slide, index) in orderItems"
                :key="`slide-order-${index}`"
              >
                <b-link
                  :to="slide.link"
                  class="embed-responsive embed-responsive-1by1 border border-light"
                  target="_blank"
                >
                  <img
                    :src="`/images/products/${slide.img}.jpg`"
                    class="embed-responsive-item"
                  />
                </b-link>
              </swiper-slide>
              <div
                slot="pagination"
                class="swiper-pagination swiper-order-pagination d-lg-none"
              ></div>
            </swiper>
            <div class="swiper-nav swiper-button-next swiper-order-next"></div>
          </div>
          <b-row cols="9" class="d-none d-lg-flex mb-3">
            <b-col lg="3" xl="2" offset-lg="3" offset-xl="5">
              <b-button
                variant="outline-primary"
                class="d-flex flex-center px-1"
                block
              >
                <svg-icon name="refresh" width="20" height="20" class="mr-2" />
                Повторить заказ
              </b-button>
            </b-col>
            <b-col lg="3" xl="2">
              <b-button variant="primary" block>
                Все заказы
              </b-button>
            </b-col>
          </b-row>

          <div class="account-section-header">
            <span class="text-primary">
              Купить снова:
            </span>
          </div>
          <div class="swiper swiper-account">
            <div
              class="swiper-nav swiper-button-prev swiper-buy-again-prev"
            ></div>
            <swiper ref="swiperBuyAgain" :options="swiperBuyAgainOptions">
              <swiper-slide
                v-for="(slide, index) in recommendedItems"
                :key="`slide-buy-again-${index}`"
              >
                <b-link
                  :to="slide.link"
                  class="text-reset text-decoration-none"
                  target="_blank"
                >
                  <div
                    class="embed-responsive embed-responsive-1by1 border border-light mb-2"
                  >
                    <img
                      :src="`/images/products/${slide.img}.jpg`"
                      class="embed-responsive-item"
                    />
                  </div>
                  <p class="font-size-1">
                    {{ slide.title }}
                  </p>
                </b-link>
              </swiper-slide>
              <div
                slot="pagination"
                class="swiper-pagination swiper-buy-again-pagination d-lg-none"
              ></div>
            </swiper>
            <div
              class="swiper-nav swiper-button-next swiper-buy-again-next"
            ></div>
          </div>

          <div class="account-section-header">
            <span class="text-primary">
              Персональные рекомендации:
            </span>
          </div>
          <div class="swiper swiper-account">
            <div
              class="swiper-nav swiper-button-prev swiper-recommended-prev"
            ></div>
            <swiper ref="swiperRecommended" :options="swiperRecommendedOptions">
              <swiper-slide
                v-for="(slide, index) in recommendedItems"
                :key="`slide-recommended-${index}`"
              >
                <b-link
                  :to="slide.link"
                  class="text-reset text-decoration-none"
                  target="_blank"
                >
                  <div
                    class="embed-responsive embed-responsive-1by1 border border-light mb-2"
                  >
                    <img
                      :src="`/images/products/${slide.img}.jpg`"
                      class="embed-responsive-item"
                    />
                  </div>
                  <p class="font-size-1">
                    {{ slide.title }}
                  </p>
                </b-link>
              </swiper-slide>
              <div
                slot="pagination"
                class="swiper-pagination swiper-recommended-pagination d-lg-none"
              ></div>
            </swiper>
            <div
              class="swiper-nav swiper-button-next swiper-recommended-next"
            ></div>
          </div>

          <div class="account-section-header">
            <span class="text-primary">
              Карты и&nbsp;программа лояльности:
            </span>
          </div>
          <div class="swiper swiper-account-cards d-lg-none mb-4">
            <swiper ref="swiperCards" :options="swiperCardsOptions">
              <swiper-slide>
                <div class="embed-responsive embed-responsive-16by10">
                  <div
                    class="embed-responsive-item card card-rounded bg-magenta"
                  >
                    <div class="card-body text-white">
                      <div class="d-flex">
                        <div class="flex-fill">
                          <p class="font-weight-medium">
                            Ваша карта
                          </p>
                          <p class="font-size-1">
                            бонусов:
                            <span class="font-weight-medium">1800</span>
                          </p>
                        </div>
                        <div class="mr-2">
                          <svg-icon
                            name="account/card-stars"
                            width="50"
                            height="44"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="embed-responsive embed-responsive-16by10">
                  <div
                    class="embed-responsive-item card card-rounded bg-primary"
                  >
                    <div class="card-body text-white">
                      <div class="d-flex">
                        <div class="flex-fill">
                          <p class="font-weight-medium">
                            Ваши бонусы
                          </p>
                          <p class="font-size-1">
                            бонусов:
                            <span class="font-weight-medium">1800</span>
                          </p>
                        </div>
                        <div class="mr-2">
                          <svg-icon
                            name="account/card-stars"
                            width="50"
                            height="44"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="embed-responsive embed-responsive-16by10">
                  <div class="embed-responsive-item card card-rounded bg-teal">
                    <div class="card-body text-white">
                      <div class="d-flex">
                        <div class="flex-fill">
                          <p class="font-weight-medium">
                            Ваши деньги
                          </p>
                          <p class="font-size-1">
                            бонусов:
                            <span class="font-weight-medium">1800</span>
                          </p>
                        </div>
                        <div class="mr-2">
                          <svg-icon
                            name="account/card-stars"
                            width="50"
                            height="44"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <div
                slot="pagination"
                class="swiper-pagination swiper-cards-pagination"
              ></div>
            </swiper>
          </div>
          <b-row class="d-none d-lg-flex pb-4">
            <b-col lg="4">
              <div class="embed-responsive embed-responsive-16by10 mb-4">
                <div class="embed-responsive-item card card-rounded bg-magenta">
                  <div class="card-body text-white">
                    <div class="d-flex">
                      <div class="flex-fill">
                        <p class="font-weight-medium">
                          Ваша карта
                        </p>
                        <p class="font-size-1">
                          бонусов: <span class="font-weight-medium">1800</span>
                        </p>
                      </div>
                      <div class="mr-2">
                        <svg-icon
                          name="account/card-stars"
                          width="50"
                          height="44"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col lg="4">
              <div class="embed-responsive embed-responsive-16by10 mb-4">
                <div class="embed-responsive-item card card-rounded bg-primary">
                  <div class="card-body text-white">
                    <div class="d-flex">
                      <div class="flex-fill">
                        <p class="font-weight-medium">
                          Ваши бонусы
                        </p>
                        <p class="font-size-1">
                          бонусов: <span class="font-weight-medium">1800</span>
                        </p>
                      </div>
                      <div class="mr-2">
                        <svg-icon
                          name="account/card-stars"
                          width="50"
                          height="44"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col lg="4">
              <div class="embed-responsive embed-responsive-16by10 mb-4">
                <div class="embed-responsive-item card card-rounded bg-teal">
                  <div class="card-body text-white">
                    <div class="d-flex">
                      <div class="flex-fill">
                        <p class="font-weight-medium">
                          Ваши деньги
                        </p>
                        <p class="font-size-1">
                          бонусов: <span class="font-weight-medium">1800</span>
                        </p>
                      </div>
                      <div class="mr-2">
                        <svg-icon
                          name="account/card-stars"
                          width="50"
                          height="44"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import AccountMenu from '@/components/account/AccountMenu'
import 'swiper/css/swiper.css'

export default {
  layout: 'account',
  components: {
    AccountMenu,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Главная', href: '/' },
        { text: 'Личный кабинет', to: '/account', active: true }
      ],
      swiperBuyAgainOptions: {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: false,
        grabCursor: true,
        pagination: {
          el: '.swiper-buy-again-pagination',
          type: 'bullets'
        },
        navigation: {
          prevEl: '.swiper-buy-again-prev',
          nextEl: '.swiper-buy-again-next'
        },
        breakpoints: {
          992: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 4
          }
        }
      },
      swiperRecommendedOptions: {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: false,
        grabCursor: true,
        pagination: {
          el: '.swiper-recommended-pagination',
          type: 'bullets'
        },
        navigation: {
          prevEl: '.swiper-recommended-prev',
          nextEl: '.swiper-recommended-next'
        },
        breakpoints: {
          992: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 4
          }
        }
      },
      swiperOrderOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: false,
        grabCursor: true,
        pagination: {
          el: '.swiper-order-pagination',
          type: 'bullets'
        },
        navigation: {
          prevEl: '.swiper-order-prev',
          nextEl: '.swiper-order-next'
        },
        breakpoints: {
          992: {
            slidesPerView: 7
          },
          1200: {
            slidesPerView: 9
          }
        }
      },
      swiperCardsOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
        loop: true,
        grabCursor: true,
        pagination: {
          el: '.swiper-cards-pagination',
          type: 'bullets'
        },
        breakpoints: {
          768: {
            slidesPerView: 1,
            loop: false
          }
        }
      }
    }
  },
  computed: {
    orderItems() {
      const result = []
      for (let i = 0; i < 15; i++)
        result.push({
          link: '/catalog/item',
          img: 'perfume'
        })
      return result
    },
    recommendedItems() {
      const result = []
      for (let i = 0; i < 15; i++)
        result.push({
          title:
            'Макароны без яиц Antico Pastificio “Пенне Дзита Ригате” 500\xA0г',
          link: '/catalog/item',
          img: 'pasta'
        })
      return result
    }
  }
}
</script>
