import { MeshSurfaceSampler } from "three-stdlib";
import { Vector3 } from "three/src/math/Vector3.js";

const MeshSampler = (width, height, geometry, viewport, modelType) => {
  let length = width * height * 4;
  let data = new Float32Array(length);
  let peopleData = new Float32Array(((width * height) / 20) * 4);

  const sampler = new MeshSurfaceSampler(geometry);
  sampler.build();
  const tempPosition = new Vector3();

  if (modelType === 1) {
    for (let i = 0; i < length; i++) {
      const stride = i * 4;
      sampler.sample(tempPosition);

      data[stride] = (Math.random() - 0.5) * 0.04 + tempPosition.x + 0.5;
      data[stride + 1] = tempPosition.y - 4.6;
      data[stride + 2] = tempPosition.z;
      data[stride + 3] = 1.0;
    }
    return data;
  } else if (modelType === 2) {
    for (let i = 0; i < length; i++) {
      const stride = i * 4;
      sampler.sample(tempPosition);
      peopleData[stride] = tempPosition.x;
      peopleData[stride + 1] = tempPosition.y;
      peopleData[stride + 2] = tempPosition.z;
      peopleData[stride + 3] = 1.0;
    }
    return peopleData;
  } else {
    for (let i = 0; i < length; i++) {
      const stride = i * 4;
      sampler.sample(tempPosition);

      data[stride] = tempPosition.x * (viewport.width / 18);
      data[stride + 1] = tempPosition.y * (viewport.width / 18);
      data[stride + 2] = tempPosition.z * (viewport.width / 18);
      data[stride + 3] = 1.0;
    }
    return data;
  }
};

export default MeshSampler;
