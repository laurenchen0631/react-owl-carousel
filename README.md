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
<OwlCarousel className="owl-theme" items={3}>
	<div><img src="/img/fullimage1.jpg" alt="The Last of us"/></div>
	<div><img src="/img/fullimage2.jpg" alt="GTA V"/></div>
	<div><img src="/img/fullimage3.jpg" alt="Mirror Edge"/></div>
</OwlCarousel>
```
className "owl-theme" is optional


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
| navText | [html element] | [&#x27;next&#x27;,&#x27;prev&#x27;] | HTML allowed. |
| items |  number |  |  |
| items |  number |  |  |
| items |  number |  |  |
| items| number |  |  |
| items| number |  |  |
| items| number |  |  |
| items| number |  |  |
| items| number |  |  |
| items| number |  |  |
| items| number |  |  |
| items| number |  |  |
| items| number |  |  |
| items| number |  |  |
| items| number |  |  |
| items| number |  |  |
| items| number |  |  |
| items| number |  |  |
| items| number |  |  |
| items| number |  |  |
| items| number |  |  |
| items| number |  |  |
| items| number |  |  |
| items| number |  |  |
| items| number |  |  |


## Event
| Name   |  Descrption |
|:----------:|:------|
| onInitialize |  |

## OwlCarousel Method
*		next(speed)
*		prev(speed)
*		to(position, speed)
*		create()
*		destory()
*		play(timeout, speed)
*		stop()

