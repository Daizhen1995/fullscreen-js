declare module 'request-fullscreen' {
  export function enterFullscreen(): Promise<void>;
  export function exitFullscreen(): Promise<void>;
  export function isFullscreen(): boolean;
  export function toggleFullscreen(): Promise<void>;
}
