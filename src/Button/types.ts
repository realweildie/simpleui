import styled from "styled-components";
import { theme } from "../theme";
import { PolymorphicComponentPropWithRef } from "../utils/polymorphic";

export const StyledButton = styled.button`
  border-radius: ${theme.radii.sl};
  /* padding: ${theme.space[2]};
  font-size: ${theme.fontSizes[2]};
  background-color: ${theme.colors.primary[2]}; */
  cursor: pointer;
  /* border: none; */
  /* color: ${theme.colors.text[0]}; */
  transition: ${theme.animation.easeOutCubic};

  margin: 10px;

  &:hover {
    background-color: ${theme.colors.primary[1]};
  }

  &:active {
    background-color: ${theme.colors.primary[0]};
  }

  &:focus {
    outline: 3px solid ${theme.colors.primary[1]};
  }
`;

export type VariantType =
  | "default"
  | "primary"
  | "invisible"
  | "danger"
  | "outline";

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
  referrerPolicy?: React.AnchorHTMLAttributes<HTMLAnchorElement>["referrerPolicy"];
};
