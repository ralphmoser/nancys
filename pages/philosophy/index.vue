<template>
  <AppSection>
    <b-container>
      <b-row>
        <b-col cols="12" md="6">
            <b-carousel id="nancys-carousel"
                        style="text-shadow: 1px 1px 2px #333;"
                        wrap
                        background="#333"
                        :interval="6000"
                        v-model="slide"
            >
              <!-- Slides image 1 -->
              <b-carousel-slide>
                <img slot="img" class="d-block img-fluid w-100 mx-auto rounded" src="/images/Nachhaltig1.jpg">
              </b-carousel-slide>
              <!-- Slides image 2 -->
              <b-carousel-slide>
                <img slot="img" class="d-block img-fluid w-100 mx-auto rounded" src="/images/Nachhaltig2.jpg">
              </b-carousel-slide>
          </b-carousel>
        </b-col>
        <b-col cols="12" md="6" class="align-self-md-center">
          <div class="pullquote" v-html="quote"></div>
        </b-col>
      </b-row>
      <b-row>
        <div class="philosophy" v-html="content"></div>
      </b-row>
    </b-container>
  </AppSection>
</template>

<script>
import AppSection from '~/components/AppSection.vue'
import Quote from '~/assets/markdownFiles/Philosophie-Quote.md'
import Descr from '~/assets/markdownFiles/Philosophie-Text.md'

export default {
  components: {
    AppSection
  },
  head() {
    return {
      title: "Philosophie - Nancys",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Nancy's legt grossen Wert auf Nachhaltigkeit, sei es bei der Kunden-Beratung, bei der Behandlung von Problemhaut oder -Haar, als auch beim Betrieb des Geschäftes."
        }
      ]
    }
  },
  data () {
    return {
      quote: Quote,
      slide: 0,
      content: Descr,
    }
  }

}
</script>

<style lang="scss">
  //
  // Do not scope these rules to allow styling of tags inside the markdown file
  @import "~/assets/scss/custom.scss";

  .pullquote {
    display: block;
    padding: 2.5em 0.5em;
    font-family: $pxl-text-font-italic;
    font-size: 1.25rem;

    &:before, &:after {
      display: block;
      position: relative;
      font-family: $pxl-text-font;
      font-size: 80px;
      line-height: 0px;
      text-align: left;
      font-style: normal;
      opacity: 0.25;
    }
    &:before {
      content: "\201C";
      top: 5px;
      left: -5px;
    }
    &:after {
      content: "\201D";
      bottom: -40px;
      right: -5px;
      text-align: right;
    }

    .author {
      font-size: 14px;
      text-align: right;
    }
  }

  .philosophy {
    margin: 2rem auto 1rem;
    padding: 0 $grid-gutter-width/2;
    @include pxl-wysiwyg-body();

    @include media-breakpoint-up(md) {
      column-count: 2;
      column-gap: $grid-gutter-width;
    }
  }
</style>
