import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import Typo from "./Typo";

type ButtonVariant = "filled" | "outlined";
type ButtonColor = "green" | "black" | "brown";
type ButtonSize = 56 | 60;
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  width?: number;
}

export default function Button({
  variant = "filled",
  color = "black",
  size = 56,
  width,
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonTag $variant={variant} $color={color} $size={size} $width={width} {...props}>
      <Typo
        weight="bold"
        size={16}
        style={{
          color: "inherit",
        }}
      >
        {children}
      </Typo>
    </ButtonTag>
  );
}

type TagProps = {
  $variant: ButtonVariant;
  $color: ButtonColor;
  $size: ButtonSize;
  $width?: ButtonProps["width"];
};
const ButtonTag = styled("button")<TagProps>`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  text-align: inherit;
  font: inherit;
  border-radius: 0;
  appearance: none; // Just in case we missed anything.

  width: ${({ $width }) => ($width ? `${$width}px` : "100%")};
  height: ${({ $size }) => $size}px;

  border-radius: 36px;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 14px;

  ${({ $color, $variant, theme }) => {
    return {
      green: {
        filled: css`
          background-color: #5d8058;
          color: #fff;
        `,
        outlined: css`
          border: 2px solid #5d8058;
          background-color: #fff;
          color: #5d8058;
        `,
      },
      black: {
        filled: css`
          background-color: ${theme.black};
          color: #fff;
        `,
        outlined: css`
          border: 2px solid ${theme.black};
          color: ${theme.black};
        `,
      },
      brown: {
        filled: css`
          background-color: #a18b6e;
          color: #fff;
        `,
        outlined: css`
          border: 2px solid #a18b6e;
          background-color: #fff;
          color: #a18b6e;
        `,
      },
    }[$color][$variant];
  }};

  &:disabled {
    opacity: 0.8;
  }
`;
