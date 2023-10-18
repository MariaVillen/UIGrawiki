import { ReactionBar } from "@ui/general";
import { TReactions } from "@ui/interface/articles";
import AboutWriters from "../AboutWriters/AboutWriters";

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
      <AboutWriters writers={writers} className="mobile:gwk-flex-row-reverse" />
      <div className="gwk-flex gwk-flex-col gwk-justify-center gwk-items-center mobile:gwk-flex-row gwk-gap-2">
        <span>Reacciones </span>
        <ReactionBar reactions={reactions} />
      </div>
    </div>
  );
};

export default AboutTheme;
