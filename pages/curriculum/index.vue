<template>
  <AppSection>
    <b-row>
      <b-col cols="12" md="4" class="align-self-sm-center pb-5">
        <b-img src="/images/Nancys_Nancy1.jpg" class="portrait mx-auto w-100 rounded"></b-img>
      </b-col>
      <b-col cols="12" md="8">
        <b-row class="events" v-for="(event, index) in events" :key="index">
          <b-col cols="12" md="4" class="event-date" v-html="event.date"></b-col>
          <b-col cols="12" md="8" class="event-event" v-html="event.event"></b-col>
        </b-row>
        <b-row class="motivation pt-3">
          <b-col cols="12" v-html="motivation"></b-col>
        </b-row>
      </b-col>
    </b-row>
  </AppSection>
</template>

<script>
import AppSection from '~/components/AppSection.vue'
import Motivation from '~/assets/content/motivation.md'

export default {
  components: {
    AppSection
  },
  head () {
    return {
      title: "Werdegang - Nancys",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Nancy's Lebenslauf."
        }
      ]
    }
  },
  computed: {
    events: function() {
      // import all historical events
      const files = require.context('~/assets/content/history', true, /\.md$/);
      const filennames = files.keys();
      const events = [];
    
      for (let filename of filennames) {
        let name = filename.replace(/^.*[\\\/]/, '');
        name = name.replace(/\.[^/.]+$/, '');
        let content = files(filename);
        events.push({date: name, event: content});
      }
      return events;
    }
  },
  data () {
    return {
      motivation: Motivation,
    }
  },
}
</script>

<style lang="scss">
  @import "~/assets/scss/custom.scss";

  .portrait {
    display: block;
    max-width: 250px;
  }

  .events, .motivation {
    @include pxl-wysiwyg-body();
  }
</style>
