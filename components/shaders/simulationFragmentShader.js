import glslCurlNoise from "./glslCurlNoise";

const fragmentShader = `

// animation
uniform float uTime;
uniform float uFrequency;
uniform float angle;

// simulation
uniform sampler2D textureA;
uniform sampler2D textureB;
uniform sampler2D randomNum;

// scroll trigger
uniform float scrollTriggerA;

// varying
varying vec2 vUv;

// math
float PI = 3.1415926535389793238;

${glslCurlNoise}

vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}

void main() {
  // vec3 pos = texture2D(textureA, vUv).rgb;
  // 맨처음 셋팅
  // vec3 curlPos = texture2D(positions, vUv).rgb;
  // pos = curlNoise(pos * uFrequency + uTime * 0.1);
  // curlPos = curlNoise(curlPos * uFrequency + uTime * 0.1);
  // curlPos += curlNoise(curlPos * uFrequency * 2.0) * 0.5;
  // gl_FragColor = vec4(mix(pos, curlPos, sin(uTime)), 1.0);


  // circle animation
  // vec3 curlPos = texture2D(positions, vUv).rgb;
  // pos = curlNoise(pos * uFrequency + uTime * 0.1);
  // curlPos = curlNoise(curlPos * uFrequency + uTime * 0.1) * 1.08;




  // scene 1
  vec3 sceneA = texture2D(textureA, vUv).rgb;

  // particle explosion
  // float distortion = snoise4(vec4(sceneA * 8., sin((2. * PI * uTime * .0003))));
  // sceneA.r += scrollTriggerA * distortion * 10. * sin(25.);
  // sceneA.g += scrollTriggerA * distortion * 10. * cos(25.);
  // sceneA.b += scrollTriggerA * distortion * 20.;



  // float distanceToMouse = pow(1. - clamp(length(uMouse.xy - toCircle.xy) -.001, -2., 1.), 2.5);
  // toCircle.x -= distanceToMouse * 0.5 * distortion * cos(angle) * uMouseTrigger;
  // toCircle.y -= distanceToMouse * 0.5 * distortion * sin(angle) * uMouseTrigger;

  // float distortionss = snoise4(vec4(sceneA * 8., sin((2. * PI * uTime * .003))));
  // sceneA.r += distortion / 5.;
  // sceneA.g += distortion / 10.;
  // sceneA.b += 0.;

  // float distortion = pow(1. - clamp(length(sceneA), 0., 1.), 5.);

  
  // float displaceY = sin(vUv.x * PI * 2. * 7. + uTime * 2.) * 0.02;
  // float displaceX = sin(vUv.y * PI * 2. * 7. + uTime * 2.) * 0.02;


  // 원형퍼짐
  // float displaceX = cos(PI * vUv.x + uTime *.2) * sin(PI * vUv.x + uTime *.2) ;
  // float displaceY = cos(PI * vUv.y + uTime *.2) * sin(PI * vUv.y + uTime *.2);

  // vec3 curlPos = curl(sceneA.r + uTime * .1, sceneA.g + uTime * .1, sceneA.b + uTime * .1);
  
  // sceneA.r += clamp(displaceX, 0., 1.) + curlPos.r *.2;
  // sceneA.g += clamp(displaceY, 0., 1.) + curlPos.g *.2;

  // Rotate
  // vec2 rot = rotate(vec2(sceneA.rg), uTime);
  // sceneA.rg = rot;

  vec3 curlPos = texture2D(textureA, vUv).rgb;
  curlPos = curlNoise(curlPos + uTime * 0.1) * .1;
  // sceneA.r += curlPos.r;
  // sceneA.g += curlPos.g;
  // sceneA.b += curlPos.b;

  // Randomness
  // sceneA.rg += angleT;

  float distanceToCenter = length(sceneA.rg);
  float displaceX = length(vUv.x  * uTime * .2);
  float displaceY = atan(vUv.y, vUv.x);
  float displaceZ = cos(angle);


  // vec3 randNum = texture2D(randomNum, vUv).rgb;
  
  // sceneA.r += clamp(randNum.r, sceneA.r, randNum.r * 1.2);
  // sceneA.g += smoothstep(displaceY, displaceY + 0.02, 1.);
  // sceneA.b += smoothstep(displaceZ, displaceZ + 0.02, 1.);

  // sceneA.r += mix(length(displaceX), 0., 1.) ;
  // sceneA.g += mix(length(displaceY), 0., 1.) ;
  // sceneA.b += displaceY * 0.7;


  // test
  vec3 curlPosT = texture2D(textureA, vUv).rgb;
  curlPosT = curl(curlPosT.r, curlPosT.g, curlPosT.b) ;
  // curlPos = curl(curlPos.r, curlPos.g, curlPos.b) ;
  // curlPos = curlNoise(curlPos * uFrequency + uTime * 0.1) * 3.;
  // float d = length(sceneA - curlPos) * .1;
  // gl_FragColor = vec4(mix(sceneA, curlPosT, uTime *.2), 1.0);

  // sceneA.r += curlPosT.r;
  // sceneA.g += curlPosT.g;
  // sceneA.b += curlPosT.b;

  // gl_FragColor = vec4(mix(sceneA, curlPosT, uTime), 1.0);
  gl_FragColor = vec4(sceneA, 1.0);

  // scene 2
  vec3 sceneB = texture2D(textureB, vUv).rgb;


  // test 2
  // vec3 curlPos = texture2D(textureB, vUv).rgb;
  // curlPos = curl(curlPos.r * 2. + uTime, curlPos.g * 2. + uTime, curlPos.b * 2. + uTime) * 3. ;
  // curlPos = curlNoise(curlPos * uFrequency + uTime * 0.1) * 3.;
  // float d = length(sceneA - curlPos) / .2;
  // gl_FragColor = vec4(mix(sceneB, curlPos, pow( d, 5. )), 1.0);




  
  // gl_FragColor = vec4(mix(textureA, textureB, sin(uTime)), 1.0);
  // gl_FragColor = vec4(mix(pos, curlPos, sin(uTime)), 1.0);
}
`;

export default fragmentShader;

// simulation FragmentShader에서는...
// uTime, position, uFrequency를 uniform으로 받는다.

// 기본 fragment Shader
// void main() {
//   vec3 color = vec3(1.0, 1.0, 1.0);
//   gl_FragColor = vec4(color, 1.0);
// }

// 하지만 여기에서는 position을 받는데 rgb로 받는다.
