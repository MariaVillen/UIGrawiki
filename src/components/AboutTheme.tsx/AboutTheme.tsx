import { Icon, ReactionBar } from "@ui/general";
import { Writing3D } from "@ui/icons";
import { TReactions } from "@ui/interface/articles";

export type TAboutThemeProps = {
  writers: number;
  reactions: TReactions[];
};
const AboutTheme = ({ writers, reactions }: TAboutThemeProps) => {
  return (
    <div className="gwk-flex gwk-flex-col gwk-justify-center gwk-align-middle mobile:gwk-flex-row gwk-text-text-white gwk-text-center gwk-gap-2">
      <div className=" gwk-text-lg gwk-font-bold gwk-pr-4">
        Datos de la publicación:
      </div>
      <div className="gwk-text-base gwk-font-normal gwk-flex gwk-justify-center gwk-items-center gwk-flex-nowrap mobile:gwk-flex-row-reverse gwk-gap-1">
        <Icon elementSrc={Writing3D} /> <span>{writers} escritores</span>
      </div>
      <div className="gwk-flex gwk-flex-col gwk-justify-center gwk-items-center mobile:gwk-flex-row gwk-gap-2">
        <span>Reacciones </span>
        <ReactionBar reactions={reactions} />
      </div>
    </div>
  );
};

export default AboutTheme;
