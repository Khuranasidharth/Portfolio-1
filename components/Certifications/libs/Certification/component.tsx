import { motion } from "framer-motion";
import React, { cloneElement, FC } from "react";

import { Props } from "./props";

export const Certifiaction: FC<Props> = ({
  name,
  org,
  icon,
  href,
  controls,
  custom,
}: Props) => {

  let orgInfo
  if (org) {
    orgInfo = <p className="text-xs font-normal text-black-700 dark:text-white-700">{org}</p>
  }


  return (
    <motion.a
      className="block flex pt-2 pb-2 dark:bg-gray-900 rounded-md bg-whiteTheme"
      style={{
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.10)",
      }}
      target="_blank"
      href={href}
      whileHover="hover"
      initial="initial"
      variants={{
        initial: {
          opacity: 0,
        },
        hover: {
          y: -3,
        },
      }}
      animate={controls}
      custom={custom}
    >
      <div className="px-3 py-3">{cloneElement(icon, { className: "mx-auto my-auto w-9 h-9" })}</div>
      <div className="py-3">
        <p className="text-base font-medium text-black-700 dark:text-white-700">
          {name}
        </p>
        {orgInfo}
      </div>
    </motion.a>
  );
};
