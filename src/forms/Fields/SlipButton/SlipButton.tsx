import {
  useState,
  InputHTMLAttributes,
  Ref,
  forwardRef,
  useEffect,
  ReactNode,
  ComponentType,
} from "react";
import { ArrowDown, ArrowTop } from "@ui/icons";
import { ToggleButton } from "@ui/forms";
import SlipButtonInput from "./SlipButtonInput";
import { cn } from "@ui/utils";

/**
 * Component SlipButton
 * Description: A selector with suggestions
 */
export type SlipButtonProps = InputHTMLAttributes<HTMLInputElement> & {
  fluid?: boolean;
  isOpened?: boolean;
  children?: ReactNode;
  icon?: ComponentType;
  alt?: string;
};
const SlipButton = forwardRef<HTMLInputElement, SlipButtonProps>(
  (
    { children, isOpened = true, alt, icon, fluid, ...rest }: SlipButtonProps,
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
          <SlipButtonInput alt={alt} icon={icon} ref={ref || null} {...rest} />
          <ToggleButton
            className="gwk-h-4 gwk-w-4 gwk-mx-2"
            iconTrue={<ArrowTop />}
            iconFalse={<ArrowDown />}
            isActive={isOpen}
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
