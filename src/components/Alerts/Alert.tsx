import { Notification } from "@ui/components";
import { Button } from "@ui/forms";
import { HTMLAttributes } from "react";

export type TAlertProps = HTMLAttributes<HTMLButtonElement> & {
  label: string;
  image: string;
  alt?: string;
  text?: string;
  buttonLabel: string;
  variant?: "custom" | "primary" | "secondary" | "warning";
};

const Alert = ({
  label,
  image,
  alt,
  text,
  buttonLabel,
  variant = "custom",
  onClick,
}: TAlertProps) => {
  return (
    <Notification
      label={label}
      className=" gwk-w-full min-w-[360px] gwk-max-w-[997px]"
      variant={variant}
    >
      <div className="gwk-bg-sufrace-triarty-white gwk-w-full gwk-flex gwk-flex-col gwk-items-center">
        <div className=" mobile:gwk-max-w-[348px] gwk-p-2 gwk-flex gwk-flex-col gwk-gap-4 gwk-justify-center gwk-items-center">
          <img
            src={image}
            alt={alt}
            className="gwk-w-full gwk-h-full gwk-object-fill"
          />
          {text && (
            <p className="gwk-text-lg gwk-font-bold gwk-text-center">{text}</p>
          )}
          <Button variant="primary" size="medium" onClick={onClick}>
            {buttonLabel}
          </Button>
        </div>
      </div>
    </Notification>
  );
};

export default Alert;
