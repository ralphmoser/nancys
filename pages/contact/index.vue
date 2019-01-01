<template>
  <AppSection>Kontakt</AppSection>
</template>

<script>
import AppSection from '~/components/AppSection.vue'

export default {
  components: {
    AppSection
  },
  head() {
    return {
      title: 'Kontakt - Nancys',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Nehmen sie Kontakt auf mit Nancy's. Und eine Beschreibung, wie man Nancy's mit den öffentlichen Verkehrsmitteln erreichen kann."
        }
      ]
    }
  }
}
</script>

<style>
</style>
