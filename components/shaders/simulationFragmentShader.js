import glslCurlNoise from "./glslCurlNoise";

const fragmentShader = `

// animation
uniform float uTime;

// simulation
uniform sampler2D textureA;
uniform sampler2D textureB;
uniform sampler2D textureC;
uniform sampler2D textureD;
uniform sampler2D randomNum;

// scroll trigger
uniform float scrollTriggerA;
uniform float scrollTriggerB;
uniform float scrollTriggerC;
uniform float scrollTriggerD;
uniform float scrollTriggerE;
uniform float scrollTriggerF;
uniform float scrollTriggerG;

// varying
varying vec2 vUv;

// size
uniform float uWidth;

// math
float PI = 3.1415926535389793238;

${glslCurlNoise}

vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}


void main() {
  /**
   * Scene 1
   */
  vec3 sceneA = texture2D(textureA, vUv).rgb;

  // particle explosion
  vec3 explosionPos = texture2D(textureA, vUv).rgb;
  explosionPos = curlNoise(explosionPos + uTime * 0.001);
  sceneA.r += scrollTriggerA * explosionPos.g * 5.;
  sceneA.g += scrollTriggerA * explosionPos.r * 5.;
  sceneA.b += scrollTriggerA * explosionPos.b * 10.;

  /**
   * Scene 2
   */
  vec3 sceneB = texture2D(textureB, vUv).rgb;

  // sphere animation 
  vec3 curlPos = curlNoise(sceneB * 0.5 + sin(uTime * 0.05)) * uWidth;

  // Rotate
  vec2 rot = rotate(vec2(curlPos.rg), uTime * .3);
  curlPos.rg = rot;

  // turning into sphere
  vec3 sphere = mix(sceneA, curlPos, scrollTriggerB);

  /**
   * Scene 3
   */
  vec3 sceneC = texture2D(textureC, vUv).rgb;

  // turning into man
  vec3 man = mix(sphere, sceneC, scrollTriggerC);  

  /**
   * Scene 4
  */
  vec3 sceneD = texture2D(textureD, vUv).rgb;

  // turning into people
  vec3 people = mix(man, sceneD, scrollTriggerD); 
  
  // people animation 
  people.b += scrollTriggerE * 7.;

  /**
   * Scene 5
  */
  vec3 sceneE = texture2D(textureB, vUv).rgb;

  // ring animation
  vec3 rand = texture2D(randomNum, vUv).rgb;
  float distanceToCenter = length(sceneE.rg);
  vec3 tar = curl(rand.r, rand.g, rand.b);
  sceneE.r += distanceToCenter * sin(uTime) * (tar.r * .01) * 3.;
  sceneE.g += distanceToCenter * cos(uTime) * (tar.g * .01) * 3.;

  // animation
  vec2 pulse = vec2( sin( uTime * 0.1 ) , cos( uTime * 0.1 )) * 0.1;
  vec3 animated = vec3( sceneE.r * 3. + tar.r * pulse.x, sceneE.g * 3. + tar.g * pulse.y, tar.b);

  // turing into ring
  vec3 ring = mix(people, sceneE, scrollTriggerF);

  vec3 final = mix(ring, animated, scrollTriggerG);

  gl_FragColor = vec4(final, 1.0);

}
`;

export default fragmentShader;
