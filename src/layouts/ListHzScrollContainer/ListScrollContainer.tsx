import { HTMLAttributes, ReactElement } from "react";
import ScrollHorizontalContainer from "./components/ScrollHorizontalContainer";
import { cn } from "@ui/utils";

export type TListHzScrollContainerProps<T> = HTMLAttributes<HTMLDivElement> & {
  component?: (el: T) => ReactElement;
  data: (T | string | number | readonly string[] | undefined)[];
  title?: string;
};

function ListHzScrollContainer<T>({
  data,
  component: Component,
  title,
  className,
  ...rest
}: TListHzScrollContainerProps<T>) {
  return (
    <div
      className={cn(
        " gwk-text-text-white mobile:gwk-flex mobile:gwk-gap-4",
        className,
      )}
      {...rest}
    >
      {title && (
        <div className="gwk-text-lg gwk-whitespace-nowrap">{title}</div>
      )}
      <ul>
        <ScrollHorizontalContainer>
          {data.map((el, index) => (
            <li key={index}>{Component && Component(el as T)}</li>
          ))}
        </ScrollHorizontalContainer>
      </ul>
    </div>
  );
}

export default ListHzScrollContainer;
