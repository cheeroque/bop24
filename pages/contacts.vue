<template>
  <main class="container">
    <b-breadcrumb :items="breadcrumbs" class="d-none d-md-flex"></b-breadcrumb>

    <b-row class="mb-lg-4">
      <b-col md="6" xl="4" class="mb-4">
        <p class="font-size-4 font-weight-medium mb-4">
          Контакты
        </p>
        <p class="mb-0">
          <b-link
            href="tel:+78588888888"
            class="text-reset text-decoration-none"
          >
            +7&nbsp;858&nbsp;888&nbsp;88&nbsp;88
          </b-link>
        </p>
        <p class="mb-4">
          <b-link
            href="tel:+78588888888"
            class="text-reset text-decoration-none"
          >
            +7&nbsp;858&nbsp;888&nbsp;88&nbsp;88
          </b-link>
        </p>

        <p class="mb-4">
          <b-link
            href="mailto:info@bop.ru"
            class="text-reset text-decoration-none"
          >
            info@bop.ru
          </b-link>
        </p>

        <p class="mb-4">
          <b-link
            href="https://yandex.ru/maps"
            class="text-reset text-decoration-none"
            target="_blank"
          >
            Лужнецкая набережная, 9/4, стр.&nbsp;17<br />
            Москва, 119270<br />
            Россия
          </b-link>
        </p>

        <b-button href="mailto:info@bop.ru" variant="outline-black">
          <svg-icon name="email" width="23" height="15" class="ml-n1" />
          <span class="font-weight-medium ml-3">
            Напишите нам
          </span>
        </b-button>
      </b-col>
      <b-col md="6" class="mb-4">
        <div class="contacts-map-wrapper">
          <iframe
            src="https://yandex.ru/map-widget/v1/-/CCr5j1b"
            width="100%"
            height="100%"
            frameborder="1"
            allowfullscreen="true"
            style="position:relative;"
          ></iframe>
        </div>
      </b-col>
    </b-row>

    <p class="font-size-4 font-weight-medium mb-4">
      Как до&nbsp;нас дойти
    </p>
    <p>
      Москва, ст. м. Алексеевская, ул. Годовикова, д. 9 (деловой центр
      «Калибр»), строение 1, АО «Гентерра»<br />
      Выйти из метро и перейти пр.Мира по подземному переходу. Из перехода –
      выход вправо.
    </p>
    <p>
      Далее по дорожке между домами (примерно перпендикулярно пр. Мира) - мимо
      детской площадки, мимо школы, всего около 5 мин - до синего стеклянного
      здания проходной делового центра «Калибр» (ПАО «Калибр»).
    </p>
    <p>
      Оформить пропуск в бюро пропусков (обязательно иметь паспорт или
      водительское удостоверение!). Выйти из проходной и идти правее, по
      направлению к арке между зданиями, далее пройти прямо сквозь арку и идти
      до конца, вдоль зданий справа и повернуть на право. Затем снова пройти
      прямо, вдоль зданий с левой стороны до самого конца, до вывеси АО
      «Гентерра».
    </p>
    <p class="mb-5">
      Въезд на территорию делового центра «Калибр» платный.<br />
      При необходимости оформить и оплатить разовый пропуск на въезд с временным
      размещением на гостевой парковке можно в кассе делового центра «Калибр»
      (стоимость для легковых автомобилей – 300 руб.).
    </p>
  </main>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        { text: 'Главная', href: '/' },
        { text: 'Контакты', to: '/contacts', active: true }
      ]
    }
  }
}
</script>
