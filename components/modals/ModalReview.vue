<template>
  <b-modal id="modalReview" hide-footer>
    <template v-slot:modal-header="{ cancel }">
      <p class="flex-fill text-left mb-0">
        Мой отзыв о&nbsp;товаре
      </p>
      <b-button-close @click="cancel">
        <svg-icon name="close" width="14" height="14" />
      </b-button-close>
    </template>
    <b-form>
      <b-form-group
        label="Общая оценка"
        label-class="font-weight-medium"
        class="mb-4"
      >
        <b-form-radio-group
          v-model="rating"
          buttons
          button-variant="link"
          class="card-rating"
        >
          <b-form-radio v-for="i in 5" :key="`rating-${i}`" :value="i">
            <svg-icon
              name="rating"
              width="24"
              height="24"
              class="icon-rating"
              :class="{ 'icon-rating-full': i <= rating }"
            />
          </b-form-radio>
        </b-form-radio-group>
      </b-form-group>
      <b-form-group
        label="Опыт использования"
        label-class="font-weight-medium"
        class="mb-4"
      >
        <b-form-radio-group
          v-model="selectedOption"
          buttons
          button-variant="outline-primary"
          class="btn-group-pills"
        >
          <div v-for="option in options" :key="option.value" class="item">
            <b-form-radio :value="option.value">
              {{ option.text }}
            </b-form-radio>
          </div>
        </b-form-radio-group>
      </b-form-group>
      <b-form-group>
        <b-form-textarea rows="2" placeholder="Достоинства"></b-form-textarea>
      </b-form-group>
      <b-form-group>
        <b-form-textarea rows="2" placeholder="Недостатки"></b-form-textarea>
      </b-form-group>
      <b-form-group class="mb-4">
        <b-form-textarea rows="2" placeholder="Комментарий"></b-form-textarea>
      </b-form-group>

      <b-form-group class="mb-4">
        <b-form-file
          browse-text="Загрузить фото"
          placeholder="Фото не загружено"
          drop-placeholder="Перетащите фото сюда"
        ></b-form-file>
      </b-form-group>

      <b-form-group>
        <b-form-checkbox v-model="isAnonymous" size="lg">
          <span class="smalltext">
            Оставить отзыв анонимно.
          </span>
        </b-form-checkbox>
      </b-form-group>

      <b-button type="submit" variant="primary">
        Отправить отзыв
      </b-button>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      rating: 0,
      isAnonymous: false,
      selectedOption: null,
      options: [
        { value: 'ltm', text: 'меньше месяца' },
        { value: 'gtm', text: 'больше месяца' },
        { value: 'gty', text: 'больше года' }
      ]
    }
  }
}
</script>
