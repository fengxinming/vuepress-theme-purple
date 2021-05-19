<template>
  <header class="navbar">
    <div class="navbar-container">
      <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

      <RouterLink :to="$localePath" class="home-link">
        <img
          v-if="$site.themeConfig.logo"
          class="logo"
          :src="$withBase($site.themeConfig.logo)"
          :alt="$siteTitle"
        />
        <span
          v-if="$siteTitle"
          ref="siteName"
          class="site-name"
          :class="{ 'can-hide': $site.themeConfig.logo }"
        >
          {{ $siteTitle }}
        </span>
      </RouterLink>

      <div
        class="links"
        :style="
          linksWrapMaxWidth
            ? {
                'max-width': linksWrapMaxWidth + 'px',
              }
            : {}
        "
      >
        <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
        <SearchBox
          v-else-if="
            $site.themeConfig.search !== false &&
            $page.frontmatter.search !== false
          "
        />
        <NavLinks class="can-hide" />
      </div>
    </div>
  </header>
</template>

<script>
export { default } from '@parent-theme/components/Navbar.vue';
</script>

<style lang="stylus">
.navbar
  background-color $primaryBgColor
  color $primaryTextColor
  box-shadow 0 0 1rem $primaryBgColor

  .logo
    height: $navbarHeight - $navbarVerticalPadding * 2
    min-width: $navbarHeight - $navbarVerticalPadding * 2

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

@media (min-width $MQMobile)
  padding $navbarVerticalPadding $navbarHorizontalPadding
  line-height: $navbarHeight - $navbarVerticalPadding * 2

@media only screen and (min-width $navbarContainerWidth)
  .navbar
    .navbar-container
      margin 0 auto
      max-width $navbarContainerWidth
      position relative

      .links
        top 0
</style>
