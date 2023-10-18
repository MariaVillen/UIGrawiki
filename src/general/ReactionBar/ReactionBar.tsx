import ReactionCounter from "./components/ReactionCounter";

export type TReactionBarProps = {
  data: {
    name: string;
    count: number;
  }[];
};

const ReactionBar = ({ data }: TReactionBarProps) => {
  return (
    <div className="gwk-flex gwk-items-center">
      {data.map(({ name, count }) => (
        <ReactionCounter key={name} name={name} count={count} />
      ))}
    </div>
  );
};

export default ReactionBar;
