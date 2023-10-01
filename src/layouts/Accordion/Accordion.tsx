import { HTMLAttributes, ReactNode, useState } from "react";
import AccordionContext from "./AccordionContext";
import ToggleButton from "../../forms/ToggleButton/ToggleButton";
import AccordionBar from "./AccordionBar";
import { partiallyApply } from "../../utils/partiallyApply/partiallyApply";

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
        className={`gwk-flex ${
          rounded && isOpen
            ? "gwk-rounded-tl-l gwk-rounded-tr-l gwk-overflow-hidden"
            : "gwk-rounded-bl-l gwk-rounded-br-l gwk-rounded-tl-l gwk-rounded-tr-l gwk-overflow-hidden"
        } ${className ? className : null}`}
        {...rest}
      >
        {Bar}
        <ToggleButton
          className="gwk-text-1 gwk-text-triarty-white gwk-px-4 gwk-bg-transparent"
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div
          className={`${
            rounded && "gwk-rounded-bl-l gwk-rounded-br-l gwk-overflow-hidden"
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

export const RedAccordion = partiallyApply(Accordion, {
  rounded: true,
  className:
    "gwk-mh-[3.125rem] gwk-w-full gwk-text-triarty-white gwk-bg-negative-hover gwk-p-[0.8125rem] gwk-text-lg",
});
