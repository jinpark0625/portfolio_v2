import { ShaderMaterial, Color, Vector2, Vector3 } from "three";
import { extend } from "@react-three/fiber";
import * as THREE from "three";
import { useBlock } from "./project/blocks";

class CustomMaterialMain extends ShaderMaterial {
  constructor() {
    super({
      vertexShader: `
        // default set for position & animation
        uniform float uSize;
        uniform float uPixelRatio;
        uniform float uTime;
        uniform float uFrequency;
        uniform vec2 uResolution;

        // mouse event
        uniform vec3 uMouse;
        uniform float uMouseTrigger;

        // morphing trigger
        uniform float uFirstTrigger;
        uniform float uSecondTrigger;

        uniform float uTriggerTwo;    
        uniform float uTriggerThree;    
        uniform float uRandomSecond;
        uniform float uRandomThird;

        attribute vec3 modelPos;
        attribute vec3 modelPosTwo;
        attribute vec3 modelPosThree;
        attribute float aScale;
        attribute float pindex;
        attribute float angle;
        attribute vec3 color;
        attribute vec3 rand;

        varying vec3 vColor;
            
        float PI = 3.1415926535389793238;
            
        vec3 mod289(vec3 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
          }

          vec2 mod289(vec2 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
          }

          vec3 permute(vec3 x) {
            return mod289(((x*34.0)+1.0)*x);
          }

          float snoise(vec2 v)
            {
            const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                                0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                               -0.577350269189626,  // -1.0 + 2.0 * C.x
                                0.024390243902439); // 1.0 / 41.0
          // First corner
            vec2 i  = floor(v + dot(v, C.yy) );
            vec2 x0 = v -   i + dot(i, C.xx);
            
          // Other corners
            vec2 i1;
            //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
            //i1.y = 1.0 - i1.x;
            i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
            // x0 = x0 - 0.0 + 0.0 * C.xx ;
            // x1 = x0 - i1 + 1.0 * C.xx ;
            // x2 = x0 - 1.0 + 2.0 * C.xx ;
            vec4 x12 = x0.xyxy + C.xxzz;
            x12.xy -= i1;
            
          // Permutations
            i = mod289(i); // Avoid truncation effects in permutation
            vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
              + i.x + vec3(0.0, i1.x, 1.0 ));
            
            vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
            m = m*m ;
            m = m*m ;
            
          // Gradients: 41 points uniformly over a line, mapped onto a diamond.
          // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)
            
            vec3 x = 2.0 * fract(p * C.www) - 1.0;
            vec3 h = abs(x) - 0.5;
            vec3 ox = floor(x + 0.5);
            vec3 a0 = x - ox;
            
          // Normalise gradients implicitly by scaling m
          // Approximation of: m *= inversesqrt( a0*a0 + h*h );
            m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
            
          // Compute final noise value at P
            vec3 g;
            g.x  = a0.x  * x0.x  + h.x  * x0.y;
            g.yz = a0.yz * x12.xz + h.yz * x12.yw;
            return 130.0 * dot(m, g);
          }
      
          float random(float n) {
        	return fract(sin(n) * 43758.5453123);
        }

        //	Simplex 4D Noise 
        //	by Ian McEwan, Ashima Arts
        //
        vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
        float permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}
        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
        float taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}

        vec4 grad4(float j, vec4 ip){
          const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
          vec4 p,s;
        
          p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
          p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
          s = vec4(lessThan(p, vec4(0.0)));
          p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; 
        
          return p;
        }

        float snoise4(vec4 v){
          const vec2  C = vec2( 0.138196601125010504,  // (5 - sqrt(5))/20  G4
                                0.309016994374947451); // (sqrt(5) - 1)/4   F4
        // First corner
          vec4 i  = floor(v + dot(v, C.yyyy) );
          vec4 x0 = v -   i + dot(i, C.xxxx);
        
        // Other corners
        
        // Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)
          vec4 i0;
        
          vec3 isX = step( x0.yzw, x0.xxx );
          vec3 isYZ = step( x0.zww, x0.yyz );
        //  i0.x = dot( isX, vec3( 1.0 ) );
          i0.x = isX.x + isX.y + isX.z;
          i0.yzw = 1.0 - isX;
        
        //  i0.y += dot( isYZ.xy, vec2( 1.0 ) );
          i0.y += isYZ.x + isYZ.y;
          i0.zw += 1.0 - isYZ.xy;
        
          i0.z += isYZ.z;
          i0.w += 1.0 - isYZ.z;
        
          // i0 now contains the unique values 0,1,2,3 in each channel
          vec4 i3 = clamp( i0, 0.0, 1.0 );
          vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
          vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );
        
          //  x0 = x0 - 0.0 + 0.0 * C 
          vec4 x1 = x0 - i1 + 1.0 * C.xxxx;
          vec4 x2 = x0 - i2 + 2.0 * C.xxxx;
          vec4 x3 = x0 - i3 + 3.0 * C.xxxx;
          vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;
        
        // Permutations
          i = mod(i, 289.0); 
          float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
          vec4 j1 = permute( permute( permute( permute (
                     i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
                   + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
                   + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
                   + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));
        // Gradients
        // ( 7*7*6 points uniformly over a cube, mapped onto a 4-octahedron.)
        // 7*7*6 = 294, which is close to the ring size 17*17 = 289.
        
          vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;
        
          vec4 p0 = grad4(j0,   ip);
          vec4 p1 = grad4(j1.x, ip);
          vec4 p2 = grad4(j1.y, ip);
          vec4 p3 = grad4(j1.z, ip);
          vec4 p4 = grad4(j1.w, ip);
        
        // Normalise gradients
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
          p0 *= norm.x;
          p1 *= norm.y;
          p2 *= norm.z;
          p3 *= norm.w;
          p4 *= taylorInvSqrt(dot(p4,p4));
        
        // Mix contributions from the five corners
          vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
          vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
          m0 = m0 * m0;
          m1 = m1 * m1;
          return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
                       + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;
        
        }

        // noise
        vec3 curl(float	x,	float	y,	float	z)
{

    float	eps	= 1., eps2 = 2. * eps;
    float	n1,	n2,	a,	b;

    x += uTime * .05;
    y += uTime * .05;
    z += uTime * .05;

    vec3	curl = vec3(0.);

    n1	=	snoise(vec2( x,	y	+	eps ));
    n2	=	snoise(vec2( x,	y	-	eps ));
    a	=	(n1	-	n2)/eps2;

    n1	=	snoise(vec2( x,	z	+	eps));
    n2	=	snoise(vec2( x,	z	-	eps));
    b	=	(n1	-	n2)/eps2;

    curl.x	=	a	-	b;

    n1	=	snoise(vec2( y,	z	+	eps));
    n2	=	snoise(vec2( y,	z	-	eps));
    a	=	(n1	-	n2)/eps2;

    n1	=	snoise(vec2( x	+	eps,	z));
    n2	=	snoise(vec2( x	+	eps,	z));
    b	=	(n1	-	n2)/eps2;

    curl.y	=	a	-	b;

    n1	=	snoise(vec2( x	+	eps,	y));
    n2	=	snoise(vec2( x	-	eps,	y));
    a	=	(n1	-	n2)/eps2;

    n1	=	snoise(vec2(  y	+	eps,	z));
    n2	=	snoise(vec2(  y	-	eps,	z));
    b	=	(n1	-	n2)/eps2;

    curl.z	=	a	-	b;

    return	curl;
}

        void main()
        {
            /**
             * Position
             */
            // random noise
            float rndz = (random(pindex) + snoise(vec2(pindex * 0.1, uTime * 0.1)));
            // float distortion = snoise4(vec4(position * uFrequency, uTime * .005)) ;
            float distortion = snoise4(vec4(position * uFrequency, sin(
              (2. * PI * uTime * .0003) 
            )));
        
            // first particle position
            vec3 particlePosition = (modelMatrix * vec4(position, 1.0)).xyz;

            // text animation 
            float moveRange = 0.01;
            float moveRandX = moveRange * sin(uTime * rand.x * rand.y * .4);
            float moveRandY = moveRange * cos(uTime * rand.x * rand.y * .4);
            vec3 animatedText = particlePosition + (vec3(moveRandX, moveRandY, 0) *0.0);
 
            //rotate particles
            float rotateAngle = atan(animatedText.x, animatedText.y);
            float distanceToCenter = length(animatedText.xy);
            float angleOffset = (1.0 / distanceToCenter) * uTime * 0.01;
            rotateAngle += angleOffset;
        
            // 1, 원의크기영향 작을수록. 2,커지면 크게퍼진다. 3,커지면 크게퍼진다. 4,작아지면 원이커진다.
            float distanceToMouse = pow(1. - clamp(length(uMouse.xy - animatedText.xy) -.001, -2., 1.), 2.5);

            /**
             * Scene 1
             */
            // scene1 animation
            // spread particles in circle shape
            animatedText.x += uFirstTrigger * distortion * 10. * sin(angle);
            animatedText.y += uFirstTrigger * distortion * 10. * cos(angle);
            animatedText.z += uFirstTrigger * distortion * 20.;

            // scene1 mouse event
            animatedText.x -= distanceToMouse * 0.5 * rndz * cos(angle) * uMouseTrigger;
            animatedText.y -= distanceToMouse * 0.5 * rndz * sin(angle) * uMouseTrigger;

            /**
             * Scene 2
             */
            // morph into sphere
            vec3 toSphere = mix(animatedText, modelPos, uSecondTrigger);

            // animation
            float rndd = (random(pindex) + snoise(vec2(pindex * 1.2, uTime * 0.05)));


            // vec3 firstMorphed = vec3(0.0);
            // float rndd = (random(pindex) + snoise(vec2(pindex * 1.2, uTime * 0.05)));
            // // firstMorphed += ((modelPos * ( step( 1. - ( 1. / 512. ), modelPos.z )) * rndd) - particlePosition) * uTrigger;
            // vec3 tar = modelPos + curl(modelPos.x * .07, modelPos.y * .3, modelPos.z) * 8.;
            // // float d = length(modelPos - tar) / 12.;
            // float d = length(modelPos - tar) / 16.;
            // vec3 mixed = mix(modelPos, tar * uSecondTrigger, pow( d, 5. ) );
            // firstMorphed += (mixed - particlePosition) * uSecondTrigger;
            // firstMorphed += particlePosition;

            // scene2 mouse event
            // float distanceToMouseSecond = pow(1. - clamp(length(uMouse.xy - firstMorphed.xy) -.001, -2., 1.), 1.);
            // firstMorphed.x += distanceToMouseSecond * 0.8 * rndz * cos(angle) * uMouseTrigger;
            // firstMorphed.y += distanceToMouseSecond * 0.8 * rndz * sin(angle) * uMouseTrigger;
        

            // scene3
            // scene3 animation

            // float rotateAngleT = atan(modelPosTwo.x, modelPosTwo.y);
            // float distanceToCenterT = length(modelPosTwo.xy);
            // float angleOffsetT = (1.0 / distanceToCenter) * uTime * 0.01;
            // rotateAngleT += angleOffsetT;

            // vec3 secondMorphed = vec3(0.0);
            // vec3 tarTwo = modelPosTwo + curl(modelPosTwo.x * .5, modelPosTwo.y * .3, modelPosTwo.z) * 4.;
            // vec3 mixedTwo = mix(modelPosTwo, tarTwo * uFirstTrigger, pow( d, 5. ) );
            // secondMorphed += (mixedTwo - firstMorphed) * uTriggerTwo;
            // secondMorphed += firstMorphed;
     
            // scene4
            // scene4 animation
            // vec3 thirdMorphed = vec3(0.0);
            // thirdMorphed += (modelPosThree - secondMorphed) * uTriggerThree;
            // thirdMorphed += secondMorphed;

            // camera
            vec4 viewPosition = viewMatrix * vec4(toSphere, 1.);
        
            gl_Position = projectionMatrix * viewPosition;  
      

            float radiusRange = .4;
            float radiusRandX = radiusRange * sin(uTime * rand.x + rand.y * .2);
            float radiusRandY = radiusRange * cos(uTime * rand.x + rand.y * .2);
            float radiusRandAll = radiusRandX + radiusRandY;
            float finalRadius = .2 + radiusRandAll;

            gl_PointSize = finalRadius * uPixelRatio * aScale;
            gl_PointSize *= (1.0 / - viewPosition.z);

            vColor = color;
        }
                    `,
      fragmentShader: `
            uniform vec3 uColor;
            uniform float uRandom;
            uniform vec2 uResolution;
            uniform float uTrigger;
            uniform float uOpacity;
            uniform float uTime;
            uniform float uRandomSecond;

            uniform float uIncreaseOpacity;
            uniform float uLowerOpacity;

            vec3 colorA = vec3(1.,1.,1.);
            vec3 colorB = vec3(.1,.21,1.);

            varying vec3 vColor; 

            #define TWO_PI 6.28318530718

            float plot (vec2 st, float pct){
              return  smoothstep( pct-0.01, pct, st.y) -
                      smoothstep( pct, pct+0.01, st.y);
            }

            vec3 circle(vec2 coord, vec2 loc, float r){
                float d;
                d = length(coord - loc);
                return vec3(d);
            }

            float rnd(float i) {
              return mod(4000.*sin(23464.345*i+45.345),1.);
            }
            
          
            void main()
            {
                // float opacity = (uRandom - 1.0) * -1.;
                // opacity += uOpacity;
                // opacity = (uRandomSecond - 1.0) * -1.;
            
                // float opacityStr = clamp(opacity, 0.04, 0.18);
            
                //0.5 와 노멀라이즈된 UV값의 중간점을 찾는다.
                // float distnaceToCenter = distance(gl_PointCoord, vec2(0.5));
                // float strength = opacityStr / distnaceToCenter - 0.05 * 2.0;

                // vec3 color = vec3(0.0);
                // vec2 st = gl_FragCoord.xy/uResolution.xy;
                // float pct = abs(sin(uTime)) * uTrigger;
                // color = mix(colorA, colorB, pct);
                // // vec3 col = 0.5 - 0.5*cos(uTime+vUv.xyx+vec3(0,2,4))/rnd(uTime * 7.)+0.05;

                // vec3 color = vec3(1.);
                // vec3 finalColor = color + (vColor * uTrigger);
              
                // finalColor += (vColor - color) * uTrigger;
                // finalColor += vColor;

                float strength = distance(gl_PointCoord, vec2(0.5));
                strength = 1. - strength;
                strength = pow(strength, 5.0);

                strength -= uLowerOpacity;
                strength += uIncreaseOpacity;

                gl_FragColor = vec4(vec3(1.), strength);
            }`,

      uniforms: {
        uMouse: {
          value: new Vector2(0, 0),
        },
        uMouseTrigger: {
          value: 0,
        },
        uPixelRatio: {
          value: Math.min(window.devicePixelRatio, 2),
        },
        uSize: {
          value: 1.5,
        },
        uTime: {
          value: 0,
        },
        uColor: {
          value: new THREE.Color(0x0f85d6),
        },
        uFrequency: {
          value: 8,
        },
        uAmplitude: {
          value: 4,
        },
        uResolution: {
          //   value: new Vector2(width, height),
          value: new Vector2(0, 0),
        },
        // morphing trigger
        uFirstTrigger: {
          value: 0,
        },
        uSecondTrigger: {
          value: 0,
        },
        uTriggerTwo: {
          value: 0,
        },
        uTriggerThree: {
          value: 0,
        },
        uRandomSecond: {
          value: 0,
        },
        uOpacity: {
          value: 0,
        },
        uRandomThird: {
          value: 0,
        },
        // opacity trigger
        uIncreaseOpacity: {
          value: 0,
        },
        uLowerOpacity: {
          value: 0,
        },
      },
    });
  }
  set uMouse(value) {
    this.uniforms.uMouse.value = value;
  }

