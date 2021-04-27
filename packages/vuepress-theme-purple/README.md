# vuepress-theme-purple

[![npm package](https://nodei.co/npm/vuepress-theme-purple.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/vuepress-theme-purple)

> A purple theme for Vuepress.

[![NPM version](https://img.shields.io/npm/v/vuepress-theme-purple.svg?style=flat)](https://npmjs.org/package/vuepress-theme-purple)
[![NPM Downloads](https://img.shields.io/npm/dm/vuepress-theme-purple.svg?style=flat)](https://npmjs.org/package/vuepress-theme-purple)

## [Online Demo](https://fengxinming.github.io/vuepress-theme-purple)

## Usage

```
yarn add vuepress-theme-purple -D
# OR npm install vuepress-theme-purple -D
```

**edit `.vuepress/config.js`**
```js
// .vuepress/config.js
module.exports = {
  theme: 'purple',
  themeConfig: {
    // Please head documentation to see the available options.
  }
}
```

Same with:

```js
// .vuepress/config.js
module.exports = {
  theme: 'vuepress-theme-purple',
  themeConfig: {
    // Please head documentation to see the available options.
  }
}
```

## Styling

### palette.styl

To apply simple overrides to the styling of the [default preset](https://github.com/fengxinming/vuepress-theme-purple/blob/master/packages/vuepress-theme-purple/styles/palette.styl) or define some variables to use later, you can create a `.vuepress/styles/palette.styl` file.

There are some predefined variables you can tweak:

```styl
// 主背景色
$primaryBgColor ?= #764abc
// 主背景叠加的强调色
$primaryBgAccentColor ?= darken($primaryBgColor, 20%)
// 主文字色
$primaryTextColor ?= #ffffff
// 主文字色
$primaryTextAccentColor ?= #ffffff
// 网页标题颜色
$siteNameColor ?= $primaryTextColor
// 搜索框背景颜色
$searchboxBgColor ?= darken($primaryBgColor, 20%)
// 搜索框边框颜色
$searchboxBorderColor ?= $searchboxBgColor
// 搜索框边框强调色
$searchboxBorderAccentColor ?= lighten($primaryBgColor, 40%)
// 修改默认字体颜色
$textColor = $primaryBgColor
// 修改默认强调色
$accentColor = #1890ff
// 导航垂直空白高度
$navbarVerticalPadding ?= 0.7rem
// 导航水平空白宽度
$navbarHorizontalPadding ?= 1.5rem
// 导航容器宽度
$navbarContainerWidth ?= 1400px
// 页面容器宽度
$pageContainerWidth ?= 1400px
```

> Note
>
> You should ONLY define variables in this file. Since palette.styl will be imported at the end of the root Stylus config file, as a config, several files will use it, so once you wrote styles here, your style would be duplicated by multiple times.
