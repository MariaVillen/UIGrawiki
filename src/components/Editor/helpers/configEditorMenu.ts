import {
  Bold,
  Italic,
  Underline,
  Strike,
  OrderedList,
  UnorderedList,
  Outdent,
  Subscript,
  Superscript,
  Indent,
} from "@ui/icons";
import { ComponentType, ReactElement } from "react";

/** FontSize styles */
export const FONT_LIST_STYLE = {
  name: "fontSize",
  options: [
    { label: "Normal", style: "16" },
    { label: "Pequeño", style: "14" },
    { label: "Grande", style: "20" },
  ],
};

/** Inline Styles */
export type TInlineStyle = {
  label: string;
  style: string;
  icon: ComponentType | ReactElement | string;
};
export const INLINE_STYLES: TInlineStyle[] = [
  { label: "Bold", style: "BOLD", icon: Bold },
  { label: "Italic", style: "ITALIC", icon: Italic },
  { label: "Underline", style: "UNDERLINE", icon: Underline },
  { label: "Strikethrough", style: "STRIKETHROUGH", icon: Strike },
  { label: "Subscript", style: "SUBSCRIPT", icon: Subscript },
  { label: "Superscript", style: "SUPERSCRIPT", icon: Superscript },

  // { label: "Monospace", style: "CODE", icon: false },
];

export const TAB_TYPES = [
  { label: "Outdent", style: "OUTDENT", icon: Outdent },
  { label: "Indent", style: "INDENT", icon: Indent },
];

export const BLOCK_TYPES = [
  { label: "OL", style: "ordered-list-item", icon: OrderedList },
  { label: "UL", style: "unordered-list-item", icon: UnorderedList },
  // { label: "H1", style: "header-one", icon: false },
  // { label: "H2", style: "header-two", icon: false },
  // { label: "H3", style: "header-three", icon: false },
  // { label: "H4", style: "header-four", icon: false },
  // { label: "H5", style: "header-five", icon: false },
  // { label: "H6", style: "header-six", icon: false },
  // { label: "Blockquote", style: "blockquote", icon: false },
  // { label: "Code Block", style: "code-block", icon: false },
];

/* Used for adding the subscript and superscript buttons */
export const STYLEMAP = {
  SUBSCRIPT: {
    verticalAlign: "sub",
    fontSize: "smaller",
  },
  SUPERSCRIPT: {
    verticalAlign: "super",
    fontSize: "smaller",
  },
  "fontSize-14": {
    fontSize: "14px",
    color: "red",
  },
  "fontSize-16": {
    fontSize: "16px",
    color: "green",
  },
  "fontSize-20": {
    fontSize: "20px",
    color: "blue",
  },
};
