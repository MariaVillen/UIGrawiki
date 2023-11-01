import { HTMLAttributes, ReactNode, useState } from "react";
import AccordionContext from "./AccordionContext";
import { ToggleButton } from "@ui/forms";
import AccordionBar from "./AccordionBar";
import { cn, partiallyApply } from "@ui/utils";
import { ArrowDown, ArrowTop } from "@ui/icons";

export type accordionProps = HTMLAttributes<HTMLElement> & {
  bar: ReactNode;
  rounded?: boolean;
};

export const Accordion = ({
  bar: Bar,
  rounded,
  children,
  className,
  ...rest
}: accordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={cn(
          "gwk-flex gwk-text-text-white gwk-p-4",
          rounded
            ? isOpen
              ? "gwk-rounded-tl-rdlg gwk-rounded-tr-rdlg gwk-overflow-hidden"
              : "gwk-rounded-bl-rdlg gwk-rounded-br-rdlg gwk-rounded-tl-rdlg gwk-rounded-tr-rdlg gwk-overflow-hidden"
            : "",
          className,
        )}
        {...rest}
      >
        <div className="gwk-flex-grow">{Bar}</div>
        <ToggleButton
          isActive={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          iconTrue={ArrowTop}
          iconFalse={ArrowDown}
        />
      </div>
      {isOpen && (
        <div
          className={`${
            rounded &&
            "gwk-rounded-bl-rdlg gwk-rounded-br-rdlg gwk-overflow-hidden"
          }`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Accordion;

Accordion.Context = AccordionContext;
Accordion.Bar = AccordionBar;

export const BlueAccordion = partiallyApply(Accordion, {
  className:
    "gwk-items-center gwk-justify-between gwk-bg-surface-primary-hover gwk-text-text-white gwk-font-bold gwk-text-lg gwk-w-full gwk-h-12",
});
export const RedAccordion = partiallyApply(Accordion, {
  className:
    "gwk-items-center gwk-justify-between gwk-bg-surface-negative-hover gwk-text-text-white gwk-font-bold gwk-text-lg gwk-w-full gwk-h-12",
});
