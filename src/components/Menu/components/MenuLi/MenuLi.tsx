import { HTMLAttributes } from "react";

const MenuLi = ({ children, ...rest }: HTMLAttributes<HTMLLIElement>) => {
  return (
    <li
      className="gwk-flex gwk-flex-row gwk-justify-start mobile:gwk-justify-center"
      {...rest}
    >
      {children}
    </li>
  );
};

export default MenuLi;
