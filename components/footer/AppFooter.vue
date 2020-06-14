<template>
  <footer class="app-footer">
    <div class="footer-top">
      <b-container>
        <b-row align-v="center">
          <b-col md="5" xl="4">
            <h4>
              Подпишись на&nbsp;акции
            </h4>
            <p class="mb-0 d-none d-lg-block">
              Подпишитесь на&nbsp;рассылку, чтобы быть в&nbsp;курсе всех
              новостей, действующих акциях,предложениях и&nbsp;изменениях
              программы лояльности.
            </p>
          </b-col>
          <b-col md="7" xl="8">
            <b-form>
              <b-row>
                <b-col cols="8">
                  <b-form-input
                    type="email"
                    placeholder="Введите E-mail"
                  ></b-form-input>
                </b-col>
                <b-col cols="4">
                  <b-button type="submit" variant="white">
                    Отправить
                  </b-button>
                </b-col>
              </b-row>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="footer-bottom">
      <b-container>
        <b-row>
          <b-col md="6" lg="4" xl="3" order-md="2" offset-xl="1">
            <a href="tel:+74951655555" class="phonenumber">
              8&nbsp;495&nbsp;165&nbsp;55&nbsp;55
            </a>
            <p class="mb-4">
              круглосуточно
            </p>
            <b-row align-v="center">
              <b-col cols="6" md="12" order-md="2">
                <p class="feedback-hint mb-4">
                  Пишите нам свои вопросы,<br />
                  комментарии и&nbsp;предложения
                </p>
              </b-col>
              <b-col cols="6" md="12" order-md="1">
                <b-button
                  v-b-modal.modalFeedback
                  variant="primary"
                  class="btn-feedback mb-4 mb-md-3"
                >
                  <svg-icon name="feedback" width="24" height="24" />
                  <span class="caption">Оставить заявку</span>
                </b-button>
              </b-col>
            </b-row>
            <b-row align-v="center">
              <b-col cols="7" lg="12" order-lg="2" class="mb-3">
                <a href="#" target="_blank" class="footer-link-app">
                  <img src="/images/app-apple.svg" class="img-fluid" />
                </a>
                <a href="#" target="_blank" class="footer-link-app">
                  <img src="/images/app-google.svg" class="img-fluid" />
                </a>
              </b-col>
              <b-col cols="5" lg="12" order-lg="1" class="mb-3">
                <a href="#" target="_blank" class="footer-link-social">
                  <svg-icon name="social-instagram" width="32" height="32" />
                </a>
                <a href="#" target="_blank" class="footer-link-social">
                  <svg-icon name="social-vk" width="32" height="32" />
                </a>
                <a href="#" target="_blank" class="footer-link-social">
                  <svg-icon name="social-facebook" width="32" height="32" />
                </a>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="6" lg="8" xl="6" order-md="1" class="pr-xl-0">
            <b-row class="footer-links">
              <b-col lg="4">
                <div v-b-toggle.collapseFooterAbout class="collapse-toggle">
                  <span class="caption">
                    О&nbsp;компании
                  </span>
                  <svg-icon name="caret" width="12" height="12" />
                </div>
                <b-collapse
                  id="collapseFooterAbout"
                  class="footer-links-collapse"
                >
                  <ul class="list-unstyled">
                    <li>
                      <a href="/about" class="footer-link-item">
                        О&nbsp;нас
                      </a>
                    </li>
                    <li>
                      <a href="/career" class="footer-link-item">
                        Вакансии
                      </a>
                    </li>
                    <li>
                      <a href="/contacts" class="footer-link-item">
                        Контакты
                      </a>
                    </li>
                    <li>
                      <a href="/requisites" class="footer-link-item">
                        Реквизиты
                      </a>
                    </li>
                    <li>
                      <a href="/documentation" class="footer-link-item">
                        Документы
                      </a>
                    </li>
                  </ul>
                </b-collapse>
              </b-col>
              <b-col lg="4">
                <div v-b-toggle.collapseFooterHelp class="collapse-toggle">
                  <span class="caption">
                    Помощь покупателю
                  </span>
                  <svg-icon name="caret" width="12" height="12" />
                </div>
                <b-collapse
                  id="collapseFooterHelp"
                  class="footer-links-collapse"
                >
                  <ul class="list-unstyled">
                    <li>
                      <a href="/orders" class="footer-link-item">
                        Мои заказы
                      </a>
                    </li>
                    <li>
                      <a href="/" class="footer-link-item">
                        Как мы работаем
                      </a>
                    </li>
                    <li>
                      <a href="/delivery/zones" class="footer-link-item">
                        Зоны доставки
                      </a>
                    </li>
                    <li>
                      <a href="/delivery" class="footer-link-item">
                        Доставка и&nbsp;оплата
                      </a>
                    </li>
                    <li>
                      <a href="/help" class="footer-link-item">
                        Помощь
                      </a>
                    </li>
                  </ul>
                </b-collapse>
              </b-col>
              <b-col lg="4">
                <div v-b-toggle.collapseFooterPartners class="collapse-toggle">
                  <span class="caption">
                    Партнерам
                  </span>
                  <svg-icon name="caret" width="12" height="12" />
                </div>
                <b-collapse
                  id="collapseFooterPartners"
                  class="footer-links-collapse"
                >
                  <ul class="list-unstyled">
                    <li>
                      <a href="/" class="footer-link-item">
                        Как начать продавать
                      </a>
                    </li>
                    <li>
                      <a href="/" class="footer-link-item">
                        Справка партнерам
                      </a>
                    </li>
                    <li>
                      <a href="/" class="footer-link-item">
                        Партнерская программа
                      </a>
                    </li>
                    <li>
                      <a href="/" class="footer-link-item">
                        Реферальная программа
                      </a>
                    </li>
                    <li>
                      <a href="/faq" class="footer-link-item">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </b-collapse>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="copyright">
      <b-container>
        <b-row>
          <b-col md="6" xl="7">
            <p class="mb-2">
              <a href="#" target="_blank" class="text-reset">
                <u>Обработка персональных данных</u>
              </a>
            </p>
          </b-col>
          <b-col md="6" xl="5">
            <p class="mb-2">
              <a href="#" target="_blank" class="text-reset">
                <u>Политика возврата</u>
              </a>
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <modal-feedback></modal-feedback>
  </footer>
</template>

<script>
import ModalFeedback from '@/components/modals/ModalFeedback'

export default {
  components: {
    ModalFeedback
  }
}
</script>
