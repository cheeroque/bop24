<template>
  <div class="collapse-catalog-filter">
    <b-button
      variant="link"
      class="collapse-toggle"
      :class="{ collapsed: !showCollapse }"
      @click="showCollapse = !showCollapse"
    >
      <span class="caption">
        {{ title }}
      </span>
      <span class="caret"></span>
    </b-button>
    <b-collapse
      v-model="showCollapse"
      :accordion="accordion ? accordion : null"
    >
      <div class="collapse-content">
        <slot></slot>
      </div>
    </b-collapse>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    visible: {
      type: Boolean,
      default() {
        return true
      }
    },
    accordion: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      showCollapse: this.visible
    }
  }
}
</script>
