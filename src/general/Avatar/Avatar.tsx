import { HTMLAttributes } from "react";
import { AvatarOutline } from "../../icons";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils";

const avatar = cva(
  ["gwk-bg-transparent", "gwk-rounded-full", "gwk-overflow-hidden"],
  {
    variants: {
      size: {
        sm: ["gwk-w-10 gwk-h-10"],
        md: ["gwk-w-[84px] gwk-h-[84px]"],
        lg: ["gwk-w-32 gwk-h-32"],
      },
      disable: {
        true: "gwk-opacity-50",
        false: "gwk-opacity-100",
      },
      defaultVariants: {
        size: "sm",
        disable: false,
      },
    },
  },
);

export type AvatarProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof avatar> & {
    image?: string;
    alt?: string;
  };

const Avatar = ({
  image,
  disable,
  size,
  alt = "user",
  className,
}: AvatarProps) => {
  return (
    <div className={cn(avatar({ size, disable }), className)}>
      {image ? (
        <img
          src={image}
          alt={alt}
          className="gwk-w-full gwk-h-full gwk-object-fill"
        />
      ) : (
        <AvatarOutline className="gwk-w-full gwk-h-full" aria-label={alt} />
      )}
    </div>
  );
};

export default Avatar;
