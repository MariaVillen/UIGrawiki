import { cn } from "@ui/utils";
import { cva } from "class-variance-authority";
import { Link, LinkProps } from "react-router-dom";

export type TAnchorProps = LinkProps & {
  size?: "big" | "normal" | "small";
  theme?: "dark" | "light";
  disabled?: boolean;
};

const anchor = cva(
  ["gwk-flex", "gwk-no-underline", "gwk-justify-center", "gwk-items-center"],
  {
    variants: {
      size: {
        big: "gwk-text-lg",
        normal: "gwk-text-base",
        small: "gwk-text-sm",
      },
      theme: {
        dark: "gwk-text-text-white hover:gwk-text-text-disable hover:gwk-underline",
        light:
          "gwk-text-text-primary hover:gwk-text-text-primary-dark hover:gwk-underline",
      },
      disabled: {
        false: "gwk-opacity-1",
        true: "gwk-opacity-50",
      },
    },
    defaultVariants: {
      size: "normal",
      theme: "light",
      disabled: false,
    },
  },
);

const Anchor = ({
  to,
  children,
  className,
  theme,
  size,
  disabled,
  ...rest
}: TAnchorProps) => {
  return (
    <Link
      className={cn(anchor({ theme, size, disabled }), className)}
      to={to}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default Anchor;