  get uMouse() {
    return this.uniforms.uMouse.value;
  }

  set uMouseTrigger(value) {
    this.uniforms.uMouseTrigger.value = value;
  }

  get uMouseTrigger() {
    return this.uniforms.uMouseTrigger.value;
  }

  set uPixelRatio(value) {
    this.uniforms.uPixelRatio.value = value;
  }

  get uPixelRatio() {
    return this.uniforms.uPixelRatio.value;
  }

  set uSize(value) {
    this.uniforms.uSize.value = value;
  }

  get uSize() {
    return this.uniforms.uSize.value;
  }

  set uTime(value) {
    this.uniforms.uTime.value = value;
  }

  get uTime() {
    return this.uniforms.uTime.value;
  }

  set uColor(value) {
    this.uniforms.uColor.value = value;
  }

  get uColor() {
    return this.uniforms.uColor.value;
  }

  set uFrequency(value) {
    this.uniforms.uFrequency.value = value;
  }

  get uFrequency() {
    return this.uniforms.uFrequency.value;
  }

  set uAmplitude(value) {
    this.uniforms.uAmplitude.value = value;
  }

  get uAmplitude() {
    return this.uniforms.uAmplitude.value;
  }

  set uResolution(value) {
    this.uniforms.uResolution.value = value;
  }

