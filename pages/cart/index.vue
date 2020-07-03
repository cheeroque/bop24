<template>
  <main>
    <div class="container">
      <b-breadcrumb
        :items="breadcrumbs"
        class="d-none d-md-flex"
      ></b-breadcrumb>
    </div>

    <div class="cart-content">
      <div class="container">
        <b-row>
          <b-col md="6" lg="7" xl="8">
            <div class="d-flex align-items-center">
              <p class="form-control-plaintext font-weight-bold w-auto mb-3">
                В&nbsp;корзине 10&nbsp;товаров
              </p>
              <p class="font-size-1 ml-auto d-md-none">
                <a href="#" class="text-gray-600 text-underline">
                  Очистить корзину
                </a>
              </p>
            </div>
            <cart-item
              v-for="(cartItem, index) in cartItems"
              :key="`cart-item-${index}`"
              :item="cartItem"
              @remove="removeItem(index)"
            >
            </cart-item>
          </b-col>
          <b-col md="6" lg="5" xl="4">
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
              <div class="card-body border-bottom border-light px-lg-3 py-4">
                <div class="px-lg-3">
                  <div class="d-flex align-items-end">
                    <p class="font-weight-bold mb-md-4">
                      Корзина
                    </p>
                    <p class="font-size-1 ml-auto mb-4 d-none d-md-block">
                      <a href="#" class="text-gray-600 text-underline">
                        Очистить корзину
                      </a>
                    </p>
                  </div>
                  <table class="table table-borderless table-sm mb-4">
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
                <b-button to="/cart/checkout" variant="primary" block>
                  Оформить заказ
                </b-button>
              </div>
              <div class="card-body px-lg-3 py-4">
                <div class="px-lg-3">
                  <p class="font-weight-bold mb-md-4">
                    Бонусы к&nbsp;заказу
                  </p>
                  <ul class="list-unstyled text-gray-700 fill-gray-700">
                    <li class="d-flex align-items-center mb-3">
                      <div class="align-self-start mr-3">
                        <svg-icon name="cart/delivery" width="24" height="24" />
                      </div>
                      <span>
                        Бесплатная доставка
                      </span>
                    </li>
                    <li class="d-flex align-items-center mb-3">
                      <div class="align-self-start mr-3">
                        <svg-icon name="cart/gift" width="24" height="24" />
                      </div>
                      <span>
                        Подарок
                      </span>
                    </li>
                    <li class="d-flex align-items-center mb-3">
                      <div class="align-self-start mr-3">
                        <svg-icon name="cart/star" width="24" height="24" />
                      </div>
                      <span>
                        +365&nbsp;бонусов
                      </span>
                    </li>
                    <li class="d-flex align-items-center mb-3">
                      <div class="align-self-start mr-3">
                        <svg-icon name="cart/discount" width="24" height="24" />
                      </div>
                      <span>
                        –597&nbsp;р. скидка
                      </span>
                    </li>
                  </ul>
                  <b-form-checkbox size="lg">
                    <span class="font-size-1 text-gray-700 ml-2">
                      Зачислить на бонусный счёт
                    </span>
                  </b-form-checkbox>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </main>
</template>

<script>
import CartItem from '@/components/cart/CartItem'

export default {
  components: {
    CartItem
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Главная', href: '/' },
        { text: 'Корзина', to: '/cart', active: true }
      ],
      item: {
        title: 'Набор специй Antico Pastificio “Пенне Дзита Ригате” 100 г',
        vendorCode: 'Артикул',
        img: 'groceries-milk',
        stock: 100,
        count: 1,
        price: '162,50'
      },
      cartItems: []
    }
  },
  mounted() {
    for (let i = 0; i < 8; i++) this.cartItems.push(this.item)
  },
  methods: {
    removeItem(index) {
      this.cartItems.splice(index, 1)
    }
  }
}
</script>
