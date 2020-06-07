<template>
  <div class="collapse-catalog-sidebar">
    <b-button
      variant="link"
      class="collapse-toggle"
      :class="{ collapsed: !showCollapse }"
      @click="showCollapse = !showCollapse"
    >
      <span class="caption">
        {{ title }}
      </span>
      <svg-icon name="caret" width="12" height="12" />
    </b-button>
    <b-collapse v-model="showCollapse" :visible="show" accordion="accordion">
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
        return false
      }
    },
    accordion: {
      type: String,
      default: 'sidebar'
    }
  },
  data() {
    return {
      show: this.visible,
      showCollapse: false
    }
  }
}
</script>
