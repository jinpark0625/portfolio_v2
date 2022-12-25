const vertexShader = `
uniform sampler2D uPositions;
uniform float uTime;
uniform float uMobile;
uniform float uPixelRatio;
uniform sampler2D randomNum;

attribute float aScale;
attribute vec3 color;
varying vec3 vColor;

void main() {
  vec3 pos = texture2D(uPositions, position.xy).xyz;
  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  vec3 randNum = texture2D(randomNum, position.xy).xyz;

  float radiusRange = .4 * uMobile;
  float radiusRandX = radiusRange * sin(uTime * randNum.x + randNum.y * .2);
  float radiusRandY = radiusRange * cos(uTime * randNum.x + randNum.y * .2);
  float radiusRandAll = radiusRandX + radiusRandY;
  float finalRadius = .3 + radiusRandAll;

  gl_PointSize = finalRadius * uPixelRatio * aScale;
  gl_PointSize *= (1.0 / - viewPosition.z);

  vColor = color;
}

`;

export default vertexShader;
