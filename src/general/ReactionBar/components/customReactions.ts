import {
  Clapping3D,
  ClappingOutline,
  PinchedFingers3D,
  PinchedFingersOutline,
  ThumbsDown3D,
  ThumbsDownOutline,
  ThumbsUp3D,
  ThumbsUpOutline,
} from "@ui/icons";
import { ComponentType } from "react";

export type TReactionIcon = {
  name: string;
  icon: ComponentType;
  iconActive: ComponentType;
};

const customReaction: TReactionIcon[] = [
  {
    name: "ThumbsUp",
    icon: ThumbsUpOutline,
    iconActive: ThumbsUp3D,
  },
  { name: "Clapping", icon: ClappingOutline, iconActive: Clapping3D },
  {
    name: "ThumbsDown",
    icon: ThumbsDownOutline,
    iconActive: ThumbsDown3D,
  },
  {
    name: "Pinched",
    icon: PinchedFingersOutline,
    iconActive: PinchedFingers3D,
  },
];

export default customReaction;
