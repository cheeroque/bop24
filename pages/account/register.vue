<template>
  <main class="page-auth page-auth-register">
    <div class="bg-wrapper">
      <img src="/images/account/bg-register-md.jpg" class="d-lg-none" />
      <img
        src="/images/account/bg-register.jpg"
        class="d-none d-lg-block d-xl-none"
      />
      <img src="/images/account/bg-register-2k.jpg" class="d-none d-xl-block" />
    </div>
    <b-container class="container-auth">
      <b-row class="h-100">
        <b-col
          cols="10"
          md="6"
          offset="1"
          offset-md="0"
          class="d-flex flex-column justify-content-md-center"
        >
          <h3 class="mb-0">
            Регистрация
          </h3>
          <p class="font-size-4 text-primary mb-4 mb-lg-5">
            в&nbsp;личном кабинете bop.ru
          </p>

          <b-form class="form-auth">
            <b-row class="mb-md-4">
              <b-col lg="6">
                <b-form-group>
                  <b-form-input
                    type="text"
                    placeholder="ФИО"
                    class="bg-light border-light"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col lg="6">
                <b-form-group>
                  <b-form-input
                    type="tel"
                    placeholder="Телефон"
                    class="bg-light border-light"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col lg="6">
                <b-form-group>
                  <b-form-input
                    type="email"
                    placeholder="E-mail"
                    class="bg-light border-light"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col lg="6">
                <b-form-group>
                  <b-form-input
                    type="password"
                    placeholder="Пароль"
                    class="bg-light border-light"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-form-group class="mb-4">
              <b-form-checkbox size="lg">
                <p class="font-size-1 font-weight-light line-height-120 mb-0">
                  Я принимаю
                  <b-link to="/terms-of-use" class="text-reset text-underline"
                    >пользовательское соглашение</b-link
                  >
                  и&nbsp;даю свое согласие на&nbsp;<b-link
                    to="/privacy"
                    class="text-reset text-underline"
                    >обработку персональных данных</b-link
                  >.
                </p>
              </b-form-checkbox>
            </b-form-group>
            <b-button to="/account/auth" variant="primary">
              Зарегистрироваться
            </b-button>
          </b-form>

          <div class="text-center mt-auto d-md-none">
            <div class="mb-5">
              <a href="#" target="_blank">
                <img
                  src="/images/app-apple-simple-light.svg"
                  width="90"
                  class="img-fluid"
                />
              </a>
              <a href="#" target="_blank">
                <img
                  src="/images/app-google-simple-light.svg"
                  width="90"
                  class="img-fluid"
                />
              </a>
            </div>
            <div class="mb-4">
              <a href="#" target="_blank" class="text-gray-300 mx-1">
                <svg-icon name="social-instagram" width="32" height="32" />
              </a>
              <a href="#" target="_blank" class="text-gray-300 mx-1">
                <svg-icon name="social-vk" width="32" height="32" />
              </a>
              <a href="#" target="_blank" class="text-gray-300 mx-1">
                <svg-icon name="social-facebook" width="32" height="32" />
              </a>
            </div>
          </div>

          <div class="d-none d-md-block">
            <a href="#" target="_blank" class="mr-1">
              <img
                src="/images/app-apple-simple.svg"
                width="90"
                class="img-fluid"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="/images/app-google-simple.svg"
                width="90"
                class="img-fluid"
              />
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>
<script>
export default {
  layout: 'simple'
}
</script>
