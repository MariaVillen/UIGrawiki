import { HTMLAttributes } from "react";

const BannerTitle = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  return <p className="gwk-font-bold gwk-text-big">{children}</p>;
};

export default BannerTitle;
