import { Tag } from "@ui/general";
import ListHzScrollContainer from "@ui/layouts/ListHzScrollContainer/ListScrollContainer";
import { HTMLAttributes } from "react";

export type TCardContainerProps<T> = HTMLAttributes<HTMLDivElement> & {
  tags: T[];
};
function CardContainer<T>({ children, tags }: TCardContainerProps<T>) {
  return (
    <div className="gwk-p-4 gwk-bg-gradient-to-b gwk-from-gradient-lila gwk-to-gradient-skyBlue gwk-bg-opacity-20">
      {children}
      <div className="gwk-flex gwk-justify-start gwk-items-center gwk-gap-4 gwk-pt-4">
        <span className="gwk-font-bold gwk-text-lg">Etiquetas: </span>
        <ListHzScrollContainer
          component={(elem: unknown) => {
            return (
              <Tag className="gwk-whitespace-nowrap">{elem as string}</Tag>
            );
          }}
          data={tags}
        />
      </div>
    </div>
  );
}

export default CardContainer;
