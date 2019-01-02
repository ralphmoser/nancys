<template>
  <b-container v-bind:fluid="fluid">
    <b-navbar toggleable="md" type="dark">
      <b-navbar-brand to="/">
        <b-img width="150" src="/Nancys_logo.png"></b-img>
      </b-navbar-brand>
      <b-navbar-toggle class="border-0" target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="w-100 justify-content-end text-center">
          <b-nav-item to="/offers">Angebot</b-nav-item>
          <b-nav-item to="/philosophy">Philosophie</b-nav-item>
          <b-nav-item to="/curriculum">Werdegang</b-nav-item>
          <b-nav-item to="/contact">Kontakt</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
export default {
  props: {
    fluid: Boolean
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/custom.scss";

  nav {
    @include pxl-text();
  }

  .navbar-toggler {
    outline: none;
  }

</style>


