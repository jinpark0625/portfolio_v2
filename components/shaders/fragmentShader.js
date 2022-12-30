const fragmentShader = `
varying vec3 vColor; 
uniform float uOpacity;
uniform float uColorTrigger;

void main() {
  vec3 color = vec3(1.);
  vec3 finalColor = mix(color, vColor, uColorTrigger);

  float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
  float strength = 0.05 / distanceToCenter - 0.1;

  float mixedInc = mix(strength, 0.05 / distanceToCenter - 0.1, 1.0) * uOpacity;

  gl_FragColor = vec4(finalColor, mixedInc);
}
`;

export default fragmentShader;
