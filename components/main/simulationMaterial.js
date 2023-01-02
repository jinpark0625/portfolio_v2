import simulationVertexShader from "../shaders/simulationVertexShader";
import simulationFragmentShader from "../shaders/simulationFragmentShader";
import MeshSampler from "../shaders/meshSampler";
import { ShaderMaterial } from "three/src/materials/ShaderMaterial.js";
import { DataTexture } from "three/src/textures/DataTexture";
import { RGBAFormat, FloatType } from "three/src/constants";
import { randFloat } from "three/src/math/MathUtils";
import { Vector2 } from "three/src/math/Vector2.js";
import { extend } from "@react-three/fiber";

const getText = (width, height, viewportWidth, model) => {
  const text = model.text;
  text.geometry.center();
  let textData = MeshSampler(width, height, text, viewportWidth, 0);
  return textData;
};

const getModelA = (width, height, viewportWidth, model) => {
  const manModel = model.man;
  let modelData = MeshSampler(width, height, manModel, viewportWidth, 1);
  return modelData;
};

const getModelB = (width, height, viewportWidth, model) => {
  const length = model.Scene.children.length;
  let modelData = new Float32Array();

  for (let i = 0; i < length; i++) {
    if (
      model.Scene.children[i].name === "man" ||
      model.Scene.children[i].name === "text"
    ) {
    } else {
      const data = MeshSampler(
        width,
        height,
        model.Scene.children[i],
        viewportWidth,
        2
      );

      modelData = Float32Concat(modelData, data);
    }
  }

  // to cancat float32Array
  function Float32Concat(first, second) {
    let firstLength = first.length,
      result = new Float32Array(firstLength + second.length);

    result.set(first);
    result.set(second, firstLength);

    return result;
  }
  return modelData;
};

const getRing = (width, height, viewportWidth) => {
  const length = width * height * 4;
  const data = new Float32Array(length);
  const radius = viewportWidth > 4.8 ? viewportWidth / 6 : viewportWidth / 3.4;
  const r = radius;

  for (let i = 0; i < length; i++) {
    const stride = i * 4;

    const phi = randFloat(0, Math.PI * 2);
    const rnd = Math.random();

    let rd =
      rnd < 0.8
        ? Math.pow(Math.random() + 5, 1 / 12) * r
        : Math.pow(Math.random() * 10, 1 / 2) * r;

    data[stride] = rd * Math.cos(phi);
    data[stride + 1] = rd * Math.sin(phi);
    data[stride + 2] = Math.random() * 0.2;
    data[stride + 3] = 0;
  }
  return data;
};

const getRandomNum = (width, height, viewportHeight) => {
  // we need to create a vec4 since we're passing the positions to the fragment shader
  // data textures need to have 4 components, R, G, B, and A
  const length = width * height * 4;
  const data = new Float32Array(length);
  const randomnessPower = 3;
  const randomness = 0.2;
  const mainR = viewportHeight / 2;

  // scene 2
  for (let i = 0; i < length; i++) {
    const stride = i * 4;

    const randomX =
      Math.pow(Math.random(), randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      randomness *
      mainR;
    const randomY =
      Math.pow(Math.random(), randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      randomness *
      mainR;
    const randomZ =
      Math.pow(Math.random(), randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      randomness *
      mainR;

    data[stride] = randomX;
    data[stride + 1] = randomY;
    data[stride + 2] = randomZ;
    data[stride + 3] = 0;
  }
  return data;
};

// Create a custom simulation shader material
class SimulationMaterial extends ShaderMaterial {
  // constructor(size, viewport, models) {
  constructor(size, viewportWidth, viewportHeight, models) {
    // Create a Data Texture with our positions data
    const textureA = new DataTexture(
      getText(size, size, viewportWidth, models),
      // getText(size, size, viewport, models),
      size,
      size,
      RGBAFormat,
      FloatType
    );
    textureA.needsUpdate = true;

    const textureB = new DataTexture(
      getRing(size, size, viewportWidth),
      size,
      size,
      RGBAFormat,
      FloatType
    );
    textureB.needsUpdate = true;

    const textureC = new DataTexture(
      getModelA(size, size, viewportWidth, models),
      size,
      size,
      RGBAFormat,
      FloatType
    );
    textureC.needsUpdate = true;

    const textureD = new DataTexture(
      getModelB(size, size, viewportWidth, models),
      size,
      size,
      RGBAFormat,
      FloatType
    );
    textureD.needsUpdate = true;

    const rand = new DataTexture(
      getRandomNum(size, size, viewportHeight),
      size,
      size,
      RGBAFormat,
      FloatType
    );
    rand.needsUpdate = true;

    const simulationUniforms = {
      // Pass the positions Data Texture as a uniform
      textureA: { value: textureA },
      textureB: { value: textureB },
      textureC: { value: textureC },
      textureD: { value: textureD },
      randomNum: { value: rand },
      scrollTriggerA: { value: 0 },
      scrollTriggerB: { value: 0 },
      scrollTriggerC: { value: 0 },
      scrollTriggerD: { value: 0 },
      scrollTriggerE: { value: 0 },
      scrollTriggerF: { value: 0 },
      scrollTriggerG: { value: 0 },
      uWidth: { value: viewportWidth > 4.8 ? 2 : 1.2 },
      uTime: { value: 0 },
      uMouse: { value: new Vector2(0, 0) },
      uMouseTrigger: { value: 0 },
    };

    super({
      uniforms: simulationUniforms,
      vertexShader: simulationVertexShader,
      fragmentShader: simulationFragmentShader,
    });
  }
}

extend({ SimulationMaterial });
