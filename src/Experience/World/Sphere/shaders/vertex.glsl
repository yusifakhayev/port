#include perlin4d.glsl;

uniform float uTime;

uniform float uDispFreq;
uniform float uDispStr;
uniform float uDistFreq;
uniform float uDistStr;


uniform vec3 ulightAColor;
uniform vec3 ulightAPosition;
uniform float ulightAIntensity;
uniform vec3 ulightBColor;
uniform vec3 ulightBPosition;
uniform float ulightBIntensity;

varying float vPerlinStrength;
varying vec3 vColor;
varying vec3 vNormal;

void main() {
    // position
    vec3 newPosition = position * uDistFreq;
    newPosition += cnoise(vec4(newPosition * uDistFreq, uTime))* uDistStr;
    float perlinStrength = cnoise(vec4(newPosition * uDispFreq, uTime));

    vec3 displacedPosition = position;
    displacedPosition += normal * perlinStrength * uDispStr;

    vec4 modelPosition = modelMatrix * vec4(displacedPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;


    // color
    float lightAIntensity = max(0.0, - dot(normal, normalize(- ulightAPosition))) * ulightAIntensity;
    float lightBIntensity = max(0.0, - dot(normal, normalize(- ulightBPosition))) * ulightBIntensity;

    vec3 color = vec3(.0);
    color += mix(color, ulightAColor, lightAIntensity);
    color += mix(color, ulightBColor, lightBIntensity);

    // varyings
    vNormal = normal;
    vPerlinStrength = perlinStrength;
    vColor = color;
}


