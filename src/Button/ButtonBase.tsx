import React from "react";
import { ButtonBaseProps, StyledButton } from "./types";
import { PolymorphicRef } from "../utils/polymorphic";

export const ButtonBase = React.forwardRef(
  <C extends React.ElementType = "button">(
    props: ButtonBaseProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const {
      as: Component = "button",
      icon: Icon,
      leadingIcon: Lead,
      variant = "primary",
      size = "medium",
      children,
      ...rest
    } = props;

    return (
      <StyledButton
        data-size={size}
        data-variant={variant}
        data-transparency="true"
        as={Component}
        {...rest}
        ref={ref}
      >
        {children}
      </StyledButton>
    );
  }
);
