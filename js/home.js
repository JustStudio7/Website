const splineViewer = document.querySelector('spline-viewer');
let lastTime = performance.now();
let frameCount = 0;

function checkFPS() {
  const currentTime = performance.now();
  frameCount++;

  if (currentTime - lastTime >= 1000) {
      const fps = frameCount;
      frameCount = 0;
      lastTime = currentTime;

      if (fps < 35) {
          splineViewer.remove();
      }
  }

  requestAnimationFrame(checkFPS);
}

requestAnimationFrame(checkFPS);
