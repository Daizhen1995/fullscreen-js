/**
 * ============================
 * fullscreenJS
 * a js library for fullscreen
 * ============================
 **/
var el = document.documentElement;
var requestMethodName = 'requestFullscreen';
var exitMethodName = 'exitFullscreen';
var fullscreenPropName = 'fullscreenElement';

if ('webkitRequestFullScreen' in el) {
  requestMethodName = 'webkitRequestFullScreen';
  exitMethodName = 'webkitExitFullscreen';
  fullscreenPropName = 'webkitFullscreenElement';
} else if ('msRequestFullscreen' in el) {
  requestMethodName = 'msRequestFullscreen';
  exitMethodName = 'msExitFullscreen';
  fullscreenPropName = 'msFullscreenElement';
} else if ('mozRequestFullScreen' in el) {
  requestMethodName = 'mozRequestFullScreen';
  exitMethodName = 'mozCancelFullScreen';
  fullscreenPropName = 'mozFullScreenElement';
} else if (!('requestFullscreen' in el)) {
  throw new Error('当前浏览器不支持Fullscreen API !');
}

window.onresize = function () {
  dispatch(isFullscreen());
};

function dispatch(status) {
  if (window.dispatchEvent) {
    window.dispatchEvent(new CustomEvent('fullscreen-change', {
      detail: {
        status: status
      }
    }));
  }
}

function enterFullscreen() {
  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.documentElement;
  var options = arguments.length > 1 ? arguments[1] : undefined;
  return element[requestMethodName](options);
}
function exitFullscreen() {
  return document[exitMethodName]();
}
function isFullscreen(element) {
  if (element) {
    return element === document[fullscreenPropName];
  } else {
    return document[fullscreenPropName] || false;
  }
}
function toggleFullscreen(element) {
  if (isFullscreen(element)) {
    return exitFullscreen();
  } else {
    return enterFullscreen(element);
  }
}

export { enterFullscreen, exitFullscreen, isFullscreen, toggleFullscreen };
/**
 * ======================
 * powerd by Zyx Daizhen
 * copyright 2020
 * ======================
 **/
