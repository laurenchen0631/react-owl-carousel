# react-owl-carousel  [![npm version](https://img.shields.io/npm/v/react-owl-carousel.svg?style=flat)](https://www.npmjs.com/package/react-owl-carousel)
[React](http://facebook.github.io/react/) + [Owl Carousel 1.3](http://owlgraphic.com/owlcarousel/)

### 1.Getting Started
##### You need to load jQuery(1.7+) manually

```html
<!-- Load jQuery(1.7+) -->
<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>

<!-- Customized Style -->
<link rel="stylesheet" href="owl-carousel/owl.theme.css">
```

```jsx
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
```

### 2.Set up your javascript
wrap your divs inside the OwlCarousel component

```jsx
<OwlCarousel slideSpeed={300} navigation singleItem autoPlay >
	<div><img src="/img/fullimage1.jpg" alt="The Last of us"/></div>
	<div><img src="/img/fullimage2.jpg" alt="GTA V"/></div>
	<div><img src="/img/fullimage3.jpg" alt="Mirror Edge"/></div>
</OwlCarousel>
```


## OwlCarousel Props (Options of owl-carousel)

[docs] (http://owlgraphic.com/owlcarousel/demos/one.html)

| Name   |      Type      |  Descrption |
|:----------:|:-------------:|:------|
| items |  number | This variable allows you to set the maximum amount of items displayed at a time with the widest browser width |
| itemsDesktop | array | This allows you to preset the number of slides visible with a particular browser width. The format is [x,y] whereby x=browser width and y=number of slides displayed. <br />For example [1199,4] means that if(window<=1199){show 4 slides per page} Alternatively use itemsDesktop: false to override these settings. |
| itemsDesktopSmall | array | As above |
| itemsTablet | array | As above |
| itemsTabletSmall | array | As above |
| itemsMobile | array | As above |
| itemsCustom | array | array.	This allow you to add custom variations of items depending from the width. If this option is set, itemsDeskop, itemsDesktopSmall, itemsTablet, itemsMobile etc. are disabled. For better preview, order the arrays by screen size, but it's not mandatory. Don't forget to include the lowest available screen size, otherwise it will take the default one for screens lower than lowest available. <br />Example: [[0, 2], [400, 4], [700, 6], [1000, 8], [1200, 10], [1600, 16]] |
| singleItem | boolean |  |
| itemsScaleUp | boolean | Option to not stretch items when it is less than the supplied items |
| slideSpeed | number | Slide speed in milliseconds. |
| paginationSpeed | number | Pagination speed in milliseconds. |
| rewindNav | boolean | Slide to first item. Use rewindSpeed to change animation speed. |
| rewindSpeed | number | Rewind speed in milliseconds. |
| autoPlay | boolean / number | Change to any integrer for example autoPlay : 5000 to play every 5 seconds. <br />If you set autoPlay: true default speed will be 5 seconds. |
| stopOnHover | boolean | Stop autoplay on mouse hover |
| navigation | boolean | Display "next" and "prev" buttons. |
| navigationText | [array of element] / boolean | You can customize your own navigation. <br />To get empty buttons use navigationText : false. Also HTML can be used here. |
| scrollPerPage | boolean | Scroll per page not per item. This affect next/prev buttons and mouse/touch dragging. |
| pagination | boolean | Show pagination. |
| paginationNumbers | boolean | Show numbers inside pagination buttons. |
| responsive | boolean | Change that to "false" to disable resposive capabilities |
| responsiveRefreshRate | number | Check window width changes every 200ms for responsive actions |
| responsiveBaseWidth | jQuery selector | Owl Carousel check window for browser width changes. |
| baseClass | string | Automaticly added class for base CSS styles. |
| theme | string | Default Owl CSS styles for navigation and buttons. Change it to match your own theme. |
| lazyLoad | boolean | Delays loading of images. Images outside of viewport won't be loaded before user scrolls to them. Great for mobile devices to speed up page loadings. IMG need special markup class="lazyOwl" and data-src="your img path". |
| lazyFollow | boolean | When pagination used, it skips loading the images from pages that got skipped. It only loads the images that get displayed in viewport. If set to false, all images get loaded when pagination used. It is a sub setting of the lazy load function. |
| lazyEffect | boolean / one of 'fade', 'backSlide', 'goDown', 'scaleUp' | Default is fadeIn on 400ms speed. Use false to remove that effect. |
| autoHeight | boolean | Add height to owl-wrapper-outer so you can use diffrent heights on slides. Use it only for one item per page setting. |
| jsonPath | string | Allows you to load directly from a JSON file. The JSON structure you use needs to match the owl JSON structure used here. To use custom JSON structure see jsonSuccess option. |
| jsonSuccess | function | Success callback for $.getJSON build in into carousel. |
| dragBeforeAnimFinish | boolean | Ignore whether a transition is done or not (only dragging).|
| mouseDrag | boolean | Turn off/on mouse events. |
| touchDrag | boolean | Turn off/on touch events. |
| addClassActive | boolean | Add "active" classes on visible items. Works with any numbers of items on screen. |
| transitionStyle | string | Add CSS3 transition style. Works only with one item on screen. |


## OwlCarousel Method
*		next ()
*		prev ()
*		goTo (page)
*		jumpTo (page)
*		play ()
*		stop ()
