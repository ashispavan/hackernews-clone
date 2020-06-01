import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300
};

export const Squares = () => {
  const [colors, setColors] = useState(initialColors);

  useEffect(() => {
    setTimeout(() => setColors(shuffle(colors)), 1000);
  }, [colors]);

  return (
    <ul className="squares">
      {colors.map(background => (
        <motion.li
          key={background}
          layoutTransition={spring}
          style={{ background }}
        />
      ))}
    </ul>
  );
};

const initialColors = ["#90FFFF", "#C0FFFF", "#E2FEFE", "#FFFFFE"];
