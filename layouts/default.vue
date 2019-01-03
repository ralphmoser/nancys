<template>
  <div>
    <AppNavigation v-bind:fluid="fluid"/>
    <b-container>
      <transition name="page">
        <nuxt/>
      </transition>
    </b-container>
    <AppFooter v-bind:fluid="fluid"/>
  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation'
import AppFooter from '~/components/AppFooter'

export default  {
  components: { AppNavigation, AppFooter },
  data() {
    return {
      fluid: true
    }
  }
}
</script>

<style lang="scss">
  @import "~/assets/scss/custom.scss";


  .page-enter-active,
  .page-leave-active {
    transition: opacity 2s
  }
  .page-enter,
  .page-leave-to {
    opacity: 0
  }
  .page-enter-to,
  .page-leave {
    opacity: 1
  }

  //
  // slide left
  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: transform 750ms ease-in-out;
  }
  .slide-left-enter {
    transform: translateX(100%);
  }
  .slide-left-enter-to {
    transform: translateX(0);
  }
  .slide-left-leave {
    transform: translateX(0);
  }
  .slide-left-leave-to {
    transform: translateX(-100%);
  }

</style>
