<script>
export { default } from '@parent-theme/components/Home.vue';
</script>

<style lang="stylus">
.home
  .hero
    .action-button
      background-color $primaryBgColor
      border-bottom 1px solid darken($primaryBgColor, 10%)

      &:hover
        background-color lighten($primaryBgColor, 10%)
</style>
