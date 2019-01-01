<template>
  <AppSection>
    <b-img src="/images/Nancys_Zopf.jpg" class="w-100 rounded" width="100%"></b-img>
    <no-ssr>
      <div v-masonry item-selector=".grid-item" column-width=".grid-sizer" gutter=".gutter-sizer" transition-duration="0.5s" class="grid-container">
        <div class="grid-sizer"></div>
        <div class="gutter-sizer"></div>
        <div class="stamp"></div>
        <div v-masonry-tile class="grid-item p-3 rounded" v-for="(offer, index) in offers" :key="index" v-html="offer">
        </div>
      </div>
    </no-ssr>
  </AppSection>
</template>

<script>
import AppSection from '~/components/AppSection.vue'
import NoSSR from 'vue-no-ssr'

export default {
  components: {
    AppSection,
    'no-ssr': NoSSR
  },
  head() {
    return {
      title: "Angebot - Nancys",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Nancy's Angebote reichen von Haarwaschen mit Kopfmassage über Haarpflege, Farbe und Schnitt bis zur Gesichtsmassage."
        }
      ]
    }
  },
  data () {
    return {
      offers: []
    }
  },
  //
  // lifecycle hooks
  created () {
    // import all offers
    const files = require.context('~/assets/markdownFiles/offers', true, /\.md$/);
    const filenames = files.keys();

    for (let filename of filenames) {
      let offer = files(filename);
      this.offers.push(offer);
    }
  },
  mounted () {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/custom.scss";

  $masonry-gutter-width: 3%;

  .grid-container {
    margin: 3rem auto -$masonry-gutter-width;
  }

  .grid-sizer, .grid-item {
    margin: 0 0 $masonry-gutter-width;
    width: 100%;
    background-color: $gray-600;

    @include media-breakpoint-up(sm) {
      width: 50% - $masonry-gutter-width/2;
    }
    @include media-breakpoint-up(lg) {
      width: 33.333333% - $masonry-gutter-width*2/3;
    }
  }

  .gutter-sizer {
    width: $masonry-gutter-width;
  }
</style>
