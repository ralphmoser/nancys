<template>
  <AppSection>
    <b-row>
      <b-col cols="12" md="6">
        <b-img src="/images/Nachhaltig3.jpg" class="d-block pb-3 w-100 rounded"></b-img>
      </b-col>
      <b-col cols="12" md="6" class="contact align-self-sm-center pb-3" v-html="contact"></b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="6" class="coords pb-3" v-html="coords"></b-col>
      <b-col cols="12" md="6" class="directions" v-html="directions"></b-col>
    </b-row>
  </AppSection>
</template>

<script>
import AppSection from '~/components/AppSection.vue'
import Contact from '~/assets/content/contact.md'
import Coords from '~/assets/content/coordinates.md'
import Directions from '~/assets/content/directions.md'

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
  },
  data () {
    return {
      contact: Contact,
      coords: Coords,
      directions: Directions,
    }
  }
}
</script>

<style lang="scss" >
  @import "~/assets/scss/custom.scss";

  .coords, .directions, .contact {
    @include pxl-wysiwyg-body();
  }
</style>
