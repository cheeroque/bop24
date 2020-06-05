<template>
  <b-modal id="modalFeedback" hide-footer>
    <template v-slot:modal-header="{ cancel }">
      <p class="flex-fill mb-0">
        Обратная связь
      </p>
      <b-button-close @click="cancel">
        <svg-icon name="close" width="14" height="14" />
      </b-button-close>
    </template>
    <p class="font-weight-medium mb-4">
      Мы всегда готовы ответить на&nbsp;ваши вопросы и&nbsp;выслушать
      предложения о&nbsp;том, как&nbsp;нам стать лучше для&nbsp;вас
    </p>
    <b-form>
      <b-row class="mb-2">
        <b-col md="6">
          <b-form-group>
            <b-form-input type="text" placeholder="Ваше имя"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <b-form-input type="email" placeholder="Ваш E-mail"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <b-form-input type="tel" placeholder="Ваш телефон"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <b-form-input type="text" placeholder="Ваш город"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-form-group
        label="Цель обращения"
        label-class="font-weight-medium mb-2"
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
        <b-form-textarea
          rows="5"
          placeholder="Опишите ваш вопрос"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group>
        <b-form-checkbox v-model="accept" size="lg">
          <span class="smalltext">
            Я принимаю согласие на&nbsp;обработку и&nbsp;хранение<br />
            своих персональных данных.
          </span>
        </b-form-checkbox>
      </b-form-group>

      <b-button type="submit" variant="primary">
        Отправить
      </b-button>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      accept: false,
      selectedOption: null,
      options: [
        { value: 'question', text: 'вопрос' },
        { value: 'suggestion', text: 'предложение' },
        { value: 'complaint', text: 'жалоба' },
        { value: 'other', text: 'другое' },
        { value: 'content', text: 'вопрос по контенту' }
      ]
    }
  }
}
</script>
