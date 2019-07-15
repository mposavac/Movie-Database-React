import React from "react";
import { Transition, animated } from "react-spring/renderprops";

export default function Loading(props) {
  return (
    <Transition
      native
      items={props.isLoading}
      from={{ opacity: 1 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {show =>
        show &&
        (propss => (
          <animated.div style={propss}>
            <div className={"loading loading" + props.color} />
          </animated.div>
        ))
      }
    </Transition>
  );
}
