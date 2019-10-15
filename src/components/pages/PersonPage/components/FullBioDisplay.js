import React from "react";
import { Transition, animated } from "react-spring/renderprops";

export default function FullBioDisplay(props) {
  return (
    <Transition
      native
      items={props.fullBioShown}
      config={{ duration: 500 }}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {show =>
        show &&
        (properties => (
          <animated.div style={properties}>
            <section className="full-bio-display">
              <i
                onClick={props.onClick}
                className="far fa-times-circle close-btn"
              />
              <p>{props.biography}</p>
            </section>
          </animated.div>
        ))
      }
    </Transition>
  );
}
