# react-owl-carousel  [![npm version](https://img.shields.io/npm/v/react-owl-carousel.svg?style=flat)](https://www.npmjs.com/package/react-owl-carousel)
[React](http://facebook.github.io/react/) + [Owl Carousel 2.2](https://owlcarousel2.github.io/OwlCarousel2/)

### 1.Getting Started

```jsx
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
```


### 2.Set up your javascript
wrap your divs inside the OwlCarousel component

```jsx
<OwlCarousel 
	className="owl-theme"
	loop margin={10} nav
>
	<div class="item"><h4>1</h4></div>
    <div class="item"><h4>2</h4></div>
    <div class="item"><h4>3</h4></div>
    <div class="item"><h4>4</h4></div>
    <div class="item"><h4>5</h4></div>
    <div class="item"><h4>6</h4></div>
    <div class="item"><h4>7</h4></div>
    <div class="item"><h4>8</h4></div>
    <div class="item"><h4>9</h4></div>
    <div class="item"><h4>10</h4></div>
    <div class="item"><h4>11</h4></div>
    <div class="item"><h4>12</h4></div>
</OwlCarousel>
```
className "owl-theme" is optional

## Event
| Name   |  Descrption |
|:----------:|:------|
| onInitialize | When the plugin initializes. |'
| onInitialized  | When the plugin has initialized. |
| onResize  | When the plugin gets resized. |
| onResized | When the plugin has resized. |
| onRefresh | When the internal state of the plugin needs update. |
| onRefreshed | When the internal state of the plugin has updated. |
| onDrag | When the dragging of an item is started. |
| onDragged | When the dragging of an item has finished. |
| onTranslate | When the translation of the stage starts. |
| onTranslated | When the translation of the stage has finished. |
| onChange | Parameter: property. When a property is going to change its value. |
| onChanged | Parameter: property. When a property has changed its value. |
| onLoadLazy | When lazy image loads. |
| onLoadedLazy | When lazy image has loaded. |
| onStopVideo | When video has unloaded. |
| onPlayVideo | When video has loaded. |


## OwlCarousel Method
*		next(speed)
*		prev(speed)
*		to(position, speed)
*		create()
*		destory()
*		play(timeout, speed)
*		stop()


## OwlCarousel Class Props

| Name   |      Type      |  Default | Descrption |
|:----------:|:-------------:|:----:|:------|
| refreshClass |  string | 'owl-refresh' | Class during refresh. |
| loadingClass | string | 'owl-loading' | Class during load. |
| loadedClass | string | 'owl-loaded' | Class after load. |
| rtlClass | string | 'owl-rtl' | Class for right to left mode. |
| dragClass | string | 'owl-drag' | Class for mouse drag mode. |
| grabClass | string | 'owl-grab' | Class during mouse drag. |
| stageClass | string | 'owl-stage' | Stage class. |
| stageOuterClass | string | 'owl-stage-outer' | Stage outer class. |
| navContainerClass | string | 'owl-nav' | Navigation container class. |
| navClass | [string] | [&#x27;owl-prev&#x27;,&#x27;owl-next&#x27;] | Navigation buttons classes. |
| controlsClass | string | 'owl-controls' | Controls container class - wrapper for navs and dots. |
| dotClass | string | 'owl-dot' | Dot Class. |
| dotsClass | string | 'owl-dots' | Dots container class. |
| autoHeightClass | string | 'owl-height' | Auto height class. |
| responsiveClass | string/bool | false | Optional helper class. Add '<responsiveClass>-<breakpoint>' class to main element. Can be used to stylize content on given breakpoint. |



## OwlCarousel Options

[offical docs](https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html)

| Name   |      Type      |  Default | Descrption |
|:----------:|:-------------:|:----:|:------|
| items |  number | 3 | The number of items you want to see on the screen. |
| margin |  number | 0 | margin-right(px) on item. |
| loop  |  bool | false | Infinity loop. Duplicate last and first items to get loop illusion. |
| center  |  bool | false  | Center item. Works well with even an odd number of items. |
| mouseDrag  |  bool | true | Mouse drag enabled. |
| touchDrag  |  bool | true | Touch drag enabled. |
| pullDrag  |  bool | true | Stage pull to edge. |
| freeDrag  |  bool | false | Item pull to edge. |
| stagePadding |  number | 0 | Padding left and right on stage (can see neighbours). |
| merge |  bool | false  | Merge items. Looking for data-merge='{number}' inside item.. |
| mergeFit | bool | true | Fit merged items if screen is smaller than items value. |
| autoWidth | bool | false | Set non grid content. Try using width style on divs. |
| startPosition  |  number/string | 0 | Start position or URL Hash string like '#id'. |
| URLhashListener  |  bool | false | Listen to url hash changes. data-hash on items is required. |
| nav  |  bool | false | Show next/prev buttons. |
| rewind |  bool | true | Go backwards when the boundary has reached. |
| navText | [dom element] | [&#x27;next&#x27;,&#x27;prev&#x27;] | HTML allowed. |
| navElement |  string | 'div' | DOM element type for a single directional navigation link. |
| slideBy  |  number/string | 1 | Navigation slide by x. 'page' string can be set to slide by page. |
| dots  |  bool | true | Show dots navigation. |
| dotsEach | number/bool | false | Show dots each x item. |
| dotData | bool | false | Used by data-dot content. |
| lazyLoad | bool | false | Lazy load images. data-src and data-src-retina for highres. Also load images into background inline style if element is not \<img\> |
| lazyContent | bool | false | lazyContent was introduced during beta tests but i removed it from the final release due to bad implementation. It is a nice options so i will work on it in the nearest feature. |
| autoplay | bool | false | Autoplay. |
| autoplayTimeout | number | 5000 | Autoplay interval timeout. |
| autoplayHoverPause | bool | false | Pause on mouse hover. |
| smartSpeed | number | 250 | Speed Calculate. More info to come.. |
| fluidSpeed | number |  | Speed Calculate. More info to come.. |
| autoplaySpeed | number/bool | false | autoplay speed. |
| navSpeed | number/bool | false | Navigation speed. |
| dotsSpeed | number/bool |  | Pagination speed. |
| dragEndSpeed | number/bool | false | Drag end speed. |
| callbacks | bool | true | **Enable callback events.** |
| responsive | object | empty object | Object containing responsive options. Can be set to false to remove responsive capabilities. |
| responsiveRefreshRate | number | 200 | Responsive refresh rate. |
| responsiveBaseElement | dom element | window  | Set on any DOM element. If you care about non responsive browser (like ie8) then use it on main wrapper. This will prevent from crazy resizing. |
| video | bool | false | Enable fetching YouTube/Vimeo/Vzaar videos. |
| videoHeight | number/bool | false | Set height for videos. |
| videoWidth | number/bool | false | Set width for videos. |
| animateOut | string/bool | false | Class for CSS3 animation out. |
| animateIn | string/bool | false | Class for CSS3 animation in. |
| fallbackEasing | string | swing | Easing for CSS2 $.animate. |
| info | function | false  | Callback to retrieve basic information (current item/pages/widths). Info function second parameter is Owl DOM object reference. |
| nestedItemSelector | string | false | Use it if owl items are deep nested inside some generated content. E.g 'youritem'. Dont use dot before class name. |
| itemElement | string | 'div' | DOM element type for owl-item. |
| stageElement | string | 'div' | DOM element type for owl-stage. |
| navContainer | string/bool | false  | Set your own container for nav. |
| dotsContainer | string/bool | false | Set your own container for dots. |





