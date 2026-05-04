export const MAX_TRAIL_POINTS = 14;

export const liquidRevealVertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const liquidRevealFragmentShader = `
precision highp float;

varying vec2 vUv;

uniform sampler2D uHelmet;
uniform sampler2D uFace;
uniform float uTime;
uniform vec2 uTrail[${MAX_TRAIL_POINTS}];
uniform float uTrailStrength[${MAX_TRAIL_POINTS}];

// uRadius controls how large each reveal blob feels.
uniform float uRadius;
// uNoiseSpeed controls how quickly the liquid turbulence animates.
uniform float uNoiseSpeed;
// uNoiseScale controls the noise frequency (higher = finer details).
uniform float uNoiseScale;
// uDistortion controls ripple intensity and edge wobble.
uniform float uDistortion;
// uBaseReveal is used for mobile auto-wave so some reveal is always visible.
uniform float uBaseReveal;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);

  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  vec2 u = f * f * (3.0 - 2.0 * f);

  return mix(a, b, u.x) +
         (c - a) * u.y * (1.0 - u.x) +
         (d - b) * u.x * u.y;
}

float fbm(vec2 st) {
  float value = 0.0;
  float amplitude = 0.5;

  for (int i = 0; i < 5; i++) {
    value += amplitude * noise(st);
    st *= 2.0;
    amplitude *= 0.5;
  }

  return value;
}

void main() {
  vec2 uv = vUv;
  float t = uTime * uNoiseSpeed;

  float revealField = uBaseReveal;

  for (int i = 0; i < ${MAX_TRAIL_POINTS}; i++) {
    float wobble = fbm((uv * uNoiseScale) + vec2(float(i) * 2.1, t));
    vec2 offset = vec2(
      (wobble - 0.5) * uDistortion * 0.2,
      (fbm((uv.yx * uNoiseScale) + vec2(t * 0.8, float(i) * 1.7)) - 0.5) * uDistortion * 0.2
    );

    float d = distance(uv + offset, uTrail[i]);
    float blob = smoothstep(uRadius + 0.08, uRadius - 0.03, d);

    float edgeNoise = smoothstep(
      0.2,
      0.9,
      fbm((uv * 7.0) + vec2(float(i) * 3.14, t * 1.2))
    );

    revealField += blob * edgeNoise * uTrailStrength[i];
  }

  revealField = clamp(revealField, 0.0, 1.0);

  vec4 helmet = texture2D(uHelmet, uv);
  vec4 face = texture2D(uFace, uv);

  float mask = smoothstep(0.12, 0.98, revealField);

  // Keep transparent edges clean when source images include alpha.
  vec3 helmetPremul = helmet.rgb * helmet.a;
  vec3 facePremul = face.rgb * face.a;
  vec3 mixedPremul = mix(helmetPremul, facePremul, mask);
  float outAlpha = mix(helmet.a, face.a, mask);
  vec3 outColor = outAlpha > 0.0001 ? mixedPremul / outAlpha : vec3(0.0);

  gl_FragColor = vec4(outColor, outAlpha);
}
`;
