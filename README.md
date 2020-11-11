# fullscreen-js

a javascript library for fullscreen

## Quickstart

### Install

npm install --save fullscreen-js or use dist/fullscreen.min.js

### Usage

For ES6:

```javascript
import { enterFullscreen, exitFullscreen, toggleFullscreen } from 'fullscreen-js'
```

For standalone usage:

```html
<script src="../dist/fullscreen.min.js"></script>
```

### Sample

In ES6:
```javascript
import { enterFullscreen, exitFullscreen, toggleFullscreen } from 'fullscreen-js'

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
<script src="../dist/fullscreen.min.js"></script>
<script>
  function toggleFullScreen(element) {
    fullscreenJS.toggleFullscreen(element)
  }

  window.addEventListener('fullscreen-change', ({ detail: { status } }) => {
    console.log(status ? '进入全屏' : '退出全屏')
  })
</script>
```