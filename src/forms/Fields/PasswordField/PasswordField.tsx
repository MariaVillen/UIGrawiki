import { Ref, forwardRef, useState } from "react";
import { InputWithButton, ToggleButton } from "@ui/forms";
import { PasswordHideOutline, PasswordShowOutline } from "@ui/icons";
import { TInputWithButtonProps } from "../Input/InputWithButton/InputWithButton";

export type passwordFieldProps = TInputWithButtonProps;

const PasswordField = forwardRef<HTMLInputElement, passwordFieldProps>(
  ({ ...rest }: passwordFieldProps, ref: Ref<HTMLInputElement>) => {
    const [isShown, setIsShown] = useState(true);
    const toggleView = () => setIsShown(!isShown);

    return (
      <InputWithButton
        type={isShown ? "text" : "password"}
        reverse
        placeholder="Contraseña"
        padding={true}
        ref={ref}
        {...rest}
      >
        <ToggleButton
          className="gwk-w-10 gwk-h-10"
          iconTrue={PasswordShowOutline}
          iconFalse={PasswordHideOutline}
          isActive={isShown}
          onClick={toggleView}
        />
      </InputWithButton>
    );
  },
);

export default PasswordField;
