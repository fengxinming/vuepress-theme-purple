<script>
export { default } from '@parent-theme/components/Navbar.vue';
</script>

<style lang="stylus">
.navbar
  padding $navbarVerticalPadding $navbarHorizontalPadding
  line-height $navbarHeight - $navbarVerticalPadding * 2

  .logo
    height $navbarHeight - $navbarVerticalPadding * 2
    min-width $navbarHeight - $navbarVerticalPadding * 2

  .site-name
    color $siteNameColor

  .links
    background-color $primaryBgColor
    right $navbarHorizontalPadding
    top $navbarVerticalPadding

    .search-box
      input
        background-color $searchboxBgColor
        border-color $searchboxBorderColor
        color $primaryTextColor

        &:focus
          border-color $searchboxBorderAccentColor
</style>
