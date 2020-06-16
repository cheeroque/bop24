<template>
  <b-dropdown
    variant="outline-dark"
    class="dropdown-share"
    toggle-class="btn-share"
    menu-class="dropdown-menu-share"
    no-caret
    dropright
  >
    <template v-slot:button-content>
      <span class="caption">
        Поделиться
      </span>
      <svg-icon name="share" width="17" height="9" />
    </template>
    <b-dropdown-item href="#" class="fill-primary">
      <svg-icon name="social-instagram" width="25" height="25" />
    </b-dropdown-item>
    <b-dropdown-item href="#" class="fill-magenta">
      <svg-icon name="social-vk" width="25" height="25" />
    </b-dropdown-item>
    <b-dropdown-item href="#" class="fill-secondary">
      <svg-icon name="social-facebook" width="25" height="25" />
    </b-dropdown-item>
    <b-dropdown-item href="#" class="fill-warning">
      <svg-icon name="social-whatsapp" width="25" height="25" />
    </b-dropdown-item>
  </b-dropdown>
</template>
