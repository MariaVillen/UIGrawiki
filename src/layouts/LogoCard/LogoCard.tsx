import { Logo } from "@ui/general";
import { HTMLAttributes } from "react";

const LogoCard = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className=" gwk-flex gwk-flex-col gwk-justify-center gwk-items-center gwk-px-4 mobile:gwk-px-[60px] mobile:gwk-max-w-[440px] gwk-py-[50px] gwk-text-text-black gwk-bg-surface-triarty-white gwk-gap-4 gwk-rounded-rdlg">
      <div>
        <Logo type="horizontal" theme="light" className="gwk-w-32 gwk-h-28" />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default LogoCard;
