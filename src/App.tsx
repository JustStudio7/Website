import { useState, useEffect } from 'react'
import wide from './assets/wide.png'
import './App.css'
import { LoadingLogo } from './logo'
import { Shader, Dither, Plasma, Aurora, ImageTexture, Neon, LensFlare, ReflectivePlane, Glow, GridDistortion, ChannelBlur } from 'shaders/react'

declare global {
  interface Window {
    JUSTC_ATTEMPTS?: number;
    JUSTC?: any;
  }
}

function init(callback: ()=>void) {
  window['JUSTC'].initialize().then(callback).catch((e: any) => {
    console.error(e);
    init(callback);
  });
}

function load(callback: (obj : any)=>void, link = '/data.justc') {
  if (!window.JUSTC_ATTEMPTS) {
    window.JUSTC_ATTEMPTS = 0;
  }
  init(()=>fetch(link + '?_=' + Date.now(), { cache: 'no-store' }).then((resp)=>{
    resp.text().then(justc=>{
      let success = false;
      const id = setInterval(()=>{
        if (success) {
          clearInterval(id);
          window.JUSTC_ATTEMPTS = 0;
          return;
        }
        if (window.JUSTC_ATTEMPTS! > 5) {
          window.location.replace(window.location.href);
        }
        window.JUSTC_ATTEMPTS!++;
        try {
          callback(window['JUSTC'].execute(justc));
          success = true;
        } catch (_) {
          console.warn(_);
        }
      }, 1000);
    });
  }).catch((e: any)=>{
    console.error(e);
    load(callback, link);
  }));
}

function particles(div: HTMLElement) {
  for (let i = 0; i < 150; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style = 'animation-duration:' + Math.round(Math.random() * 4000 + 6000) * Math.round(Math.random() + 3) + 'ms;animation-delay:' + Math.round(Math.random() * 1000) + 'ms;top:' + Math.round(Math.random() * 100) + 'vh;--translateX:' + Math.round(Math.random() * 100) + 'vw';
    div.appendChild(particle);
  }
  return div;
}

function Grid() {
  return (
    <GridDistortion intensity={3.5/2} decay={10} radius={1.7} gridSize={128} opacity={.9} />
  )
}

function Blur() {
  return (
    <ChannelBlur redIntensity={5} greenIntensity={0} blueIntensity={36} blendMode='color' />
  )
}

interface LoadedObject {
  title: string[];
  langs: string[];
  [key: string]: any;
}

function App() {
  const [loaded, setLoaded] = useState(false);
  const loadshader = 'brightness(.5)';
  const copyfilter = 'blur(20px)';

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const id = setInterval(()=>{
      if (loaded) {
        clearInterval(id);
        return;
      }
      if (window['JUSTC']) {
        const main = document.getElementById('main');
        const particleDiv = document.getElementById('p') ?? document.createElement('div');
        particleDiv.id = 'p';
        particleDiv.className = 'particles';
        main?.insertBefore(particles(particleDiv), main.firstChild);
        load((obj: LoadedObject)=>{
          document.title = obj.title[0] || document.title;
          window.addEventListener('blur', () => {document.title = obj.title[1] || document.title});
          window.addEventListener('focus', () => {document.title = obj.title[0] || document.title});
          const langs: { [key: string]: any } = {};
          for (const link of obj.langs) {
            load((lang: any)=>{
              langs[lang._name] = lang;
              if (obj.langs.indexOf(link) == obj.langs.length - 1) {
                setLoaded(true);
                setTimeout(()=>{
                  document.getElementById('l')?.remove();
                },350);
              };
            }, link);
          }
          console.log(obj);
        });
        clearInterval(id);
      }
    }, 1000);
  }, [loaded])

  return (
    <>
      <div id='main'>
        <script 
          type="module" 
          src="https://unpkg.com/@splinetool/viewer@1.9.35/build/spline-viewer.js" 
          defer 
        />
        {/* @ts-ignore */}
        <spline-viewer 
          url="https://prod.spline.design/QAxOFQH4A5XJ8G5X/scene.splinecode" 
          className="splvwer"
        />
        <script 
          type="text/javascript" 
          dangerouslySetInnerHTML={{__html:`
            setInterval(() => {
              const splineViewer = document.querySelector('spline-viewer');
              if (splineViewer) {
                const shadowRoot = splineViewer.shadowRoot;
                const logoElement = shadowRoot.querySelector('#logo');

                if (logoElement) {
                  logoElement.remove();
                }
              }
            }, 200);
            window.onload = function() {
              var elements = document.getElementsByClassName("splvwer");
              for (var i = 0; i < elements.length; i++) {
                elements[i].style.opacity = "1";
              }
            };
            setTimeout(() => {
              try {
                var iframe = document.getElementById("team");
                iframe.src = iframe.src;
                iframe.onload = function() {
                  iframe.removeAttribute("style");
                };
              } catch(e) {}
            }, 1000);
          `}}
        />
        <Shader className='hero'>
          <Neon 
            shape={JSON.stringify({type: "roundedRectSDF", width: .09, height: .09, rounding: .04})} center={{x: .3, y: .5}}
            tubeThickness={0} color='#fff' glowColor='#fff' secondaryColor='#6e3bf3' secondaryBlend={0}
          />
          <ImageTexture url={wide} objectFit='contain' transform={{scale: .5}} />
          <Grid />
          <Blur />
          <ReflectivePlane height={.605} distance={.22} falloff={1.78} blur={.7} blurDistance={.01} opacity={.32}/>
          <Glow intensity={.05} />
          <Grid />
        </Shader>
        <Shader className='hero'>
          <LensFlare
            lightPosition={{x: .689, y: .46}} starburstIntensity={0.26} starburstPoints={4} streakIntensity={0} glareIntensity={.39}
            glareSize={.32} intensity={.69} edgeFade={.21} ghostIntensity={0} haloIntensity={0} blendMode='screen' opacity={.18}
          />
          <Glow intensity={2} />
          <GridDistortion intensity={3.5} decay={10} radius={1.7} gridSize={128}/>
          <Blur />
        </Shader>
      </div>
      <div className="loadscreen" id='l' style={{opacity: loaded ? 0 : 1}}>
        <Shader style={{width: '100%', height: '100%', position: 'fixed', filter:loadshader, WebkitFilter:loadshader}}>
          <Plasma colorA='#6e3bf3' colorB='#2f1671' density={.8} warp={1} />
          <Aurora colorA='#6e3bf3' colorB='#2f1671' colorC='#1437f3' transform={{rotation: 180}} opacity={.5} />
          <Dither colorMode='source' threshold={1} />
        </Shader>
        <div className="loadtitle">
          <LoadingLogo />
          <h1>JustStudio.</h1>
          <span style={{color: 'var(--light-purple)'}}><strong>a System Development Studio</strong></span>
          <h2 style={{
            marginTop: '4vh', color: 'var(--light-purple)', fontFamily: 'var(--scp)', position: 'fixed', width: '100%', top: '100%'
          }}>Loading<span id='d1'>.</span><span id='d2'>.</span><span id='d3'>.</span></h2>
        </div>
        <span style={{
          position: 'fixed', bottom: '0px', width: '100%', textAlign: 'center', color: 'var(--soft-purple)', backdropFilter:copyfilter, WebkitBackdropFilter:copyfilter,
          paddingBlock: '8px'
        }}>&copy; 2024-{currentYear} JustStudio.</span>
      </div>
    </>
  )
}

export default App