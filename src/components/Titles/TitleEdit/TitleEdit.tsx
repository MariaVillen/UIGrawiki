import { ButtonHTMLAttributes, ReactElement } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@ui/utils";

const edit_title = cva(
  " gwk-flex gwk-items-center gwk-max-h-[50px] gwk-p-4 gwk-justify-between gwk-text-text-white",
  {
    variants: {
      variant: {
        primary: "gwk-bg-surface-primary",
        secondary: "gwk-bg-surface-negative",
        custom: "gwk-bg-surface-primary-hover",
      },
      rounded: {
        false: "",
        true: "gwk-rounded-t-rdlg",
      },
    },
  },
);

export type TTitleEditProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof edit_title> & { label: string | ReactElement };

const TitleEdit = ({
  label,
  children,
  rounded,
  variant,
  className,
}: TTitleEditProps) => {
  return (
    <div className={cn(edit_title({ rounded, variant }), className)}>
      <div className="gwk-text-lg gwk-font-bold">{label}</div>
      {children}
    </div>
  );
};

export default TitleEdit;
