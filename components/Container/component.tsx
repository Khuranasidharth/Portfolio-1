import clsx from "clsx";
import React, { FC } from "react";

import { Props } from "./props";

export const Container: FC<Props> = ({ className, children }: Props) => {
  return (
    <div className={clsx("px-3 mx-auto max-w-4xl", className)}>
      {children}
    </div>
  );
};
