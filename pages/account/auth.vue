<template>
  <main class="page-auth page-auth-login">
    <div class="bg-wrapper">
      <img src="/images/account/bg-auth-md.jpg" class="d-lg-none" />
      <img
        src="/images/account/bg-auth.jpg"
        class="d-none d-lg-block d-xl-none"
      />
      <img src="/images/account/bg-auth-2k.jpg" class="d-none d-xl-block" />
    </div>
    <b-container class="container-auth">
      <b-row class="h-100">
        <b-col
          cols="10"
          md="6"
          xl="5"
          offset="1"
          offset-md="6"
          offset-xl="7"
          class="d-flex flex-column justify-content-md-center"
        >
          <h3 class="mb-0">
            Добро пожаловать
          </h3>
          <p class="font-size-4 text-primary mb-4 mb-lg-5">
            в&nbsp;личный кабинет bop.ru
          </p>

          <b-form class="form-auth">
            <b-form-row class="mb-4">
              <b-col lg="8">
                <b-form-input
                  type="text"
                  placeholder="Логин"
                  class="bg-light border-light"
                  required
                ></b-form-input>
              </b-col>
            </b-form-row>
            <b-form-row class="mb-3 mb-lg-4 pb-2 align-items-center">
              <b-col lg="8">
                <b-form-input
                  type="password"
                  placeholder="Пароль"
                  class="bg-light border-light"
                  required
                ></b-form-input>
              </b-col>
              <b-col lg="4" class="text-right text-lg-left pt-3 py-lg-0">
                <b-link
                  to="/account/restore"
                  class="font-size-1 font-weight-light text-dark"
                >
                  Забыли пароль?
                </b-link>
              </b-col>
            </b-form-row>
            <b-form-row>
              <b-col cols="6" lg="4">
                <b-button
                  to="/account/register"
                  variant="outline-gray-600"
                  block
                >
                  Регистрация
                </b-button>
              </b-col>
              <b-col cols="6" lg="4">
                <b-button to="/account" variant="primary" block>
                  Войти
                </b-button>
              </b-col>
            </b-form-row>
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
