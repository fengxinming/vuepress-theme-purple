<script>
export { default } from '@parent-theme/components/NavLinks.vue';
</script>

<style lang="stylus">
@media (min-width: $MQMobile)
  .nav-links a
    &:hover, &.router-link-active
      color $primaryTextAccentColor

  .nav-item > a:not(.external)
    &:hover, &.router-link-active
      margin-bottom -2px
      border-bottom 2px solid lighten($primaryTextAccentColor, 8%)
</style>
