import { HTMLAttributes, ReactNode, useState } from "react";
import AccordionContext from "./AccordionContext";
import { ToggleButton } from "@ui/forms";
import AccordionBar from "./AccordionBar";
import { partiallyApply, cn } from "@ui/utils";

export type accordionProps = HTMLAttributes<HTMLElement> & {
  bar: ReactNode;
  rounded?: boolean;
  headerStyle?: string;
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
          "gwk-flex",
          rounded
            ? isOpen
              ? " gwk-rounded-tl-rdxl gwk-rounded-tr-rdxl gwk-overflow-hidden"
              : "gwk-rounded-bl-rdxl gwk-rounded-br-rdxl gwk-rounded-tl-rdxl gwk-rounded-tr-rdxl gwk-overflow-hidden"
            : "",
          className,
        )}
        {...rest}
      >
        {Bar}
        <ToggleButton
          className="gwk-text-1 gwk-text-triarty-white gwk-px-4 gwk-bg-transparent"
          isActive={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div
          className={`${
            rounded &&
            "gwk-rounded-bl-rdxl gwk-rounded-br-rdxl gwk-overflow-hidden"
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
