import { Icon, Tag } from "@ui/general";
import { ArrowDown } from "@ui/icons";
import { Anchor } from "@ui/nav";
import { HTMLAttributes } from "react";

export type TCardContainerProps<T> = HTMLAttributes<HTMLDivElement> & {
  tags: T[];
  isOpen: boolean;
  id: string;
};
function CardContainer<T>({
  children,
  tags,
  isOpen,
  id,
}: TCardContainerProps<T>) {
  return (
    <div className="gwk-bg-gradient-to-b gwk-from-gradient-lila gwk-to-gradient-skyBlue gwk-bg-opacity-20">
      <div
        className={
          isOpen
            ? "gwk-px-4 gwk-pt-4 gwk-h-auto gwk-static"
            : "gwk-px-4 gwk-py-4 gwk-h-[118px] gwk-overflow-y-hidden gwk-relative gwk-bg-gradient-to-b gwk-from-gradient-cardTransparent gwk-to-gradient-blueDark gwk-bg-opacity-20"
        }
      >
        {children}
        {!isOpen && (
          <Anchor
            className=" gwk-text-text-white gwk-absolute gwk-bottom-0 gwk-left-2/4"
            to={`/article/${id}`}
          >
            <Icon className="gwk-h-6 gwk-w-6" elementSrc={ArrowDown} />
          </Anchor>
        )}
      </div>
      {isOpen && (
        <ul className=" gwk-px-4 gwk-pb-4 gwk-flex gwk-justify-start gwk-flex-wrap gwk-items-center gwk-gap-4 gwk-pt-4">
          <span className="gwk-font-bold gwk-text-lg">Etiquetas: </span>
          {tags.map((el, index) => (
            <li key={index}>
              <Tag className="gwk-whitespace-nowrap">{el as string}</Tag>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CardContainer;
