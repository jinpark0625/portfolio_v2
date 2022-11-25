import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";

function Transition(props) {
  console.log(props);
  const page = props.children;
  const [item, set] = useState(page);

  useEffect(() => {
    const page = props.children;
    set(page);
  }, [props]);

  console.log(item.key);
  const transitions = useTransition(item, (item) => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, position: "absolute" },
  });

  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      {item}
    </animated.div>
  ));
}
export default Transition;
