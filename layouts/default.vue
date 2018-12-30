<template>
  <div>
    <AppNavigation v-bind:fluid="fluid"/>
    <b-container v-bind:fluid="fluid">
      <nuxt/>
    </b-container>
    <AppFooter v-bind:fluid="fluid"/>
  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation'
import AppFooter from '~/components/AppFooter'

export default  {
  components: { AppNavigation, AppFooter },
  data: function() {
    return {
      fluid: true
    }
  }
}
</script>
