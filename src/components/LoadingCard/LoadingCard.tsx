import { Skeleton, SkeletonCard } from "@ui/layouts";

export type TLoadingCardProps = { isLogged: boolean };

const LoadingCard = ({ isLogged }: TLoadingCardProps) => {
  console.log(isLogged);
  return (
    <SkeletonCard>
      <div className="gwk-flex gwk-flex-col gwk-gap-1">
        <SkeletonCard.Title />
        <SkeletonCard.Subtitle />
      </div>
      <Skeleton
        shape="rectangle"
        width="100%"
        height="118px"
        className=" gwk-my-sm"
      />
      <div className="gwk-flex gwk-gap-5">
        <SkeletonCard.Circle size="sm" />
        <SkeletonCard.Circle size="sm" />
        <SkeletonCard.Circle size="sm" />
      </div>
    </SkeletonCard>
  );
};

export default LoadingCard;
