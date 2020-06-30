<template>
  <main>
    <div class="container">
      <b-breadcrumb
        :items="breadcrumbs"
        class="d-none d-md-flex"
      ></b-breadcrumb>
    </div>

    <div class="cart-content mb-3 mb-lg-4">
      <div class="container">
        <b-row>
          <b-col md="6" lg="7" xl="8">
            <h2 class="font-size-base font-size-lg-4 mb-3">
              Оформление заказа
            </h2>
            <b-row class="mb-lg-3">
              <b-col xl="9">
                <b-form-radio-group
                  v-model="entityType"
                  size="lg"
                  class="row mb-2 mb-lg-0"
                  @change="setDeliveryOptions"
                >
                  <b-col lg="6" class="mb-3">
                    <b-form-radio value="physical">
                      <span class="font-size-base">
                        Физическое лицо
                      </span>
                    </b-form-radio>
                  </b-col>
                  <b-col lg="6" class="mb-3">
                    <b-form-radio value="legal">
                      <span class="font-size-base">
                        Юридическое лицо
                      </span>
                    </b-form-radio>
                  </b-col>
                </b-form-radio-group>
                <b-form-group class="position-relative">
                  <b-form-input
                    :value="selectedCity"
                    type="text"
                    placeholder="Введите город получения"
                    @input="toggleDropdown"
                  ></b-form-input>
                  <transition name="fade">
                    <ul
                      v-show="showDropdown"
                      :class="{ show: showDropdown }"
                      class="dropdown-menu w-100"
                    >
                      <li
                        v-for="(city, index) in cities"
                        :key="`city-${index}`"
                      >
                        <a
                          href="#"
                          class="dropdown-item py-2 px-3"
                          @click="
                            selectedCity = city
                            showDropdown = false
                          "
                        >
                          {{ city }}
                        </a>
                      </li>
                    </ul>
                  </transition>
                </b-form-group>
              </b-col>
            </b-row>
            <div class="pr-xl-4">
              <p class="d-none d-lg-block">
                Способ получения
              </p>
              <b-form-radio-group
                v-model="deliveryMethod"
                size="lg"
                class="row mx-n2"
              >
                <b-col lg="4" class="mb-3 mb-lg-0 px-2">
                  <a
                    href="#"
                    class="card card-white text-reset text-decoration-none h-100"
                    @click="setDeliveryMethod('self')"
                  >
                    <div class="card-body d-flex flex-column">
                      <b-form-radio
                        :disabled="entityType === 'legal'"
                        value="self"
                        class="mb-4"
                      ></b-form-radio>
                      <p class="font-size-3 font-weight-medium">
                        Самовывоз
                      </p>
                      <p class="text-primary mt-auto">
                        Бесплатно
                      </p>
                      <p class="mb-0">
                        с&nbsp;22.05.2020
                      </p>
                    </div>
                  </a>
                </b-col>
                <b-col lg="4" class="mb-3 mb-lg-0 px-2">
                  <a
                    href="#"
                    class="card card-white text-reset text-decoration-none h-100"
                    @click="setDeliveryMethod('courier')"
                  >
                    <div class="card-body d-flex flex-column">
                      <b-form-radio value="courier" class="mb-4"></b-form-radio>
                      <p class="font-size-3 font-weight-medium">
                        Курьерская доставка
                      </p>
                      <p class="text-primary mt-auto">
                        Бесплатно
                      </p>
                      <p>
                        с&nbsp;23.05.2020
                      </p>
                      <b-form-checkbox v-model="distanceDelivery" size="sm">
                        Бесконтактная доставка
                      </b-form-checkbox>
                    </div>
                  </a>
                </b-col>
                <b-col lg="4" class="mb-3 mb-lg-0 px-2">
                  <a
                    href="#"
                    class="card card-white text-reset text-decoration-none h-100"
                    @click="setDeliveryMethod('post')"
                  >
                    <div class="card-body d-flex flex-column">
                      <b-form-radio
                        :disabled="entityType === 'legal'"
                        value="post"
                        class="mb-4"
                      ></b-form-radio>
                      <p class="font-size-3 font-weight-medium">
                        Почта России
                      </p>
                      <p class="text-primary mt-auto">
                        Бесплатно
                      </p>
                      <p class="mb-0">
                        с&nbsp;23.05.2020
                      </p>
                    </div>
                  </a>
                </b-col>
              </b-form-radio-group>
            </div>
          </b-col>
          <b-col md="6" lg="5" xl="4" class="d-none d-md-block">
            <div class="mb-2 mb-md-3 px-md-3">
              <b-input-group>
                <b-form-input
                  type="text"
                  placeholder="Введите промокод"
                  class="border-gray-600 bg-transparent"
                ></b-form-input>
                <b-input-group-append>
                  <b-button variant="gray-600">
                    Применить
                  </b-button>
                </b-input-group-append>
              </b-input-group>
            </div>
            <div class="card card-white mb-30">
              <div class="card-body">
                <div class="d-flex align-items-center mb-4">
                  <p class="font-weight-bold mb-0">
                    Ваш заказ
                  </p>
                  <b-button
                    to="/cart"
                    variant="outline-primary"
                    class="my-n2 mr-n2 ml-auto line-height-120"
                  >
                    Изменить
                  </b-button>
                </div>
                <table class="table table-borderless table-sm mb-0">
                  <tbody>
                    <tr>
                      <td class="px-0">
                        Всего товаров на&nbsp;сумму
                      </td>
                      <td class="text-right font-weight-medium pr-0">
                        7&nbsp;894&nbsp;р.
                      </td>
                    </tr>
                    <tr>
                      <td class="px-0">
                        Скидка
                      </td>
                      <td class="text-right text-primary pr-0">
                        –670&nbsp;р.
                      </td>
                    </tr>
                    <tr>
                      <td class="px-0">
                        Доставка
                      </td>
                      <td class="text-right font-weight-medium pr-0">
                        350&nbsp;р.
                      </td>
                    </tr>
                    <tr>
                      <td class="px-0">
                        Общий вес
                      </td>
                      <td class="text-right font-weight-medium pr-0">
                        1,5&nbsp;кг
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr class="font-size-4 font-weight-bold">
                      <td class="px-0 pt-4">
                        Итого:
                      </td>
                      <td class="text-right pt-4 pr-0">
                        6&nbsp;894&nbsp;р.
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="entityType === 'physical'" key="entity-physical">
        <transition name="fade" mode="out-in">
          <div
            v-if="deliveryMethod === 'self'"
            key="delivery-self"
            class="container"
          >
            <b-row>
              <b-col md="8" lg="6" xl="4">
                <p class="d-flex">
                  <span class="mr-3">
                    Пункт самовывоза
                  </span>
                  <span class="text-primary ml-auto">
                    Найдено 456&nbsp;пунктов
                  </span>
                </p>
              </b-col>
            </b-row>
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
                        selfDeliveryMode === 'map'
                          ? 'fill-primary'
                          : 'fill-gray-600'
                      "
                      value="map"
                      class="py-1 px-2 no-focus-ring"
                    >
                      <svg-icon
                        name="checkout/delivery-map"
                        width="20"
                        height="20"
                      />
                    </b-form-radio>
                    <b-form-radio
                      :class="
                        selfDeliveryMode === 'list'
                          ? 'fill-primary'
                          : 'fill-gray-600'
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
              <b-row
                v-show="selfDeliveryMode === 'map'"
                key="delivery-self-map"
              >
                <b-col md="7" lg="6" class="d-none d-md-block mb-4 mb-xl-5">
                  <div class="map-wrapper"></div>
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
                    <div
                      class="card-footer pt-0 px-3 pb-3 d-flex align-items-center"
                    >
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
              <b-row
                v-show="selfDeliveryMode === 'list'"
                key="delivery-self-list"
              >
                <b-col md="9" lg="7" xl="5" class="mb-4 mb-xl-5">
                  <div class="embed-responsive embed-responsive-3by2">
                    <div
                      class="embed-responsive-item border border-light scroll-y"
                    >
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
            <b-button variant="primary" class="d-md-none mb-4" block>
              Выбрать другой пункт самовывоза
            </b-button>
            <b-form class="mb-4 mb-lg-5">
              <b-row>
                <b-col md="6" lg="5" xl="3">
                  <p>
                    Контактные данные
                  </p>
                  <b-form-group>
                    <b-form-input type="text" placeholder="ФИО*" required>
                    </b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-input type="text" placeholder="Телефон*" required>
                    </b-form-input>
                  </b-form-group>
                  <b-form-group class="pb-3">
                    <b-form-input type="text" placeholder="E-mail*" required>
                    </b-form-input>
                  </b-form-group>
                  <b-form-group class="mb-4">
                    <b-form-textarea
                      rows="4"
                      placeholder="Оставьте комментарий к заказу"
                    >
                    </b-form-textarea>
                  </b-form-group>
                </b-col>
                <b-col md="6" lg="4" offset-xl="1">
                  <payment-method-selector
                    :value="paymentMethod"
                  ></payment-method-selector>
                </b-col>
              </b-row>
            </b-form>
          </div>
          <div
            v-if="deliveryMethod === 'courier'"
            key="delivery-courier"
            class="container"
          >
            <b-row>
              <b-col md="6">
                <b-form class="mb-4 mb-lg-5">
                  <b-row>
                    <b-col lg="6">
                      <p>
                        Адрес получения
                      </p>
                    </b-col>
                    <b-col lg="6" class="d-none d-lg-block">
                      <p>
                        Контактные данные
                      </p>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col lg="6">
                      <b-form-group>
                        <b-form-checkbox v-model="privateAddress" size="lg">
                          <span class="font-size-base pl-2">
                            Доставка в&nbsp;частный дом
                          </span>
                        </b-form-checkbox>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row class="mb-lg-3">
                    <b-col lg="6">
                      <b-form-group>
                        <b-form-input
                          type="text"
                          placeholder="Введите улицу, дом"
                        >
                        </b-form-input>
                      </b-form-group>
                      <b-row>
                        <b-col cols="6">
                          <b-form-group>
                            <b-form-input type="text" placeholder="строение">
                            </b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col cols="6">
                          <b-form-group>
                            <b-form-input type="text" placeholder="подъезд">
                            </b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col cols="6">
                          <b-form-group>
                            <b-form-input type="text" placeholder="квартира">
                            </b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col cols="6">
                          <b-form-group>
                            <b-form-input type="text" placeholder="этаж">
                            </b-form-input>
                          </b-form-group>
                        </b-col>
                      </b-row>
                    </b-col>
                    <b-col lg="6">
                      <p class="d-lg-none">
                        Контактные данные
                      </p>
                      <b-form-group>
                        <b-form-input type="text" placeholder="ФИО*" required>
                        </b-form-input>
                      </b-form-group>
                      <b-form-group>
                        <b-form-input
                          type="text"
                          placeholder="Телефон*"
                          required
                        >
                        </b-form-input>
                      </b-form-group>
                      <b-form-group>
                        <b-form-input
                          type="text"
                          placeholder="E-mail*"
                          required
                        >
                        </b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-form-group class="mb-4">
                    <b-form-textarea
                      rows="5"
                      placeholder="Оставьте комментарий к заказу"
                    >
                    </b-form-textarea>
                  </b-form-group>

                  <b-row>
                    <b-col xl="9">
                      <payment-method-selector
                        :value="paymentMethod"
                      ></payment-method-selector>
                    </b-col>
                  </b-row>
                </b-form>
              </b-col>
              <b-col md="6" class="d-none d-md-block">
                <p class="text-gray-600">
                  Не&nbsp;определился адрес? Поставьте точку на&nbsp;карте
                  и&nbsp;мы Вас найдем!
                </p>
                <div class="embed-responsive embed-responsive-16by10">
                  <div class="embed-responsive-item bg-light"></div>
                </div>
              </b-col>
            </b-row>
          </div>
          <div
            v-if="deliveryMethod === 'post'"
            key="delivery-post"
            class="container"
          >
            <b-form class="mb-4 mb-lg-5">
              <b-row>
                <b-col md="6">
                  <b-row class="mb-lg-3">
                    <b-col lg="6">
                      <p>
                        Адрес получения
                      </p>
                      <b-form-group>
                        <b-form-input
                          type="text"
                          placeholder="Введите улицу, дом"
                        >
                        </b-form-input>
                      </b-form-group>
                      <b-row>
                        <b-col cols="6">
                          <b-form-group>
                            <b-form-input type="text" placeholder="строение">
                            </b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col cols="6">
                          <b-form-group>
                            <b-form-input type="text" placeholder="подъезд">
                            </b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col cols="6">
                          <b-form-group>
                            <b-form-input type="text" placeholder="квартира">
                            </b-form-input>
                          </b-form-group>
                        </b-col>
                        <b-col cols="6">
                          <b-form-group>
                            <b-form-input type="text" placeholder="этаж">
                            </b-form-input>
                          </b-form-group>
                        </b-col>
                      </b-row>
                    </b-col>
                    <b-col lg="6">
                      <p>
                        Контактные данные
                      </p>
                      <b-form-group>
                        <b-form-input type="text" placeholder="ФИО*" required>
                        </b-form-input>
                      </b-form-group>
                      <b-form-group>
                        <b-form-input
                          type="text"
                          placeholder="Телефон*"
                          required
                        >
                        </b-form-input>
                      </b-form-group>
                      <b-form-group>
                        <b-form-input
                          type="text"
                          placeholder="E-mail*"
                          required
                        >
                        </b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-form-group class="mb-4">
                    <b-form-textarea
                      rows="5"
                      placeholder="Оставьте комментарий к заказу"
                    >
                    </b-form-textarea>
                  </b-form-group>
                </b-col>
                <b-col lg="4" offset-xl="2">
                  <payment-method-selector
                    :value="paymentMethod"
                  ></payment-method-selector>
                </b-col>
              </b-row>
            </b-form>
          </div>
        </transition>
      </div>
      <div v-else key="entity-legal">
        <div class="container">
          <b-form class="mb-4 mb-lg-5">
            <b-row>
              <b-col md="6">
                <b-row align-v="center">
                  <b-col lg="6">
                    <div class="d-flex align-items-center mb-3">
                      <p class="mb-0 mr-3">
                        Контактные данные
                      </p>
                      <b-form-file
                        v-model="companyInfo"
                        class="ml-auto custom-file-icon"
                      ></b-form-file>
                    </div>
                  </b-col>
                  <b-col lg="6" class="d-none d-lg-block">
                    <p>
                      Адрес получения
                    </p>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6" class="pb-3">
                    <b-form-group>
                      <b-form-input type="text" placeholder="ИНН">
                      </b-form-input>
                    </b-form-group>
                    <b-form-group>
                      <b-form-input type="text" placeholder="КПП">
                      </b-form-input>
                    </b-form-group>
                    <b-form-group>
                      <b-form-input
                        type="text"
                        placeholder="Название организации"
                      >
                      </b-form-input>
                    </b-form-group>
                    <b-form-group>
                      <b-form-input type="text" placeholder="ФИО*" required>
                      </b-form-input>
                    </b-form-group>
                    <b-form-group>
                      <b-form-input type="text" placeholder="Телефон*" required>
                      </b-form-input>
                    </b-form-group>
                    <b-form-group>
                      <b-form-input type="text" placeholder="E-mail*" required>
                      </b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col lg="6" class="d-flex flex-column pb-3">
                    <p class="d-lg-none">
                      Адрес получения
                    </p>
                    <b-form-group>
                      <b-form-input
                        type="text"
                        placeholder="Введите улицу, дом"
                      >
                      </b-form-input>
                    </b-form-group>
                    <b-row>
                      <b-col cols="6">
                        <b-form-group>
                          <b-form-input type="text" placeholder="строение">
                          </b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group>
                          <b-form-input type="text" placeholder="подъезд">
                          </b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group>
                          <b-form-input type="text" placeholder="этаж">
                          </b-form-input>
                        </b-form-group>
                      </b-col>
                      <b-col cols="6">
                        <b-form-group>
                          <b-form-input type="text" placeholder="офис">
                          </b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <div class="form-group flex-fill">
                      <b-form-textarea
                        rows="5"
                        placeholder="Оставьте комментарий к заказу"
                        class="h-100"
                      >
                      </b-form-textarea>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
              <b-col lg="4" offset-xl="2">
                <p>
                  Способ оплаты
                </p>
                <b-form-radio-group
                  v-model="paymentMethodLegal"
                  size="lg"
                  class="mb-4 mb-lg-5"
                >
                  <div class="card-body rounded-sm bg-gray-600 mb-4 py-2">
                    <b-form-radio value="transfer" class="text-white">
                      <div class="font-size-base line-height-120 pl-2">
                        <span class="font-weight-medium">
                          Безналичная оплата </span
                        ><br />
                        Для&nbsp;юридических лиц только безналичная облата
                      </div>
                    </b-form-radio>
                  </div>
                </b-form-radio-group>
                <b-button type="submit" variant="primary">
                  Отправить заказ
                </b-button>
              </b-col>
            </b-row>
          </b-form>
        </div>
      </div>
    </transition>
  </main>
</template>

<script>
import PaymentMethodSelector from '@/components/cart/PaymentMethodSelector'

export default {
  components: {
    PaymentMethodSelector
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Главная', href: '/' },
        { text: 'Корзина', to: '/cart' },
        { text: 'Оформление заказа', to: '/cart/checkout', active: true }
      ],
      privateAddress: false,
      entityType: 'physical',
      deliveryMethod: 'self',
      selfDeliveryMode: 'map',
      paymentMethod: 'online',
      paymentMethodLegal: 'transfer',
      companyInfo: null,
      distanceDelivery: false,
      showDropdown: false,
      cities: ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Челябинск'],
      selectedCity: null
    }
  },
  mounted() {
    if (this.entityType === 'legal') this.deliveryMethod = 'courier'
  },
  methods: {
    setDeliveryOptions(value) {
      if (value === 'legal') this.deliveryMethod = 'courier'
    },
    setDeliveryMethod(value) {
      if (this.entityType === 'legal') this.deliveryMethod = 'courier'
      else this.deliveryMethod = value
    },
    toggleDropdown(value) {
      if (value && value.length > 0) this.showDropdown = true
      else this.showDropdown = false
    }
  }
}
</script>
