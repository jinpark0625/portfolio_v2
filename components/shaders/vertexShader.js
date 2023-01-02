const vertexShader = `
uniform sampler2D uPositions;
uniform float uTime;
uniform float defaultTime;
uniform float uMobile;
uniform float uPixelRatio;

attribute float aScale;
attribute vec3 color;
varying vec3 vColor;

void main() {
  vec3 pos = texture2D(uPositions, position.xy).xyz;
  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  float radiusRange = .4 * uMobile;

  float radiusRand = radiusRange * sin(defaultTime * aScale * .1) + 1.;
  
  gl_PointSize = radiusRand * uPixelRatio * aScale;
  gl_PointSize *= (1.0 / - viewPosition.z);

  vColor = color;
}

`;

export default vertexShader;
