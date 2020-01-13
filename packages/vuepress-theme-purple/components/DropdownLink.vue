<script>
export { default } from '@parent-theme/components/DropdownLink.vue';
</script>

<style lang="stylus">
.nav-item
  .dropdown-wrapper
    .dropdown-title
      color $primaryTextColor
      outline none

    .nav-dropdown
      background $primaryBgColor
      border-color transparent

      .dropdown-item
        a
          &:hover
            color $primaryTextAccentColor
            background-color $primaryBgAccentColor

          &.router-link-active
            color $primaryTextAccentColor

            &::after
              border-left-color $primaryTextAccentColor

@media (max-width: $MQMobile)
  .nav-item
    .dropdown-wrapper
      .dropdown-title
        color $textColor

        &:hover
          color $accentColor

      .nav-dropdown
        background inherit
        border-color transparent

        .dropdown-item
          a
            &:hover
              color $accentColor
              background-color inherit

            &.router-link-active
              color $accentColor

              &::after
                border-left-color $accentColor

@media (min-width: $MQMobile)
  .nav-item
    .dropdown-wrapper
      .nav-dropdown
        .dropdown-item
          h4
            margin-left -0.5rem
</style>
