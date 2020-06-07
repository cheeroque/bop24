<template>
  <div class="filter-range">
    <b-row class="mb-3">
      <b-col>
        <b-form-input
          type="number"
          :value="price.min"
          @change="updatePriceMin"
        />
      </b-col>
      <b-col>
        <b-form-input
          type="number"
          :value="price.max"
          @change="updatePriceMax"
        />
      </b-col>
    </b-row>
    <div class="multi-range-wrapper mb-1">
      <div
        class="fill"
        :style="{
          left: `${rangeFillStart}%`,
          right: `calc(${rangeFillEnd >= 1 ? rangeFillEnd : 1}% - 1px)`
        }"
      ></div>
      <b-form-input
        type="range"
        :min="priceRange.min"
        :max="priceRange.max"
        :value="price.min"
        @input="updatePriceMin"
      />
      <b-form-input
        type="range"
        :min="priceRange.min"
        :max="priceRange.max"
        :value="price.max"
        @input="updatePriceMax"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    priceRange: {
      type: Object,
      default() {
        return {
          min: 0,
          max: 9999
        }
      }
    },
    price: {
      type: Object,
      default() {
        return {
          min: 0,
          max: 9999
        }
      }
    }
  },
  computed: {
    rangeFillStart() {
      const fillStart =
        ((this.price.min - this.priceRange.min) * 100) /
        (this.priceRange.max - this.priceRange.min)
      return fillStart
    },
    rangeFillEnd() {
      const fillEnd =
        100 -
        ((this.price.max - this.priceRange.min) * 100) /
          (this.priceRange.max - this.priceRange.min)
      return fillEnd
    }
  },
  methods: {
    parsePrice(value) {
      return Number.isNaN(parseFloat(value)) ? 0 : parseFloat(value)
    },
    updatePriceMin(value) {
      let min = this.parsePrice(value)
      if (min < this.priceRange.min) {
        min = this.priceRange.min
      }
      let max = this.price.max

      if (min > max) {
        max = min
        if (max > this.priceRange.max) {
          max = this.priceRange.max
        }

        if (max === this.price.max) {
          min = this.price.max
        }
      }
      this.$emit('update', { min, max })
    },
    updatePriceMax(value) {
      let max = this.parsePrice(value)
      if (max > this.priceRange.max) {
        max = this.priceRange.max
      }
      let min = this.price.min

      if (max < min) {
        min = max
        if (min < this.priceRange.min) {
          min = this.priceRange.min
        }
      }

      this.$emit('update', { min, max })
    }
  }
}
</script>
