## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

Desktop
![](screenshots/deskop.jpg)


### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS/SCSS
- Flexbox
- Mobile-first workflow

### What I learned

New rules and syntax to accurately customize background images.
```css
header {
    background-image: url(../../images/bg-pattern-intro-mobile.svg), $introBg;
    background-position: 35% 32%;
    background-size: 365%, 100%;
    border-bottom-left-radius: 100px;
    height: 650px;
    padding: 4rem 1.5rem;
    color: $lightText;
}
```

Using @use and @forward as well as mixins 
```scss
@use '../utilities/colors' as *;
@use '../utilities/fonts' as *;

@mixin headingFont {
    font-weight: $bold;
    font-family: $headingFont;
}

@mixin flex {
    display: flex;
    justify-content: center;
    align-items: center;
}

@mixin transition {
    transition: .3s ease-in-out;
}

@mixin hovers {
    background: $btnHover;
    color: $lightText;
}
```

matchmedia and how you can set window event listeners
```js
function showDesktopContent(){
    changeContent();

    matchMedia('(min-width: 992px)').addEventListener('change', () => {
        changeContent();
    });
}
showDesktopContent();
```

### Continued development

- I want to further my learning of SASS/SCSS, diving more into its complex functionality so I can incorporate it to larger projects.

- JavaScript will always be one of my top priorities to learn. Being the language of the web, there is so much to know and so much to gain. I always want to be further developing my JS skills.

### Useful resources

- [SASS documentation](https://sass-lang.com/documentation/) - What better way to properly learn SASS than their actual documentation!

- [Kevin Powell](https://www.youtube.com/watch?v=CR-a8upNjJ0&ab_channel=KevinPowell) - A great resource to learn about SASS 'use' and 'forward' as 'import' is being fazed out in the near future. 

## Author

- Website - [Malcolm Tan](https://www.malcolm-tan.com)
- LinkedIn - [@yourusername](www.linkedin.com/in/malcolmtan-)

## Acknowledgments

Thank you to [Airrick Dunfield](https://github.com/airrickdunfield) for helping fix bug issues


