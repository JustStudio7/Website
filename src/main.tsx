import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style={{position:'absolute',overflow:'hidden'}}><defs><filter id="glass" x="0%" y="0%" width="100%" height="100%"> <feTurbulence type="fractalNoise" baseFrequency="0.009 0.009" numOctaves="2" seed="67" result="noise"></feTurbulence> <feGaussianBlur in="noise" stdDeviation="20" result="blurred"></feGaussianBlur> <feDisplacementMap in="SourceGraphic" in2="blurred" scale="200" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap></filter></defs></svg>
  </StrictMode>,
)
