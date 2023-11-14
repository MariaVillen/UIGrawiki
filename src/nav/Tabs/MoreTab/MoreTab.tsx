import { ArrowRigth } from "@ui/icons";
import { Anchor } from "@ui/nav";
import { LinkProps } from "react-router-dom";

const MoreTab = ({ to, ...rest }: LinkProps) => {
  return (
    <div className="gwk-py-2 gwk-text-text-white gwk-flex gwk-justify-end gwk-items-center gwk-border-t gwk-border-border-white">
      <Anchor
        theme="dark"
        className="gwk-flex gwk-justify-end gwk-items-center"
        size="big"
        to={to}
        {...rest}
      >
        <span>Ver más</span>
        <ArrowRigth />
      </Anchor>
    </div>
  );
};

export default MoreTab;
