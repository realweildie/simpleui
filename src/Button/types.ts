import styled from "styled-components";
import { theme } from "../theme";
import { PolymorphicComponentPropWithRef } from "../utils/polymorphic";
import { hexToRgb } from "../utils/hexToRGB";
import { concatString } from "../utils/concat";

export const StyledButton = styled("button")`
  box-sizing: border-box;

  border-radius: 5px;
  border: 2px solid;
  // change to inherit
  font-family: sans-serif;
  font-size: inherit;
  font-weight: normal;
  cursor: pointer;
  appearance: none;
  user-select: none;
  text-decoration: none;
  text-align: center;
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 12px;
  min-width: max-content;
  transition: 80ms cubic-bezier(0.65, 0, 0.35, 1);

  &[href] {
    display: inline-flex;

    &:hover {
      text-decoration: none;
    }
  }

  &:hover {
    transition-duration: 80ms;
  }

  &:active {
    transition: none;
  }

  &:disabled {
    cursor: not-allowed;
    box-shadow: none;
  }

  svg {
    height: 16px;
    width: 16px;
    perspective: 0ch;
  }

  & [data-component="leadingVisual"] {
    display: inherit;
    align-items: center;
  }

  & [data-component="trailingVision"] {
    display: inherit;
    align-items: center;
    margin-left: 10px;
  }

  & [data-component="buttonContent"] {
    display: inherit;
    align-items: center;
    gap: 8px;
  }

  /* sizes */

  &[data-size="small"] {
    padding: 0 8px;
    height: 28px;
    gap: 4px;
    font-size: 14px;

    & [data-component="leadingVisual"] svg,
    & [data-component="trailingVision"] svg {
      height: 11px;
    }
  }

  &[data-size="large"] {
    padding: 0 16px;
    height: 40px;
    gap: 8px;
  }

  /* variants */

  &[data-variant="primary"] {
    background-color: ${theme.colors.primary[2]};
    border-color: ${theme.colors.primary[2]} !important;
    color: #fff;

    &:hover {
      background-color: ${theme.colors.primary[1]};
      border-color: ${theme.colors.primary[1]} !important;
    }

    &:active {
      background-color: ${theme.colors.primary[0]};
      border-color: ${theme.colors.primary[0]} !important;
    }

    &[data-transparency="true"] {
      background-color: rgba(${hexToRgb(theme.colors.primary[2])}, 0.3);
      border: none !important;
      color: #5a01a0;

      &:hover {
        background-color: rgba(${hexToRgb(theme.colors.primary[2])}, 0.4);
      }
    }
  }
`;

export type VariantType = "primary" | "invisible" | "danger" | "outline";

export type Size = "small" | "medium" | "large";

export type ButtonBaseProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    {
      variant?: VariantType;
      size?: Size;
      disabled?: boolean;
    }
  > &
    React.ButtonHTMLAttributes<HTMLButtonElement>;

// export type ButtonProps = {
//   icon?: React.ComponentType | null | undefined;
//   leadingIcon?: React.ComponentType | null | undefined;
//   children: React.ReactNode;
// } & ButtonBaseProps;

export type LinkButtonProps = {
  underline?: boolean;
  href?: string;
  rel?: string;
  type?: string;
};
