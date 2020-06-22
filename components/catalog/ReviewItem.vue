<template>
  <div class="product-review">
    <div class="userpic d-none d-lg-flex">
      <img
        v-if="item.author.img"
        :src="`/images/users/${item.author.img}.jpg`"
      />
      <span v-else>
        {{ getInitials(item.author.name) }}
      </span>
    </div>
    <div class="review-content">
      <div class="d-flex align-items-center mb-3 mb-lg-4">
        <div class="userpic d-lg-none">
          <img
            v-if="item.author.img"
            :src="`/images/users/${item.author.img}.jpg`"
          />
          <span v-else>
            {{ getInitials(item.author.name) }}
          </span>
        </div>
        <div class="mr-30">
          <p class="font-weight-medium mb-2">
            {{ item.author.name }}
          </p>
          <p class="font-size-1 text-dark mb-0">
            {{ item.date }}
          </p>
        </div>
        <div class="card-rating">
          <svg-icon
            v-for="i in item.rating"
            :key="`star-${i}-full`"
            name="rating"
            width="11"
            height="11"
            class="icon-rating icon-rating-full"
          />
          <svg-icon
            v-for="i in 5 - item.rating"
            :key="`star-${i}`"
            name="rating"
            width="11"
            height="11"
            class="icon-rating"
          />
          <span class="rating-caption">
            Отличный товар
          </span>
        </div>
      </div>
      <p class="font-weight-medium mb-2">
        Достоинства
      </p>
      <p>
        {{ item.content.pros }}
      </p>
      <p class="font-weight-medium mb-2">
        Недостатки
      </p>
      <p>
        {{ item.content.cons }}
      </p>
      <p class="font-weight-medium mb-2">
        Комментарий
      </p>
      <div class="mb-4">
        <p>
          {{ item.content.comment }}
        </p>
      </div>
      <b-row align-v="center">
        <b-col md="6">
          <b-link
            v-if="item.comments && item.comments.length > 0"
            class="font-weight-medium"
            @click="showComments = !showComments"
          >
            {{ getCommentCount(item.comments.length) }}
          </b-link>
        </b-col>
        <b-col md="6" class="text-md-right">
          <b-button
            variant="outline-primary"
            @click="showCommentForm = !showCommentForm"
          >
            Оставить комментарий
          </b-button>
        </b-col>
      </b-row>
      <transition name="fade">
        <b-form v-if="showCommentForm">
          <b-form-group class="my-4">
            <b-form-textarea
              rows="3"
              placeholder="Ваш комментарий"
            ></b-form-textarea>
          </b-form-group>
          <div class="text-right">
            <b-button type="submit" variant="outline-primary">
              Отправить
            </b-button>
          </div>
        </b-form>
      </transition>
      <transition name="fade">
        <div
          v-if="showComments && item.comments && item.comments.length > 0"
          class="mt-4"
        >
          <div
            v-for="(comment, C) in item.comments"
            :key="`comment-${C}`"
            class="product-review mb-3"
          >
            <div class="userpic d-none d-lg-flex">
              <img
                v-if="comment.author.img"
                :src="`/images/users/${comment.author.img}.jpg`"
              />
              <span v-else>
                {{ getInitials(comment.author.name) }}
              </span>
            </div>
            <div class="review-content">
              <div class="d-flex align-items-center mb-3 mb-lg-4">
                <div class="userpic d-lg-none">
                  <img
                    v-if="comment.author.img"
                    :src="`/images/users/${comment.author.img}.jpg`"
                  />
                  <span v-else>
                    {{ getInitials(comment.author.name) }}
                  </span>
                </div>
                <div class="mr-30">
                  <p class="font-weight-medium mb-2">
                    {{ comment.author.name }}
                  </p>
                  <p class="font-size-1 text-dark mb-0">
                    {{ comment.date }}
                  </p>
                </div>
              </div>
              <div class="mb-3">
                <p>
                  {{ comment.content }}
                </p>
                <b-link href="#" class="font-weight-medium">
                  Ответить
                </b-link>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showCommentForm: false,
      showComments: false
    }
  },
  methods: {
    getCommentCount(count) {
      const titles = ['комментарий', 'комментария', 'комментариев']
      /* http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html?id=l10n/pluralforms */
      return `${count}\xA0${
        titles[
          count % 10 === 1 && count % 100 !== 11
            ? 0
            : count % 10 >= 2 &&
              count % 10 <= 4 &&
              (count % 100 < 10 || count % 100 >= 20)
            ? 1
            : 2
        ]
      }`
    },
    getInitials(name) {
      const parts = name.split(' ')
      if (parts && parts.length > 0) {
        if (parts.length < 2) {
          const firstName = parts[0]
          return firstName.substring(0, 2)
        } else return `${parts[0][0]}${parts[1][0]}`
      } else return '??'
    }
  }
}
</script>
