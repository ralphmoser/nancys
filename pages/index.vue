<template>
  <AppSection>
    <b-carousel id="nancys-carousel"
                style="text-shadow: 1px 1px 2px #333;"
                indicators
                wrap
                background="#333"
                :interval="6000"
                v-model="slide"
    >
      <!-- Slides image 1 -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-75 mx-auto rounded" src="/images/Nancys_Blumen.jpg">
      </b-carousel-slide>
       <!-- Slides image 2 -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-75 mx-auto rounded" src="/images/Nancys_Haare.jpg">
      </b-carousel-slide>
      <!-- Slides image 3 -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-75 mx-auto rounded" src="/images/Nancys_Schere.jpg">
      </b-carousel-slide>
      <!-- Slides image 4 -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-75 mx-auto rounded" src="/images/Nancys_Schloss.jpg">
      </b-carousel-slide>
      <!-- Slides image 5 -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-75 mx-auto rounded" src="/images/Nancys_Schnitt.jpg">
      </b-carousel-slide>
      <!-- Slides image 6 -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-75 mx-auto rounded" src="/images/Nancys_Wickler.jpg">
      </b-carousel-slide>
   </b-carousel>
    <div class="slogan">{{slogan}}</div>
  </AppSection>
</template>

<script>
import AppSection from '~/components/AppSection.vue'
import pkg from '../package.json'

export default {
  components: {
    AppSection
  },
  head() {
    return {
      title: "Angebot - Nancys",
      description: "Nancy's, das Coiffure-Geschäft für die Haut- und Haarpflege. Fühlen sie sich wohl in einer entspannenden, hellen und privaten Atmosphäre."
    }
  },
  data () {
    return {
      slide: 0,
      slogan: pkg.description
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/custom.scss";

  .slogan {
    display: block;
    margin: 3rem auto;
    @include pxl-title();
    text-align: center;
  }

  .carousel-item {
    outline: none;
  }
</style>
