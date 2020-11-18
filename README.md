# request-fullscreen-js

a javascript library for fullscreen

## Contributors

This project exists thanks to all the people who contribute.

<div style="margin-bottom: 10px;">
  <a href="/geopic">
                <strong style="color: #40c9c6;">geopic</strong>
                <span class="text-gray">George Pickering</span>
  </a>
</div>

## Quickstart

### Install

npm install --save request-fullscreen-js or use dist/request-fullscreen.min.js

### Usage

For ES6:

```javascript
import { enterFullscreen, exitFullscreen, toggleFullscreen } from 'request-fullscreen-js'
```

For standalone usage:

```html
<script src="../dist/request-fullscreen.min.js"></script>
```

### Sample

In ES6:

```javascript
import { enterFullscreen, exitFullscreen, toggleFullscreen } from 'request-fullscreen-js'

enterFullscreen() // The entire document enters the full screen
enterFullscreen(document.getElementById('div'))
exitFullscreen(document.getElementById('div'))
toggleFullscreen(document.getElementById('div'))
```

In html:

```html
<div id="container">
  <button onclick="toggleFullScreen(document.documentElement)">文档全屏/退出全屏</button>
  <button onclick="toggleFullScreen(document.getElementById('container'))" style="margin-top: 20px">
    父容器全屏/退出全屏
  </button>
</div>
<script src="../dist/request-fullscreen.min.js"></script>
<script>
  function toggleFullScreen(element) {
    fullscreenJS.toggleFullscreen(element)
  }

  window.addEventListener('fullscreen-change', ({ detail: { status } }) => {
    console.log(status ? '进入全屏' : '退出全屏')
  })
</script>
```
