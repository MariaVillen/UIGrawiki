import { Button, FieldGroup, InputWithButton, PasswordField } from "@ui/forms";
import { CheckInput } from "@ui/forms";
import { GoogleColor } from "@ui/icons";
import { LogoCard } from "@ui/layouts";
import { Anchor } from "@ui/nav";

const LoginForm = () => {
  return (
    <LogoCard>
      <div className=" gwk-flex gwk-flex-col gwk-gap-4 gwk-justify-center gwk-items-center">
        <p>Inicia sesión para ingresar a tu cuenta</p>
        <form className=" gwk-flex gwk-flex-col gwk-gap-4">
          <FieldGroup>
            <InputWithButton placeholder="E-mail" />
          </FieldGroup>
          <FieldGroup>
            <PasswordField />
          </FieldGroup>
        </form>
        <div className="gwk-flex gwk-justify-between gwk-w-full">
          <div className="gwk-flex gwk-items-center gwk-gap-2">
            <CheckInput />
            Recordarme
          </div>
          <div>
            <Anchor to="/forgetPass">Olvidé mi contraseña</Anchor>
          </div>
        </div>
        <Button variant="primary" size="medium">
          Iniciar sesión
        </Button>
        <Button variant="default" size="medium">
          <Button.Icon icon={GoogleColor} size="medium" />
          Ingresar con Google
        </Button>
      </div>
    </LogoCard>
  );
};

export default LoginForm;
