import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";

type ButtonVariant = "filled" | "outlined";
type ButtonColor = "green" | "black";
type ButtonSize = 56 | 60;
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
}

export default function Button({ variant = "filled", color = "black", size = 56, ...props }: ButtonProps) {
  return <ButtonTag $variant={variant} $color={color} $size={size} {...props} />;
}

type TagProps = {
  $variant: ButtonVariant;
  $color: ButtonColor;
  $size: ButtonSize;
};
const ButtonTag = styled("button")<TagProps>`
  width: 100%;
  height: ${({ $size }) => $size}px;

  font-size: 20px;
  line-height: 130%;
  color: ${({ theme }) => theme.white};

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
        `,
        outlined: css`
          border: 1px solid #5d8058;
          background-color: #fff;
          color: #5d8058;
        `,
      },
      black: {
        filled: css`
          background-color: ${theme.black};
        `,
        outlined: css`
          border: 1px solid ${theme.black};
          background-color: #fff;
          color: ${theme.black};
        `,
      },
    }[$color][$variant];
  }}
`;
