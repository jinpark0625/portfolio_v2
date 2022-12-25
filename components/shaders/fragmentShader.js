const fragmentShader = `
varying vec3 vColor; 
uniform float uLowerOpacity;
uniform float uIncreaseOpacity; 

void main() {
  vec3 color = vec3(0.34, 0.53, 0.96);

  float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
  float strength = 0.05 / distanceToCenter - 0.1;

  float mixedLow = mix(strength, 0., uLowerOpacity);
  float mixedInc = mix(mixedLow, 0.05 / distanceToCenter - 0.1, uIncreaseOpacity);

  gl_FragColor = vec4(vec3(1.), mixedInc);
  // gl_FragColor = vec4(vColor, mixedInc);
}
`;

export default fragmentShader;
