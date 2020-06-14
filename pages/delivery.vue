<template>
  <main>
    <b-container>
      <b-breadcrumb
        :items="breadcrumbs"
        class="d-none d-md-flex"
      ></b-breadcrumb>

      <p class="font-size-4 font-weight-medium mb-4">
        Доставка и&nbsp;оплата
      </p>

      <p class="mb-lg-4">
        Доставка продуктов на&nbsp;дом, в&nbsp;офис, на&nbsp;дачу
        или&nbsp;в&nbsp;любое другое удобное для&nbsp;вас место.<br />
        Выбирайте подходящий для&nbsp;вас сервис и&nbsp;оформляйте заказ.
      </p>
    </b-container>

    <div class="bg-gray-50 mb-3 mb-lg-4 py-3 py-lg-5">
      <b-container>
        <b-row>
          <b-col sm="6" lg="3" class="mb-3">
            <div class="card card-white h-100">
              <div class="card-body d-flex flex-column p-3">
                <p class="font-size-4 font-weight-bold mb-4">
                  По&nbsp;Москве<br />
                  в&nbsp;пределах МКАД
                </p>
                <p class="font-size-6 font-weight-bold text-primary mt-auto">
                  350&nbsp;р.
                </p>
                <p class="text-gray-700 border-top border-gray-300 mb-2 pt-2">
                  При заказе на&nbsp;сумму от&nbsp;<span
                    class="font-weight-medium"
                    >2000</span
                  >&nbsp;руб.
                </p>
                <p
                  class="font-size-4 font-weight-bold text-primary mb-0 mb-sm-4"
                >
                  Бесплатно
                </p>
              </div>
            </div>
          </b-col>
          <b-col sm="6" lg="3" class="mb-3">
            <div class="card card-white h-100">
              <div class="card-body d-flex flex-column p-3">
                <p class="font-size-4 font-weight-bold mb-4">
                  За&nbsp;пределами МКАД и&nbsp;Московская область
                </p>
                <p class="font-size-6 font-weight-bold text-primary mt-auto">
                  850&nbsp;р.
                </p>
                <p class="text-gray-700 border-top border-gray-300 mb-2 pt-2">
                  При заказе на&nbsp;сумму от&nbsp;<span
                    class="font-weight-medium"
                    >4000</span
                  >&nbsp;руб.
                </p>
                <p
                  class="font-size-4 font-weight-bold text-primary mb-0 mb-sm-4"
                >
                  Бесплатно
                </p>
              </div>
            </div>
          </b-col>
          <b-col sm="6" lg="3" class="mb-3">
            <div class="card card-white h-100">
              <div class="card-body d-flex flex-column p-3">
                <p class="font-size-4 font-weight-bold mb-4">
                  Самовывоз
                </p>
                <p class="font-size-6 font-weight-bold text-primary mt-auto">
                  0&nbsp;р.
                </p>
                <p class="text-gray-700 border-top border-gray-300 mb-2 pt-2">
                  При заказе на&nbsp;сумму от&nbsp;<span
                    class="font-weight-medium"
                    >4000</span
                  >&nbsp;руб.
                </p>
                <p
                  class="font-size-4 font-weight-bold text-primary mb-0 mb-sm-4"
                >
                  Бесплатно
                </p>
              </div>
            </div>
          </b-col>
          <b-col sm="6" lg="3" class="mb-3">
            <div class="card card-white h-100">
              <div class="card-body d-flex flex-column p-3">
                <p class="font-size-4 font-weight-bold">
                  Способы оплаты
                </p>
                <div class="font-weight-medium mt-auto">
                  <p class="text-primary">
                    Оплата картой онлайн со&nbsp;скидкой 5%
                  </p>
                  <p class="text-gray-600">
                    Банковской картой при&nbsp;получении
                  </p>
                  <p class="text-gray-600">
                    Оформление кредита
                  </p>
                  <p class="text-gray-600 mb-0">
                    Наличными при&nbsp;получении
                  </p>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <b-container>
      <p class="mb-4">
        Проверьте, доставляем ли мы к&nbsp;вам?
      </p>

      <b-row class="mb-3">
        <b-col md="9" lg="7" xl="5">
          <div class="d-flex">
            <b-form-input
              type="text"
              placeholder="Поиск по метро"
              class="flex-fill"
            ></b-form-input>
            <b-form-radio-group
              v-model="selfDeliveryMode"
              buttons
              button-variant="list"
              class="ml-3 d-none d-md-flex"
            >
              <b-form-radio
                :class="
                  selfDeliveryMode === 'map' ? 'fill-primary' : 'fill-gray-600'
                "
                value="map"
                class="py-1 px-2 no-focus-ring"
              >
                <svg-icon name="checkout/delivery-map" width="20" height="20" />
              </b-form-radio>
              <b-form-radio
                :class="
                  selfDeliveryMode === 'list' ? 'fill-primary' : 'fill-gray-600'
                "
                value="list"
                class="py-1 px-2 no-focus-ring"
              >
                <svg-icon
                  name="checkout/delivery-list"
                  width="20"
                  height="20"
                />
              </b-form-radio>
            </b-form-radio-group>
          </div>
        </b-col>
      </b-row>
      <transition-group name="fade" mode="out-in">
        <b-row v-show="selfDeliveryMode === 'map'" key="delivery-self-map">
          <b-col md="7" lg="6" class="mb-4 mb-xl-5">
            <div class="map-wrapper">
              <iframe
                src="https://yandex.ru/map-widget/v1/-/CCr5j1b"
                width="100%"
                height="100%"
                frameborder="1"
                allowfullscreen="true"
                style="position:relative;"
              ></iframe>
            </div>
          </b-col>
          <b-col md="5" lg="4" xl="3" class="mb-4 mb-xl-5">
            <div class="card card-white">
              <div class="card-body p-2">
                <p class="mb-1">
                  <svg-icon
                    name="checkout/location-marker"
                    width="13"
                    height="19"
                  />
                </p>
                <p class="font-weight-medium mb-2">
                  Москва, ул.&nbsp;Ленина, д.&nbsp;123
                </p>
                <p class="font-size-1 text-primary mb-2">
                  с&nbsp;22.05.2020
                </p>
                <p class="font-size-1 text-gray-700 mb-4">
                  пн–вс (без&nbsp;выходных)<br />
                  с&nbsp;9:00 до&nbsp;23:00
                </p>
              </div>
              <div class="card-footer pt-0 px-3 pb-3 d-flex align-items-center">
                <b-link href="#" class="mr-auto">
                  Подробнее
                </b-link>
                <b-button variant="primary">
                  Выбрать
                </b-button>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row v-show="selfDeliveryMode === 'list'" key="delivery-self-list">
          <b-col md="9" lg="7" xl="5" class="mb-4 mb-xl-5">
            <div class="embed-responsive embed-responsive-3by2">
              <div class="embed-responsive-item border border-light scroll-y">
                <div
                  v-for="i in 20"
                  :key="`row-${i}`"
                  :class="{ 'border-bottom': i < 20 }"
                  class="py-2 pl-2 pr-3 border-light"
                >
                  <b-row>
                    <b-col cols="8">
                      <p class="font-weight-medium mb-2">
                        Москва, ул.&nbsp;Ленина, д.&nbsp;123
                      </p>
                      <p class="font-size-1 text-primary mb-2">
                        с&nbsp;22.05.2020
                      </p>
                      <p class="font-size-1 text-gray-700 mb-0">
                        пн–вс (без&nbsp;выходных)<br />
                        с&nbsp;9:00 до&nbsp;23:00
                      </p>
                    </b-col>
                    <b-col cols="4" class="text-center">
                      <b-button
                        variant="primary"
                        class="line-height-120 mb-2 px-1"
                        block
                      >
                        Выбрать
                      </b-button>
                      <b-button
                        variant="link"
                        class="line-height-120 px-1"
                        block
                      >
                        Подробнее
                      </b-button>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </transition-group>
      <div class="text-gray-700 mb-5">
        <p class="small mb-0">
          <sup>*</sup> Тяжёлые и&nbsp;габаритные товары отгружаются
          по&nbsp;согласованию с&nbsp;менеджером.
        </p>
        <p class="small">
          <sup>**</sup> Стоимость доставки рассчитывается индивидуально,
          в&nbsp;зависимости от&nbsp;веса, объёма заказа и&nbsp;точного адреса
          доставки.
        </p>

        <p class="h5 text-uppercase mb-0">
          Время доставки
        </p>
        <p>
          Доставка осуществляется по&nbsp;будням с&nbsp;9:00 до&nbsp;23:00.<br />
          О&nbsp;дате и&nbsp;времени доставки Вы будете дополнительно
          проинформированы по&nbsp;электронной почте и&nbsp;SMS
          от&nbsp;курьерской службы.
        </p>

        <p class="h5 text-uppercase mb-0">
          Сроки доставки
        </p>
        <p>
          Москва и&nbsp;Московская область&nbsp;– от&nbsp;3
          до&nbsp;5&nbsp;рабочих дней.<br />
          Регионы РФ&nbsp;– от&nbsp;3-х рабочих дней в&nbsp;зависимости
          от&nbsp;региона.
        </p>
      </div>
    </b-container>
  </main>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        { text: 'Главная', href: '/' },
        { text: 'Доставка и\xA0оплата', to: '/delivery', active: true }
      ],
      selfDeliveryMode: 'map'
    }
  }
}
</script>
