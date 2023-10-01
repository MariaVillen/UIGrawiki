import { HTMLAttributes } from "react";
import BannerTitle from "./BannerTitle.tsx";

//   TODO: ver como hacer el gradient customizado en tailwind. background: linear-gradient(9.42deg, $primary-red 23.19%, $primary-black 85.18%)

//   @include mq("large")
//     background: linear-gradient(270deg, $primary-red 26.56%, $primary-black 98.21%)

const Banner = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className=" gwk-min-h-[414px] gwk-flex gwk-justify-center flex-col gwk-items-center gwk-gap-8 gwk-p-4 gwk-rounded-rdxl gwk-bg-surface-negative gwk-bg-to-br gwk-to-surface-negative gwk-from-surface-background-dark gwk-text-text-white md:gwk-flex-row md:gwk-justify-around">
      {children}
    </div>
  );
};

export default Banner;

Banner.Title = BannerTitle;
