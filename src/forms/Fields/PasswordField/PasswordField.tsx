import { HTMLAttributes, Ref, forwardRef, useState } from "react";
import { InputWithButton, ToggleButton } from "@ui/forms";
import { PasswordHideOutline, PasswordShowOutline } from "@ui/icons";

export type passwordFieldProps = HTMLAttributes<HTMLInputElement>;

const PasswordField = forwardRef<HTMLInputElement, passwordFieldProps>(
  ({ ...rest }: passwordFieldProps, ref: Ref<HTMLInputElement>) => {
    const [isShown, setIsShown] = useState(true);
    const toggleView = () => setIsShown(!isShown);

    return (
      <InputWithButton
        type={isShown ? "text" : "password"}
        reverse
        placeholder="Contraseña"
        ref={ref}
        {...rest}
      >
        <ToggleButton
          iconTrue={<PasswordShowOutline className="gwk-h-8 gwk-w-8" />}
          iconFalse={<PasswordHideOutline className="gwk-h-8 gwk-w-8" />}
          isActive={isShown}
          onClick={toggleView}
        />
      </InputWithButton>
    );
  },
);

export default PasswordField;
