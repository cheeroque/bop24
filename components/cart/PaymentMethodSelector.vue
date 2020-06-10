<template>
  <div>
    <p>
      Способ оплаты
    </p>
    <b-form-radio-group v-model="value" size="lg" class="mb-4 mb-lg-5">
      <div class="card-body rounded-sm bg-primary mb-4">
        <b-form-radio value="online" class="text-white">
          <span class="font-size-base pl-2">
            Оплата картой онлайн со&nbsp;скидкой 5%
          </span>
        </b-form-radio>
      </div>
      <div class="card-body rounded-sm mb-4 py-0">
        <b-form-radio value="card">
          <span class="font-size-base pl-2">
            Банковской картой при&nbsp;получении
          </span>
        </b-form-radio>
      </div>
      <div class="card-body rounded-sm mb-4 py-0">
        <b-form-radio value="credit">
          <span class="font-size-base pl-2">
            Оформление кредита
          </span>
        </b-form-radio>
      </div>
      <div class="card-body rounded-sm mb-4 py-0">
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
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: 'online'
    }
  }
}
</script>
