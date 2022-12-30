import glslCurlNoise from "./glslCurlNoise";
const vertexShader = `
uniform sampler2D uPositions;
uniform float uTime;
uniform float defaultTime;
uniform float uMobile;
uniform float uPixelRatio;

attribute float aScale;
attribute vec3 color;
varying vec3 vColor;
${glslCurlNoise}

void main() {
  vec3 pos = texture2D(uPositions, position.xy).xyz;
  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  float radiusRange = .4 * uMobile;
  float pct = abs(sin(defaultTime * .4));
  vec3 culr = curlNoise(pos);

  float curlPos = mix(min(culr.x, .7), 1., pct);
  // gl_PointSize =  uPixelRatio * aScale * curlPos;
  gl_PointSize =  uPixelRatio * aScale;
  gl_PointSize *= (1.0 / - viewPosition.z);

  vColor = color;
}

`;

export default vertexShader;
