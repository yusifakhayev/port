uniform float uColMultA;
uniform float uColMultB;

varying float vPerlinStrength;
varying vec3 vColor;

void main() {
    float color = vPerlinStrength + uColMultA;
    color *= uColMultB;
    gl_FragColor = vec4(vColor, 1.0);
}

