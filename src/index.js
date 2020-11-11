const el = document.documentElement
let requestMethodName = 'requestFullscreen'
let exitMethodName = 'exitFullscreen'
let fullscreenPropName = 'fullscreenElement'

if ('webkitRequestFullScreen' in el) {
  requestMethodName = 'webkitRequestFullScreen'
  exitMethodName = 'webkitExitFullscreen'
  fullscreenPropName = 'webkitFullscreenElement'
} else if ('msRequestFullscreen' in el) {
  requestMethodName = 'msRequestFullscreen'
  exitMethodName = 'msExitFullscreen'
  fullscreenPropName = 'msFullscreenElement'
} else if ('mozRequestFullScreen' in el) {
  requestMethodName = 'mozRequestFullScreen'
  exitMethodName = 'mozCancelFullScreen'
  fullscreenPropName = 'mozFullScreenElement'
} else if (!('requestFullscreen' in el)) {
  throw new Error('当前浏览器不支持Fullscreen API !')
}

window.onresize = function () {
  dispatch(isFullscreen())
}

function dispatch(status) {
  if (window.dispatchEvent) {
    window.dispatchEvent(new CustomEvent('fullscreen-change', { detail: { status } }))
  }
}

export function enterFullscreen(element = document.documentElement, options) {
  return element[requestMethodName](options)
}

export function exitFullscreen() {
  return document[exitMethodName]()
}

export function isFullscreen (element) {
  if (element) {
    return element === document[fullscreenPropName]
  } else {
    return document[fullscreenPropName] || false
  }
}

export function toggleFullscreen(element) {
  if (isFullscreen(element)) {
    return exitFullscreen()
  } else {
    return enterFullscreen(element)
  }
}
