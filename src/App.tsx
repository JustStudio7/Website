import { useState, useEffect, Suspense } from 'react'
import wide from './assets/wide.png'
import './App.css'
import { LoadingLogo } from './logo'
import { Shader, Dither, Plasma, Aurora, ImageTexture, Neon, LensFlare, ReflectivePlane, Glow, GridDistortion, ChannelBlur } from 'shaders/react'
import Navbar from './navbar'
import isCapableDesktopDevice from './checkDevice'
import Card from './card'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './footer'

import devapp from './assets/devapp.png'
import modapp from './assets/modapp.png'

import ftcm from './assets/ftcm.png'
import _just from './assets/_just.png'
import justc from './assets/justc.png'
import reaver from './assets/reaver.png'
import kappy from './assets/kappy.webp'
import pixset from './assets/pixset.png'

declare global {
  interface Window {
    JUSTC_ATTEMPTS?: number;
    JUSTC?: any;
    LANGUAGE: string;
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

interface langObject {
  text: string[];
  lists: {
    name: string;
    link: string;
  }[][];
  [key: string]: any;
}
function updContent(langObj : langObject) {
  setTimeout(()=>{
    for (let i = 0; i < langObj.text.length; i++) {
      document.getElementById('t' + (i + 1))!.innerText = langObj.text[i];
    }
  }, 0);
  setTimeout(()=>{
    for (let i = 0; i < langObj.lists.length; i++) {
      let html = '';
      for (const item of langObj.lists[i]) {
        html += `<li><a href="${item.link}" target="_blank">${item.name}</a></li>`;
      }
      document.getElementById('l' + (i + 1))!.innerHTML = html;
    }
  }, 0);
}

interface LoadedObject {
  title: string[];
  langs: string[];
  icons: string;
  links: {
    [key: string]: {
      id: number;
      href: string;
      target: string;
      [key: string]: any;
    }
  }
  [key: string]: any;
}

function App() {
  const [loaded, setLoaded] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  const loadshader = 'brightness(.5)';
  const copyfilter = 'blur(20px)';

  const currentYear = new Date().getFullYear();

  function Loader() {
    return (
      <div className="loadscreen" id='l' style={{opacity: loaded ? 0 : 0.999}}>
        {isCapableDesktopDevice() && String(localStorage.getItem("render")) == "true" ? <Shader style={{width: '100%', height: '100%', position: 'fixed', filter:loadshader, WebkitFilter:loadshader}}>
          <Plasma colorA='#6e3bf3' colorB='#2f1671' density={.8} warp={1} />
          <Aurora colorA='#6e3bf3' colorB='#2f1671' colorC='#1437f3' transform={{rotation: 180}} opacity={.5} />
          <Dither colorMode='source' threshold={1} />
        </Shader> : null}
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
        }}>&copy; 2020-{currentYear} JustStudio.</span>
      </div>
    )
  }

  function Hero({path = '/', display} : {[key: string]: any}) {
    return (
      <>
        {
          isCapableDesktopDevice() && String(localStorage.getItem("render")) == "true" && path == '/' ?
          <>
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
          </>
          : <div className={'anim' + (display ? ' done' : '')}>
            <img src={
              path == '/form/dev' ? devapp :
              path == '/form/mod' ? modapp :
              wide
            } className='hero' alt='JustStudio.' style={{
              mixBlendMode: 'overlay', filter: 'blur(32px)', opacity: .2, position: 'absolute'
            }} />
            <img src={
              path == '/form/dev' ? devapp :
              path == '/form/mod' ? modapp :
              wide
            } className='hero' alt='JustStudio.' style={{
              mixBlendMode: 'overlay', filter: 'blur(8px)', opacity: .3, position: 'absolute'
            }} />
            <img src={
              path == '/form/dev' ? devapp :
              path == '/form/mod' ? modapp :
              wide
            } className='hero' alt='JustStudio.' />
          </div>
        }
        <div className='allowScroll' style={{display: display ? '' : 'none'}} />
        <button id="s" style={{opacity: display ? 1 : 0}}><svg><use href="/img/icons.svg#icon-arrow" /></svg></button>
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='loadicon' style={{opacity: display ? 0 : 1}}>
          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
          <g id="SVGRepo_iconCarrier"> <path d="M20.0001 12C20.0001 13.3811 19.6425 14.7386 18.9623 15.9405C18.282 17.1424 17.3022 18.1477 16.1182 18.8587C14.9341 19.5696 13.5862 19.9619 12.2056 19.9974C10.825 20.0328 9.45873 19.7103 8.23975 19.0612" stroke="#ffffff" stroke-width="3.55556" stroke-linecap="round"/> </g>
        </svg>
      </>
    )
  }

  useEffect(() => {
    window.LANGUAGE = localStorage.getItem('language') || 'EN';
    const id = setInterval(()=>{
      if (loaded) {
        clearInterval(id);
        return;
      }
      setTimeout(()=>{
        setLoaded2(true);
        document.getElementById('s')!.addEventListener('click', ()=>{
          document.getElementById('main')!.scrollTo({
            top: window.innerHeight - (64 + 16 + 16),
            left: 0,
            behavior: 'smooth'
          });
        });
      }, 12000);
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
                  updContent(langs[window.LANGUAGE]);
                  document.getElementById('l')?.remove();
                  for (const value of Object.values(obj.links)) {
                    setTimeout(()=>{
                      const link = document.getElementById('a'+value.id)! as HTMLAnchorElement;
                      link.href = value.href;
                      link.target = value.target;
                    },300);
                  }
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
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <div id='main'>
          <Routes>
            <Route path='/' element={<>
              <Hero display={loaded2} />
            </>} />
            <Route path='/form/mod' element={<>
              <Hero path='/form/mod' display={loaded2} />
            </>} />
            <Route path='/form/dev' element={<>
              <Hero path='/form/dev' display={loaded2} />
            </>} />
          </Routes>
          <Navbar display={loaded2} />
          <article style={{display: loaded2 ? '' : 'none'}}>
            <Routes>
              <Route path='/' element={
                <>
                  <div>
                    <h1 id='t4'>Games</h1>
                    <div className='cards'>
                      <Card 
                        title="Find the Cats"
                        content="Cats are on the loose! They've run off to cities, forests, and everywhere in between. Explore colorful worlds, keep your eyes peeled, and track down every last fluffy troublemaker. Can you find them all?"
                        href="https://www.roblox.com/games/9201462652/Find-the-cats-Morphs"
                        bgsrc={ftcm}
                        color="#d35303"
                        color2="#b34400"
                        className="ftcm"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 id='t5'>Products</h1>
                    <div className='cards'>
                      <Card 
                        title="The JUSTC Programming Language"
                        content=""
                        href="https://just.js.org/justc/"
                        bgsrc={justc}
                        color="rgb(40, 34, 129)"
                        color2="#4c309c"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 id='t6'>Partners</h1>
                    {/* @ts-ignore */}
                    <div className='cards noblur' style={{'--card-w': 'calc(168px * 1.67)'}}>
                      <Card 
                        title="KAPPY SQUAD"
                        content=""
                        href="https://kappy.is-a.dev/"
                        bgsrc={kappy}
                        color="#ee491f"
                        color2="#e34526"
                        className="kappy"
                      />
                      <Card 
                        title="Reaver.Entertainment"
                        content=""
                        href="https://reaver.is-a.dev/"
                        bgsrc={reaver}
                        color="#1b1b1b"
                        color2="#111111"
                      />
                      <Card 
                        title="Pixset Studio"
                        content=""
                        href="https://www.roblox.com/communities/16590279/Pixset-Studio#!/about"
                        bgsrc={pixset}
                        color="#1b1b1b"
                        color2="#111111"
                        className="pixset"
                      />
                    </div>
                  </div>
                </>
              } />
              <Route path='/form/mod' element={
                <>
                  {/* @ts-ignore */}
                  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScz43qixR4e107lrCcmC8ICt--eu0JY6ELVRV8QKGnJf9wnKw/viewform?embedded=true" width={window.innerWidth} height={window.innerHeight} frameborder="0" marginheight="0" marginwidth="0" className="form">Loading…</iframe>
                </>
              } />
              <Route path='/form/dev' element={
                <>
                  {/* @ts-ignore */}
                  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdAaZ-cQWimlbtGWTMKeL4cZc66zfBQu1yJDObiA_uWLsShsQ/viewform?embedded=true" width={window.innerWidth} height={window.innerHeight} frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
                </>
              } />
            </Routes>
            <Footer />
          </article>
        </div>
      </Suspense>
    </BrowserRouter>
  )
}

export default App