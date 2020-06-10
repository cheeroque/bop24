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
                <b-form-group>
                  <b-form-input
                    type="text"
                    placeholder="Введите город получения"
                  ></b-form-input>
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
                  <b-link
                    href="#"
                    class="card card-white text-reset text-decoration-none h-100"
                    @click="deliveryMethod = 'self'"
                  >
                    <div class="card-body d-flex flex-column">
                      <b-form-radio value="self" class="mb-4"></b-form-radio>
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
                  </b-link>
                </b-col>
                <b-col lg="4" class="mb-3 mb-lg-0 px-2">
                  <b-link
                    href="#"
                    class="card card-white text-reset text-decoration-none h-100"
                    @click="deliveryMethod = 'courier'"
                  >
                    <div class="card-body d-flex flex-column">
                      <b-form-radio value="courier" class="mb-4"></b-form-radio>
                      <p class="font-size-3 font-weight-medium">
                        Курьерская доставка
                      </p>
                      <p class="text-primary mt-auto">
                        Бесплатно
                      </p>
                      <p class="mb-0">
                        с&nbsp;23.05.2020
                      </p>
                    </div>
                  </b-link>
                </b-col>
                <b-col lg="4" class="mb-3 mb-lg-0 px-2">
                  <b-link
                    href="#"
                    class="card card-white text-reset text-decoration-none h-100"
                    @click="deliveryMethod = 'post'"
                  >
                    <div class="card-body d-flex flex-column">
                      <b-form-radio value="post" class="mb-4"></b-form-radio>
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
                  </b-link>
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
    <div class="container">
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
                  <b-form-input type="text" placeholder="Введите улицу, дом">
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
                  <b-form-input type="text" placeholder="Телефон*" required>
                  </b-form-input>
                </b-form-group>
                <b-form-group>
                  <b-form-input type="text" placeholder="E-mail*" required>
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
                <p>
                  Способ оплаты
                </p>
                <b-form-radio-group
                  v-model="paymentMethod"
                  size="lg"
                  class="mb-3 mb-lg-4"
                >
                  <div class="card-body bg-primary mb-4">
                    <b-form-radio value="online" class="text-white">
                      <span class="font-size-base pl-2">
                        Оплата картой онлайн со&nbsp;скидкой 5%
                      </span>
                    </b-form-radio>
                  </div>
                  <div class="card-body mb-4 py-0">
                    <b-form-radio value="card">
                      <span class="font-size-base pl-2">
                        Банковской картой при&nbsp;получении
                      </span>
                    </b-form-radio>
                  </div>
                  <div class="card-body mb-4 py-0">
                    <b-form-radio value="credit">
                      <span class="font-size-base pl-2">
                        Оформление кредита
                      </span>
                    </b-form-radio>
                  </div>
                  <div class="card-body mb-4 py-0">
                    <b-form-radio value="cash">
                      <span class="font-size-base pl-2">
                        Наличными при&nbsp;получении
                      </span>
                    </b-form-radio>
                  </div>
                </b-form-radio-group>
                <b-button type="submit" variant="primary">
                  Перейти к&nbsp;оплате
                </b-button>
              </b-col>
            </b-row>
          </b-form>
        </b-col>
        <b-col md="6" class="d-none d-md-block">
          <p class="text-gray-600">
            Не&nbsp;определился адрес? Поставьте точку на&nbsp;карте и&nbsp;мы
            Вас найдем!
          </p>
          <div class="embed-responsive embed-responsive-16by10">
            <div class="embed-responsive-item bg-light"></div>
          </div>
        </b-col>
      </b-row>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        { text: 'Главная', href: '/' },
        { text: 'Корзина', to: '/cart' },
        { text: 'Оформление заказа', to: '/cart/checkout', active: true }
      ],
      entityType: 'physical',
      deliveryMethod: 'self',
      paymentMethod: 'online'
    }
  }
}
</script>
