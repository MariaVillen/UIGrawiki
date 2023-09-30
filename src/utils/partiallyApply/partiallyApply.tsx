import { ComponentType } from "react";

export const partiallyApply = <T extends object>(
  Component: ComponentType<T>,
  partialProps: Partial<T>,
) => {
  return (props: T) => {
    return <Component {...props} {...partialProps} />;
  };
};

// Use Example:
// export const BigSuccessButton = partialApply(Button, {variant: "primary", size: "big" })
