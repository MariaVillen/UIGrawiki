import { HTMLAttributes } from "react";

const AccordionBar = ({ children }: HTMLAttributes<HTMLElement>) => {
  return (
    <div className="gwk-mh-[3.125rem] gwk-w-full gwk-text-lg">{children}</div>
  );
};

export default AccordionBar;
