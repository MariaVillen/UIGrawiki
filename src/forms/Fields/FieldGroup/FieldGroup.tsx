import { ErrorField } from "@ui/forms";
import { HTMLAttributes } from "react";

export type TFieldGroupProps = HTMLAttributes<HTMLDivElement> & {
  error?: string;
};

const FieldGroup = ({ error, children }: TFieldGroupProps) => {
  return (
    <div>
      {children}
      {error && <ErrorField>{error}</ErrorField>}
    </div>
  );
};

export default FieldGroup;
