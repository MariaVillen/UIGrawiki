import { ArrowDown, ArrowTop, ToggleButton } from "../../index";
import {
  useState,
  InputHTMLAttributes,
  Ref,
  forwardRef,
  useEffect,
  ReactNode,
  ComponentType,
} from "react";
import SlipButtonInput from "./SlipButtonInput";
import { cn } from "../../utils";

/**
 * Component SlipButton
 * Description: A selector with suggestions
 */

export type SlipButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  fluid?: boolean;
  isOpened?: boolean;
  children?: ReactNode;
  value: { icon?: ComponentType | string; text: string | number };
};
const SlipButton = forwardRef<HTMLInputElement, SlipButtonProps>(
  (
    { children, isOpened = true, value, fluid, ...rest }: SlipButtonProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const [isOpen, setIsOpen] = useState(isOpened);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      if (isOpen) {
        setIsOpen(false);
      }
    }, [isOpened]);

    return (
      <div className=" gwk-relative">
        <div
          className={cn(
            " gwk-flex gwk-items-center gwk-justify-between gwk-h-10 gwk-w-36 gwk-bg-surface-triarty-white gwk-shadow-input gwk-rounded-rdlg gwk-pl-4 mobile:gwk-w-80   ",
            isOpen && " gwk-rounded-b-[0px]",
            fluid && "gwk-w-full",
          )}
        >
          <SlipButtonInput value={value} ref={ref || null} {...rest} />
          <ToggleButton
            className="gwk-h-4 gwk-w-4 gwk-mx-2"
            iconTrue={<ArrowTop />}
            iconFalse={<ArrowDown />}
            isOpen={isOpen}
            onClick={toggleMenu}
          />
        </div>

        <div
          className="{
            isOpen ? classes.dataList_list_open : classes.dataList_list
          }"
        >
          <ul className={"classes.dataList_containerList"}>{children}</ul>
        </div>
      </div>
    );
  },
);

export default SlipButton;
