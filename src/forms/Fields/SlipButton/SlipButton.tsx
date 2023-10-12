import {
  InputHTMLAttributes,
  Ref,
  forwardRef,
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
  onToggle: (val: boolean) => void;
  isOpened: boolean;
  children?: ReactNode;
  icon?: ComponentType | string;
  alt?: string;
};
const SlipButton = forwardRef<HTMLInputElement, SlipButtonProps>(
  (
    {
      children,
      onToggle,
      isOpened,
      className,
      alt,
      icon,
      ...rest
    }: SlipButtonProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const toggleMenu = () => {
      onToggle(!isOpened);
    };

    return (
      <div className=" gwk-relative">
        <div
          className={cn(
            " gwk-flex gwk-items-center gwk-justify-between gwk-h-10  gwk-bg-surface-triarty-white gwk-rounded-rdlg gwk-pl-4 gwk-w-full ",
            className,
          )}
        >
          <SlipButtonInput alt={alt} icon={icon} ref={ref || null} {...rest} />
          <ToggleButton
            className="gwk-h-4 gwk-w-4 gwk-mx-2"
            iconTrue={<ArrowTop />}
            iconFalse={<ArrowDown />}
            isActive={isOpened}
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
