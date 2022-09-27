import { ShaderMaterial, Color, Vector2, Vector3 } from "three";
import { extend } from "@react-three/fiber";
import * as THREE from "three";
import { useBlock } from "./project/blocks";

class CustomMaterialMain extends ShaderMaterial {
  constructor() {
    super({
      vertexShader: `
        uniform vec3 uMouse;
        uniform float uSize;
        uniform float uPixelRatio;
        uniform float uTime;
        uniform float uRandom;
        uniform float uMouseTrigger;
        uniform float uFrequency;
        uniform float uAmplitude;
        uniform vec2 uResolution;
            
        attribute float aScale;
        attribute float pindex;
        attribute float angle;
            
            
        uniform float uTrigger;
        attribute vec3 modelPos;
            
        uniform float uTriggerTwo;
        attribute vec3 modelPosTwo;
        uniform float uRandomSecond;
            
        uniform vec3 uSphere;
            
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

        void main()
        {
        
            /**
             * Position
             */
            //local
            float rndz = (random(pindex) + snoise(vec2(pindex * 0.1, uTime * 0.1)));
            float distortion = snoise4(vec4(position * uFrequency, uTime * .005)) * uAmplitude;
        
        
            vec3 particlePosition = (modelMatrix * vec4(position, 1.0)).xyz;
        
            //rotate particles
            float rotateAngle = atan(particlePosition.x, particlePosition.y);
            float distanceToCenter = length(particlePosition.xy);
            float angleOffset = (1.0 / distanceToCenter) * uTime * 0.01;
            rotateAngle += angleOffset;
        
        
            // -.3이 작아지면 원이커짐
            // 0. 이 커지면 반대로 화려하게 커지고 작아지면 퍼진다.
            // 1. 이 커지면 화려한 이펙트로 퍼진다. & 낮아지면 흩어진다.
            // 4.이 작아지면 원이커진다.
            // float distanceToMouse = pow(1. - clamp(length(uMouse.xy - particlePosition.xy) -.3, 0., 1.),4.);

            float distanceToMouse = pow(1. - clamp(length(uMouse.xy - particlePosition.xy) -.001, -4., 1.), 2.5);

            // radius 크기를 찾아서 수정필요
            float distanceToMouseSecond = pow(1. - clamp(length(uMouse.xy - particlePosition.xy) -.01, -4., 1.), 7.);
        
            //0.5가 커지면 원이커진다?
            particlePosition.x -= distanceToMouse * 0.5 * rndz * cos(angle) * uMouseTrigger;
            particlePosition.y -= distanceToMouse * 0.5 * rndz * sin(angle) * uMouseTrigger;
        
            // particlePosition.x += uRandom * sin(rotateAngle * 4.) * distortion;
            // particlePosition.y += uRandom * cos(rotateAngle * 4.) * distortion;

            particlePosition.x += uRandom * uSphere.x * distortion;
            particlePosition.y += uRandom * uSphere.y * distortion;

        
            //second model
            vec3 morphed = vec3(0.0);
            morphed += (modelPos - particlePosition) * uTrigger;
            morphed += particlePosition;
        
            //스크롤시 흩어지는 파티클
            morphed.x += uRandomSecond * sin(rotateAngle * 4.) * distortion;
            morphed.y += uRandomSecond * cos(rotateAngle * 4.) * distortion;
        
            morphed.x += distanceToMouseSecond * 0.8 * rndz * cos(angle) * uMouseTrigger;
            morphed.y += distanceToMouseSecond * 0.8 * rndz * sin(angle) * uMouseTrigger;
        
            //third model
            vec3 morphedTwo = vec3(0.0);
            morphedTwo += (modelPosTwo - morphed) * uTriggerTwo;
            morphedTwo += morphed;
        
        
        
            //camera
            vec4 viewPosition = viewMatrix * vec4(morphedTwo, 1.);
        
            gl_Position = projectionMatrix * viewPosition;
        
            //size
            gl_PointSize = uSize * aScale * uPixelRatio;
        
        }
                    `,
      fragmentShader: `
            uniform vec3 uColor;
            uniform float uRandom;
            uniform vec2 uResolution;
            uniform float uTrigger;
            uniform float uOpacity;

            vec3 colorA = vec3(0.148,.141,.912);
            vec3 colorB = vec3(1.,.833,0.224);

            float plot (vec2 st, float pct){
              return  smoothstep( pct-0.01, pct, st.y) -
                      smoothstep( pct, pct+0.01, st.y);
            }

            vec3 circle(vec2 coord, vec2 loc, float r){
                float d;
                d = length(coord - loc);
                return vec3(d);
            }


            void main()
            {
                float opacity = (uRandom - 1.0) * -1.;
                opacity += uOpacity;
            
                float try = clamp(opacity, 0.04, 0.18);
            
                //0.5 와 노멀라이즈된 UV값의 중간점을 찾는다.
                float distnaceToCenter = distance(gl_PointCoord, vec2(0.5));
                float strength = try / distnaceToCenter - 0.05 * 2.0;
            
                gl_FragColor = vec4(1.0, 1.0, 1.0, strength);
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
        uRandom: {
          value: 0,
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
        //추가
        uTrigger: {
          value: 0,
        },
        uTriggerTwo: {
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
        uSphere: {
          value: new Vector3(0),
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

  set uRandom(value) {
    this.uniforms.uRandom.value = value;
  }

  get uRandom() {
    return this.uniforms.uRandom.value;
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

  set uTrigger(value) {
    this.uniforms.uTrigger.value = value;
  }

  get uTrigger() {
    return this.uniforms.uTrigger.value;
  }

  set uTriggerTwo(value) {
    this.uniforms.uTriggerTwo.value = value;
  }

  get uTriggerTwo() {
    return this.uniforms.uTriggerTwo.value;
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

  set uSphere(value) {
    this.uniforms.uSphere.value = value;
  }

  get uSphere() {
    return this.uniforms.uSphere.value;
  }
}

extend({ CustomMaterialMain });
