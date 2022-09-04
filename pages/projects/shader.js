export const vertexShader = `

uniform float scale;
uniform float shift;
varying vec2 vUv;
uniform vec2 uOffset;

#define M_PI 3.1415926535897932384626433832795

vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
    position.x = position.x + (sin(uv.y * M_PI) * offset.x);
    position.y = position.y + (sin(uv.x * M_PI) * offset.y);
    return position;
 }

void main() {
    vUv = uv;
    vec3 newPosition = deformationCurve(position, uv, uOffset);

    
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    // vec3 pos = position;
    // pos.y = pos.y + ((sin(uv.x * M_PI) * shift * 5.0) * 0.125);
    // vUv = uv;

    // gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition,1.);
}
`;

export const fragmentShader = `

uniform sampler2D uTexture;
uniform float hasTexture;
uniform float uAlpha;
uniform vec2 uOffset;
varying vec2 vUv;


vec3 rgbShift(sampler2D textureImage, vec2 uv, vec2 offset) {
    float r = texture2D(textureImage,uv + offset).r;
    vec2 gb = texture2D(textureImage,uv).gb;
    return vec3(r,gb);
  }

void main() {
    // vec3 color = rgbShift(uTexture,vUv,uOffset);
    // gl_FragColor = vec4(color,uAlpha);

    vec4 color = texture2D(uTexture, vUv);

    if(hasTexture == 1.0) gl_FragColor = color;
    else gl_FragColor = vec4(1.,1.,1.,1.);
}
`;
