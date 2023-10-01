import { partiallyApply } from "../../utils/partiallyApply/partiallyApply";
import { Accordion } from "./Accordion";

export const BlueAccordion = partiallyApply(Accordion, {
  rounded: true,
  className:
    "gwk-mh-[3.125rem] gwk-w-full gwk-text-triarty-white gwk-bg-primary-hover gwk-p-[0.8125rem] gwk-text-lg",
});
