<template>
  <div class="product-review">
    <div class="userpic d-none d-lg-block">
      <img :src="`/images/uploads/users/${item.author.img}.jpg`" />
    </div>
    <div class="review-content">
      <div class="d-flex align-items-center mb-3 mb-lg-4">
        <div class="userpic d-lg-none">
          <img :src="`/images/uploads/users/${item.author.img}.jpg`" />
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
      <p>
        {{ item.content.comment }}
      </p>
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
  }
}
</script>
