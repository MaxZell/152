import React, { useEffect, useState, useRef } from 'react';
import { Spring } from 'react-spring/renderprops';

const Animation = () => {
  const pathRef = useRef();
  const [offset, setOffset] = useState(null);

  useEffect(() => {
    setOffset(pathRef.current.getTotalLength());
  }, [offset]);

  return (
    <div className="svgAni">
        <h3>SVG Animation</h3>
      {offset ? (
        <Spring
          from={{ x: offset }}
          to={{ x: 0 }}
          config={{ tension: 4, friction: 0.5, precision: 0.1 }}
        >
          {(props) => (
            <svg>
              <circle
                strokeDashoffset={props.x}
                strokeDasharray={offset}
                strokeWidth="3"
                cx="100"
                cy="50"
                r="40"
                stroke="white"
                fill="none"
                ref={pathRef}
              />
            </svg>
          )}
        </Spring>
      ) : (
        <svg>
          <circle
            strokeWidth="3"
            cx="100"
            cy="50"
            r="40"
            stroke="none"
            fill="none"
            ref={pathRef}
          />
        </svg>
      )}
    </div>
  );
};

export default Animation;