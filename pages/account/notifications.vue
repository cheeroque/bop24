<template>
  <div>
    <div class="container">
      <b-breadcrumb
        :items="breadcrumbs"
        class="d-none d-md-flex"
      ></b-breadcrumb>

      <h2 class="font-size-4 mb-4 d-none d-md-flex">
        #личный кабинет
      </h2>
    </div>
    <div class="container">
      <b-row>
        <b-col md="6" lg="4" xl="3" class="d-none d-md-block">
          <account-menu></account-menu>
        </b-col>
        <b-col md="6" lg="8" xl="9">
          <b-button
            to="/account"
            variant="link"
            class="account-backlink d-md-none"
          >
            <svg-icon name="arrow-backlink" width="19" height="7" />
            <span class="caption">
              Настройки общения
            </span>
          </b-button>

          <b-form class="mb-4">
            <b-row>
              <b-col lg="9" xl="7">
                <p class="font-weight-bold mb-4">
                  Как вам будет удобнее получать уведомления о&nbsp;скидках,
                  персональных предложениях, дополнительной информации
                  о&nbsp;картах и&nbsp;бонусах:
                </p>
                <b-form-checkbox-group v-model="selectedChannels" class="mb-4">
                  <b-row>
                    <b-col cols="6" lg="12">
                      <b-form-group class="mb-4">
                        <b-form-checkbox value="email">
                          E-mail
                        </b-form-checkbox>
                      </b-form-group>
                    </b-col>
                    <b-col cols="6" lg="12">
                      <b-form-group class="mb-4">
                        <b-form-checkbox value="sms">
                          SMS
                        </b-form-checkbox>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-form-checkbox-group>
              </b-col>
            </b-row>
            <b-row class="mb-4">
              <b-col lg="9" xl="7">
                <p class="font-weight-bold mb-4">
                  Какая информация вас интересует?
                </p>

                <b-form-checkbox-group v-model="selectedTopics" class="mb-4">
                  <b-form-group class="mb-4">
                    <b-form-checkbox value="suggestions">
                      Эксклюзивные предложения и&nbsp;рекомендации товаров
                    </b-form-checkbox>
                  </b-form-group>
                  <b-form-group class="mb-4">
                    <b-form-checkbox value="promo">
                      Рекламные рассылки о&nbsp;акциях
                    </b-form-checkbox>
                  </b-form-group>
                  <b-form-group class="mb-4">
                    <b-form-checkbox value="news">
                      Новости о&nbsp;компании
                    </b-form-checkbox>
                  </b-form-group>
                </b-form-checkbox-group>
              </b-col>
            </b-row>
            <b-row class="mb-4">
              <b-col lg="6" xl="4">
                <b-button type="submit" variant="primary" block>
                  Сохранить изменения
                </b-button>
              </b-col>
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import AccountMenu from '@/components/account/AccountMenu'

export default {
  layout: 'account',
  components: {
    AccountMenu
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Главная', href: '/' },
        { text: 'Личный кабинет', to: '/account' },
        {
          text: 'Настройки общения',
          to: '/account/notifications',
          active: true
        }
      ],
      selectedChannels: [],
      selectedTopics: []
    }
  }
}
</script>