  get uResolution() {
    return this.uniforms.uResolution.value;
  }

  // morphing trigger

  set uFirstTrigger(value) {
    this.uniforms.uFirstTrigger.value = value;
  }

  get uFirstTrigger() {
    return this.uniforms.uFirstTrigger.value;
  }

  set uSecondTrigger(value) {
    this.uniforms.uSecondTrigger.value = value;
  }

  get uSecondTrigger() {
    return this.uniforms.uSecondTrigger.value;
  }

  set uTriggerTwo(value) {
    this.uniforms.uTriggerTwo.value = value;
  }

  get uTriggerTwo() {
    return this.uniforms.uTriggerTwo.value;
  }

  set uTriggerThree(value) {
    this.uniforms.uTriggerThree.value = value;
  }

  get uTriggerThree() {
    return this.uniforms.uTriggerThree.value;
  }

  set uRandomSecond(value) {
    this.uniforms.uRandomSecond.value = value;
  }

  get uRandomSecond() {
    return this.uniforms.uRandomSecond.value;
  }

  set uOpacity(value) {
    this.uniforms.uOpacity.value = value;
  }

  get uOpacity() {
    return this.uniforms.uOpacity.value;
  }

  set uRandomThird(value) {
    this.uniforms.uRandomThird.value = value;
  }

  get uRandomThird() {
    return this.uniforms.uRandomThird.value;
  }

  set uIncreaseOpacity(value) {
    this.uniforms.uIncreaseOpacity.value = value;
  }
  get uIncreaseOpacity() {
    return this.uniforms.uIncreaseOpacity.value;
  }
  set uLowerOpacity(value) {
    this.uniforms.uLowerOpacity.value = value;
  }
  get uLowerOpacity() {
    return this.uniforms.uLowerOpacity.value;
  }
}

extend({ CustomMaterialMain });
