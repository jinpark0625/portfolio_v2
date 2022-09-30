import React from 'react'
import {Text} from "@react-three/drei";
import {
    useSpring,
    animated,
    config,
    useTransition,
  } from "@react-spring/three";

const AnimatedText = animated(Text);

const BodyText = React.memo(function BodyText({ body, index, currentBodyIndex }) {
  /**
   * body texts
   */
  // const content = useMemo(() => {
  //   return (content = body);
  // }, []);

  /**
   * animation if statements
   */
  const transitions = useTransition(currentBodyIndex === index, {
    from: { scale: [1.15, 1.15, 1.15], fillOpacity: 0 },
    enter: { scale: [1.0, 1.0, 1.0], fillOpacity: 1 },
    leave: { scale: [0.85, 0.85, 0.85], fillOpacity: 0 },
    config: {
      duration: "400",
    },
  });

  /**
   * font config
   */
  const fontProps = {
    font:
    process.env.NEXT_PUBLIC_API_URL + "/fonts/BLCereal-Regular.woff",
    fontSize: 0.28,
    characters: "abcdefghijklmnopqrstuvwxyz0123456789!",
  };


  return (
    <>
      {transitions(({ scale, fillOpacity }, item) => {
        return (
          item && (
            <AnimatedText
              {...fontProps}
              scale={scale}
              fillOpacity={fillOpacity}
            >
              {body}
            </AnimatedText>
          )
        );
      })}
    </>
  );
});

export default BodyText