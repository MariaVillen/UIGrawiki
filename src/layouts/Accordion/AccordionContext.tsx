import { HTMLAttributes } from "react";

const AccordionContext = ({ children }: HTMLAttributes<HTMLElement>) => {
  return <div className="gwk-bg-white gwk-p-3">{children}</div>;
};

export default AccordionContext;
