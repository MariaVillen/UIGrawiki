import { HTMLAttributes } from "react";
import { cn, partiallyApply } from "@ui/utils";
import { cva, VariantProps } from "class-variance-authority";
// variante de color y tamaño

const skeleton = cva(["gwk-bg-surface-triarty-hover", "gwk-bg-opacity-25"], {
  variants: {
    shape: {
      circle: [" gwk-rounded-full"],
      rectangle: ["gwk-rounded-rdlg"],
    },
    defaultVariants: {
      shape: "rectangle",
    },
  },
});

export type SkeletonProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof skeleton> & {
    width: string;
    height: string;
  };

//TODO: cambiar los padding por medidas de ancho width y agregar fluid button
const Skeleton = ({
  shape = "rectangle",
  width,
  height,
  className,
  ...rest
}: SkeletonProps) => {
  return (
    <div
      className={cn(skeleton({ shape }), className)}
      style={{ width: width, height: height }}
      {...rest}
    ></div>
  );
};

export default Skeleton;

export const SkeletonTitle = partiallyApply(Skeleton, {
  width: "162px",
  height: "16px",
});

export const SkeletonSubtitle = partiallyApply(Skeleton, {
  width: "114px",
  height: "12px",
});

export const SkeletonBar = partiallyApply(Skeleton, {
  width: "310px",
  height: "26px",
});

export const SkeletonBarCategory = partiallyApply(Skeleton, {
  width: "310px",
  height: "45px",
});

export const SkeletonTabTitle = partiallyApply(Skeleton, {
  width: "107px",
  height: "30px",
});

export const SkeletonTab = partiallyApply(Skeleton, {
  width: "81px",
  height: "30px",
});
