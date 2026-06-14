import og from './assets/og.png'
import { Shader, ImageTexture, RoundedRect, Neon, Glass, ThinFilm, Glow, LensFlare, Form3D, AngularBlur } from 'shaders/react'
import './logo.css'

function _logo(cube: boolean) {
  const rootTransform = {scale: 2.61};
  const neonShape = JSON.stringify({type: "roundedRectSDF", width: .5, height: .5, rounding: .17});
  const glass1shape = JSON.stringify({type: "roundedRectSDF", width: .5, height: .5, rounding: .17, rotation: 180});
  const TFShape = JSON.stringify({type: "roundedRectSDF", width: .35, height: .35, rounding: .14});
  const glass2shape = JSON.stringify({type: "roundedRectSDF", width: .5, height: .5, rounding: 0});
  const cubeShape = JSON.stringify({type: "box", rounding: 100, rotationX: 15, spinY: .1, spinZ: .02});
  const cubeTransform = {rotation: 209, scale: 1.38};

  const className = "logoEnhanced" + (cube ? " logo3D" : "");

  return (
    <>
      <Shader className={className} colorSpace="srgb" disableTelemetry={true}>
        <RoundedRect 
          id="root" width={.35} height={.35} rounding={.15} softness={.002} transform={rootTransform} visible={false}
        />
        <RoundedRect id="mask" width={.5} height={.5} rounding={.17} maskSource='root' />
        <Neon 
          id="neon" shape={neonShape} color='#6e3bf3' secondaryColor='#1437f3' secondaryBlend={.36} glowColor='#6e3bf3'
          glowIntensity={1.05} glowRadius={.55} lightAngle={243} specularIntensity={2} specularSize={.45} tubeThickness={.23}
          intensity={2.1} hotCoreIntensity={.32} cornerSmoothing={0} maskSource='root'
        />
        <ImageTexture id="img1" url={og} maskSource='mask' objectFit='contain' />
        <Glass 
          id="glass1" maskSource='root' shape={glass1shape} fresnel={.22} fresnelSoftness={.03} refraction={.63} thickness={.35}
          aberration={.54} lightAngle={212} highlightSoftness={.48} tintColor='#6e3bf3'
        />
        <ThinFilm 
          id="tf" shape={TFShape} mode='custom' colorA='#6e3bf3' colorB='#1437f3' colorC='#fff' colorSpace='linear'
          intensity={0.85} rimWidth={1.36} edgeSoftness={0.2} thickness={0.23} lightAngle={272} blendMode='colorDodge'
          maskSource='root'
        />
        <Glow intensity={3.5} threshold={.3} maskSource='root' opacity={.05} />
        <LensFlare 
          lightPosition={{x: .31, y: .34}} starburstIntensity={.44} starburstPoints={4} streakIntensity={.66} streakLength={.57}
          glareIntensity={.1} glareSize={.57} intensity={.58} edgeFade={.5} ghostIntensity={0} ghostChroma={.5} haloIntensity={.44}
          haloRadius={1} haloSoftness={.75} blendMode='screen' maskSource='mask' opacity={.11}
        />
        <Glass
          id="glass2" maskSource='root' shape={glass2shape} cutout={true} refraction={1.01} edgeSoftness={.05} lightAngle={227}
          highlight={.1}
        />
        <Form3D 
          visible={cube} shape3d={cubeShape} shape3dType='box' zoom={85} speed={-5} glossiness={200} lighting={79} uvMode='mirror'
          transform={cubeTransform}
        />
        <AngularBlur visible={cube} intensity={25} blendMode='screen' opacity={.3} />
      </Shader>
    </>
  )
}

function Logo() {
  return _logo(false)
}
function LoadingLogo() {
  return _logo(true)
}

export {Logo, LoadingLogo}
