export default async function isCapableDesktopDevice() {
  const ua = navigator.userAgent;

  const isMobileOrTablet = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /Macintosh/.test(ua));
  if (isMobileOrTablet) return false;

  const isFirefox = ua.includes('Firefox');
  const isSafari = ua.includes('Safari') && !ua.includes('Chrome') && !ua.includes('Chromium');

  if (isFirefox || isSafari) return false;

  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    
    if (!gl) return false;

    const ext = gl.getExtension('WEBGL_lose_context');
    if (!ext) return false;

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL).toLowerCase();
      
      const weakDrivers = ['intel hd', 'intel iris', 'llvmpipe', 'swiftshader', 'software rasterizer'];
      const isWeak = weakDrivers.some(driver => renderer.includes(driver));
      
      if (isWeak) return false;
    }

    const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
    if (maxTextureSize < 8192) return false;

    return true;
  } catch (e) {
    return false;
  }
}
