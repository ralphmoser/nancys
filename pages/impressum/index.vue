<template>
  <AppSection>
    <article v-html="content"></article>
  </AppSection>
</template>

<script>
import AppSection from '~/components/AppSection.vue'
import Impressum from "~/assets/markdownFiles/Impressum.md"

export default {
  components: {
    AppSection,
  },
  head () {
    return {
      title: "Impressum - Nancys",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Haftungsausschluss bezüglich des Online-Angebotes und dessen Inhalt."
        }
      ]
    }
  },
  data () {
    return {
      content: Impressum,
    }
  }
  
}
</script>

