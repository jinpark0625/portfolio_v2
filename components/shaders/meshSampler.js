// import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler";
import { MeshSurfaceSampler } from "three-stdlib";
import Random from "canvas-sketch-util/random";
import { Vector3 } from "three/src/math/Vector3.js";

const MeshSampler = (width, height, size, geometry, viewport) => {
  console.log(geometry);

  let length = width * height * 4;
  let data = new Float32Array(length);

  const sampler = new MeshSurfaceSampler(geometry);
  sampler.build();
  const tempPosition = new Vector3();

  for (let i = 0; i < length; i++) {
    const stride = i * 4;
    sampler.sample(tempPosition);

    data[stride] = tempPosition.x;
    data[stride + 1] = tempPosition.y;
    data[stride + 2] = tempPosition.z;
    data[stride + 3] = 1.0;
  }
  return data;
};

export default MeshSampler;
