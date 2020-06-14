<template>
  <main>
    <b-container>
      <b-breadcrumb
        :items="breadcrumbs"
        class="d-none d-md-flex"
      ></b-breadcrumb>
    </b-container>

    <div class="page-about">
      <b-container>
        <b-row>
          <b-col lg="7" xl="6">
            <h1>#о&nbsp;нас</h1>
            <div class="lead">
              <p>
                <span class="font-weight-medium"
                  >Мы фокусируемся на&nbsp;потреблении как&nbsp;на&nbsp;силе
                  добра</span
                >
                и&nbsp;подчеркивании индивидуальности, вдохновляя молодых людей
                на&nbsp;то, чтобы проявить себя и&nbsp;достичь удивительных
                результатов. Мы считаем, что&nbsp;потребление товаров должно
                быть удобным и&nbsp;доступным всем.
              </p>
              <p>
                <span class="font-weight-medium"
                  >bop.ru&nbsp;– это уникальный мультиплатформенный опыт,</span
                >
                который находит яркий отклик у&nbsp;людей, которые его
                используют, потому&nbsp;что он создан ими и&nbsp;для&nbsp;них.
                Это место для&nbsp;выстраивания своего образа жизни, осознанного
                потребления, вдохновения… и,&nbsp;конечно же, для&nbsp;покупок.
              </p>
            </div>
          </b-col>
          <b-col lg="5" xl="4" offset-xl="2" class="d-none d-lg-block">
            <div class="mt-lg-n3 ml-lg-n4">
              <img src="/images/about/about1.jpg" class="img-overflow" />
            </div>
          </b-col>
        </b-row>
        <b-row align-v="end">
          <b-col cols="7" lg="8" xl="6" offset-lg="2" offset-xl="4">
            <b-row>
              <b-col lg="6">
                <p>
                  Наша миссия состоит в&nbsp;том, чтобы постоянно повышать
                  уровень обслуживания клиентов, используя интернет
                  и&nbsp;технологии, помогая потребителям находить, открывать
                  и&nbsp;покупать что-либо, а&nbsp;также расширять возможности
                  бизнеса и&nbsp;создателей контента.
                </p>
              </b-col>
              <b-col lg="6">
                <p class="font-weight-medium pr-xl-5">
                  Наша миссия&nbsp;– стать ритейлером номером один в&nbsp;мире
                  любителей комфортного и&nbsp;осознанного потребления
                  за&nbsp;10&nbsp;лет.
                </p>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="5" class="d-lg-none">
            <div class="ml-n5">
              <img
                src="/images/about/about1.jpg"
                height="350"
                class="img-overflow"
              />
            </div>
          </b-col>
        </b-row>
      </b-container>

      <b-container class="about-benefits">
        <b-row>
          <b-col cols="6" sm="4" lg="3" xl="2" class="mb-3">
            <div class="benefit">
              <span class="caption">
                Высокий уровень обслуживания
              </span>
            </div>
          </b-col>
          <b-col cols="6" sm="4" lg="3" xl="2" class="mb-3">
            <div class="benefit">
              <span class="caption">
                Гарантия качества
              </span>
            </div>
          </b-col>
          <b-col cols="6" sm="4" lg="3" xl="2" class="mb-3">
            <div class="benefit">
              <span class="caption">
                Поможем сэкономить (деньги и&nbsp;время)
              </span>
            </div>
          </b-col>
          <b-col
            cols="6"
            sm="4"
            lg="3"
            xl="2"
            offset-lg="3"
            offset-xl="6"
            class="mb-3"
          >
            <div class="benefit">
              <span class="caption">
                Доставим день в&nbsp;день
              </span>
            </div>
          </b-col>
          <b-col cols="6" sm="4" lg="3" xl="2" class="mb-3">
            <div class="benefit">
              <span class="caption">
                Социальная миссия
              </span>
            </div>
          </b-col>
          <b-col cols="6" sm="4" lg="3" xl="2" class="mb-3">
            <div class="benefit">
              <span class="caption">
                Безграничный выбор товаров для&nbsp;реализации вдохновения
              </span>
            </div>
          </b-col>
        </b-row>
      </b-container>

      <b-container class="mb-lg-5">
        <b-row align-v="center">
          <b-col md="7" lg="6" xl="5" class="d-none d-md-block">
            <div class="d-flex justify-content-end align-items-center">
              <img src="/images/about/about2.jpg" class="img-overflow" />
            </div>
          </b-col>
          <b-col md="5" lg="6">
            <div class="lead mb-0">
              Мы считаем, что эта миссия важна для&nbsp;России, поскольку
              расширение возможностей цифровых технологий для&nbsp;клиентов
              и&nbsp;бизнеса повышает уровень жизни людей в&nbsp;разных регионах
              страны. Этот подход стимулирует экономическую
              конкурентоспособность и&nbsp;производительность в&nbsp;глобальной
              экономике.<br />
              Мы будем продолжать расширять границы цифровой инфраструктуры
              и&nbsp;услуг, которые помогут улучшить качество обслуживания
              клиентов и&nbsp;помочь сделать экономику нашей страны более
              конкурентоспособной на&nbsp;мировой арене.
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        { text: 'Главная', href: '/' },
        { text: 'О\xA0нас', to: '/about', active: true }
      ]
    }
  }
}
</script>
