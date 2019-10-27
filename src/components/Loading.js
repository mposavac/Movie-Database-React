import React from "react";
import { Transition, animated } from "react-spring/renderprops";

export default function Loading(props) {
  return (
    <Transition
      native
      items={props.isLoading}
      from={{ opacity: 1, zIndex: "100", position: "relative" }}
      enter={{ opacity: 1, zIndex: "100", position: "relative" }}
      leave={{ opacity: 0, zIndex: "100", position: "relative" }}
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
