import { useRef, useMemo, useLayoutEffect } from "react";
import { useScroll, useFBO } from "@react-three/drei";
import { useFrame, createPortal } from "@react-three/fiber";
import { PlaneGeometry } from "three/src/geometries/PlaneGeometry.js";
import { Color } from "three/src/math/Color";
import "./simulationMaterial";
import fragmentShader from "../shaders/fragmentShader";
import vertexShader from "../shaders/vertexShader";
import {
  RGBAFormat,
  FloatType,
  NearestFilter,
  AdditiveBlending,
} from "three/src/constants";
import { Scene } from "three/src/scenes/Scene";
import { OrthographicCamera } from "three/src/cameras/OrthographicCamera.js";
import { randInt } from "three/src/math/MathUtils";
import { Vector2 } from "three/src/math/Vector2.js";

let opacity;
const size = 80;

const FboParticles = ({ models, viewportWidth, viewportHeight }) => {
  const scroll = useScroll();

  /**
   * Particles options
   */
  // This reference gives us direct access to our points
  const points = useRef();
  const simulationMaterialRef = useRef();

  // Create a camera and a scene for our FBO
  // Create a simple square geometry with custom uv and positions attributes
  const [scene, camera, positions, uvs] = useMemo(() => {
    return [
      new Scene(),
      new OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1),
      new Float32Array([
        -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0,
      ]),
      new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]),
    ];
  }, []);

  // Create our FBO render target
  const renderTarget = useFBO(size, size, {
    minFilter: NearestFilter,
    magFilter: NearestFilter,
    format: RGBAFormat,
    stencilBuffer: false,
    type: FloatType,
  });

  // Generate a "buffer" of vertex of size "size" with normalized coordinates
  const particlesPosition = useMemo(() => {
    const length = size * size;
    const particles = new Float32Array(length * 3);
    for (let i = 0; i < length; i++) {
      let i3 = i * 3;
      particles[i3 + 0] = (i % size) / size;
      particles[i3 + 1] = i / size / size;
    }
    return particles;
  }, []);

  const uniforms = useMemo(
    () => ({
      uPositions: {
        value: null,
      },
      uMobile: {
        value: 1,
      },
      uPixelRatio: {
        value: Math.min(window.devicePixelRatio, 2),
      },
      vColor: {
        value: 0,
      },
      defaultTime: {
        value: 0,
      },
      uOpacity: {
        value: 0,
      },
      uColorTrigger: {
        value: 0,
      },
    }),
    []
  );

  useLayoutEffect(() => {
    if (viewportWidth < 4.8) {
      points.current.material.uniforms.uMobile.value = 0.1;
    }
  }, []);

  //   FBO useFrame
  useFrame(({ gl, clock }) => {
    gl.setRenderTarget(renderTarget);
    gl.clear();
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    points.current.material.uniforms.uPositions.value = renderTarget.texture;
    points.current.material.uniforms.defaultTime.value = clock.elapsedTime;
    simulationMaterialRef.current.uniforms.uTime.value = clock.elapsedTime;
  });

  const [scales, colors] = useMemo(() => {
    const length = size * size * 3;

    const color = new Color();
    const sca = [];
    const cols = [];
    let q = ["white", "white", 0x2675ad, 0x0b5394, 0x0b9490];

    const range = viewportWidth < 4.8 ? 20 : 40;

    for (let i = 0; i < length; i++) {
      const i3 = i * 3;

      //   color
      color.set(q[randInt(0, 4)]);
      cols[i3 + 0] = color.r;
      cols[i3 + 1] = color.g;
      cols[i3 + 2] = color.b;

      //   particles scale
      sca[i] = Math.random() * range;
    }
    return [new Float32Array(sca), new Float32Array(cols)];
  }, []);

  /**
   * mouse event
   */
  const hoveredRef = useRef();
  const planeGeo = useMemo(() => {
    return new PlaneGeometry(viewportWidth, viewportHeight, 1, 1);
  }, []);

  /**
   * scroll
   */
  //   scroll animation

  useFrame(({ mouse }) => {
    const x = (mouse.x * viewportWidth) / 2;
    const y = (mouse.y * viewportHeight) / 2;

    if (viewportWidth > 6.7) {
      if (hoveredRef.current) {
        simulationMaterialRef.current.uniforms.uMouse.value = new Vector2(x, y);
        simulationMaterialRef.current.uniforms.uMouseTrigger.value = 1;
      } else simulationMaterialRef.current.uniforms.uMouseTrigger.value = 0;
    }

    const aRange = scroll.range(0.0, 1 / 12);
    const bRange = scroll.range(0.7 / 12, 1 / 12);

    simulationMaterialRef.current.uniforms.scrollTriggerA.value = aRange;

    const cRange = scroll.range(1.7 / 12, 1 / 12);
    const dRange = scroll.range(3.6 / 12, 1 / 12);
    const c = scroll.visible(1.7 / 12, 1 / 12);
    const d = scroll.visible(2.7 / 12, 1.9 / 12);

    simulationMaterialRef.current.uniforms.scrollTriggerB.value = cRange;

    const e = scroll.visible(4.8 / 12, 2 / 12);
    const eRange = scroll.range(4.8 / 12, 1 / 12);

    simulationMaterialRef.current.uniforms.scrollTriggerC.value = eRange;

    const f = scroll.visible(6.8 / 12, 1 / 12);
    const g = scroll.visible(7.6 / 12, 1 / 12);
    const fRange = scroll.range(6.8 / 12, 1 / 12);
    const gRange = scroll.range(7.6 / 12, 1 / 12);

    simulationMaterialRef.current.uniforms.scrollTriggerD.value = fRange;
    simulationMaterialRef.current.uniforms.scrollTriggerE.value = gRange;

    const h = scroll.visible(9.6 / 12, 2.4 / 12);
    const hRange = scroll.range(9.6 / 12, 1 / 12);

    simulationMaterialRef.current.uniforms.scrollTriggerF.value = hRange;
    points.current.material.uniforms.uColorTrigger.value = hRange;

    const iRange = scroll.range(10.6 / 12, 1.4 / 12);

    simulationMaterialRef.current.uniforms.scrollTriggerG.value = iRange;

    // opacity
    opacity = 1 - bRange;
    c && (opacity = cRange);
    d && (opacity = 1 - dRange);
    e && (opacity = eRange);
    f && (opacity = 1 - fRange);
    g && (opacity = fRange);
    h && (opacity = hRange);

    points.current.material.uniforms.uOpacity.value = opacity;
  });

  return (
    <>
      <mesh
        position={[0, 0, 0]}
        onPointerOver={(e) => (
          e.stopPropagation(), (hoveredRef.current = true)
        )}
        onPointerOut={(e) => (hoveredRef.current = false)}
        visible={false}
        geometry={planeGeo}
      />
      {/* Render off-screen our simulation material and square geometry */}
      {createPortal(
        <mesh>
          <simulationMaterial
            ref={simulationMaterialRef}
            // args={[size, viewport, models]}
            args={[size, viewportWidth, viewportHeight, models]}
          />
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-uv"
              count={uvs.length / 2}
              array={uvs}
              itemSize={2}
            />
          </bufferGeometry>
        </mesh>,
        scene
      )}

      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-aScale"
            count={scales.length}
            array={scales}
            itemSize={1}
          />
        </bufferGeometry>
        <shaderMaterial
          blending={AdditiveBlending}
          depthWrite={false}
          // transparent={true}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        />
      </points>
    </>
  );
};

export default FboParticles;
