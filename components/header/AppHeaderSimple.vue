<template>
  <div class="app-header-wrapper app-header-simple">
    <header class="app-header">
      <b-container class="px-0 overflow-hidden">
        <b-row align-v="center">
          <b-col cols="10" md="6" offset="1" offset-md="0">
            <a href="/" class="navbar-brand d-inline-flex">
              <img src="/images/logo-sm.svg" class="logo d-md-none" />
              <img src="/images/logo.svg" class="logo d-none d-md-block" />
            </a>
          </b-col>
          <b-col md="6" class="d-none d-md-block text-right">
            <a href="#" target="_blank" class="text-gray-300">
              <svg-icon name="social-instagram" width="32" height="32" />
            </a>
            <a href="#" target="_blank" class="text-gray-300 ml-1">
              <svg-icon name="social-vk" width="32" height="32" />
            </a>
            <a href="#" target="_blank" class="text-gray-300 ml-1">
              <svg-icon name="social-facebook" width="32" height="32" />
            </a>
          </b-col>
        </b-row>
      </b-container>
    </header>
  </div>
</template>
