import React from "react";
import { ButtonBaseProps, StyledButton } from "./types";
import { PolymorphicRef } from "../utils/polymorphic";

export const ButtonBase = React.forwardRef(
  <C extends React.ElementType = "button">(
    { as, children }: ButtonBaseProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "button";
    return <StyledButton as={Component}>{children}</StyledButton>;
  }
);
