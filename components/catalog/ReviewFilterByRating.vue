<template>
  <div class="card card-review-filter">
    <div class="card-header">
      Показать отзывы с&nbsp;оценкой
    </div>
    <div class="card-body">
      <div
        v-for="(stars, C) in count"
        :key="`rating-${5 - C}-stars`"
        class="card-rating mb-2"
      >
        <svg-icon
          v-for="i in 5 - C"
          :key="`star-${i}-full`"
          name="rating"
          width="14"
          height="14"
          class="icon-rating icon-rating-full"
        />
        <svg-icon
          v-for="i in C"
          :key="`star-${i}`"
          name="rating"
          width="14"
          height="14"
          class="icon-rating"
        />
        <a href="#" class="rating-caption"> {{ stars }}&nbsp;отзывов </a>
      </div>
    </div>
    <div v-if="link" class="card-footer">
      <b-link :to="link" class="text-reset text-underline">
        Все отзывы о&nbsp;товаре
      </b-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Array,
      default() {
        return [0, 0, 0, 0, 0]
      }
    },
    link: {
      type: String,
      default: null
    }
  }
}
</script>
