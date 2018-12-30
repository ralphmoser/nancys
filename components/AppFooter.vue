<template>
  <footer class="footer">
    <b-container v-bind:fluid="fluid">
    </b-container>
  </footer>

</template>

<script>
export default {
  props: {
    fluid: Boolean
  }
}
</script>
