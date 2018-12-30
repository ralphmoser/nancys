<template>
  <AppSection>
    <div v-html="content"></div>
  </AppSection>
</template>

<script>
import AppSection from '~/components/AppSection.vue'
import HomeContent from '~/assets/markdownFiles/HomeContent.md'

export default {
  components: {
    AppSection
  },
  data () {
    return {
      content: HomeContent
    }
  }

}
</script>

<style>

</style>
