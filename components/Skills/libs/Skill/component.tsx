import { motion } from "framer-motion";
import React, { FC } from "react";

import { Props } from "./props";

export const Skill: FC<Props> = ({
    name,
    href,
    controls,
    custom,
}: Props) => {
    return (
        <motion.a
            className="block border-2 border-gray-800 pt-2 pb-2 text-center dark:rounded-md bg-whiteTheme"
            style={{
                borderRadius: "2px",
                opacity: 1,
            }}
            target="_blank"
            href={href}
            whileHover="hover"
            initial="initial"
            variants={{
                initial: {
                    opacity: 0,
                }
            }}
            animate={controls}
            custom={custom}
        >
            <motion.p
                className="text-lg vertical-align: middle font-medium text-black-700 md:text-base hover:underline dark:text-white-900"
                whileHover="hover"
                variants={{
                    hover: {
                        fontWeight: "bold"
                    }
                }}
            >
                {name}
            </motion.p>
        </motion.a>
    );
};
